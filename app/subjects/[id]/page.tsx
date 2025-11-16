'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { subjects, notes, scores, professors } from '@/lib/mockData';
import { useState, use } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function SubjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t } = useLanguage();
  const subject = subjects.find(s => s.id === id);
  const [activeTab, setActiveTab] = useState<'overview' | 'notes' | 'scores' | 'performance'>('overview');

  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sf-card p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.subjects.subjectNotFound}</h2>
            <Link href="/subjects" className="text-salesforce-blue hover:underline">
              {t.subjects.backToSubjects}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const professor = professors.find(p => p.id === subject.professorId);
  const subjectNotes = notes.filter(n => n.subjectId === id);
  const subjectScores = scores.filter(s => s.subjectId === id);

  // Calculate performance metrics for comparison
  const allSubjects = subjects;
  const subjectPerformanceData = allSubjects.map(subj => {
    const subjScores = scores.filter(s => s.subjectId === subj.id);
    const avgScore = subjScores.length > 0
      ? subjScores.reduce((sum, s) => sum + (s.score / s.maxScore) * 100, 0) / subjScores.length
      : 0;
    return {
      name: subj.code,
      average: Math.round(avgScore),
      students: subj.students,
      fullName: subj.name,
    };
  }).filter(subj => subj.average > 0);

  // Current subject average
  const currentSubjectAvg = subjectScores.length > 0
    ? Math.round(subjectScores.reduce((sum, s) => sum + (s.score / s.maxScore) * 100, 0) / subjectScores.length)
    : 0;

  // Grade distribution for current subject
  const gradeDistribution = [
    { grade: 'A (90-100)', count: subjectScores.filter(s => (s.score / s.maxScore) * 100 >= 90).length, color: '#10B981' },
    { grade: 'B (80-89)', count: subjectScores.filter(s => (s.score / s.maxScore) * 100 >= 80 && (s.score / s.maxScore) * 100 < 90).length, color: '#3B82F6' },
    { grade: 'C (70-79)', count: subjectScores.filter(s => (s.score / s.maxScore) * 100 >= 70 && (s.score / s.maxScore) * 100 < 80).length, color: '#F59E0B' },
    { grade: 'D (60-69)', count: subjectScores.filter(s => (s.score / s.maxScore) * 100 >= 60 && (s.score / s.maxScore) * 100 < 70).length, color: '#EF4444' },
    { grade: 'F (<60)', count: subjectScores.filter(s => (s.score / s.maxScore) * 100 < 60).length, color: '#DC2626' },
  ];

  // Performance trend over time (by assignment)
  const performanceTrend = subjectScores.reduce((acc: any[], score) => {
    const existingAssignment = acc.find(item => item.assignment === score.assignment);
    const percentage = (score.score / score.maxScore) * 100;

    if (existingAssignment) {
      existingAssignment.total += percentage;
      existingAssignment.count += 1;
      existingAssignment.average = existingAssignment.total / existingAssignment.count;
    } else {
      acc.push({
        assignment: score.assignment,
        average: percentage,
        total: percentage,
        count: 1,
      });
    }

    return acc;
  }, []);

  // Subjects by same professor for comparison
  const professorSubjects = allSubjects
    .filter(s => s.professorId === subject.professorId && s.id !== id)
    .map(subj => {
      const subjScores = scores.filter(s => s.subjectId === subj.id);
      const avgScore = subjScores.length > 0
        ? subjScores.reduce((sum, s) => sum + (s.score / s.maxScore) * 100, 0) / subjScores.length
        : 0;
      return {
        name: subj.code,
        average: Math.round(avgScore),
        fullName: subj.name,
      };
    }).filter(subj => subj.average > 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/subjects" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.subjects.backToSubjects}
          </Link>
        </div>

        {/* Subject Header */}
        <div className="sf-card p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
              <p className="text-lg text-salesforce-blue font-semibold mt-2">{subject.code}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-lg">
                {subject.credits} {t.subjects.credits}
              </span>
              <Link href={`/subjects/${id}/edit`}>
                <button className="sf-button-primary text-sm">
                  ✏️ Edit Subject
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div>
              <p className="text-sm font-medium text-gray-500">{t.subjects.professor}</p>
              <Link href={`/professors/${subject.professorId}`} className="text-salesforce-blue hover:underline">
                {subject.professorName}
              </Link>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{t.subjects.students}</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">{subject.students}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{t.subjects.semester}</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">{subject.semester}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="sf-card mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-salesforce-blue text-salesforce-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t.subjects.overview}
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'notes'
                    ? 'border-salesforce-blue text-salesforce-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t.subjects.notes} ({subjectNotes.length})
              </button>
              <button
                onClick={() => setActiveTab('scores')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'scores'
                    ? 'border-salesforce-blue text-salesforce-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {t.subjects.scores} ({subjectScores.length})
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'performance'
                    ? 'border-salesforce-blue text-salesforce-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Performance Analytics
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.subjects.courseInformation}</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm text-gray-700">
                      Esta es una materia integral de {subject.credits} créditos que cubre conceptos fundamentales de {subject.name}.
                    </p>
                    <p className="text-sm text-gray-700">
                      Dictada por {subject.professorName} del departamento de {professor?.department}.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">{t.subjects.totalNotes}</p>
                    <p className="text-3xl font-bold text-salesforce-blue mt-2">{subjectNotes.length}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">{t.subjects.gradedAssignments}</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">{subjectScores.length}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Notes Tab */}
            {activeTab === 'notes' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{t.subjects.studentNotes}</h3>
                  <button className="sf-button-primary text-sm">{t.subjects.addNote}</button>
                </div>

                {subjectNotes.length > 0 ? (
                  <div className="space-y-4">
                    {subjectNotes.map((note) => (
                      <div key={note.id} className="border border-salesforce-border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{note.studentName}</h4>
                            <span className="text-xs text-gray-500">{note.date}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            note.noteType === 'Achievement'
                              ? 'bg-green-100 text-green-800'
                              : note.noteType === 'Behavioral'
                              ? 'bg-blue-100 text-blue-800'
                              : note.noteType === 'Academic'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {note.noteType === 'Attendance' ? t.subjects.noteTypes.attendance :
                             note.noteType === 'Behavioral' ? t.subjects.noteTypes.behavioral :
                             note.noteType === 'Academic' ? t.subjects.noteTypes.academic :
                             note.noteType === 'Achievement' ? t.subjects.noteTypes.achievement :
                             note.noteType}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{note.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">{t.subjects.noNotes}</p>
                )}
              </div>
            )}

            {/* Scores Tab */}
            {activeTab === 'scores' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{t.subjects.studentScores}</h3>
                  <button className="sf-button-primary text-sm">{t.subjects.addScore}</button>
                </div>

                {subjectScores.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="sf-table">
                      <thead>
                        <tr>
                          <th>{t.subjects.studentName}</th>
                          <th>{t.subjects.assignment}</th>
                          <th>{t.subjects.score}</th>
                          <th>{t.subjects.percentage}</th>
                          <th>{t.subjects.date}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subjectScores.map((score) => {
                          const percentage = Math.round((score.score / score.maxScore) * 100);
                          return (
                            <tr key={score.id}>
                              <td className="font-semibold">{score.studentName}</td>
                              <td>{score.assignment}</td>
                              <td>
                                <span className="font-semibold">{score.score}</span>
                                <span className="text-gray-500">/{score.maxScore}</span>
                              </td>
                              <td>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  percentage >= 90
                                    ? 'bg-green-100 text-green-800'
                                    : percentage >= 80
                                    ? 'bg-blue-100 text-blue-800'
                                    : percentage >= 70
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {percentage}%
                                </span>
                              </td>
                              <td>{score.date}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">{t.subjects.noScores}</p>
                )}
              </div>
            )}

            {/* Performance Analytics Tab */}
            {activeTab === 'performance' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Class Performance Analytics & Comparison</h3>

                {subjectScores.length > 0 ? (
                  <>
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                        <p className="text-sm text-gray-600 mb-2">Class Average</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold text-blue-600">{currentSubjectAvg}</span>
                          <span className="text-2xl text-blue-500">%</span>
                        </div>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Top Performers</p>
                        <p className="text-4xl font-bold text-green-600">
                          {subjectScores.filter(s => (s.score / s.maxScore) * 100 >= 90).length}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">A grades</p>
                      </div>
                      <div className="bg-yellow-50 p-6 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Needs Support</p>
                        <p className="text-4xl font-bold text-yellow-600">
                          {subjectScores.filter(s => (s.score / s.maxScore) * 100 < 70).length}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Below 70%</p>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Assignments</p>
                        <p className="text-4xl font-bold text-purple-600">
                          {new Set(subjectScores.map(s => s.assignment)).size}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Total graded</p>
                      </div>
                    </div>

                    {/* Subject Comparison Chart */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="text-md font-semibold text-gray-700 mb-4">Performance Comparison Across All Subjects</h4>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={subjectPerformanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} label={{ value: 'Average Score (%)', angle: -90, position: 'insideLeft' }} />
                          <Tooltip
                            formatter={(value: any) => [`${value}%`, 'Average']}
                            labelFormatter={(label) => subjectPerformanceData.find(s => s.name === label)?.fullName || label}
                          />
                          <Legend />
                          <Bar
                            dataKey="average"
                            fill="#0176D3"
                            name="Average Score"
                            label={{ position: 'top' }}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Current subject ({subject.code}) average: <span className="font-bold text-salesforce-blue">{currentSubjectAvg}%</span>
                      </p>
                    </div>

                    {/* Grade Distribution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-md font-semibold text-gray-700 mb-4">Grade Distribution</h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie
                              data={gradeDistribution}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={(entry: any) => `${entry.grade}: ${entry.count}`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="count"
                            >
                              {gradeDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Performance Trend */}
                      {performanceTrend.length > 1 && (
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                          <h4 className="text-md font-semibold text-gray-700 mb-4">Performance Trend by Assignment</h4>
                          <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={performanceTrend}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="assignment" />
                              <YAxis domain={[0, 100]} />
                              <Tooltip formatter={(value: any) => [`${value.toFixed(1)}%`, 'Average']} />
                              <Legend />
                              <Line
                                type="monotone"
                                dataKey="average"
                                stroke="#10B981"
                                strokeWidth={3}
                                dot={{ fill: '#10B981', r: 5 }}
                                name="Class Average"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </div>

                    {/* Professor's Other Classes Comparison */}
                    {professorSubjects.length > 0 && (
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-md font-semibold text-gray-700 mb-4">
                          Comparison with Other Classes by {subject.professorName}
                        </h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart
                            data={[
                              { name: subject.code, average: currentSubjectAvg, isCurrent: true },
                              ...professorSubjects
                            ]}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip
                              formatter={(value: any) => [`${value}%`, 'Average']}
                              labelFormatter={(label) => {
                                if (label === subject.code) return `${subject.name} (Current)`;
                                const subj = professorSubjects.find(s => s.name === label);
                                return subj?.fullName || label;
                              }}
                            />
                            <Legend />
                            <Bar
                              dataKey="average"
                              name="Average Score"
                              label={{ position: 'top' }}
                            >
                              {[{ isCurrent: true }, ...professorSubjects].map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#F59E0B' : '#0176D3'} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}

                    {/* Performance Insights */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
                      <h4 className="text-md font-semibold text-gray-700 mb-3">Performance Insights</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>
                          • Class average is <strong>{currentSubjectAvg}%</strong>, which is{' '}
                          {currentSubjectAvg >= 80 ? (
                            <span className="text-green-600 font-semibold">above expectations</span>
                          ) : currentSubjectAvg >= 70 ? (
                            <span className="text-yellow-600 font-semibold">meeting expectations</span>
                          ) : (
                            <span className="text-red-600 font-semibold">below expectations</span>
                          )}
                        </p>
                        <p>
                          • <strong>{Math.round((subjectScores.filter(s => (s.score / s.maxScore) * 100 >= 90).length / subjectScores.length) * 100)}%</strong> of students are achieving A grades
                        </p>
                        <p>
                          • <strong>{gradeDistribution.find(g => g.grade === 'A (90-100)')?.count || 0}</strong> students are performing excellently
                        </p>
                        {subjectScores.filter(s => (s.score / s.maxScore) * 100 < 70).length > 0 && (
                          <p>
                            • <strong>{subjectScores.filter(s => (s.score / s.maxScore) * 100 < 70).length}</strong> students may need additional support
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-500">No performance data available yet. Add scores to see analytics.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
