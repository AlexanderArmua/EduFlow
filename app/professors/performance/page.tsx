'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { professorPerformance, professors } from '@/lib/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function ProfessorPerformancePage() {
  const { t } = useLanguage();
  const [selectedProfessor, setSelectedProfessor] = useState<string>('all');

  const filteredPerformance = selectedProfessor === 'all'
    ? professorPerformance
    : professorPerformance.filter(p => p.professorId === selectedProfessor);

  // Aggregate data for comparison
  const comparisonData = professorPerformance.map(prof => ({
    name: prof.professorName.split(' ')[prof.professorName.split(' ').length - 1],
    students: prof.totalStudents,
    subjects: prof.totalSubjects * 20, // Scale for visibility
    hours: prof.teachingHoursPerWeek * 5, // Scale for visibility
    rating: prof.averageRating * 20, // Scale to 0-100
  }));

  const getStatusColor = (status: string) => {
    const colors = {
      'completed': 'bg-green-100 text-green-800 border-green-300',
      'in-progress': 'bg-blue-100 text-blue-800 border-blue-300',
      'planned': 'bg-gray-100 text-gray-800 border-gray-300',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      'course': '📚',
      'seminar': '🎓',
      'conference': '🏛️',
      'workshop': '🔧',
    };
    return icons[type as keyof typeof icons] || '📅';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/professors" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.professors.backToProfessors || 'Back to Professors'}
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.professors.performance?.title || 'Professor Performance'}</h1>
          <p className="text-gray-600 mt-2">{t.professors.performance?.subtitle || 'Analyze teaching metrics and professional development'}</p>
        </div>

        {/* Filter */}
        <div className="sf-card p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.professors.performance?.filterByProfessor || 'Filter by Professor'}
          </label>
          <select
            value={selectedProfessor}
            onChange={(e) => setSelectedProfessor(e.target.value)}
            className="sf-input max-w-md"
          >
            <option value="all">{t.professors.performance?.allProfessors || 'All Professors'}</option>
            {professors.filter(p => p.status === 'Active').map(prof => (
              <option key={prof.id} value={prof.id}>{prof.name}</option>
            ))}
          </select>
        </div>

        {/* Overall Comparison Chart - Only show when all professors selected */}
        {selectedProfessor === 'all' && (
          <div className="sf-card p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.professors.performance?.workloadComparison || 'Teaching Load Comparison'}</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#0176D3" name={t.professors.performance?.students || 'Students'} />
                <Bar dataKey="hours" fill="#82ca9d" name={t.professors.performance?.teachingHours || 'Teaching Hours'} />
                <Bar dataKey="rating" fill="#ffc658" name={t.professors.performance?.rating || 'Rating (x20)'} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Individual Professor Cards */}
        {filteredPerformance.map((prof) => (
          <div key={prof.professorId} className="sf-card overflow-hidden mb-6">
            {/* Professor Header */}
            <div className="bg-gradient-to-r from-salesforce-blue to-salesforce-darkblue p-6">
              <h2 className="text-2xl font-bold text-white">{prof.professorName}</h2>
              <p className="text-salesforce-cloud mt-1">{prof.department}</p>
            </div>

            <div className="p-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-salesforce-blue">{prof.totalStudents}</div>
                  <div className="text-sm text-gray-600 mt-1">{t.professors.performance?.totalStudents || 'Total Students'}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-700">{prof.totalSubjects}</div>
                  <div className="text-sm text-gray-600 mt-1">{t.professors.performance?.totalSubjects || 'Subjects'}</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">{prof.teachingHoursPerWeek}h</div>
                  <div className="text-sm text-gray-600 mt-1">{t.professors.performance?.weeklyHours || 'Hours/Week'}</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="text-2xl font-bold text-yellow-700 flex items-center gap-1">
                    ⭐ {prof.averageRating.toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {prof.totalRatings} {t.professors.performance?.reviews || 'reviews'}
                  </div>
                </div>
              </div>

              {/* Class Performance */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.professors.performance?.classPerformance || 'Class Performance'}</h3>
                <div className="overflow-x-auto">
                  <table className="sf-table">
                    <thead>
                      <tr>
                        <th>{t.professors.performance?.subject || 'Subject'}</th>
                        <th>{t.professors.performance?.students || 'Students'}</th>
                        <th>{t.professors.performance?.avgGrade || 'Avg Grade'}</th>
                        <th>{t.professors.performance?.passRate || 'Pass Rate'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prof.classPerformance.map((cls, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="font-medium text-gray-900">{cls.subjectName}</div>
                            <div className="text-xs text-gray-500">{cls.subjectCode}</div>
                          </td>
                          <td>{cls.students}</td>
                          <td>
                            <span className={`inline-flex px-2 py-1 rounded-full text-sm font-semibold ${
                              cls.averageGrade >= 85 ? 'bg-green-100 text-green-800' :
                              cls.averageGrade >= 75 ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {cls.averageGrade}
                            </span>
                          </td>
                          <td>
                            <span className={`inline-flex px-2 py-1 rounded-full text-sm font-semibold ${
                              cls.passRate >= 90 ? 'bg-green-100 text-green-800' :
                              cls.passRate >= 80 ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {cls.passRate}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Professional Development */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.professors.performance?.professionalDevelopment || 'Professional Development'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {prof.professionalDevelopment.map((pd) => (
                    <div
                      key={pd.id}
                      className={`p-4 rounded-lg border-2 ${getStatusColor(pd.status)}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{getTypeIcon(pd.type)}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{pd.title}</h4>
                          <p className="text-xs text-gray-600 mt-1 capitalize">{pd.type}</p>
                          <p className="text-xs text-gray-500 mt-1">{pd.date}</p>
                          <span className={`inline-flex mt-2 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(pd.status)}`}>
                            {t.professors.performance?.pdStatus?.[pd.status as keyof typeof t.professors.performance.pdStatus] || pd.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
