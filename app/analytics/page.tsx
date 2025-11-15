'use client';

import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  subjectPerformance,
  gradeTrends,
  departmentDistribution,
  attendanceData,
  enrollmentTrends,
  retentionRates,
  passFailRates,
} from '@/lib/mockData';
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

export default function AnalyticsPage() {
  const { t } = useLanguage();

  // Calculate key metrics
  const totalStudents = departmentDistribution.reduce((sum, dept) => sum + dept.students, 0);
  const averageGrade = Math.round(
    gradeTrends.reduce((sum, trend) => sum + trend.promedio, 0) / gradeTrends.length
  );
  const currentAttendance = attendanceData[attendanceData.length - 1].attendance;
  const activeCourses = subjectPerformance.length;

  const COLORS = ['#0176D3', '#032D60', '#E3F3FF', '#54698D', '#006DCC', '#032E61'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-salesforce-darkblue">
            {t.analytics.title}
          </h1>
          <p className="mt-2 text-gray-600">{t.analytics.subtitle}</p>
        </div>

        {/* Key Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t.analytics.keyMetrics}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sf-card p-6">
              <div className="text-sm text-gray-600 text-center">{t.analytics.totalStudents}</div>
              <div className="text-3xl font-bold text-salesforce-blue mt-2 text-center">
                {totalStudents}
              </div>
            </div>
            <div className="sf-card p-6">
              <div className="text-sm text-gray-600 text-center">{t.analytics.averageGrade}</div>
              <div className="text-3xl font-bold text-salesforce-blue mt-2 text-center">
                {averageGrade}%
              </div>
            </div>
            <div className="sf-card p-6">
              <div className="text-sm text-gray-600 text-center">{t.analytics.attendanceRate}</div>
              <div className="text-3xl font-bold text-salesforce-blue mt-2 text-center">
                {currentAttendance}%
              </div>
            </div>
            <div className="sf-card p-6">
              <div className="text-sm text-gray-600 text-center">{t.analytics.activeCourses}</div>
              <div className="text-3xl font-bold text-salesforce-blue mt-2 text-center">
                {activeCourses}
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance by Subject */}
          <div className="sf-card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t.analytics.performanceBySubject}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="subjectName"
                  angle={-45}
                  textAnchor="end"
                  height={120}
                  fontSize={12}
                />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="averageScore"
                  fill="#0176D3"
                  name={t.analytics.average}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Grade Trends */}
          <div className="sf-card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t.analytics.gradeTrends}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={gradeTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="promedio"
                  stroke="#0176D3"
                  strokeWidth={2}
                  name={t.analytics.grade}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Department Distribution */}
          <div className="sf-card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t.analytics.departmentDistribution}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentDistribution.filter(d => d.students > 0)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="students"
                  fill="#032D60"
                  name={t.analytics.students}
                >
                  {departmentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Attendance Trends */}
          <div className="sf-card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t.analytics.attendanceTrends}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[85, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#006DCC"
                  strokeWidth={2}
                  name={t.analytics.attendance}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Enrollment Trends */}
          <div className="sf-card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t.analytics.enrollmentTrends}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={enrollmentTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" angle={-20} textAnchor="end" height={80} fontSize={11} />
                <YAxis domain={[200, 280]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#0176D3"
                  strokeWidth={3}
                  name={t.analytics.students}
                  dot={{ fill: '#0176D3', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Retention Rates */}
          <div className="sf-card">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t.analytics.retentionRates}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={retentionRates}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="retained" fill="#10B981" name={t.analytics.retained} />
                <Bar dataKey="dropped" fill="#EF4444" name={t.analytics.dropped} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pass/Fail Rates */}
          <div className="sf-card lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t.analytics.passFailRates}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={passFailRates}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="subject"
                  angle={-30}
                  textAnchor="end"
                  height={120}
                  fontSize={12}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="passed" fill="#10B981" name={t.analytics.passed} />
                <Bar dataKey="failed" fill="#EF4444" name={t.analytics.failed} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
