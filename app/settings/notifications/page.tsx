'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function NotificationSettingsPage() {
  const { t } = useLanguage();

  // Email notifications
  const [emailNotifications, setEmailNotifications] = useState({
    newMessages: true,
    gradeUpdates: true,
    attendanceAlerts: true,
    behaviorReports: true,
    examReminders: true,
    generalAnnouncements: false,
  });

  // SMS notifications
  const [smsNotifications, setSmsNotifications] = useState({
    urgentMessages: true,
    attendanceAlerts: false,
    examReminders: true,
    behaviorReports: false,
  });

  // In-app notifications
  const [inAppNotifications, setInAppNotifications] = useState({
    newMessages: true,
    gradeUpdates: true,
    attendanceAlerts: true,
    behaviorReports: true,
    examReminders: true,
    generalAnnouncements: true,
  });

  // General settings
  const [notificationFrequency, setNotificationFrequency] = useState<'immediate' | 'daily' | 'weekly'>('immediate');
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(true);
  const [quietHoursStart, setQuietHoursStart] = useState('22:00');
  const [quietHoursEnd, setQuietHoursEnd] = useState('07:00');
  const [digestEnabled, setDigestEnabled] = useState(false);
  const [digestTime, setDigestTime] = useState('08:00');

  const handleSaveSettings = () => {
    console.log('Saving notification settings:', {
      emailNotifications,
      smsNotifications,
      inAppNotifications,
      notificationFrequency,
      quietHoursEnabled,
      quietHoursStart,
      quietHoursEnd,
      digestEnabled,
      digestTime,
    });

    alert('Notification preferences saved successfully!\n\nNote: This is a demo. In production, these settings would be saved to your profile.');
  };

  const handleResetToDefaults = () => {
    if (confirm('Reset all notification preferences to default values?')) {
      setEmailNotifications({
        newMessages: true,
        gradeUpdates: true,
        attendanceAlerts: true,
        behaviorReports: true,
        examReminders: true,
        generalAnnouncements: false,
      });
      setSmsNotifications({
        urgentMessages: true,
        attendanceAlerts: false,
        examReminders: true,
        behaviorReports: false,
      });
      setInAppNotifications({
        newMessages: true,
        gradeUpdates: true,
        attendanceAlerts: true,
        behaviorReports: true,
        examReminders: true,
        generalAnnouncements: true,
      });
      setNotificationFrequency('immediate');
      setQuietHoursEnabled(true);
      setQuietHoursStart('22:00');
      setQuietHoursEnd('07:00');
      setDigestEnabled(false);
      setDigestTime('08:00');
      alert('Settings reset to defaults');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/communications" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; Back to Communications
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.notificationSettings.title}</h1>
          <p className="text-gray-600 mt-2">{t.notificationSettings.subtitle}</p>
        </div>

        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="sf-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{t.notificationSettings.emailNotifications}</h2>
                <p className="text-sm text-gray-600">{t.notificationSettings.emailSubtitle}</p>
              </div>
            </div>
            <div className="space-y-3 ml-13">
              {Object.entries(emailNotifications).map(([key, value]) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setEmailNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                    className="w-5 h-5 text-salesforce-blue rounded focus:ring-salesforce-blue"
                  />
                  <div className="flex-1">
                    <span className="text-gray-900 group-hover:text-salesforce-blue transition-colors">
                      {t.notificationSettings.categories[key as keyof typeof t.notificationSettings.categories]}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* SMS Notifications */}
          <div className="sf-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{t.notificationSettings.smsNotifications}</h2>
                <p className="text-sm text-gray-600">{t.notificationSettings.smsSubtitle}</p>
              </div>
            </div>
            <div className="space-y-3 ml-13">
              {Object.entries(smsNotifications).map(([key, value]) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setSmsNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                    className="w-5 h-5 text-salesforce-blue rounded focus:ring-salesforce-blue"
                  />
                  <div className="flex-1">
                    <span className="text-gray-900 group-hover:text-salesforce-blue transition-colors">
                      {t.notificationSettings.categories[key as keyof typeof t.notificationSettings.categories]}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* In-App Notifications */}
          <div className="sf-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{t.notificationSettings.inAppNotifications}</h2>
                <p className="text-sm text-gray-600">{t.notificationSettings.inAppSubtitle}</p>
              </div>
            </div>
            <div className="space-y-3 ml-13">
              {Object.entries(inAppNotifications).map(([key, value]) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setInAppNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                    className="w-5 h-5 text-salesforce-blue rounded focus:ring-salesforce-blue"
                  />
                  <div className="flex-1">
                    <span className="text-gray-900 group-hover:text-salesforce-blue transition-colors">
                      {t.notificationSettings.categories[key as keyof typeof t.notificationSettings.categories]}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Notification Frequency */}
          <div className="sf-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{t.notificationSettings.notificationFrequency}</h2>
                <p className="text-sm text-gray-600">{t.notificationSettings.frequencySubtitle}</p>
              </div>
            </div>
            <div className="ml-13 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value="immediate"
                  checked={notificationFrequency === 'immediate'}
                  onChange={(e) => setNotificationFrequency(e.target.value as typeof notificationFrequency)}
                  className="w-5 h-5 text-salesforce-blue focus:ring-salesforce-blue"
                />
                <div>
                  <div className="font-medium text-gray-900">{t.notificationSettings.frequencyOptions.immediate}</div>
                  <div className="text-sm text-gray-600">{t.notificationSettings.frequencyOptions.immediateDesc}</div>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value="daily"
                  checked={notificationFrequency === 'daily'}
                  onChange={(e) => setNotificationFrequency(e.target.value as typeof notificationFrequency)}
                  className="w-5 h-5 text-salesforce-blue focus:ring-salesforce-blue"
                />
                <div>
                  <div className="font-medium text-gray-900">{t.notificationSettings.frequencyOptions.daily}</div>
                  <div className="text-sm text-gray-600">{t.notificationSettings.frequencyOptions.dailyDesc}</div>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value="weekly"
                  checked={notificationFrequency === 'weekly'}
                  onChange={(e) => setNotificationFrequency(e.target.value as typeof notificationFrequency)}
                  className="w-5 h-5 text-salesforce-blue focus:ring-salesforce-blue"
                />
                <div>
                  <div className="font-medium text-gray-900">{t.notificationSettings.frequencyOptions.weekly}</div>
                  <div className="text-sm text-gray-600">{t.notificationSettings.frequencyOptions.weeklyDesc}</div>
                </div>
              </label>
            </div>
          </div>

          {/* Quiet Hours */}
          <div className="sf-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">{t.notificationSettings.quietHours}</h2>
                <p className="text-sm text-gray-600">{t.notificationSettings.quietHoursSubtitle}</p>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={quietHoursEnabled}
                  onChange={(e) => setQuietHoursEnabled(e.target.checked)}
                  className="w-5 h-5 text-salesforce-blue rounded focus:ring-salesforce-blue"
                />
                <span className="text-sm font-medium text-gray-700">{t.notificationSettings.enable}</span>
              </label>
            </div>
            {quietHoursEnabled && (
              <div className="ml-13 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.notificationSettings.startTime}</label>
                  <input
                    type="time"
                    value={quietHoursStart}
                    onChange={(e) => setQuietHoursStart(e.target.value)}
                    className="sf-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.notificationSettings.endTime}</label>
                  <input
                    type="time"
                    value={quietHoursEnd}
                    onChange={(e) => setQuietHoursEnd(e.target.value)}
                    className="sf-input"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Daily Digest Settings */}
          <div className="sf-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">{t.notificationSettings.emailDigest}</h2>
                <p className="text-sm text-gray-600">{t.notificationSettings.emailDigestSubtitle}</p>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={digestEnabled}
                  onChange={(e) => setDigestEnabled(e.target.checked)}
                  className="w-5 h-5 text-salesforce-blue rounded focus:ring-salesforce-blue"
                />
                <span className="text-sm font-medium text-gray-700">{t.notificationSettings.enable}</span>
              </label>
            </div>
            {digestEnabled && (
              <div className="ml-13">
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.notificationSettings.deliveryTime}</label>
                <input
                  type="time"
                  value={digestTime}
                  onChange={(e) => setDigestTime(e.target.value)}
                  className="sf-input max-w-xs"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {t.notificationSettings.deliveryTimeDesc}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="sf-card p-6">
            <div className="flex gap-4">
              <button
                onClick={handleSaveSettings}
                className="sf-button-primary"
              >
                {t.notificationSettings.savePreferences}
              </button>
              <button
                onClick={handleResetToDefaults}
                className="sf-button-secondary"
              >
                {t.notificationSettings.resetToDefaults}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
