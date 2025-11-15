'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { subjects, notes, scores, professors } from '@/lib/mockData';
import { useState, use } from 'react';

export default function SubjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const subject = subjects.find(s => s.id === id);
  const [activeTab, setActiveTab] = useState<'overview' | 'notes' | 'scores'>('overview');

  if (!subject) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sf-card p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subject Not Found</h2>
            <Link href="/subjects" className="text-salesforce-blue hover:underline">
              Back to Subjects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const professor = professors.find(p => p.id === subject.professorId);
  const subjectNotes = notes.filter(n => n.subjectId === id);
  const subjectScores = scores.filter(s => s.subjectId === id);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/subjects" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; Back to Subjects
          </Link>
        </div>

        {/* Subject Header */}
        <div className="sf-card p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
              <p className="text-lg text-salesforce-blue font-semibold mt-2">{subject.code}</p>
            </div>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-lg">
              {subject.credits} Credits
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div>
              <p className="text-sm font-medium text-gray-500">Professor</p>
              <Link href={`/professors/${subject.professorId}`} className="text-salesforce-blue hover:underline">
                {subject.professorName}
              </Link>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Students Enrolled</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">{subject.students}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Semester</p>
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
                Overview
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'notes'
                    ? 'border-salesforce-blue text-salesforce-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Notes ({subjectNotes.length})
              </button>
              <button
                onClick={() => setActiveTab('scores')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'scores'
                    ? 'border-salesforce-blue text-salesforce-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Scores ({subjectScores.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="text-sm text-gray-700">
                      This is a comprehensive {subject.credits}-credit course covering fundamental concepts in {subject.name}.
                    </p>
                    <p className="text-sm text-gray-700">
                      Taught by {subject.professorName} from the {professor?.department} department.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Notes</p>
                    <p className="text-3xl font-bold text-salesforce-blue mt-2">{subjectNotes.length}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Graded Assignments</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">{subjectScores.length}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Notes Tab */}
            {activeTab === 'notes' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Student Notes</h3>
                  <button className="sf-button-primary text-sm">+ Add Note</button>
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
                            {note.noteType}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{note.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">No notes recorded yet.</p>
                )}
              </div>
            )}

            {/* Scores Tab */}
            {activeTab === 'scores' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Student Scores</h3>
                  <button className="sf-button-primary text-sm">+ Add Score</button>
                </div>

                {subjectScores.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="sf-table">
                      <thead>
                        <tr>
                          <th>Student Name</th>
                          <th>Assignment</th>
                          <th>Score</th>
                          <th>Percentage</th>
                          <th>Date</th>
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
                  <p className="text-gray-500 text-center py-8">No scores recorded yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
