'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { professors, subjects } from '@/lib/mockData';
import { use } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProfessorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t } = useLanguage();
  const professor = professors.find(p => p.id === id);

  if (!professor) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sf-card p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.professors.professorNotFound}</h2>
            <Link href="/professors" className="text-salesforce-blue hover:underline">
              {t.professors.backToProfessors}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const professorSubjects = subjects.filter(s => s.professorId === id);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/professors" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.professors.backToProfessors}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Professor Info Card */}
          <div className="lg:col-span-1">
            <div className="sf-card p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-salesforce-blue rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {professor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{professor.name}</h2>
                <p className="text-gray-600 mt-1">{professor.department}</p>
                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                  professor.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {professor.status}
                </span>
              </div>

              <div className="space-y-4 border-t pt-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.professors.email}</p>
                  <p className="text-sm text-gray-900 mt-1">{professor.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.professors.phone}</p>
                  <p className="text-sm text-gray-900 mt-1">{professor.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.professors.department}</p>
                  <p className="text-sm text-gray-900 mt-1">{professor.department}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link href={`/professors/${id}/edit`}>
                  <button className="w-full sf-button-primary">
                    {t.professors.editProfessor}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Professor Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subjects */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.professors.teachingSubjects}</h3>
              {professorSubjects.length > 0 ? (
                <div className="space-y-4">
                  {professorSubjects.map((subject) => (
                    <div key={subject.id} className="border-l-4 border-salesforce-blue pl-4 py-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{t.professors.code}: {subject.code}</p>
                          <div className="flex gap-4 mt-2 text-sm text-gray-600">
                            <span>{t.dashboard.credits}: {subject.credits}</span>
                            <span>{t.dashboard.students}: {subject.students}</span>
                            <span>{t.professors.semester}: {subject.semester}</span>
                          </div>
                        </div>
                        <Link href={`/subjects/${subject.id}`}>
                          <button className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
                            {t.professors.viewDetails}
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">{t.professors.noSubjects}</p>
              )}
            </div>

            {/* Statistics */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.professors.statistics}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">{t.professors.totalSubjects}</p>
                  <p className="text-3xl font-bold text-salesforce-blue mt-2">
                    {professorSubjects.length}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">{t.professors.totalStudents}</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {professorSubjects.reduce((sum, s) => sum + s.students, 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
