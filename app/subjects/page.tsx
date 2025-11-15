'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { subjects } from '@/lib/mockData';
import { useState } from 'react';

export default function SubjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.professorName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Subjects</h1>
            <p className="text-gray-600 mt-2">View and manage course subjects</p>
          </div>
        </div>

        {/* Search */}
        <div className="sf-card p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Subjects
          </label>
          <input
            type="text"
            placeholder="Search by subject name, code, or professor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sf-input"
          />
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <Link key={subject.id} href={`/subjects/${subject.id}`}>
              <div className="sf-card p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{subject.name}</h3>
                    <p className="text-sm text-salesforce-blue font-semibold mt-1">{subject.code}</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                    {subject.credits} Credits
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600 border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span>Professor:</span>
                    <span className="font-medium text-gray-900">{subject.professorName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Students:</span>
                    <span className="font-medium text-gray-900">{subject.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Semester:</span>
                    <span className="font-medium text-gray-900">{subject.semester}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <button className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="sf-card p-12 text-center">
            <p className="text-gray-500">No subjects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
