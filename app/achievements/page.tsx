'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { studentAchievements, achievements } from '@/lib/mockData';

export default function AchievementsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStudent, setSelectedStudent] = useState(studentAchievements[0]);

  const filteredAchievements = selectedCategory === 'all'
    ? achievements
    : achievements.filter(a => a.category === selectedCategory);

  const getTierColor = (tier: string) => {
    const colors = {
      'bronze': 'border-amber-600 bg-amber-50',
      'silver': 'border-gray-400 bg-gray-50',
      'gold': 'border-yellow-500 bg-yellow-50',
      'platinum': 'border-purple-500 bg-purple-50',
    };
    return colors[tier as keyof typeof colors] || 'border-gray-300 bg-gray-50';
  };

  const getTierBadge = (tier: string) => {
    const colors = {
      'bronze': 'bg-amber-100 text-amber-800 border-amber-300',
      'silver': 'bg-gray-100 text-gray-800 border-gray-300',
      'gold': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'platinum': 'bg-purple-100 text-purple-800 border-purple-300',
    };
    return colors[tier as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  const isEarned = (achId: string) => {
    return selectedStudent.achievements.some(a => a.id === achId);
  };

  const getEarnedDate = (achId: string) => {
    const earned = selectedStudent.achievements.find(a => a.id === achId);
    return earned?.earnedDate;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.gamification.achievements.title}</h1>
          <p className="text-gray-600 mt-2">{t.gamification.achievements.subtitle}</p>
        </div>

        {/* Student Selector & Stats */}
        <div className="sf-card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.gamification.leaderboard.student}
              </label>
              <select
                value={selectedStudent.studentId}
                onChange={(e) => {
                  const student = studentAchievements.find(s => s.studentId === e.target.value);
                  if (student) setSelectedStudent(student);
                }}
                className="sf-input"
              >
                {studentAchievements.map((student) => (
                  <option key={student.studentId} value={student.studentId}>
                    {student.studentName}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">{t.gamification.achievements.level}</p>
                <p className="text-3xl font-bold text-salesforce-blue">{selectedStudent.level}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">{t.gamification.achievements.points}</p>
                <p className="text-3xl font-bold text-purple-600">{selectedStudent.totalPoints}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">{t.gamification.achievements.badges}</p>
                <p className="text-3xl font-bold text-green-600">{selectedStudent.achievements.length}</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{t.gamification.achievements.progressToNext}</span>
              <span className="text-sm font-medium text-gray-700">{selectedStudent.progressToNextLevel}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-salesforce-blue to-purple-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${selectedStudent.progressToNextLevel}%` }}
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="sf-card p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.gamification.achievements.categories.all}
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-salesforce-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.gamification.achievements.categories.all}
            </button>
            <button
              onClick={() => setSelectedCategory('academic')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'academic'
                  ? 'bg-salesforce-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.gamification.achievements.categories.academic}
            </button>
            <button
              onClick={() => setSelectedCategory('participation')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'participation'
                  ? 'bg-salesforce-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.gamification.achievements.categories.participation}
            </button>
            <button
              onClick={() => setSelectedCategory('improvement')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'improvement'
                  ? 'bg-salesforce-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.gamification.achievements.categories.improvement}
            </button>
            <button
              onClick={() => setSelectedCategory('special')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'special'
                  ? 'bg-salesforce-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {t.gamification.achievements.categories.special}
            </button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => {
            const earned = isEarned(achievement.id);
            const earnedDate = getEarnedDate(achievement.id);

            return (
              <div
                key={achievement.id}
                className={`sf-card p-6 border-2 ${getTierColor(achievement.tier)} ${
                  !earned && 'opacity-50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{achievement.icon}</span>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getTierBadge(achievement.tier)}`}>
                    {t.gamification.achievements.tiers[achievement.tier as keyof typeof t.gamification.achievements.tiers]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-purple-600">+{achievement.points}</span>
                    <span className="text-gray-600">{t.gamification.achievements.points}</span>
                  </div>
                  {earned ? (
                    <span className="text-green-600 font-medium">
                      {t.gamification.achievements.earnedOn} {earnedDate}
                    </span>
                  ) : (
                    <span className="text-gray-400 italic">{t.gamification.achievements.notEarned}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
