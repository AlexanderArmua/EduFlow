'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { courseRevenue } from '@/lib/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CourseRevenuePage() {
  const { t } = useLanguage();

  const totalRevenue = courseRevenue.reduce((sum, c) => sum + c.totalRevenue, 0);
  const averageRevenue = (totalRevenue / courseRevenue.length).toFixed(0);
  const topCourse = courseRevenue.reduce((max, c) => c.totalRevenue > max.totalRevenue ? c : max);

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  // Group by department
  const revenueByDept = courseRevenue.reduce((acc, course) => {
    if (!acc[course.department]) {
      acc[course.department] = 0;
    }
    acc[course.department] += course.totalRevenue;
    return acc;
  }, {} as Record<string, number>);

  const deptData = Object.entries(revenueByDept).map(([name, revenue]) => ({
    name,
    revenue,
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/financial" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            ← {t.financial.title}
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.financial.courseRevenue.title}</h1>
          <p className="text-gray-600 mt-2">{t.financial.courseRevenue.subtitle}</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.courseRevenue.totalRevenue}</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(totalRevenue)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.courseRevenue.averageRevenue}</p>
            <p className="text-3xl font-bold text-salesforce-blue mt-2">{formatCurrency(Number(averageRevenue))}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.courseRevenue.topCourse}</p>
            <p className="text-xl font-bold text-purple-600 mt-2">{topCourse.subjectCode}</p>
            <p className="text-sm text-gray-600">{formatCurrency(topCourse.totalRevenue)}</p>
          </div>
        </div>

        {/* Revenue by Department Chart */}
        <div className="sf-card p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t.financial.courseRevenue.revenueByDepartment}</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={deptData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
              <Bar dataKey="revenue" fill="#0176D3" name={t.financial.courseRevenue.revenue} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Course Revenue Table */}
        <div className="sf-card overflow-hidden">
          <table className="sf-table">
            <thead>
              <tr>
                <th>{t.financial.courseRevenue.subjectCode}</th>
                <th>{t.financial.courseRevenue.subjectName}</th>
                <th>{t.financial.courseRevenue.department}</th>
                <th>{t.financial.courseRevenue.enrolledStudents}</th>
                <th>{t.financial.courseRevenue.tuitionPerStudent}</th>
                <th>{t.financial.courseRevenue.revenue}</th>
                <th>{t.financial.courseRevenue.professor}</th>
              </tr>
            </thead>
            <tbody>
              {courseRevenue.map((course) => (
                <tr key={course.subjectCode}>
                  <td className="font-semibold text-salesforce-blue">{course.subjectCode}</td>
                  <td>{course.subjectName}</td>
                  <td>{course.department}</td>
                  <td className="text-center">{course.enrolledStudents}</td>
                  <td>{formatCurrency(course.tuitionPerStudent)}</td>
                  <td className="font-bold text-green-600">{formatCurrency(course.totalRevenue)}</td>
                  <td>{course.professor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
