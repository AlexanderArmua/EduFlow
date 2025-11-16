'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { departmentBudgets } from '@/lib/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BudgetAllocationPage() {
  const { t } = useLanguage();

  const totalBudget = departmentBudgets.reduce((sum, d) => sum + d.totalBudget, 0);
  const totalSpent = departmentBudgets.reduce((sum, d) => sum + d.spent, 0);
  const totalRemaining = departmentBudgets.reduce((sum, d) => sum + d.remaining, 0);
  const utilizationRate = ((totalSpent / totalBudget) * 100).toFixed(1);

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  const chartData = departmentBudgets.map(dept => ({
    name: dept.department,
    budget: dept.totalBudget,
    spent: dept.spent,
    remaining: dept.remaining,
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
          <h1 className="text-3xl font-bold text-gray-900">{t.financial.budgetAllocation.title}</h1>
          <p className="text-gray-600 mt-2">{t.financial.budgetAllocation.subtitle}</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.budgetAllocation.totalBudget}</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">{formatCurrency(totalBudget)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.budgetAllocation.totalSpent}</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{formatCurrency(totalSpent)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.budgetAllocation.totalRemaining}</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{formatCurrency(totalRemaining)}</p>
          </div>
          <div className="sf-card p-6">
            <p className="text-sm text-gray-600">{t.financial.budgetAllocation.utilizationRate}</p>
            <p className="text-3xl font-bold text-salesforce-blue mt-2">{utilizationRate}%</p>
          </div>
        </div>

        {/* Budget Overview Chart */}
        <div className="sf-card p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t.financial.budgetAllocation.budgetVsSpent}</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
              <Bar dataKey="budget" fill="#8884d8" name={t.financial.budgetAllocation.budget} />
              <Bar dataKey="spent" fill="#ff8042" name={t.financial.budgetAllocation.spent} />
              <Bar dataKey="remaining" fill="#82ca9d" name={t.financial.budgetAllocation.remaining} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Department Budget Details */}
        {departmentBudgets.map((dept) => {
          const util = ((dept.spent / dept.totalBudget) * 100).toFixed(1);
          return (
            <div key={dept.department} className="sf-card p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{dept.department}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {t.financial.budgetAllocation.headOfDepartment}: {dept.headOfDepartment}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">{t.financial.budgetAllocation.utilization}</p>
                  <p className={`text-2xl font-bold ${Number(util) > 90 ? 'text-red-600' : Number(util) > 75 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {util}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-600">{t.financial.budgetAllocation.budget}</p>
                  <p className="text-xl font-bold text-purple-600">{formatCurrency(dept.totalBudget)}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-600">{t.financial.budgetAllocation.spent}</p>
                  <p className="text-xl font-bold text-red-600">{formatCurrency(dept.spent)}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600">{t.financial.budgetAllocation.remaining}</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(dept.remaining)}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t.financial.budgetAllocation.budgetCategories}</h3>
                <div className="overflow-x-auto">
                  <table className="sf-table">
                    <thead>
                      <tr>
                        <th>{t.financial.costPerStudent.category}</th>
                        <th>{t.financial.budgetAllocation.budgeted}</th>
                        <th>{t.financial.budgetAllocation.spent}</th>
                        <th>{t.financial.budgetAllocation.utilization}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dept.categories.map((cat) => {
                        const catUtil = ((cat.spent / cat.budgeted) * 100).toFixed(1);
                        return (
                          <tr key={cat.name}>
                            <td className="font-semibold">{cat.name}</td>
                            <td>{formatCurrency(cat.budgeted)}</td>
                            <td className="text-red-600">{formatCurrency(cat.spent)}</td>
                            <td>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full ${Number(catUtil) > 90 ? 'bg-red-500' : Number(catUtil) > 75 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                    style={{ width: `${catUtil}%` }}
                                  />
                                </div>
                                <span className="text-sm font-medium">{catUtil}%</span>
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
          );
        })}
      </div>
    </div>
  );
}
