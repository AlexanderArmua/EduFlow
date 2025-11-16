'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { studentCostAnalysis } from '@/lib/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function CostAnalysisPage() {
  const { t } = useLanguage();

  const currentYear = studentCostAnalysis[0];
  const previousYear = studentCostAnalysis[1];

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  const COLORS = ['#0176D3', '#82ca9d', '#ffc658', '#ff8042', '#8884d8'];

  const comparisonData = [
    {
      year: previousYear.year,
      costPerStudent: previousYear.costPerStudent,
      totalCosts: previousYear.totalCosts,
      totalStudents: previousYear.totalStudents,
    },
    {
      year: currentYear.year,
      costPerStudent: currentYear.costPerStudent,
      totalCosts: currentYear.totalCosts,
      totalStudents: currentYear.totalStudents,
    },
  ];

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
          <h1 className="text-3xl font-bold text-gray-900">{t.financial.costPerStudent.title}</h1>
          <p className="text-gray-600 mt-2">{t.financial.costPerStudent.subtitle}</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.costPerStudent.costPerStudent} ({currentYear.year})</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">{formatCurrency(currentYear.costPerStudent)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.costPerStudent.totalCosts}</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{formatCurrency(currentYear.totalCosts)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.costPerStudent.totalStudents}</p>
            <p className="text-3xl font-bold text-salesforce-blue mt-2">{currentYear.totalStudents}</p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.financial.costPerStudent.costBreakdown} ({currentYear.year})</h2>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={currentYear.breakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.category}: ${entry.percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {currentYear.breakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.financial.costPerStudent.comparison}</h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
                <Bar dataKey="costPerStudent" fill="#ff8042" name={t.financial.costPerStudent.costPerStudent} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="sf-card overflow-hidden">
          <h2 className="text-xl font-bold text-gray-900 p-6 pb-0">{t.financial.costPerStudent.costBreakdownDetailed}</h2>
          <table className="sf-table">
            <thead>
              <tr>
                <th>{t.financial.costPerStudent.category}</th>
                <th>{t.documents.description}</th>
                <th>{t.financial.costPerStudent.percentage}</th>
              </tr>
            </thead>
            <tbody>
              {currentYear.breakdown.map((item, idx) => (
                <tr key={idx}>
                  <td className="font-semibold">{item.category}</td>
                  <td className="font-bold text-orange-600">{formatCurrency(item.amount)}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{ width: `${item.percentage}%`, backgroundColor: COLORS[idx % COLORS.length] }}
                        />
                      </div>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
