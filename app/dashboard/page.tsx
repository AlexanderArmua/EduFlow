'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { professors, subjects, parentMessages } from '@/lib/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DashboardPage() {
  const { t } = useLanguage();
  const activeProfessors = professors.filter(p => p.status === 'Active').length;
  const totalSubjects = subjects.length;
  const unreadMessages = parentMessages.filter(m => m.status === 'Unread').length;
  const totalStudents = subjects.reduce((sum, subject) => sum + subject.students, 0);

  const stats = [
    { name: t.dashboard.activeProfessors, value: activeProfessors, color: 'bg-blue-500', link: '/professors' },
    { name: t.dashboard.totalSubjects, value: totalSubjects, color: 'bg-green-500', link: '/subjects' },
    { name: t.dashboard.unreadMessages, value: unreadMessages, color: 'bg-yellow-500', link: '/communications' },
    { name: t.dashboard.totalStudents, value: totalStudents, color: 'bg-purple-500', link: '/students' },
  ];

  const recentMessages = parentMessages.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.dashboard.title}</h1>
          <p className="text-gray-600 mt-2">{t.dashboard.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Link key={stat.name} href={stat.link}>
              <div className="sf-card p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <div className="text-white text-2xl font-bold">{stat.value}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Messages */}
          <div className="sf-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{t.dashboard.recentMessages}</h2>
              <Link href="/communications" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
                {t.dashboard.viewAll}
              </Link>
            </div>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="border-l-4 border-salesforce-blue pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-gray-900">{message.parentName}</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      message.status === 'Unread' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {message.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{message.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">{message.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.dashboard.quickActions}</h2>
            <div className="space-y-3">
              <Link href="/professors/new" className="block">
                <button className="w-full sf-button-primary text-left">
                  {t.dashboard.addNewProfessor}
                </button>
              </Link>
              <Link href="/subjects" className="block">
                <button className="w-full sf-button-secondary text-left">
                  {t.dashboard.viewAllSubjects}
                </button>
              </Link>
              <Link href="/communications" className="block">
                <button className="w-full sf-button-secondary text-left">
                  {t.dashboard.checkMessages}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Subjects */}
        <div className="mt-6 sf-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">{t.dashboard.activeSubjects}</h2>
            <Link href="/subjects" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
              {t.dashboard.viewAll}
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="sf-table">
              <thead>
                <tr>
                  <th>{t.dashboard.subjectCode}</th>
                  <th>{t.dashboard.subjectName}</th>
                  <th>{t.dashboard.professor}</th>
                  <th>{t.dashboard.students}</th>
                  <th>{t.dashboard.credits}</th>
                </tr>
              </thead>
              <tbody>
                {subjects.slice(0, 5).map((subject) => (
                  <tr key={subject.id}>
                    <td className="font-semibold">{subject.code}</td>
                    <td>{subject.name}</td>
                    <td>{subject.professorName}</td>
                    <td>{subject.students}</td>
                    <td>{subject.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
