'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { leaderboard } from '@/lib/mockData';

export default function LeaderboardPage() {
  const { t } = useLanguage();

  const getRankBadge = (rank: number) => {
    if (rank === 1) return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300', icon: '🥇' };
    if (rank === 2) return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300', icon: '🥈' };
    if (rank === 3) return { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300', icon: '🥉' };
    return { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200', icon: '🏅' };
  };

  const getChangeIndicator = (change: number) => {
    if (change > 0) return { icon: '↑', color: 'text-green-600' };
    if (change < 0) return { icon: '↓', color: 'text-red-600' };
    return { icon: '−', color: 'text-gray-600' };
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.gamification.leaderboard.title}</h1>
          <p className="text-gray-600 mt-2">{t.gamification.leaderboard.subtitle}</p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leaderboard.slice(0, 3).map((entry) => {
            const badge = getRankBadge(entry.rank);
            const changeIndicator = getChangeIndicator(entry.change);

            return (
              <div
                key={entry.studentId}
                className={`sf-card p-6 border-2 ${badge.border} ${badge.bg} ${
                  entry.rank === 1 ? 'transform scale-105' : ''
                }`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{badge.icon}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{entry.studentName}</h2>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{entry.year}</p>

                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{entry.totalPoints}</p>
                      <p className="text-xs text-gray-600">{t.gamification.leaderboard.points}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-salesforce-blue">{entry.level}</p>
                      <p className="text-xs text-gray-600">{t.gamification.leaderboard.level}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{entry.badges}</p>
                      <p className="text-xs text-gray-600">{t.gamification.leaderboard.badges}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-sm">
                    <span className={`font-semibold ${changeIndicator.color}`}>
                      {changeIndicator.icon} {Math.abs(entry.change)}
                    </span>
                    <span className="text-gray-600">{t.gamification.leaderboard.change}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Leaderboard Table */}
        <div className="sf-card overflow-hidden">
          <table className="sf-table">
            <thead>
              <tr>
                <th>{t.gamification.leaderboard.rank}</th>
                <th>{t.gamification.leaderboard.student}</th>
                <th>{t.gamification.leaderboard.year}</th>
                <th>{t.gamification.leaderboard.points}</th>
                <th>{t.gamification.leaderboard.level}</th>
                <th>{t.gamification.leaderboard.badges}</th>
                <th>{t.gamification.leaderboard.change}</th>
                <th>{t.common.actions}</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => {
                const badge = getRankBadge(entry.rank);
                const changeIndicator = getChangeIndicator(entry.change);

                return (
                  <tr key={entry.studentId}>
                    <td>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{badge.icon}</span>
                        <span className="font-bold text-gray-900">#{entry.rank}</span>
                      </div>
                    </td>
                    <td className="font-semibold text-salesforce-blue">{entry.studentName}</td>
                    <td>{entry.year}</td>
                    <td className="font-bold text-purple-600">{entry.totalPoints}</td>
                    <td className="font-bold text-salesforce-blue">{entry.level}</td>
                    <td className="font-bold text-green-600">{entry.badges}</td>
                    <td>
                      <span className={`font-semibold ${changeIndicator.color}`}>
                        {changeIndicator.icon} {Math.abs(entry.change)}
                      </span>
                    </td>
                    <td>
                      <Link
                        href={`/students/${entry.studentId}`}
                        className="text-salesforce-blue hover:text-salesforce-darkblue font-medium"
                      >
                        {t.gamification.leaderboard.viewProfile}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
