'use client';

import Navigation from '@/components/Navigation';
import { parentMessages } from '@/lib/mockData';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function CommunicationAnalyticsPage() {
  const { t } = useLanguage();
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');

  // Calculate statistics
  const totalMessages = parentMessages.length;
  const unreadMessages = parentMessages.filter(m => m.status === 'Unread').length;
  const repliedMessages = parentMessages.filter(m => m.status === 'Replied').length;
  const responseRate = Math.round((repliedMessages / totalMessages) * 100);
  const averageResponseTime = '2.5 hours'; // Mock data

  // Priority breakdown
  const highPriority = parentMessages.filter(m => m.priority === 'High').length;
  const mediumPriority = parentMessages.filter(m => m.priority === 'Medium').length;
  const lowPriority = parentMessages.filter(m => m.priority === 'Low').length;

  // Message volume by week (mock data for visualization)
  const messagesByWeek = [
    { week: 'Week 1', messages: 12, replies: 10 },
    { week: 'Week 2', messages: 18, replies: 15 },
    { week: 'Week 3', messages: 15, replies: 13 },
    { week: 'Week 4', messages: 22, replies: 19 },
  ];

  // Most active parents (mock data)
  const activeParents = [
    { name: 'María Martínez', messages: 5, student: 'Juan Martínez', lastContact: '2024-11-15' },
    { name: 'Roberto Álvarez', messages: 4, student: 'Sofía Álvarez', lastContact: '2024-11-14' },
    { name: 'Laura Ramírez', messages: 4, student: 'Tomás Ramírez', lastContact: '2024-11-13' },
    { name: 'Carlos Pérez', messages: 3, student: 'Valentina Pérez', lastContact: '2024-11-12' },
    { name: 'Patricia García', messages: 3, student: 'Santiago García', lastContact: '2024-11-11' },
  ];

  // Recent activity timeline
  const recentActivity = [
    { date: '2024-11-16', type: 'reply', parent: 'María Martínez', subject: 'Homework Question' },
    { date: '2024-11-15', type: 'received', parent: 'Roberto Álvarez', subject: 'Exam Results Inquiry' },
    { date: '2024-11-15', type: 'reply', parent: 'Laura Ramírez', subject: 'Attendance Concern' },
    { date: '2024-11-14', type: 'received', parent: 'Carlos Pérez', subject: 'Project Feedback' },
    { date: '2024-11-14', type: 'reply', parent: 'Patricia García', subject: 'Behavior Report Discussion' },
  ];

  const maxMessages = Math.max(...messagesByWeek.map(w => w.messages));

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/communications" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.communicationAnalytics.backToCommunications}
          </Link>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t.communicationAnalytics.title}</h1>
            <p className="text-gray-600 mt-2">{t.communicationAnalytics.subtitle}</p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as typeof timeRange)}
            className="sf-input max-w-xs"
          >
            <option value="week">{t.communicationAnalytics.timeRange.lastWeek}</option>
            <option value="month">{t.communicationAnalytics.timeRange.lastMonth}</option>
            <option value="quarter">{t.communicationAnalytics.timeRange.lastQuarter}</option>
            <option value="year">{t.communicationAnalytics.timeRange.lastYear}</option>
          </select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="sf-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t.communicationAnalytics.totalMessages}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{totalMessages}</p>
                <p className="text-xs text-green-600 mt-1">↑ 12% {t.communicationAnalytics.fromLastMonth}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="sf-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t.communicationAnalytics.responseRate}</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{responseRate}%</p>
                <p className="text-xs text-green-600 mt-1">↑ 5% {t.communicationAnalytics.fromLastMonth}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="sf-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t.communicationAnalytics.avgResponseTime}</p>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{averageResponseTime}</p>
                <p className="text-xs text-green-600 mt-1">↓ 0.5h {t.communicationAnalytics.fromLastMonth}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="sf-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t.communicationAnalytics.pendingReplies}</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{unreadMessages}</p>
                <p className="text-xs text-red-600 mt-1">{t.communicationAnalytics.requiresAttention}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Message Volume Chart */}
          <div className="lg:col-span-2 sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.communicationAnalytics.messageVolumeTrend}</h2>
            <div className="space-y-4">
              {messagesByWeek.map((week, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{week.week}</span>
                    <span className="text-sm text-gray-600">{week.messages} {t.communicationAnalytics.messages.toLowerCase()}, {week.replies} {t.communicationAnalytics.replies.toLowerCase()}</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-salesforce-blue h-full rounded-full transition-all"
                        style={{ width: `${(week.messages / maxMessages) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-500 h-full rounded-full transition-all"
                        style={{ width: `${(week.replies / maxMessages) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-salesforce-blue rounded-full"></div>
                <span className="text-gray-600">{t.communicationAnalytics.receivedMessages}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">{t.communicationAnalytics.sentReplies}</span>
              </div>
            </div>
          </div>

          {/* Priority Breakdown */}
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.communicationAnalytics.priorityBreakdown}</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{t.communicationAnalytics.highPriority}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{highPriority}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full"
                    style={{ width: `${(highPriority / totalMessages) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{Math.round((highPriority / totalMessages) * 100)}% {t.communicationAnalytics.ofTotal}</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{t.communicationAnalytics.mediumPriority}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{mediumPriority}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full rounded-full"
                    style={{ width: `${(mediumPriority / totalMessages) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{Math.round((mediumPriority / totalMessages) * 100)}% {t.communicationAnalytics.ofTotal}</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{t.communicationAnalytics.lowPriority}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{lowPriority}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full"
                    style={{ width: `${(lowPriority / totalMessages) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{Math.round((lowPriority / totalMessages) * 100)}% {t.communicationAnalytics.ofTotal}</p>
              </div>
            </div>
          </div>

          {/* Most Active Parents */}
          <div className="lg:col-span-2 sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.communicationAnalytics.mostActiveParents}</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t.communicationAnalytics.parentName}</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t.communicationAnalytics.student}</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t.communicationAnalytics.messages}</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t.communicationAnalytics.lastContact}</th>
                  </tr>
                </thead>
                <tbody>
                  {activeParents.map((parent, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">{parent.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{parent.student}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {parent.messages} {t.communicationAnalytics.messages.toLowerCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{parent.lastContact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.communicationAnalytics.recentActivity}</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.type === 'reply' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    {activity.type === 'reply' ? (
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.parent}</p>
                    <p className="text-xs text-gray-600 truncate">{activity.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/communications">
              <button className="w-full mt-4 sf-button-secondary text-sm">
                {t.communications.totalMessages}
              </button>
            </Link>
          </div>
        </div>

        {/* Export Options */}
        <div className="mt-6 sf-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{t.communicationAnalytics.exportData}</h3>
              <p className="text-sm text-gray-600 mt-1">{t.communicationAnalytics.subtitle}</p>
            </div>
            <div className="flex gap-3">
              <button className="sf-button-secondary flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.communicationAnalytics.exportCSV}
              </button>
              <button className="sf-button-secondary flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {t.communicationAnalytics.exportPDF}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
