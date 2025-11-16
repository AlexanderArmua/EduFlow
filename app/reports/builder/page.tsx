'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSearchParams } from 'next/navigation';
import { reportTemplates } from '@/lib/mockData';

export default function ReportBuilderPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const templateId = searchParams.get('template');

  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(templateId || '');
  const [reportTitle, setReportTitle] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('on-demand');
  const [format, setFormat] = useState('pdf');
  const [recipients, setRecipients] = useState<string[]>([]);
  const [newRecipient, setNewRecipient] = useState('');

  const currentTemplate = reportTemplates.find(t => t.id === selectedTemplate);

  useEffect(() => {
    if (templateId && currentTemplate) {
      setReportTitle(currentTemplate.name);
      setReportDescription(currentTemplate.description);
      setSelectedFields(currentTemplate.dataFields);
      setSelectedFilters(currentTemplate.filters);
    }
  }, [templateId, currentTemplate]);

  const toggleField = (field: string) => {
    setSelectedFields(prev =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const addRecipient = () => {
    if (newRecipient && !recipients.includes(newRecipient)) {
      setRecipients([...recipients, newRecipient]);
      setNewRecipient('');
    }
  };

  const removeRecipient = (email: string) => {
    setRecipients(recipients.filter(r => r !== email));
  };

  const handleSave = () => {
    alert('Report saved successfully! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.reporting.builder.title}</h1>
              <p className="text-gray-600 mt-2">{t.reporting.builder.subtitle}</p>
            </div>
            <Link href="/reports">
              <button className="sf-button-secondary">{t.reporting.builder.cancel}</button>
            </Link>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="sf-card p-6 mb-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s
                        ? 'bg-salesforce-blue text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {s}
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">{t.reporting.builder[`step${s}` as keyof typeof t.reporting.builder]}</p>
                    <p className="text-sm font-medium text-gray-900">
                      {s === 1 && t.reporting.builder.selectTemplate}
                      {s === 2 && t.reporting.builder.configureData}
                      {s === 3 && t.reporting.builder.setSchedule}
                      {s === 4 && t.reporting.builder.reviewAndSave}
                    </p>
                  </div>
                </div>
                {s < 4 && (
                  <div className={`h-1 flex-1 mx-4 ${step > s ? 'bg-salesforce-blue' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Select Template */}
        {step === 1 && (
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.reporting.builder.selectTemplate}</h2>
            <p className="text-gray-600 mb-6">Choose a template to start with, or create from scratch</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {reportTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => {
                    setSelectedTemplate(template.id);
                    setReportTitle(template.name);
                    setReportDescription(template.description);
                    setSelectedFields(template.dataFields);
                    setSelectedFilters(template.filters);
                  }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedTemplate === template.id
                      ? 'border-salesforce-blue bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{template.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedTemplate}
                className="sf-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Configure Data */}
        {step === 2 && (
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.reporting.builder.configureData}</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reporting.builder.reportTitle} *
              </label>
              <input
                type="text"
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
                className="sf-input"
                placeholder="Enter report title"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reporting.builder.reportDescription}
              </label>
              <textarea
                value={reportDescription}
                onChange={(e) => setReportDescription(e.target.value)}
                className="sf-input h-24"
                placeholder="Enter report description"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reporting.builder.selectFields}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {currentTemplate?.dataFields.map((field) => (
                  <label key={field} className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFields.includes(field)}
                      onChange={() => toggleField(field)}
                      className="rounded text-salesforce-blue"
                    />
                    <span className="text-sm">{field}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reporting.builder.selectFilters}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {currentTemplate?.filters.map((filter) => (
                  <label key={filter} className="flex items-center gap-2 p-3 border rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(filter)}
                      onChange={() => toggleFilter(filter)}
                      className="rounded text-salesforce-blue"
                    />
                    <span className="text-sm">{filter}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="sf-button-secondary">
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!reportTitle || selectedFields.length === 0}
                className="sf-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Set Schedule */}
        {step === 3 && (
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.reporting.builder.setSchedule}</h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reporting.builder.frequencyLabel} *
              </label>
              <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="sf-input">
                <option value="daily">{t.reporting.frequencies.daily}</option>
                <option value="weekly">{t.reporting.frequencies.weekly}</option>
                <option value="monthly">{t.reporting.frequencies.monthly}</option>
                <option value="on-demand">{t.reporting.frequencies['on-demand']}</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reporting.builder.formatLabel} *
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['pdf', 'excel', 'csv'].map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFormat(fmt)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      format === fmt
                        ? 'border-salesforce-blue bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">
                      {fmt === 'pdf' && '📄'}
                      {fmt === 'excel' && '📊'}
                      {fmt === 'csv' && '📋'}
                    </div>
                    <div className="font-medium">{t.reporting.formats[fmt as keyof typeof t.reporting.formats]}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.reporting.builder.recipientsLabel}
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="email"
                  value={newRecipient}
                  onChange={(e) => setNewRecipient(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addRecipient()}
                  className="sf-input flex-1"
                  placeholder="email@example.com"
                />
                <button onClick={addRecipient} className="sf-button-secondary">
                  {t.reporting.builder.addRecipient}
                </button>
              </div>
              {recipients.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {recipients.map((email) => (
                    <div key={email} className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                      <span className="text-sm">{email}</span>
                      <button
                        onClick={() => removeRecipient(email)}
                        className="text-blue-700 hover:text-blue-900"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="sf-button-secondary">
                ← Back
              </button>
              <button onClick={() => setStep(4)} className="sf-button-primary">
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review & Save */}
        {step === 4 && (
          <div className="sf-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.reporting.builder.reviewAndSave}</h2>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">{t.reporting.reportName}</h3>
                <p className="text-gray-900">{reportTitle}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">{t.reporting.description}</h3>
                <p className="text-gray-900">{reportDescription}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">{t.reporting.dataFields}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFields.map((field) => (
                    <span key={field} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">{t.reporting.filters}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedFilters.map((filter) => (
                    <span key={filter} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-sm">
                      {filter}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">{t.reporting.frequency}</h3>
                  <p className="text-gray-900">{t.reporting.frequencies[frequency as keyof typeof t.reporting.frequencies]}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">{t.reporting.format}</h3>
                  <p className="text-gray-900">{t.reporting.formats[format as keyof typeof t.reporting.formats]}</p>
                </div>
              </div>

              {recipients.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">{t.reporting.recipients}</h3>
                  <div className="flex flex-wrap gap-2">
                    {recipients.map((email) => (
                      <span key={email} className="px-2 py-1 bg-green-50 text-green-700 rounded text-sm">
                        {email}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(3)} className="sf-button-secondary">
                ← Back
              </button>
              <div className="flex gap-2">
                <button className="sf-button-secondary">{t.reporting.builder.preview}</button>
                <Link href="/reports">
                  <button onClick={handleSave} className="sf-button-primary">
                    {t.reporting.builder.saveReport}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
