'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { savedReports, reportTemplates, Report } from '@/lib/mockData';
import ReportPreviewModal from '@/components/ReportPreviewModal';

export default function ReportsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'reports' | 'templates'>('reports');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [previewReport, setPreviewReport] = useState<Report | null>(null);

  const filteredReports = selectedType === 'all'
    ? savedReports
    : savedReports.filter(r => r.type === selectedType);

  const filteredTemplates = selectedCategory === 'all'
    ? reportTemplates
    : reportTemplates.filter(t => t.category === selectedCategory);

  const getTypeColor = (type: string) => {
    const colors = {
      'academic': 'bg-blue-100 text-blue-800 border-blue-300',
      'financial': 'bg-green-100 text-green-800 border-green-300',
      'attendance': 'bg-purple-100 text-purple-800 border-purple-300',
      'behavioral': 'bg-orange-100 text-orange-800 border-orange-300',
      'custom': 'bg-pink-100 text-pink-800 border-pink-300',
      'administrative': 'bg-gray-100 text-gray-800 border-gray-300',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'active': 'bg-green-100 text-green-800',
      'paused': 'bg-yellow-100 text-yellow-800',
      'draft': 'bg-gray-100 text-gray-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getFrequencyIcon = (frequency: string) => {
    const icons = {
      'daily': '📅',
      'weekly': '📆',
      'monthly': '🗓️',
      'on-demand': '🔔',
    };
    return icons[frequency as keyof typeof icons] || '📊';
  };

  const getFormatIcon = (format: string) => {
    const icons = {
      'pdf': '📄',
      'excel': '📊',
      'csv': '📋',
    };
    return icons[format as keyof typeof icons] || '📄';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.reporting.title}</h1>
          <p className="text-gray-600 mt-2">{t.reporting.subtitle}</p>
        </div>

        {/* Actions */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'reports'
                  ? 'bg-salesforce-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.reporting.myReports}
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'templates'
                  ? 'bg-salesforce-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.reporting.templates}
            </button>
          </div>
          <Link href="/reports/builder">
            <button className="sf-button-primary">
              + {t.reporting.createReport}
            </button>
          </Link>
        </div>

        {/* My Reports Tab */}
        {activeTab === 'reports' && (
          <>
            {/* Filters */}
            <div className="sf-card p-4 mb-6">
              <div className="flex gap-4 items-center">
                <label className="text-sm font-medium text-gray-700">
                  {t.reporting.reportType}:
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="sf-input w-48"
                >
                  <option value="all">{t.reporting.allCategories}</option>
                  <option value="academic">{t.reporting.types.academic}</option>
                  <option value="financial">{t.reporting.types.financial}</option>
                  <option value="attendance">{t.reporting.types.attendance}</option>
                  <option value="behavioral">{t.reporting.types.behavioral}</option>
                  <option value="custom">{t.reporting.types.custom}</option>
                </select>
              </div>
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReports.map((report) => (
                <div key={report.id} className="sf-card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getFrequencyIcon(report.frequency)}</span>
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                        {t.reporting.statuses[report.status as keyof typeof t.reporting.statuses]}
                      </span>
                    </div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(report.type)}`}>
                      {t.reporting.types[report.type as keyof typeof t.reporting.types]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{report.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{report.description}</p>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.reporting.frequency}:</span>
                      <span className="font-medium">{t.reporting.frequencies[report.frequency as keyof typeof t.reporting.frequencies]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.reporting.format}:</span>
                      <span className="font-medium flex items-center gap-1">
                        {getFormatIcon(report.format)} {report.format.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.reporting.lastGenerated}:</span>
                      <span className="font-medium">{report.lastGenerated}</span>
                    </div>
                    {report.nextScheduled && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t.reporting.nextScheduled}:</span>
                        <span className="font-medium">{report.nextScheduled}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.reporting.createdBy}:</span>
                      <span className="font-medium text-xs">{report.createdBy}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setPreviewReport(report)}
                      className="flex-1 px-3 py-2 bg-salesforce-blue text-white rounded-md hover:bg-salesforce-darkblue text-sm font-medium transition-colors"
                    >
                      {t.reporting.generate}
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium transition-colors">
                      {t.reporting.edit}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredReports.length === 0 && (
              <div className="sf-card p-12 text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.reporting.noReports}</h3>
                <p className="text-gray-600 mb-6">{t.reporting.createFirstReport}</p>
                <Link href="/reports/builder">
                  <button className="sf-button-primary">
                    + {t.reporting.createReport}
                  </button>
                </Link>
              </div>
            )}
          </>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <>
            {/* Category Filter */}
            <div className="sf-card p-4 mb-6">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-salesforce-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.reporting.allCategories}
                </button>
                <button
                  onClick={() => setSelectedCategory('academic')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'academic'
                      ? 'bg-salesforce-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.reporting.types.academic}
                </button>
                <button
                  onClick={() => setSelectedCategory('financial')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'financial'
                      ? 'bg-salesforce-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.reporting.types.financial}
                </button>
                <button
                  onClick={() => setSelectedCategory('attendance')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'attendance'
                      ? 'bg-salesforce-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.reporting.types.attendance}
                </button>
                <button
                  onClick={() => setSelectedCategory('behavioral')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'behavioral'
                      ? 'bg-salesforce-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.reporting.types.behavioral}
                </button>
                <button
                  onClick={() => setSelectedCategory('administrative')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'administrative'
                      ? 'bg-salesforce-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t.reporting.types.administrative}
                </button>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="sf-card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{template.icon}</span>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(template.category)}`}>
                      {t.reporting.types[template.category as keyof typeof t.reporting.types]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{template.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{t.reporting.dataFields}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.dataFields.slice(0, 3).map((field, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {field}
                        </span>
                      ))}
                      {template.dataFields.length > 3 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
                          +{template.dataFields.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{t.reporting.filters}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {template.filters.slice(0, 3).map((filter, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                          {filter}
                        </span>
                      ))}
                      {template.filters.length > 3 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
                          +{template.filters.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link href={`/reports/builder?template=${template.id}`}>
                    <button className="w-full sf-button-primary">
                      {t.reporting.useTemplate}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Report Preview Modal */}
      {previewReport && (
        <ReportPreviewModal
          report={previewReport}
          onClose={() => setPreviewReport(null)}
        />
      )}
    </div>
  );
}
