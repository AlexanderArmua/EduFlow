'use client';

import Navigation from '@/components/Navigation';
import { parentMessages } from '@/lib/mockData';
import { useState } from 'react';

export default function CommunicationsPage() {
  const [filterStatus, setFilterStatus] = useState<'All' | 'Unread' | 'Read' | 'Replied'>('All');
  const [filterPriority, setFilterPriority] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<typeof parentMessages[0] | null>(null);

  const filteredMessages = parentMessages.filter(msg => {
    const matchesSearch = msg.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || msg.status === filterStatus;
    const matchesPriority = filterPriority === 'All' || msg.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Parent Communications</h1>
          <p className="text-gray-600 mt-2">Manage messages from parents and guardians</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1">
            <div className="sf-card">
              {/* Filters */}
              <div className="p-4 border-b border-salesforce-border space-y-3">
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="sf-input text-sm"
                />

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                  className="sf-input text-sm"
                >
                  <option value="All">All Status</option>
                  <option value="Unread">Unread</option>
                  <option value="Read">Read</option>
                  <option value="Replied">Replied</option>
                </select>

                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value as typeof filterPriority)}
                  className="sf-input text-sm"
                >
                  <option value="All">All Priorities</option>
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
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
                        <p className="text-xs text-gray-500">re: {message.studentName}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        message.priority === 'High'
                          ? 'bg-red-100 text-red-800'
                          : message.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {message.priority}
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
                        {message.status}
                      </span>
                    </div>
                  </div>
                ))}

                {filteredMessages.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    No messages found
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
                        From: <span className="font-semibold">{selectedMessage.parentName}</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Student: <span className="font-semibold">{selectedMessage.studentName}</span>
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
                        {selectedMessage.priority} Priority
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedMessage.status === 'Unread'
                          ? 'bg-yellow-100 text-yellow-800'
                          : selectedMessage.status === 'Replied'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {selectedMessage.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{selectedMessage.date}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Message:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-900">{selectedMessage.message}</p>
                  </div>
                </div>

                {selectedMessage.status === 'Replied' && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Your Reply:</h3>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-salesforce-blue">
                      <p className="text-gray-900">
                        Thank you for your message. I have reviewed your concern and will address it accordingly.
                        Please feel free to reach out if you have any additional questions.
                      </p>
                      <p className="text-xs text-gray-500 mt-2">Replied on {selectedMessage.date}</p>
                    </div>
                  </div>
                )}

                <div className="border-t border-salesforce-border pt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Reply to this message:</h3>
                  <textarea
                    className="sf-input mb-3"
                    rows={4}
                    placeholder="Type your reply here..."
                  ></textarea>
                  <div className="flex gap-3">
                    <button className="sf-button-primary">
                      Send Reply
                    </button>
                    {selectedMessage.status === 'Unread' && (
                      <button className="sf-button-secondary">
                        Mark as Read
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
                <h3 className="text-xl font-semibold text-gray-600">Select a message to view</h3>
                <p className="text-gray-500 mt-2">Choose a message from the list to read and reply</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">Total Messages</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{parentMessages.length}</p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">Unread</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">
              {parentMessages.filter(m => m.status === 'Unread').length}
            </p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">Replied</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {parentMessages.filter(m => m.status === 'Replied').length}
            </p>
          </div>
          <div className="sf-card p-4">
            <p className="text-sm text-gray-600">High Priority</p>
            <p className="text-2xl font-bold text-red-600 mt-1">
              {parentMessages.filter(m => m.priority === 'High').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
