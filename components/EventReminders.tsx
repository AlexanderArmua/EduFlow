'use client';

import { useState } from 'react';
import { eventReminders, EventReminder } from '@/lib/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EventReminders() {
  const { t } = useLanguage();
  const [reminders, setReminders] = useState<EventReminder[]>(eventReminders);

  const activeReminders = reminders.filter(r => !r.dismissed);

  const handleDismiss = (id: string) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, dismissed: true } : r));
  };

  const getTypeIcon = (type: EventReminder['type']) => {
    const icons = {
      exam: '📝',
      holiday: '🎉',
      meeting: '👨‍👩‍👧‍👦',
      academic: '🎓',
      break: '🏖️',
    };
    return icons[type] || '📅';
  };

  const getTypeColor = (type: EventReminder['type']) => {
    const colors = {
      exam: 'bg-red-100 text-red-800 border-red-300',
      holiday: 'bg-green-100 text-green-800 border-green-300',
      meeting: 'bg-blue-100 text-blue-800 border-blue-300',
      academic: 'bg-purple-100 text-purple-800 border-purple-300',
      break: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  };

  const getDaysUntil = (dateStr: string) => {
    const eventDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (activeReminders.length === 0) {
    return null;
  }

  return (
    <div className="sf-card p-6 mb-6 border-l-4 border-salesforce-blue">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-salesforce-blue rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {t.calendar.reminders?.title || 'Event Reminders'}
          </h2>
          <p className="text-sm text-gray-600">
            {activeReminders.length} {t.calendar.reminders?.upcomingEvents || 'upcoming events'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {activeReminders.map((reminder) => {
          const daysUntil = getDaysUntil(reminder.eventDate);
          const isUrgent = daysUntil <= 2;

          return (
            <div
              key={reminder.id}
              className={`p-4 rounded-lg border-2 ${getTypeColor(reminder.type)} ${isUrgent ? 'ring-2 ring-orange-400' : ''}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{getTypeIcon(reminder.type)}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{reminder.eventTitle}</h3>
                  <p className="text-sm mt-1">
                    {formatDate(reminder.eventDate)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {isUrgent ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {daysUntil === 0 ? t.calendar.reminders?.today || 'Today' : daysUntil === 1 ? t.calendar.reminders?.tomorrow || 'Tomorrow' : `${daysUntil} ${t.calendar.reminders?.daysLeft || 'days'}`}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-600">
                        {daysUntil} {t.calendar.reminders?.daysLeft || 'days'}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleDismiss(reminder.id)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title={t.calendar.reminders?.dismiss || 'Dismiss'}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
