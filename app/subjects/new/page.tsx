'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { professors } from '@/lib/mockData';

export default function NewSubjectPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    professorId: '',
    credits: 3,
    semester: 'Spring 2024',
    students: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would normally send data to your backend
    console.log('Creating new subject:', formData);
    alert(`Subject "${formData.name}" created successfully!\n\nNote: This is a demo. In production, this would save to a database.`);

    // Redirect to subjects list
    router.push('/subjects');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'credits' || name === 'students' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/subjects" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; Back to Subjects
          </Link>
        </div>

        <div className="sf-card p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Subject</h1>
          <p className="text-gray-600 mb-8">Create a new subject for the curriculum</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Subject Code */}
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject Code *
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  required
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="e.g., CS101"
                  className="sf-input"
                />
              </div>

              {/* Credits */}
              <div>
                <label htmlFor="credits" className="block text-sm font-medium text-gray-700 mb-2">
                  Credits *
                </label>
                <input
                  type="number"
                  id="credits"
                  name="credits"
                  required
                  min="1"
                  max="10"
                  value={formData.credits}
                  onChange={handleChange}
                  className="sf-input"
                />
              </div>
            </div>

            {/* Subject Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Subject Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Introduction to Computer Science"
                className="sf-input"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Professor */}
              <div>
                <label htmlFor="professorId" className="block text-sm font-medium text-gray-700 mb-2">
                  Professor *
                </label>
                <select
                  id="professorId"
                  name="professorId"
                  required
                  value={formData.professorId}
                  onChange={handleChange}
                  className="sf-input"
                >
                  <option value="">Select a professor</option>
                  {professors
                    .filter(p => p.status === 'Active')
                    .map(prof => (
                      <option key={prof.id} value={prof.id}>
                        {prof.firstName} {prof.lastName} - {prof.department}
                      </option>
                    ))}
                </select>
              </div>

              {/* Semester */}
              <div>
                <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                  Semester *
                </label>
                <select
                  id="semester"
                  name="semester"
                  required
                  value={formData.semester}
                  onChange={handleChange}
                  className="sf-input"
                >
                  <option value="Spring 2024">Spring 2024</option>
                  <option value="Fall 2024">Fall 2024</option>
                  <option value="Spring 2025">Spring 2025</option>
                  <option value="Fall 2025">Fall 2025</option>
                </select>
              </div>
            </div>

            {/* Number of Students */}
            <div>
              <label htmlFor="students" className="block text-sm font-medium text-gray-700 mb-2">
                Expected Number of Students
              </label>
              <input
                type="number"
                id="students"
                name="students"
                min="0"
                value={formData.students}
                onChange={handleChange}
                placeholder="0"
                className="sf-input"
              />
              <p className="mt-1 text-sm text-gray-500">Leave as 0 if unknown</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="sf-button-primary"
              >
                Create Subject
              </button>
              <Link href="/subjects">
                <button
                  type="button"
                  className="sf-button-secondary"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
