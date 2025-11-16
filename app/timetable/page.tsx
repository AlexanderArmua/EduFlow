'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { classSchedules, professorAvailability, ClassSchedule, ProfessorAvailability } from '@/lib/mockData';
import ScheduleModal from '@/components/ScheduleModal';

type ViewMode = 'classes' | 'availability';

export default function TimetablePage() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<ViewMode>('classes');
  const [selectedProfessor, setSelectedProfessor] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<ClassSchedule | ProfessorAvailability | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: ClassSchedule | ProfessorAvailability) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const weekDays = [
    { index: 0, name: 'Sunday', short: 'Dom' },
    { index: 1, name: 'Monday', short: 'Lun' },
    { index: 2, name: 'Tuesday', short: 'Mar' },
    { index: 3, name: 'Wednesday', short: 'Mié' },
    { index: 4, name: 'Thursday', short: 'Jue' },
    { index: 5, name: 'Friday', short: 'Vie' },
    { index: 6, name: 'Saturday', short: 'Sáb' },
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  // Filter classes by professor
  const filteredClasses = selectedProfessor === 'all'
    ? classSchedules
    : classSchedules.filter(c => c.professorId === selectedProfessor);

  const filteredAvailability = selectedProfessor === 'all'
    ? professorAvailability
    : professorAvailability.filter(a => a.professorId === selectedProfessor);

  // Get unique professors
  const professors = Array.from(new Set(classSchedules.map(c => ({
    id: c.professorId,
    name: c.professorName
  })))).reduce((acc, curr) => {
    if (!acc.find(p => p.id === curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, [] as { id: string; name: string }[]);

  // Get classes for a specific day and time
  const getItemsForSlot = (dayIndex: number, time: string) => {
    if (viewMode === 'classes') {
      return filteredClasses.filter(c => {
        if (c.dayOfWeek !== dayIndex) return false;
        const classStart = parseInt(c.startTime.split(':')[0]);
        const slotTime = parseInt(time.split(':')[0]);
        const classEnd = parseInt(c.endTime.split(':')[0]);
        return slotTime >= classStart && slotTime < classEnd;
      });
    } else {
      return filteredAvailability.filter(a => {
        if (a.dayOfWeek !== dayIndex) return false;
        const availStart = parseInt(a.startTime.split(':')[0]);
        const slotTime = parseInt(time.split(':')[0]);
        const availEnd = parseInt(a.endTime.split(':')[0]);
        return slotTime >= availStart && slotTime < availEnd;
      });
    }
  };

  // Calculate rowspan for an item
  const getRowSpan = (item: ClassSchedule | ProfessorAvailability) => {
    const start = parseInt(item.startTime.split(':')[0]);
    const end = parseInt(item.endTime.split(':')[0]);
    return end - start;
  };

  // Check if time slot should be rendered (not part of a multi-hour class)
  const shouldRenderSlot = (dayIndex: number, time: string) => {
    const items = viewMode === 'classes' ? filteredClasses : filteredAvailability;
    const slotHour = parseInt(time.split(':')[0]);

    // Check if this slot is part of a class that started earlier
    for (const item of items) {
      if (item.dayOfWeek !== dayIndex) continue;
      const start = parseInt(item.startTime.split(':')[0]);
      const end = parseInt(item.endTime.split(':')[0]);
      // If current slot is between start and end, but not the start itself
      if (slotHour > start && slotHour < end) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-salesforce-darkblue">
                Class Timetable & Availability
              </h1>
              <p className="mt-2 text-gray-600">Weekly schedule and professor office hours</p>
            </div>
            <Link href="/calendar">
              <button className="sf-button-secondary text-sm">
                ← Back to Calendar
              </button>
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* View Mode */}
          <div className="sf-card p-4">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('classes')}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'classes'
                    ? 'bg-salesforce-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📚 Class Schedule
              </button>
              <button
                onClick={() => setViewMode('availability')}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'availability'
                    ? 'bg-salesforce-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                👨‍🏫 Professor Availability
              </button>
            </div>
          </div>

          {/* Professor Filter */}
          <div className="sf-card p-4">
            <select
              value={selectedProfessor}
              onChange={(e) => setSelectedProfessor(e.target.value)}
              className="sf-input w-full"
            >
              <option value="all">All Professors</option>
              {professors.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="sf-card overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700 w-24">
                  Time
                </th>
                {weekDays.slice(1, 6).map(day => (
                  <th key={day.index} className="border border-gray-300 p-3 text-center font-semibold text-gray-700">
                    <div className="text-sm">{day.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map(time => (
                <tr key={time} className="h-16">
                  <td className="border border-gray-300 p-2 bg-gray-50 text-sm font-medium text-gray-600 text-center align-top">
                    {time}
                  </td>
                  {weekDays.slice(1, 6).map(day => {
                    const items = getItemsForSlot(day.index, time);
                    const shouldRender = shouldRenderSlot(day.index, time);

                    if (!shouldRender) {
                      return null;
                    }

                    return (
                      <td
                        key={`${day.index}-${time}`}
                        className="border border-gray-300 p-1 align-top"
                        rowSpan={items.length > 0 ? getRowSpan(items[0]) : 1}
                      >
                        {items.map(item => (
                          viewMode === 'classes' ? (
                            <div
                              key={(item as ClassSchedule).id}
                              onClick={() => handleItemClick(item)}
                              className="h-full p-2 rounded text-white text-xs cursor-pointer hover:opacity-90 transition-opacity"
                              style={{ backgroundColor: (item as ClassSchedule).color }}
                            >
                              <div className="font-semibold mb-1">
                                {(item as ClassSchedule).subjectCode}
                              </div>
                              <div className="text-xs opacity-90">
                                {(item as ClassSchedule).subjectName}
                              </div>
                              <div className="text-xs opacity-90 mt-1">
                                👨‍🏫 {(item as ClassSchedule).professorName}
                              </div>
                              <div className="text-xs opacity-90">
                                📍 {(item as ClassSchedule).location}
                              </div>
                              <div className="text-xs opacity-90 font-medium mt-1">
                                {(item as ClassSchedule).startTime} - {(item as ClassSchedule).endTime}
                              </div>
                            </div>
                          ) : (
                            <div
                              key={(item as ProfessorAvailability).id}
                              onClick={() => handleItemClick(item)}
                              className={`h-full p-2 rounded text-white text-xs cursor-pointer hover:opacity-90 transition-opacity ${
                                (item as ProfessorAvailability).type === 'office-hours'
                                  ? 'bg-green-500'
                                  : (item as ProfessorAvailability).type === 'available'
                                  ? 'bg-blue-500'
                                  : 'bg-gray-500'
                              }`}
                            >
                              <div className="font-semibold mb-1">
                                {(item as ProfessorAvailability).type === 'office-hours'
                                  ? '🏢 Office Hours'
                                  : (item as ProfessorAvailability).type === 'available'
                                  ? '✅ Available'
                                  : '❌ Busy'}
                              </div>
                              <div className="text-xs opacity-90">
                                {(item as ProfessorAvailability).professorName}
                              </div>
                              {(item as ProfessorAvailability).notes && (
                                <div className="text-xs opacity-90 mt-1">
                                  {(item as ProfessorAvailability).notes}
                                </div>
                              )}
                              <div className="text-xs opacity-90 font-medium mt-1">
                                {(item as ProfessorAvailability).startTime} - {(item as ProfessorAvailability).endTime}
                              </div>
                            </div>
                          )
                        ))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 sf-card p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Legend</h3>
          {viewMode === 'classes' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500"></div>
                <span className="text-sm text-gray-700">Informática</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-sm text-gray-700">Matemáticas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-500"></div>
                <span className="text-sm text-gray-700">Física</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-500"></div>
                <span className="text-sm text-gray-700">Química</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-pink-500"></div>
                <span className="text-sm text-gray-700">Historia</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-sm text-gray-700">Office Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500"></div>
                <span className="text-sm text-gray-700">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-500"></div>
                <span className="text-sm text-gray-700">Busy</span>
              </div>
            </div>
          )}
        </div>

        {/* Schedule Modal */}
        <ScheduleModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={selectedItem}
          viewMode={viewMode}
        />
      </div>
    </div>
  );
}
