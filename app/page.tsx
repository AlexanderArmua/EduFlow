'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - just redirect to dashboard
    if (email && password) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-salesforce-blue to-salesforce-darkblue flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="sf-card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-salesforce-darkblue mb-2">
              EduFlow CRM
            </h1>
            <p className="text-gray-600">Powered by Salesforce Education</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sf-input"
                placeholder="professor@eduflow.edu"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="sf-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-salesforce-blue focus:ring-salesforce-blue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-salesforce-blue hover:text-salesforce-darkblue font-medium">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full sf-button-primary py-3 text-base"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Demo credentials: Any email and password will work
            </p>
          </div>
        </div>

        <div className="mt-6 text-center text-white text-sm">
          <p>&copy; 2024 EduFlow. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
