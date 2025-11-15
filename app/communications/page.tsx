'use client';

import Navigation from '@/components/Navigation';
import { parentMessages, messageTemplates } from '@/lib/mockData';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CommunicationsPage() {
  const { t } = useLanguage();
  const [filterStatus, setFilterStatus] = useState<'All' | 'Unread' | 'Read' | 'Replied'>('All');
  const [filterPriority, setFilterPriority] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<typeof parentMessages[0] | null>(null);
  const [replyText, setReplyText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const filteredMessages = parentMessages.filter(msg => {
    const matchesSearch = msg.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || msg.status === filterStatus;
    const matchesPriority = filterPriority === 'All' || msg.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    if (templateId) {
      const template = messageTemplates.find(t => t.id === templateId);
      if (template) {
        setReplyText(template.content);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.communications.title}</h1>
          <p className="text-gray-600 mt-2">{t.communications.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <div className="sf-card">
              {/* Filters */}
              <div className="p-4 border-b border-salesforce-border space-y-3">
                <input
                  type="text"
                  placeholder={t.communications.searchMessages}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="sf-input text-sm"
                />

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                  className="sf-input text-sm"
                >
                  <option value="All">{t.communications.allStatus}</option>
                  <option value="Unread">{t.communications.unread}</option>
                  <option value="Read">{t.communications.read}</option>
                  <option value="Replied">{t.communications.replied}</option>
                </select>

                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value as typeof filterPriority)}
                  className="sf-input text-sm"
                >
                  <option value="All">{t.communications.allPriorities}</option>
                  <option value="High">{t.communications.highPriority}</option>
                  <option value="Medium">{t.communications.mediumPriority}</option>
                  <option value="Low">{t.communications.lowPriority}</option>
                </select>
              </div>

              {/* Messages */}
              <div className="divide-y divide-salesforce-border max-h-[600px] overflow-y-auto">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`p-4 cursor-pointer hover:bg-salesforce-cloud transition-colors ${
                      selectedMessage?.id === message.id ? 'bg-salesforce-cloud' : ''
                    } ${message.status === 'Unread' ? 'border-l-4 border-l-salesforce-blue' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{message.parentName}</h4>
                        <p className="text-xs text-gray-500">{t.communications.re}: {message.studentName}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        message.priority === 'High'
                          ? 'bg-red-100 text-red-800'
                          : message.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {message.priority === 'High' ? t.communications.high : message.priority === 'Medium' ? t.communications.medium : t.communications.low}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-1">{message.subject}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-gray-500">{message.date}</p>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        message.status === 'Unread'
                          ? 'bg-yellow-100 text-yellow-800'
                          : message.status === 'Replied'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {message.status === 'Unread' ? t.communications.unread : message.status === 'Replied' ? t.communications.replied : t.communications.read}
                      </span>
                    </div>
                  </div>
                ))}

                {filteredMessages.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    {t.communications.noMessages}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="sf-card p-6">
                <div className="border-b border-salesforce-border pb-4 mb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {t.communications.from}: <span className="font-semibold">{selectedMessage.parentName}</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        {t.communications.student}: <span className="font-semibold">{selectedMessage.studentName}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedMessage.priority === 'High'
                          ? 'bg-red-100 text-red-800'
                          : selectedMessage.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {selectedMessage.priority === 'High' ? t.communications.high : selectedMessage.priority === 'Medium' ? t.communications.medium : t.communications.low} {t.communications.priority}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedMessage.status === 'Unread'
                          ? 'bg-yellow-100 text-yellow-800'
                          : selectedMessage.status === 'Replied'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {selectedMessage.status === 'Unread' ? t.communications.unread : selectedMessage.status === 'Replied' ? t.communications.replied : t.communications.read}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{selectedMessage.date}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">{t.communications.message}:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-900">{selectedMessage.message}</p>
                  </div>

                  {/* Read Receipt */}
                  {selectedMessage.readDate && selectedMessage.readBy && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{t.communications.readReceipt}:</span>
                      <span>{t.communications.readBy} {selectedMessage.readBy} {t.communications.readOn} {selectedMessage.readDate}</span>
                    </div>
                  )}
                </div>

                {selectedMessage.status === 'Replied' && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">{t.communications.yourReply}:</h3>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-salesforce-blue">
                      <p className="text-gray-900">
                        Thank you for your message. I have reviewed your concern and will address it accordingly.
                        Please feel free to reach out if you have any additional questions.
                      </p>
                      <p className="text-xs text-gray-500 mt-2">{t.communications.repliedOn} {selectedMessage.date}</p>
                    </div>
                  </div>
                )}

                <div className="border-t border-salesforce-border pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">{t.communications.replyToMessage}:</h3>

                  {/* Template Selector */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.templates.useTemplate}
                    </label>
                    <select
                      value={selectedTemplate}
                      onChange={(e) => handleTemplateSelect(e.target.value)}
                      className="sf-input text-sm"
                    >
                      <option value="">{t.templates.selectTemplate}</option>
                      <optgroup label={t.templates.categories.general}>
                        {messageTemplates.filter(t => t.category === 'general').map(template => (
                          <option key={template.id} value={template.id}>
                            {template.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={t.templates.categories.homework}>
                        {messageTemplates.filter(t => t.category === 'homework').map(template => (
                          <option key={template.id} value={template.id}>
                            {template.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={t.templates.categories.behavior}>
                        {messageTemplates.filter(t => t.category === 'behavior').map(template => (
                          <option key={template.id} value={template.id}>
                            {template.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={t.templates.categories.absence}>
                        {messageTemplates.filter(t => t.category === 'absence').map(template => (
                          <option key={template.id} value={template.id}>
                            {template.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={t.templates.categories.achievement}>
                        {messageTemplates.filter(t => t.category === 'achievement').map(template => (
                          <option key={template.id} value={template.id}>
                            {template.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <textarea
                    className="sf-input mb-3"
                    rows={6}
                    placeholder={t.communications.replyPlaceholder}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  ></textarea>
                  <div className="flex gap-3">
                    <button className="sf-button-primary">
                      {t.communications.sendReply}
                    </button>
                    {selectedMessage.status === 'Unread' && (
                      <button className="sf-button-secondary">
                        {t.communications.markAsRead}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="sf-card p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600">{t.communications.selectMessage}</h3>
                <p className="text-gray-500 mt-2">{t.communications.selectMessageDesc}</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">{t.communications.totalMessages}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{parentMessages.length}</p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">{t.communications.unread}</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">
              {parentMessages.filter(m => m.status === 'Unread').length}
            </p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">{t.communications.replied}</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {parentMessages.filter(m => m.status === 'Replied').length}
            </p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">{t.communications.highPriority}</p>
            <p className="text-2xl font-bold text-red-600 mt-1">
              {parentMessages.filter(m => m.priority === 'High').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
