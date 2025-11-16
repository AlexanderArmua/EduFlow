'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { absenceRequests } from '@/lib/mockData';
import Link from 'next/link';

export default function AbsencesPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredRequests = absenceRequests.filter(req => {
    const matchesSearch = req.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         req.requestedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || req.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || req.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'approved': 'bg-green-100 text-green-800 border-green-300',
      'rejected': 'bg-red-100 text-red-800 border-red-300',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'medical': '🏥',
      'family': '👨‍👩‍👧‍👦',
      'academic': '🎓',
      'personal': '👤',
      'other': '📋',
    };
    return icons[category as keyof typeof icons] || '📋';
  };

  const pendingCount = absenceRequests.filter(r => r.status === 'pending').length;
  const approvedCount = absenceRequests.filter(r => r.status === 'approved').length;
  const rejectedCount = absenceRequests.filter(r => r.status === 'rejected').length;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.absences.title}</h1>
          <p className="text-gray-600 mt-2">{t.absences.subtitle}</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="sf-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t.absences.pending}</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">{pendingCount}</p>
              </div>
              <div className="text-4xl">⏳</div>
            </div>
          </div>
          <div className="sf-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t.absences.approved}</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{approvedCount}</p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
          <div className="sf-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t.absences.rejected}</p>
                <p className="text-3xl font-bold text-red-600 mt-1">{rejectedCount}</p>
              </div>
              <div className="text-4xl">❌</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="sf-card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.absences.search}
              </label>
              <input
                type="text"
                placeholder={t.absences.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="sf-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.absences.filterByStatus}
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="sf-input"
              >
                <option value="all">{t.absences.allStatuses}</option>
                <option value="pending">{t.absences.pending}</option>
                <option value="approved">{t.absences.approved}</option>
                <option value="rejected">{t.absences.rejected}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.absences.filterByCategory}
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="sf-input"
              >
                <option value="all">{t.absences.allCategories}</option>
                <option value="medical">{t.absences.categories.medical}</option>
                <option value="family">{t.absences.categories.family}</option>
                <option value="academic">{t.absences.categories.academic}</option>
                <option value="personal">{t.absences.categories.personal}</option>
                <option value="other">{t.absences.categories.other}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Requests List */}
        <div className="sf-card overflow-hidden">
          <table className="sf-table">
            <thead>
              <tr>
                <th>{t.absences.studentName}</th>
                <th>{t.absences.requestedBy}</th>
                <th>{t.absences.absenceDate}</th>
                <th>{t.absences.category}</th>
                <th>{t.absences.status}</th>
                <th>{t.absences.actions}</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id}>
                  <td className="font-semibold text-salesforce-blue">
                    {request.studentName}
                  </td>
                  <td>{request.requestedBy}</td>
                  <td>
                    <div>
                      <div className="font-medium">{request.absenceDate}</div>
                      {request.absenceEndDate && (
                        <div className="text-xs text-gray-500">
                          {t.absences.to} {request.absenceEndDate}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{getCategoryIcon(request.category)}</span>
                      <span className="text-sm">
                        {t.absences.categories[request.category as keyof typeof t.absences.categories]}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(request.status)}`}>
                      {t.absences[request.status as keyof typeof t.absences]}
                    </span>
                  </td>
                  <td>
                    <Link href={`/absences/${request.id}`}>
                      <button className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
                        {t.absences.view}
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.absences.noRequests}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
