'use client';

import { ClassSchedule, ProfessorAvailability } from '@/lib/mockData';
import Link from 'next/link';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ClassSchedule | ProfessorAvailability | null;
  viewMode: 'classes' | 'availability';
}

export default function ScheduleModal({ isOpen, onClose, item, viewMode }: ScheduleModalProps) {
  if (!isOpen || !item) return null;

  const isClassSchedule = viewMode === 'classes';
  const classItem = item as ClassSchedule;
  const availItem = item as ProfessorAvailability;

  const getDayName = (dayIndex: number) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

        {/* Modal */}
        <div
          className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="mt-2">
            {isClassSchedule ? (
              <>
                <h3 className="text-2xl font-bold text-salesforce-darkblue mb-4">
                  {classItem.subjectCode}
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-salesforce-blue pl-4">
                    <p className="text-sm text-gray-600">Subject Name</p>
                    <p className="text-lg font-semibold text-gray-900">{classItem.subjectName}</p>
                  </div>

                  <div className="border-l-4 border-salesforce-blue pl-4">
                    <p className="text-sm text-gray-600">Professor</p>
                    <p className="text-lg font-semibold text-gray-900">{classItem.professorName}</p>
                  </div>

                  <div className="border-l-4 border-salesforce-blue pl-4">
                    <p className="text-sm text-gray-600">Schedule</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {getDayName(classItem.dayOfWeek)} - {classItem.startTime} to {classItem.endTime}
                    </p>
                  </div>

                  <div className="border-l-4 border-salesforce-blue pl-4">
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-lg font-semibold text-gray-900">{classItem.location}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex gap-3">
                  <Link href={`/professors/${classItem.professorId}`} className="flex-1">
                    <button className="w-full sf-button-primary text-sm">
                      👨‍🏫 View Professor
                    </button>
                  </Link>
                  <Link href={`/subjects/${classItem.subjectId}`} className="flex-1">
                    <button className="w-full sf-button-secondary text-sm">
                      📚 View Subject
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-salesforce-darkblue mb-4">
                  {availItem.type === 'office-hours'
                    ? '🏢 Office Hours'
                    : availItem.type === 'available'
                    ? '✅ Available'
                    : '❌ Busy'}
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm text-gray-600">Professor</p>
                    <p className="text-lg font-semibold text-gray-900">{availItem.professorName}</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {getDayName(availItem.dayOfWeek)} - {availItem.startTime} to {availItem.endTime}
                    </p>
                  </div>

                  {availItem.notes && (
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-sm text-gray-600">Notes</p>
                      <p className="text-lg font-semibold text-gray-900">{availItem.notes}</p>
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="mt-6">
                  <Link href={`/professors/${availItem.professorId}`}>
                    <button className="w-full sf-button-primary text-sm">
                      👨‍🏫 View Professor Details
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
