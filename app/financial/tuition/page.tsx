'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { tuitionPayments } from '@/lib/mockData';

export default function TuitionPaymentsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredPayments = tuitionPayments.filter(payment => {
    const matchesSearch = payment.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalCollected = tuitionPayments.reduce((sum, p) => sum + p.amountPaid, 0);
  const totalOutstanding = tuitionPayments.reduce((sum, p) => sum + p.amountDue, 0);
  const totalOverdue = tuitionPayments
    .filter(p => p.status === 'overdue')
    .reduce((sum, p) => sum + p.amountDue, 0);
  const collectionRate = ((totalCollected / (totalCollected + totalOutstanding)) * 100).toFixed(1);

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  const getStatusColor = (status: string) => {
    const colors = {
      'paid': 'bg-green-100 text-green-800 border-green-300',
      'partial': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'overdue': 'bg-red-100 text-red-800 border-red-300',
      'pending': 'bg-gray-100 text-gray-800 border-gray-300',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/financial" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            ← {t.financial.title}
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.financial.tuitionPayments.title}</h1>
          <p className="text-gray-600 mt-2">{t.financial.tuitionPayments.subtitle}</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.tuitionPayments.totalCollected}</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(totalCollected)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.tuitionPayments.totalOutstanding}</p>
            <p className="text-3xl font-bold text-yellow-600 mt-2">{formatCurrency(totalOutstanding)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.tuitionPayments.totalOverdue}</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{formatCurrency(totalOverdue)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.tuitionPayments.collectionRate}</p>
            <p className="text-3xl font-bold text-salesforce-blue mt-2">{collectionRate}%</p>
          </div>
        </div>

        {/* Filters */}
        <div className="sf-card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.absences.search}
              </label>
              <input
                type="text"
                placeholder={t.financial.tuitionPayments.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="sf-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.financial.tuitionPayments.status}
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="sf-input"
              >
                <option value="all">{t.financial.tuitionPayments.allStatuses}</option>
                <option value="paid">{t.financial.tuitionPayments.paid}</option>
                <option value="partial">{t.financial.tuitionPayments.partial}</option>
                <option value="overdue">{t.financial.tuitionPayments.overdue}</option>
                <option value="pending">{t.financial.tuitionPayments.pending}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Payments Table */}
        <div className="sf-card overflow-hidden">
          <table className="sf-table">
            <thead>
              <tr>
                <th>{t.financial.tuitionPayments.studentName}</th>
                <th>{t.financial.tuitionPayments.semester}</th>
                <th>{t.financial.tuitionPayments.totalTuition}</th>
                <th>{t.financial.tuitionPayments.amountPaid}</th>
                <th>{t.financial.tuitionPayments.amountDue}</th>
                <th>{t.financial.tuitionPayments.dueDate}</th>
                <th>{t.financial.tuitionPayments.status}</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id}>
                  <td className="font-semibold text-salesforce-blue">{payment.studentName}</td>
                  <td>{payment.semester}</td>
                  <td>{formatCurrency(payment.totalTuition)}</td>
                  <td className="text-green-600 font-semibold">{formatCurrency(payment.amountPaid)}</td>
                  <td className="text-red-600 font-semibold">{formatCurrency(payment.amountDue)}</td>
                  <td>{payment.dueDate}</td>
                  <td>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(payment.status)}`}>
                      {t.financial.tuitionPayments[payment.status as keyof typeof t.financial.tuitionPayments]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPayments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No payment records found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
