'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { professors } from '@/lib/mockData';
import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function EditProfessorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { t } = useLanguage();
  const professor = professors.find(p => p.id === id);

  const [formData, setFormData] = useState({
    name: professor?.name || '',
    email: professor?.email || '',
    department: professor?.department || '',
    phone: professor?.phone || '',
    status: professor?.status || 'Active',
  });

  if (!professor) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sf-card p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.professors.professorNotFound}</h2>
            <Link href="/professors" className="text-salesforce-blue hover:underline">
              {t.professors.backToProfessors}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save - just redirect back to professor detail
    router.push(`/professors/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href={`/professors/${id}`} className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.professors.backToProfessors}
          </Link>
        </div>

        <div className="sf-card p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">{t.professors.editProfessor}</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t.professors.fullName} *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="sf-input"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t.professors.emailAddress} *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="sf-input"
                required
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                {t.professors.department} *
              </label>
              <input
                id="department"
                name="department"
                type="text"
                value={formData.department}
                onChange={handleChange}
                className="sf-input"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t.professors.phoneNumber} *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="sf-input"
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                {t.professors.status} *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="sf-input"
                required
              >
                <option value="Active">{t.professors.active}</option>
                <option value="Inactive">{t.professors.inactive}</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="sf-button-primary flex-1">
                {t.professors.saveChanges}
              </button>
              <Link href={`/professors/${id}`} className="flex-1">
                <button type="button" className="w-full sf-button-secondary">
                  {t.professors.cancel}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
