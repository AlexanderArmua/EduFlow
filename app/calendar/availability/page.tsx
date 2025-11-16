'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { professorAvailability, professors } from '@/lib/mockData';

export default function TeacherAvailabilityPage() {
  const { t } = useLanguage();
  const [selectedProfessor, setSelectedProfessor] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<number>(-1);

  const daysOfWeek = [
    { value: 1, label: t.calendar.days.monday },
    { value: 2, label: t.calendar.days.tuesday },
    { value: 3, label: t.calendar.days.wednesday },
    { value: 4, label: t.calendar.days.thursday },
    { value: 5, label: t.calendar.days.friday },
  ];

  // Filter availability
  const filteredAvailability = professorAvailability.filter(slot => {
    const professorMatch = selectedProfessor === 'all' || slot.professorId === selectedProfessor;
    const dayMatch = selectedDay === -1 || slot.dayOfWeek === selectedDay;
    return professorMatch && dayMatch;
  });

  // Group by professor and day
  const groupedByProfessor = filteredAvailability.reduce((acc, slot) => {
    if (!acc[slot.professorId]) {
      acc[slot.professorId] = [];
    }
    acc[slot.professorId].push(slot);
    return acc;
  }, {} as Record<string, typeof professorAvailability>);

  const getTypeColor = (type: string) => {
    const colors = {
      'office-hours': 'bg-blue-100 text-blue-800 border-blue-300',
      'available': 'bg-green-100 text-green-800 border-green-300',
      'meeting': 'bg-purple-100 text-purple-800 border-purple-300',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'office-hours': '📚',
      'available': '✅',
      'meeting': '👥',
    };
    return icons[type as keyof typeof icons] || '📅';
  };

  const getTypeName = (type: string) => {
    const names = {
      'office-hours': t.calendar.availability.officeHours,
      'available': t.calendar.availability.available,
      'meeting': t.calendar.availability.meeting,
    };
    return names[type as keyof typeof names] || type;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/calendar" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.calendar.backToCalendar}
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.calendar.availability.title}</h1>
          <p className="text-gray-600 mt-2">{t.calendar.availability.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="sf-card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.calendar.availability.filterByProfessor}
              </label>
              <select
                value={selectedProfessor}
                onChange={(e) => setSelectedProfessor(e.target.value)}
                className="sf-input"
              >
                <option value="all">{t.calendar.availability.allProfessors}</option>
                {professors.filter(p => p.status === 'Active').map(prof => (
                  <option key={prof.id} value={prof.id}>{prof.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.calendar.availability.filterByDay}
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                className="sf-input"
              >
                <option value={-1}>{t.calendar.availability.allDays}</option>
                {daysOfWeek.map(day => (
                  <option key={day.value} value={day.value}>{day.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="sf-card p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">📚</span>
              <span className="text-sm text-gray-700">{t.calendar.availability.officeHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>
              <span className="text-sm text-gray-700">{t.calendar.availability.available}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">👥</span>
              <span className="text-sm text-gray-700">{t.calendar.availability.meeting}</span>
            </div>
          </div>
        </div>

        {/* Availability Grid by Professor */}
        {Object.keys(groupedByProfessor).length === 0 ? (
          <div className="sf-card p-12 text-center">
            <p className="text-gray-500 text-lg">{t.calendar.availability.noAvailability}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedByProfessor).map(([professorId, slots]) => {
              const professor = professors.find(p => p.id === professorId);
              if (!professor) return null;

              // Group slots by day
              const slotsByDay = slots.reduce((acc, slot) => {
                if (!acc[slot.dayOfWeek]) {
                  acc[slot.dayOfWeek] = [];
                }
                acc[slot.dayOfWeek].push(slot);
                return acc;
              }, {} as Record<number, typeof slots>);

              return (
                <div key={professorId} className="sf-card overflow-hidden">
                  <div className="bg-gradient-to-r from-salesforce-blue to-salesforce-darkblue p-6">
                    <h2 className="text-2xl font-bold text-white">{professor.name}</h2>
                    <p className="text-salesforce-cloud mt-1">{professor.department}</p>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {daysOfWeek.map(day => {
                        const daySl = slotsByDay[day.value] || [];
                        if (daySl.length === 0 && selectedDay !== -1 && selectedDay !== day.value) {
                          return null;
                        }

                        return (
                          <div key={day.value} className="border rounded-lg p-4 bg-gray-50">
                            <h3 className="font-bold text-gray-900 mb-3">{day.label}</h3>
                            {daySl.length === 0 ? (
                              <p className="text-gray-500 text-sm italic">{t.calendar.availability.notAvailable}</p>
                            ) : (
                              <div className="space-y-2">
                                {daySl.map(slot => (
                                  <div
                                    key={slot.id}
                                    className={`p-3 rounded-lg border ${getTypeColor(slot.type)}`}
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-lg">{getTypeIcon(slot.type)}</span>
                                      <span className="text-sm font-semibold">
                                        {getTypeName(slot.type)}
                                      </span>
                                    </div>
                                    <div className="text-sm font-medium mt-2">
                                      {slot.startTime} - {slot.endTime}
                                    </div>
                                    {slot.notes && (
                                      <div className="text-xs mt-2 opacity-80">
                                        {slot.notes}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
