'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { tuitionPayments, courseRevenue, studentCostAnalysis, departmentBudgets } from '@/lib/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function FinancialPage() {
  const { t } = useLanguage();

  // Calculate summary statistics
  const totalCollected = tuitionPayments.reduce((sum, p) => sum + p.amountPaid, 0);
  const totalOutstanding = tuitionPayments.reduce((sum, p) => sum + p.amountDue, 0);
  const totalOverdue = tuitionPayments
    .filter(p => p.status === 'overdue')
    .reduce((sum, p) => sum + p.amountDue, 0);
  const collectionRate = ((totalCollected / (totalCollected + totalOutstanding)) * 100).toFixed(1);

  const totalRevenue = courseRevenue.reduce((sum, c) => sum + c.totalRevenue, 0);
  const averageRevenue = (totalRevenue / courseRevenue.length).toFixed(0);
  const topCourse = courseRevenue.reduce((max, c) => c.totalRevenue > max.totalRevenue ? c : max);

  const totalBudget = departmentBudgets.reduce((sum, d) => sum + d.totalBudget, 0);
  const totalSpent = departmentBudgets.reduce((sum, d) => sum + d.spent, 0);
  const totalRemaining = departmentBudgets.reduce((sum, d) => sum + d.remaining, 0);
  const utilizationRate = ((totalSpent / totalBudget) * 100).toFixed(1);

  const currentYearData = studentCostAnalysis.find(y => y.year === '2024');

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  const COLORS = ['#0176D3', '#82ca9d', '#ffc658', '#ff8042', '#8884d8'];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.financial.title}</h1>
          <p className="text-gray-600 mt-2">{t.financial.subtitle}</p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/financial/tuition">
            <div className="sf-card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{t.financial.tuitionPayments.title}</h3>
                <span className="text-3xl">💳</span>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">{t.financial.tuitionPayments.totalCollected}</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(totalCollected)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.financial.tuitionPayments.collectionRate}</p>
                  <p className="text-lg font-semibold text-salesforce-blue">{collectionRate}%</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/financial/revenue">
            <div className="sf-card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{t.financial.courseRevenue.title}</h3>
                <span className="text-3xl">📈</span>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">{t.financial.courseRevenue.totalRevenue}</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(totalRevenue)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.financial.courseRevenue.averageRevenue}</p>
                  <p className="text-lg font-semibold text-salesforce-blue">{formatCurrency(Number(averageRevenue))}</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/financial/costs">
            <div className="sf-card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{t.financial.costPerStudent.title}</h3>
                <span className="text-3xl">📊</span>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">{t.financial.costPerStudent.costPerStudent}</p>
                  <p className="text-2xl font-bold text-orange-600">{formatCurrency(currentYearData?.costPerStudent || 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.financial.costPerStudent.totalStudents}</p>
                  <p className="text-lg font-semibold text-salesforce-blue">{currentYearData?.totalStudents || 0}</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/financial/budget">
            <div className="sf-card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{t.financial.budgetAllocation.title}</h3>
                <span className="text-3xl">💰</span>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">{t.financial.budgetAllocation.totalBudget}</p>
                  <p className="text-2xl font-bold text-purple-600">{formatCurrency(totalBudget)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.financial.budgetAllocation.utilizationRate}</p>
                  <p className="text-lg font-semibold text-salesforce-blue">{utilizationRate}%</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Overview Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue by Department */}
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.financial.courseRevenue.revenueByDepartment}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subjectCode" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
                <Bar dataKey="totalRevenue" fill="#0176D3" name={t.financial.courseRevenue.revenue} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Cost Breakdown */}
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t.financial.costPerStudent.costBreakdown}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={currentYearData?.breakdown || []}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.category}: ${entry.percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {currentYearData?.breakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="sf-card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t.financial.budgetAllocation.title}</h2>
          <div className="overflow-x-auto">
            <table className="sf-table">
              <thead>
                <tr>
                  <th>{t.financial.budgetAllocation.department}</th>
                  <th>{t.financial.budgetAllocation.budget}</th>
                  <th>{t.financial.budgetAllocation.spent}</th>
                  <th>{t.financial.budgetAllocation.remaining}</th>
                  <th>{t.financial.budgetAllocation.utilization}</th>
                </tr>
              </thead>
              <tbody>
                {departmentBudgets.map((dept) => {
                  const util = ((dept.spent / dept.totalBudget) * 100).toFixed(1);
                  return (
                    <tr key={dept.department}>
                      <td className="font-semibold">{dept.department}</td>
                      <td>{formatCurrency(dept.totalBudget)}</td>
                      <td className="text-red-600">{formatCurrency(dept.spent)}</td>
                      <td className="text-green-600">{formatCurrency(dept.remaining)}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${Number(util) > 90 ? 'bg-red-500' : Number(util) > 75 ? 'bg-yellow-500' : 'bg-green-500'}`}
                              style={{ width: `${util}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{util}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
