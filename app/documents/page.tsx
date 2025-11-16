'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { documents } from '@/lib/mockData';

export default function DocumentsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterDepartment, setFilterDepartment] = useState<string>('all');

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    const matchesDepartment = filterDepartment === 'all' || doc.department === filterDepartment;
    return matchesSearch && matchesCategory && matchesDepartment;
  });

  const departments = Array.from(new Set(documents.map(d => d.department)));

  const getCategoryColor = (category: string) => {
    const colors = {
      'policy': 'bg-blue-100 text-blue-800 border-blue-300',
      'form': 'bg-green-100 text-green-800 border-green-300',
      'report': 'bg-purple-100 text-purple-800 border-purple-300',
      'curriculum': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'guide': 'bg-indigo-100 text-indigo-800 border-indigo-300',
      'contract': 'bg-red-100 text-red-800 border-red-300',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const getAccessLevelColor = (level: string) => {
    const colors = {
      'public': 'bg-green-100 text-green-800',
      'staff': 'bg-yellow-100 text-yellow-800',
      'admin': 'bg-red-100 text-red-800',
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getFileIcon = (fileType: string) => {
    const icons = {
      'PDF': '📄',
      'DOCX': '📝',
      'XLSX': '📊',
      'PPTX': '📊',
    };
    return icons[fileType as keyof typeof icons] || '📎';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.documents.title}</h1>
          <p className="text-gray-600 mt-2">{t.documents.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="sf-card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.documents.search}
              </label>
              <input
                type="text"
                placeholder={t.documents.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="sf-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.documents.filterByCategory}
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="sf-input"
              >
                <option value="all">{t.documents.allCategories}</option>
                <option value="policy">{t.documents.categories.policy}</option>
                <option value="form">{t.documents.categories.form}</option>
                <option value="report">{t.documents.categories.report}</option>
                <option value="curriculum">{t.documents.categories.curriculum}</option>
                <option value="guide">{t.documents.categories.guide}</option>
                <option value="contract">{t.documents.categories.contract}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.documents.filterByDepartment}
              </label>
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="sf-input"
              >
                <option value="all">{t.documents.allDepartments}</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="sf-card overflow-hidden hover:shadow-lg transition-shadow">
              {/* Document Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{getFileIcon(doc.fileType)}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 line-clamp-2">{doc.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{doc.fileType} • {doc.fileSize}</p>
                    </div>
                  </div>
                </div>

                {/* Category & Access Level */}
                <div className="flex gap-2 mb-4">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(doc.category)}`}>
                    {t.documents.categories[doc.category as keyof typeof t.documents.categories]}
                  </span>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getAccessLevelColor(doc.accessLevel)}`}>
                    {t.documents.accessLevels[doc.accessLevel as keyof typeof t.documents.accessLevels]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{doc.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {doc.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Metadata */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">{t.documents.uploadedBy}:</span>
                    <span className="ml-2">{doc.uploadedBy}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">{t.documents.department}:</span>
                    <span className="ml-2">{doc.department}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">{t.documents.uploadDate}:</span>
                    <span className="ml-2">{doc.uploadDate}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">{t.documents.downloads}:</span>
                    <span className="ml-2">{doc.downloads}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  <button className="sf-button-primary text-sm flex-1">
                    📥 {t.documents.download}
                  </button>
                  <button className="sf-button-secondary text-sm flex-1">
                    👁️ {t.documents.view}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="sf-card py-12 text-center">
            <p className="text-gray-500">{t.documents.noDocuments}</p>
          </div>
        )}
      </div>
    </div>
  );
}
