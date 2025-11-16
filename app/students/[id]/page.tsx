'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import {
  students,
  subjects,
  scores,
  attendanceRecords,
  behavioralReports,
  achievementBadges,
  parentMessages,
} from '@/lib/mockData';
import { use } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function StudentProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t } = useLanguage();
  const student = students.find(s => s.id === id);

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sf-card p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.students.studentNotFound}</h2>
            <Link href="/students" className="text-salesforce-blue hover:underline">
              {t.students.backToStudents}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const studentSubjects = subjects.filter(s => student.subjects.includes(s.code));
  const studentScores = scores.filter(s => s.studentName === student.name);
  const studentAttendance = attendanceRecords.filter(a => a.studentId === id);
  const studentBehavior = behavioralReports.filter(b => b.studentId === id);
  const studentMessages = parentMessages.filter(m => m.studentName === student.name);

  // Calculate parent engagement score (based on messages)
  const parentEngagementScore = Math.min(100, studentMessages.length * 20);

  // Grade progression data
  const gradeProgressionData = [
    { month: 'Mar', grade: 8.0 },
    { month: 'Apr', grade: 8.2 },
    { month: 'May', grade: 8.3 },
    { month: 'Jun', grade: 8.4 },
    { month: 'Jul', grade: 8.3 },
    { month: 'Ago', grade: 8.5 },
    { month: 'Sep', grade: 8.6 },
    { month: 'Oct', grade: 8.5 },
    { month: 'Nov', grade: student.gpa },
  ];

  // Student's earned badges
  const earnedBadges = [
    student.gpa >= 9.0 ? achievementBadges.find(b => b.id === '2') : null,
    student.attendanceRate >= 98 ? achievementBadges.find(b => b.id === '1') : null,
    studentBehavior.filter(b => b.type === 'positive').length >= 2 ? achievementBadges.find(b => b.id === '3') : null,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/students" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.students.backToStudents}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Student Info Card */}
          <div className="lg:col-span-1">
            <div className="sf-card p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-salesforce-blue rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{student.name}</h2>
                <p className="text-gray-600 mt-1">{student.currentYear}</p>
                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                  student.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : student.status === 'Graduated'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {t.students.status[student.status.toLowerCase() as keyof typeof t.students.status]}
                </span>
              </div>

              {/* Academic Info */}
              <div className="space-y-4 border-t pt-6 mb-6">
                <h3 className="font-semibold text-gray-900">{t.students.academicInfo}</h3>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.students.gpa}</p>
                  <p className="text-2xl font-bold text-salesforce-blue mt-1">{student.gpa.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.students.attendanceRate}</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">{student.attendanceRate}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.students.enrollmentDate}</p>
                  <p className="text-sm text-gray-900 mt-1">{new Date(student.enrollmentDate).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold text-gray-900">{t.students.contactInfo}</h3>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-sm text-gray-900 mt-1">{student.email}</p>
                </div>
              </div>

              {/* Parent Info */}
              <div className="space-y-4 border-t pt-6 mt-6">
                <h3 className="font-semibold text-gray-900">{t.students.parentInfo}</h3>
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="text-sm text-gray-900 mt-1">{student.parentName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-sm text-gray-900 mt-1">{student.parentEmail}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-sm text-gray-900 mt-1">{student.parentPhone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.students.parentEngagement}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl font-bold text-gray-900">{parentEngagementScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-salesforce-blue h-3 rounded-full transition-all"
                        style={{ width: `${parentEngagementScore}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{studentMessages.length} communications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Grade Progression */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.students.gradeProgression}</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={gradeProgressionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="grade"
                    stroke="#0176D3"
                    strokeWidth={3}
                    dot={{ fill: '#0176D3', r: 5 }}
                    name="GPA"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Enrolled Subjects */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.students.enrolledSubjects}</h3>
              <div className="space-y-3">
                {studentSubjects.map((subject) => (
                  <div key={subject.id} className="border-l-4 border-salesforce-blue pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {subject.code} • {subject.professorName}
                        </p>
                      </div>
                      <Link href={`/subjects/${subject.id}`}>
                        <button className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance History */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.students.attendanceHistory}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Subject</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentAttendance.slice(0, 5).map((record) => (
                      <tr key={record.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-900">{record.date}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{record.subjectCode}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            record.status === 'Present'
                              ? 'bg-green-100 text-green-800'
                              : record.status === 'Absent'
                              ? 'bg-red-100 text-red-800'
                              : record.status === 'Late'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {t.students.attendanceStatus[record.status.toLowerCase() as keyof typeof t.students.attendanceStatus]}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{record.notes || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Behavioral Reports Timeline */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.students.behavioralReports}</h3>
              <div className="space-y-4">
                {studentBehavior.map((report) => (
                  <div
                    key={report.id}
                    className={`border-l-4 p-4 rounded-r-lg ${
                      report.type === 'positive'
                        ? 'border-green-500 bg-green-50'
                        : report.type === 'negative'
                        ? 'border-red-500 bg-red-50'
                        : 'border-blue-500 bg-blue-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          report.type === 'positive'
                            ? 'bg-green-200 text-green-900'
                            : report.type === 'negative'
                            ? 'bg-red-200 text-red-900'
                            : 'bg-blue-200 text-blue-900'
                        }`}>
                          {t.students.reportTypes[report.type as keyof typeof t.students.reportTypes]}
                        </span>
                        <span className="ml-2 text-xs text-gray-600">{report.category}</span>
                      </div>
                      <span className="text-xs text-gray-500">{report.date}</span>
                    </div>
                    <p className="text-sm text-gray-900 mb-2">{report.description}</p>
                    <p className="text-xs text-gray-600">Reported by: {report.reportedBy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.students.achievements}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {earnedBadges.length > 0 ? (
                  earnedBadges.map((badge) => badge && (
                    <div key={badge.id} className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 flex items-center gap-4">
                      <div className="text-4xl">{badge.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{badge.name}</h4>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 col-span-2">No badges earned yet. Keep up the good work!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
