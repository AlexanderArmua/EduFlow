'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import NotificationDropdown from './NotificationDropdown';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.professors, path: '/professors' },
    { name: t.nav.subjects, path: '/subjects' },
    { name: t.nav.students, path: '/students' },
    { name: t.nav.communications, path: '/communications' },
    { name: t.nav.analytics, path: '/analytics' },
    { name: t.nav.calendar, path: '/calendar' },
    { name: t.nav.documents, path: '/documents' },
    { name: t.nav.absences, path: '/absences' },
    { name: t.nav.financial, path: '/financial' },
    { name: t.nav.achievements, path: '/achievements' },
    { name: t.nav.leaderboard, path: '/leaderboard' },
    { name: t.nav.reports, path: '/reports' },
    { name: t.nav.apiDocs, path: '/api-docs' },
  ];

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="bg-salesforce-darkblue text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex-shrink-0">
            <Link href="/dashboard" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="EduFlow CRM Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h1 className="text-2xl font-bold text-white">EduFlow CRM</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <NotificationDropdown />
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white hover:bg-salesforce-blue rounded-md transition-colors"
            >
              {t.nav.logout}
            </button>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-6 gap-2 pb-3">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.path) ||
              (pathname === '/timetable' && item.path === '/calendar');

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors text-center ${
                  isActive
                    ? 'bg-salesforce-blue text-white'
                    : 'text-gray-300 hover:bg-salesforce-blue hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
