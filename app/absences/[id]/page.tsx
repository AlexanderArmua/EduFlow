'use client';

import { useState, use } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { absenceRequests } from '@/lib/mockData';

export default function AbsenceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { t } = useLanguage();
  const { id } = use(params);
  const request = absenceRequests.find(r => r.id === id);
  const [reviewNotes, setReviewNotes] = useState('');
  const [showApprovalConfirm, setShowApprovalConfirm] = useState(false);
  const [showRejectionConfirm, setShowRejectionConfirm] = useState(false);

  if (!request) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sf-card p-12 text-center">
            <p className="text-gray-500">{t.absences.noRequests}</p>
          </div>
        </div>
      </div>
    );
  }

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

  const handleApprove = () => {
    console.log('Approving request:', request.id, 'Notes:', reviewNotes);
    // In a real app, this would call an API
    setShowApprovalConfirm(false);
  };

  const handleReject = () => {
    console.log('Rejecting request:', request.id, 'Notes:', reviewNotes);
    // In a real app, this would call an API
    setShowRejectionConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/absences" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            ← {t.absences.backToRequests}
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.absences.requestDetails}</h1>
          <p className="text-gray-600 mt-2">
            {request.studentName} • {t.absences.requestDate}: {request.requestDate}
          </p>
        </div>

        {/* Request Details Card */}
        <div className="sf-card p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{request.studentName}</h2>
              <p className="text-sm text-gray-600 mt-1">{t.absences.requestedBy}: {request.requestedBy}</p>
            </div>
            <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(request.status)}`}>
              {request.status === 'pending' ? t.absences.pending : request.status === 'approved' ? t.absences.approved : t.absences.rejected}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Absence Dates */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-gray-700 mb-2">{t.absences.absenceDates}</p>
              <div className="text-lg font-bold text-salesforce-blue">
                {request.absenceDate}
                {request.absenceEndDate && ` ${t.absences.to} ${request.absenceEndDate}`}
              </div>
            </div>

            {/* Category */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-medium text-gray-700 mb-2">{t.absences.category}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{getCategoryIcon(request.category)}</span>
                <span className="text-lg font-bold text-purple-700">
                  {t.absences.categories[request.category as keyof typeof t.absences.categories]}
                </span>
              </div>
            </div>
          </div>

          {/* Reason */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">{t.absences.reason}</p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-800">{request.reason}</p>
            </div>
          </div>

          {/* Affected Subjects */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">{t.absences.affectedSubjects}</p>
            <div className="flex flex-wrap gap-2">
              {request.affectedSubjects.map((subject, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Attachments */}
          {request.attachments && request.attachments.length > 0 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">{t.absences.attachments}</p>
              <div className="space-y-2">
                {request.attachments.map((attachment, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-xl">📎</span>
                    <span className="text-sm text-gray-700">{attachment}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Review Information (if already reviewed) */}
          {request.reviewedBy && (
            <div className="border-t pt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Review Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">{t.absences.reviewedBy}</p>
                  <p className="text-gray-800">{request.reviewedBy}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">{t.absences.reviewDate}</p>
                  <p className="text-gray-800">{request.reviewDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">{t.absences.reviewNotes}</p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
                    <p className="text-gray-800">{request.reviewNotes}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Panel (only for pending requests) */}
        {request.status === 'pending' && (
          <div className="sf-card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t.absences.addNotes}</h3>
            <textarea
              value={reviewNotes}
              onChange={(e) => setReviewNotes(e.target.value)}
              placeholder={t.absences.notesPlaceholder}
              className="sf-input min-h-32 mb-4"
            />
            <div className="flex gap-4">
              <button
                onClick={() => setShowApprovalConfirm(true)}
                className="sf-button-primary flex-1"
              >
                ✅ {t.absences.approveRequest}
              </button>
              <button
                onClick={() => setShowRejectionConfirm(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex-1"
              >
                ❌ {t.absences.rejectRequest}
              </button>
            </div>
          </div>
        )}

        {/* Approval Confirmation Modal */}
        {showApprovalConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.absences.confirmApproval}</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to approve this absence request for {request.studentName}?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleApprove}
                  className="sf-button-primary flex-1"
                >
                  {t.absences.approve}
                </button>
                <button
                  onClick={() => setShowApprovalConfirm(false)}
                  className="sf-button-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Rejection Confirmation Modal */}
        {showRejectionConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.absences.confirmRejection}</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to reject this absence request for {request.studentName}?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleReject}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex-1"
                >
                  {t.absences.reject}
                </button>
                <button
                  onClick={() => setShowRejectionConfirm(false)}
                  className="sf-button-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
