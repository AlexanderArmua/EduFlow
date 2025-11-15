'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.dashboard, path: '/dashboard' },
    { name: t.nav.professors, path: '/professors' },
    { name: t.nav.subjects, path: '/subjects' },
    { name: t.nav.communications, path: '/communications' },
    { name: t.nav.analytics, path: '/analytics' },
  ];

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="bg-salesforce-darkblue text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold">EduFlow CRM</h1>
            </div>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname.startsWith(item.path)
                      ? 'bg-salesforce-blue text-white'
                      : 'text-gray-300 hover:bg-salesforce-blue hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white hover:bg-salesforce-blue rounded-md transition-colors"
            >
              {t.nav.logout}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
