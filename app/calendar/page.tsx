'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { calendarEvents, CalendarEvent } from '@/lib/mockData';
import EventReminders from '@/components/EventReminders';

type ViewMode = 'day' | 'week' | 'month';

export default function CalendarPage() {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  // Filter events by type
  const filteredEvents = filterType === 'all'
    ? calendarEvents
    : calendarEvents.filter(event => event.type === filterType);

  // Get badge color based on event type
  const getTypeBadgeColor = (type: CalendarEvent['type']) => {
    const colors = {
      exam: 'bg-red-500',
      holiday: 'bg-green-500',
      meeting: 'bg-blue-500',
      academic: 'bg-purple-500',
      break: 'bg-yellow-500',
    };
    return colors[type] || 'bg-gray-500';
  };

  // Get type icon
  const getTypeIcon = (type: CalendarEvent['type']) => {
    const icons = {
      exam: '📝',
      holiday: '🎉',
      meeting: '👨‍👩‍👧‍👦',
      academic: '🎓',
      break: '🏖️',
    };
    return icons[type] || '📅';
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return filteredEvents.filter(event => {
      const eventDate = event.date;
      const eventEndDate = event.endDate;

      if (eventEndDate) {
        // Check if date is within range
        return dateStr >= eventDate && dateStr <= eventEndDate;
      }
      return eventDate === dateStr;
    });
  };

  // Navigation functions
  const goToToday = () => setCurrentDate(new Date());

  const goToPrevious = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const goToNext = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  // Get current period text
  const getPeriodText = () => {
    if (viewMode === 'day') {
      return formatDate(currentDate);
    } else if (viewMode === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      return `${weekStart.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })} - ${weekEnd.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' })}`;
    } else {
      return currentDate.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' });
    }
  };

  // Month view render function
  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 bg-gray-50"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];
      const dayEvents = getEventsForDate(date);
      const isToday = date.getTime() === today.getTime();

      days.push(
        <div
          key={day}
          className={`h-32 border border-gray-200 p-2 overflow-y-auto ${
            isToday ? 'bg-blue-50 border-blue-500' : 'bg-white'
          }`}
        >
          <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedEvent(event)}
                className={`text-xs p-1 rounded text-white truncate cursor-pointer hover:opacity-80 transition-opacity ${getTypeBadgeColor(event.type)}`}
                title={event.title}
              >
                {getTypeIcon(event.type)} {event.title}
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-xs text-gray-500 pl-1">
                +{dayEvents.length - 3} más
              </div>
            )}
          </div>
        </div>
      );
    }

    const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    return (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-7 bg-gray-100">
          {weekDays.map((day) => (
            <div key={day} className="p-3 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days}
        </div>
      </div>
    );
  };

  // Week view render function
  const renderWeekView = () => {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      weekDays.push(day);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {weekDays.map((day, idx) => {
            const dayEvents = getEventsForDate(day);
            const isToday = day.getTime() === today.getTime();

            return (
              <div key={idx} className={`min-h-96 bg-white p-3 ${isToday ? 'bg-blue-50' : ''}`}>
                <div className={`text-center mb-3 ${isToday ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
                  <div className="text-xs font-semibold">
                    {day.toLocaleDateString('es-AR', { weekday: 'short' })}
                  </div>
                  <div className={`text-2xl font-bold ${isToday ? 'bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto' : ''}`}>
                    {day.getDate()}
                  </div>
                </div>
                <div className="space-y-2">
                  {dayEvents.map((event, eventIdx) => (
                    <div
                      key={eventIdx}
                      onClick={() => setSelectedEvent(event)}
                      className={`p-2 rounded text-white text-xs cursor-pointer hover:opacity-80 transition-opacity ${getTypeBadgeColor(event.type)}`}
                    >
                      <div className="font-semibold mb-1">
                        {getTypeIcon(event.type)} {event.title}
                      </div>
                      {event.location && (
                        <div className="text-xs opacity-90">📍 {event.location}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Day view render function
  const renderDayView = () => {
    const dayEvents = getEventsForDate(currentDate);

    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
          {formatDate(currentDate)}
        </h3>
        {dayEvents.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            {t.calendar.noEvents}
          </div>
        ) : (
          <div className="space-y-4">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="border-l-4 p-4 bg-gray-50 rounded cursor-pointer hover:shadow-md transition-shadow"
                style={{ borderColor: getTypeBadgeColor(event.type).replace('bg-', '#') }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{getTypeIcon(event.type)}</div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{event.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeBadgeColor(event.type)}`}>
                        {t.calendar.typeLabels[event.type]}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      {event.location && (
                        <div>📍 {event.location}</div>
                      )}
                      {event.professorName && (
                        <div>👨‍🏫 {event.professorName}</div>
                      )}
                      {event.subjectCode && (
                        <div>📚 {event.subjectCode}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Format date for modal
  const formatModalDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
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
                {t.calendar.title}
              </h1>
              <p className="mt-2 text-gray-600">{t.calendar.subtitle}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/calendar/availability">
                <button className="sf-button-secondary text-sm">
                  {t.calendar.availability.viewAvailability}
                </button>
              </Link>
              <Link href="/timetable">
                <button className="sf-button-primary text-sm">
                  📅 View Weekly Timetable
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Event Reminders */}
        <EventReminders />

        {/* Controls */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Navigation Controls */}
          <div className="sf-card p-4">
            <div className="flex items-center gap-2">
              <button
                onClick={goToToday}
                className="sf-button-primary px-4 py-2 text-sm"
              >
                {t.calendar.today}
              </button>
              <button
                onClick={goToPrevious}
                className="sf-button-secondary px-3 py-2 text-sm"
              >
                ← {t.calendar.previous}
              </button>
              <button
                onClick={goToNext}
                className="sf-button-secondary px-3 py-2 text-sm"
              >
                {t.calendar.next} →
              </button>
              <div className="ml-4 flex-grow text-center font-semibold text-gray-800 capitalize">
                {getPeriodText()}
              </div>
            </div>
          </div>

          {/* View Mode and Filter */}
          <div className="sf-card p-4">
            <div className="flex gap-4">
              {/* View Mode Buttons */}
              <div className="flex gap-1 border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('day')}
                  className={`px-3 py-1 text-sm rounded ${
                    viewMode === 'day'
                      ? 'bg-salesforce-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t.calendar.dayView}
                </button>
                <button
                  onClick={() => setViewMode('week')}
                  className={`px-3 py-1 text-sm rounded ${
                    viewMode === 'week'
                      ? 'bg-salesforce-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t.calendar.weekView}
                </button>
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-3 py-1 text-sm rounded ${
                    viewMode === 'month'
                      ? 'bg-salesforce-blue text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t.calendar.monthView}
                </button>
              </div>

              {/* Filter */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="sf-input flex-grow"
              >
                <option value="all">{t.calendar.allTypes}</option>
                <option value="exam">{t.calendar.exams}</option>
                <option value="holiday">{t.calendar.holidays}</option>
                <option value="meeting">{t.calendar.meetings}</option>
                <option value="academic">{t.calendar.academic}</option>
                <option value="break">{t.calendar.breaks}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Calendar View */}
        {viewMode === 'month' && renderMonthView()}
        {viewMode === 'week' && renderWeekView()}
        {viewMode === 'day' && renderDayView()}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b-4 ${getTypeBadgeColor(selectedEvent.type)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-grow">
                  <div className="text-4xl">{getTypeIcon(selectedEvent.type)}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedEvent.title}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeBadgeColor(selectedEvent.type)}`}>
                      {t.calendar.typeLabels[selectedEvent.type]}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {/* Date */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">📅</div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">{t.calendar.date}</div>
                  <div className="text-gray-900 capitalize">{formatModalDate(selectedEvent.date)}</div>
                  {selectedEvent.endDate && (
                    <div className="text-sm text-gray-600 mt-1">
                      {t.calendar.endDate}: {formatModalDate(selectedEvent.endDate)}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">📝</div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">{t.calendar.description}</div>
                  <div className="text-gray-900">{selectedEvent.description}</div>
                </div>
              </div>

              {/* Location */}
              {selectedEvent.location && (
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600">{t.calendar.location}</div>
                    <div className="text-gray-900">{selectedEvent.location}</div>
                  </div>
                </div>
              )}

              {/* Professor */}
              {selectedEvent.professorName && (
                <div className="flex items-start gap-3">
                  <div className="text-2xl">👨‍🏫</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-600">{t.calendar.professor}</div>
                    {selectedEvent.professorId ? (
                      <Link href={`/professors/${selectedEvent.professorId}`} className="text-salesforce-blue hover:text-salesforce-darkblue hover:underline">
                        {selectedEvent.professorName}
                      </Link>
                    ) : (
                      <div className="text-gray-900">{selectedEvent.professorName}</div>
                    )}
                  </div>
                </div>
              )}

              {/* Subject */}
              {selectedEvent.subjectCode && (
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📚</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-600">{t.calendar.subject}</div>
                    {selectedEvent.subjectId ? (
                      <Link href={`/subjects/${selectedEvent.subjectId}`} className="text-salesforce-blue hover:text-salesforce-darkblue hover:underline">
                        {selectedEvent.subjectCode}
                      </Link>
                    ) : (
                      <div className="text-gray-900">{selectedEvent.subjectCode}</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 flex justify-between items-center">
              <div className="flex gap-2">
                {selectedEvent.professorId && (
                  <Link href={`/professors/${selectedEvent.professorId}`}>
                    <button className="sf-button-secondary text-sm">
                      👨‍🏫 View Professor
                    </button>
                  </Link>
                )}
                {selectedEvent.subjectId && (
                  <Link href={`/subjects/${selectedEvent.subjectId}`}>
                    <button className="sf-button-secondary text-sm">
                      📚 View Subject
                    </button>
                  </Link>
                )}
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="sf-button-primary px-6 py-2"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
