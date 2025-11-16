'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { students } from '@/lib/mockData';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StudentsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.currentYear.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.students.title}</h1>
          <p className="text-gray-600 mt-2">{t.students.subtitle}</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder={t.students.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sf-input max-w-md"
          />
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div key={student.id} className="sf-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-600">{student.currentYear}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  student.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : student.status === 'Graduated'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {t.students.status[student.status.toLowerCase() as keyof typeof t.students.status]}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t.students.gpa}:</span>
                  <span className="font-semibold text-gray-900">{student.gpa.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t.students.attendanceRate}:</span>
                  <span className="font-semibold text-gray-900">{student.attendanceRate}%</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">{t.students.enrolledSubjects}:</span>
                  <span className="font-semibold text-gray-900 ml-1">{student.subjects.length}</span>
                </div>
              </div>

              <Link href={`/students/${student.id}`}>
                <button className="w-full sf-button-primary text-sm">
                  {t.students.viewProfile}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="sf-card p-12 text-center">
            <p className="text-gray-500">{t.students.studentNotFound}</p>
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">Total Students</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{students.length}</p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">Average GPA</p>
            <p className="text-2xl font-bold text-salesforce-blue mt-1">
              {(students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2)}
            </p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">Average Attendance</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {Math.round(students.reduce((sum, s) => sum + s.attendanceRate, 0) / students.length)}%
            </p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">Active Students</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {students.filter(s => s.status === 'Active').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
