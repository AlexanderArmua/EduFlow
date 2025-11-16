'use client';

import { useState } from 'react';
import { students, messageTemplates } from '@/lib/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

interface ComposeMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComposeMessageModal({ isOpen, onClose }: ComposeMessageModalProps) {
  const { t } = useLanguage();
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');

  if (!isOpen) return null;

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    if (templateId) {
      const template = messageTemplates.find(t => t.id === templateId);
      if (template) {
        setSubject(template.subject);
        setMessage(template.content);
      }
    }
  };

  const handleRecipientToggle = (studentId: string) => {
    setSelectedRecipients(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSelectAll = () => {
    const activeStudents = students.filter(s => s.status === 'Active');
    if (selectedRecipients.length === activeStudents.length) {
      setSelectedRecipients([]);
    } else {
      setSelectedRecipients(activeStudents.map(s => s.id));
    }
  };

  const handleSend = () => {
    if (selectedRecipients.length === 0) {
      alert(t.communications.composeModal.selectRecipientAlert);
      return;
    }
    if (!subject.trim()) {
      alert(t.communications.composeModal.enterSubjectAlert);
      return;
    }
    if (!message.trim()) {
      alert(t.communications.composeModal.enterMessageAlert);
      return;
    }

    const recipientNames = students
      .filter(s => selectedRecipients.includes(s.id))
      .map(s => s.parentName)
      .join(', ');

    console.log('Sending message:', {
      recipients: selectedRecipients,
      subject,
      message,
      priority
    });

    alert(`${t.communications.composeModal.successMessage} ${selectedRecipients.length} ${t.communications.composeModal.recipients.toLowerCase()}:\n${recipientNames}\n\n${t.communications.composeModal.successNote}`);

    // Reset form
    setSelectedRecipients([]);
    setSubject('');
    setMessage('');
    setSelectedTemplate('');
    setPriority('Medium');
    onClose();
  };

  const activeStudents = students.filter(s => s.status === 'Active');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

        {/* Modal */}
        <div
          className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold text-gray-900">{t.communications.composeModal.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Recipients Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  {t.communications.composeModal.recipients} ({selectedRecipients.length} {t.communications.composeModal.selected})
                </label>
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="text-sm text-salesforce-blue hover:text-salesforce-darkblue font-medium"
                >
                  {selectedRecipients.length === activeStudents.length ? t.communications.composeModal.deselectAll : t.communications.composeModal.selectAll}
                </button>
              </div>
              <div className="border rounded-lg max-h-64 overflow-y-auto">
                {activeStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b last:border-b-0"
                  >
                    <input
                      type="checkbox"
                      id={`student-${student.id}`}
                      checked={selectedRecipients.includes(student.id)}
                      onChange={() => handleRecipientToggle(student.id)}
                      className="w-4 h-4 text-salesforce-blue rounded focus:ring-salesforce-blue"
                    />
                    <label htmlFor={`student-${student.id}`} className="flex-1 cursor-pointer">
                      <div className="font-medium text-gray-900">{student.parentName}</div>
                      <div className="text-sm text-gray-600">
                        {t.communications.composeModal.parentOf} {student.name} • {student.parentEmail}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.communications.composeModal.priority}
              </label>
              <div className="flex gap-3">
                {(['Low', 'Medium', 'High'] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      priority === p
                        ? p === 'High'
                          ? 'bg-red-100 text-red-800 border-2 border-red-300'
                          : p === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-300'
                          : 'bg-green-100 text-green-800 border-2 border-green-300'
                        : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:border-gray-300'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Template Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.templates.useTemplate} (optional)
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => handleTemplateSelect(e.target.value)}
                className="sf-input"
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

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {t.communications.composeModal.subjectRequired}
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t.communications.composeModal.subject}
                className="sf-input"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t.communications.composeModal.messageRequired}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.communications.composeModal.messagePlaceholder}
                rows={8}
                className="sf-input"
                required
              ></textarea>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="sf-button-secondary"
            >
              {t.communications.composeModal.cancel}
            </button>
            <button
              type="button"
              onClick={handleSend}
              className="sf-button-primary"
            >
              {t.communications.composeModal.sendMessage}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
