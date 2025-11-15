'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProfessorPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    phone: '',
    status: 'Active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save - just redirect to professors list
    router.push('/professors');
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
          <Link href="/professors" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; Back to Professors
          </Link>
        </div>

        <div className="sf-card p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Professor</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="sf-input"
                placeholder="Dr. John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="sf-input"
                placeholder="john.doe@eduflow.edu"
                required
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <input
                id="department"
                name="department"
                type="text"
                value={formData.department}
                onChange={handleChange}
                className="sf-input"
                placeholder="Computer Science"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="sf-input"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="sf-input"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="sf-button-primary flex-1">
                Add Professor
              </button>
              <Link href="/professors" className="flex-1">
                <button type="button" className="w-full sf-button-secondary">
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
