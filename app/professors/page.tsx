'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { professors } from '@/lib/mockData';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProfessorsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Active' | 'Inactive'>('All');

  const filteredProfessors = professors.filter(prof => {
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || prof.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t.professors.title}</h1>
            <p className="text-gray-600 mt-2">{t.professors.subtitle}</p>
          </div>
          <Link href="/professors/new">
            <button className="sf-button-primary">
              {t.professors.addProfessor}
            </button>
          </Link>
        </div>

        {/* Filters */}
        <div className="sf-card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.professors.search}
              </label>
              <input
                type="text"
                placeholder={t.professors.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="sf-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.professors.status}
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as 'All' | 'Active' | 'Inactive')}
                className="sf-input"
              >
                <option value="All">{t.professors.allStatuses}</option>
                <option value="Active">{t.professors.active}</option>
                <option value="Inactive">{t.professors.inactive}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Professors List */}
        <div className="sf-card overflow-hidden">
          <table className="sf-table">
            <thead>
              <tr>
                <th>{t.professors.name}</th>
                <th>{t.professors.email}</th>
                <th>{t.professors.department}</th>
                <th>{t.professors.phone}</th>
                <th>{t.professors.subjects}</th>
                <th>{t.professors.status}</th>
                <th>{t.professors.actions}</th>
              </tr>
            </thead>
            <tbody>
              {filteredProfessors.map((professor) => (
                <tr key={professor.id}>
                  <td className="font-semibold text-salesforce-blue">
                    <Link href={`/professors/${professor.id}`} className="hover:underline">
                      {professor.name}
                    </Link>
                  </td>
                  <td>{professor.email}</td>
                  <td>{professor.department}</td>
                  <td>{professor.phone}</td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {professor.subjects.map((subject) => (
                        <span key={subject} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      professor.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {professor.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/professors/${professor.id}`}>
                        <button className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
                          {t.professors.view}
                        </button>
                      </Link>
                      <Link href={`/professors/${professor.id}/edit`}>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          {t.professors.edit}
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProfessors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.professors.noResults}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
