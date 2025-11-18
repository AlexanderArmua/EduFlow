'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { professors, subjects, professorRatings, professionalDevelopment } from '@/lib/mockData';
import { use } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';

export default function ProfessorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t } = useLanguage();
  const professor = professors.find(p => p.id === id);

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

  const professorSubjects = subjects.filter(s => s.professorId === id);
  const ratings = professorRatings.filter(r => r.professorId === id);

  // Calculate rating statistics
  const averageRating = ratings.length > 0
    ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
    : '0.0';

  // Rating distribution (1-5 stars)
  const ratingDistribution = [1, 2, 3, 4, 5].map(star => ({
    stars: star,
    count: ratings.filter(r => r.rating === star).length,
  }));

  // Rating trend over time (last 6 months)
  const ratingTrend = ratings
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reduce((acc: any[], rating, index) => {
      const month = new Date(rating.date).toLocaleDateString('en-US', { month: 'short' });
      const existingMonth = acc.find(item => item.month === month);

      if (existingMonth) {
        existingMonth.total += rating.rating;
        existingMonth.count += 1;
        existingMonth.average = existingMonth.total / existingMonth.count;
      } else {
        acc.push({
          month,
          average: rating.rating,
          total: rating.rating,
          count: 1,
        });
      }

      return acc;
    }, []);

  // Professional Development data
  const pdActivities = professionalDevelopment.filter(pd => pd.professorId === id);
  const completedActivities = pdActivities.filter(pd => pd.status === 'completed');
  const inProgressActivities = pdActivities.filter(pd => pd.status === 'in-progress');
  const plannedActivities = pdActivities.filter(pd => pd.status === 'planned');

  const totalPDHours = pdActivities.reduce((sum, pd) => sum + (pd.hours || 0), 0);

  // PD activities by type
  const pdByType = [
    { type: 'Certifications', count: pdActivities.filter(pd => pd.type === 'certification').length, color: '#10B981' },
    { type: 'Courses', count: pdActivities.filter(pd => pd.type === 'course').length, color: '#3B82F6' },
    { type: 'Conferences', count: pdActivities.filter(pd => pd.type === 'conference').length, color: '#F59E0B' },
    { type: 'Publications', count: pdActivities.filter(pd => pd.type === 'publication').length, color: '#8B5CF6' },
    { type: 'Workshops', count: pdActivities.filter(pd => pd.type === 'workshop').length, color: '#EC4899' },
  ].filter(item => item.count > 0);

  // PD activities over time
  const pdTimeline = pdActivities
    .filter(pd => pd.status === 'completed')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reduce((acc: any[], activity) => {
      const month = new Date(activity.date).toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      const existingMonth = acc.find(item => item.month === month);

      if (existingMonth) {
        existingMonth.count += 1;
      } else {
        acc.push({
          month,
          count: 1,
        });
      }

      return acc;
    }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/professors" className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
            &larr; {t.professors.backToProfessors}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Professor Info Card */}
          <div className="lg:col-span-1">
            <div className="sf-card p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-salesforce-blue rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {professor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{professor.name}</h2>
                <p className="text-gray-600 mt-1">{professor.department}</p>
                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold ${
                  professor.status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {professor.status}
                </span>
              </div>

              <div className="space-y-4 border-t pt-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.professors.email}</p>
                  <p className="text-sm text-gray-900 mt-1">{professor.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.professors.phone}</p>
                  <p className="text-sm text-gray-900 mt-1">{professor.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{t.professors.department}</p>
                  <p className="text-sm text-gray-900 mt-1">{professor.department}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link href={`/professors/${id}/edit`}>
                  <button className="w-full sf-button-primary">
                    {t.professors.editProfessor}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Professor Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subjects */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.professors.teachingSubjects}</h3>
              {professorSubjects.length > 0 ? (
                <div className="space-y-4">
                  {professorSubjects.map((subject) => (
                    <div key={subject.id} className="border-l-4 border-salesforce-blue pl-4 py-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{t.professors.code}: {subject.code}</p>
                          <div className="flex gap-4 mt-2 text-sm text-gray-600">
                            <span>{t.dashboard.credits}: {subject.credits}</span>
                            <span>{t.dashboard.students}: {subject.students}</span>
                            <span>{t.professors.semester}: {subject.semester}</span>
                          </div>
                        </div>
                        <Link href={`/subjects/${subject.id}`}>
                          <button className="text-salesforce-blue hover:text-salesforce-darkblue text-sm font-medium">
                            {t.professors.viewDetails}
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">{t.professors.noSubjects}</p>
              )}
            </div>

            {/* Statistics */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.professors.statistics}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">{t.professors.totalSubjects}</p>
                  <p className="text-3xl font-bold text-salesforce-blue mt-2">
                    {professorSubjects.length}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">{t.professors.totalStudents}</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {professorSubjects.reduce((sum, s) => sum + s.students, 0)}
                  </p>
                </div>
              </div>
            </div>

            {/* Teaching Load Visualization */}
            {professorSubjects.length > 0 && (
              <div className="sf-card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Teaching Load Analysis</h3>

                {/* Students per Subject Bar Chart */}
                <div className="mb-8">
                  <h4 className="text-md font-semibold text-gray-700 mb-4">Students per Subject</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={professorSubjects.map(s => ({
                      name: s.code,
                      students: s.students,
                      credits: s.credits
                    }))}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="students" fill="#0176D3" name="Students" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Credits Distribution */}
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-4">Credits Distribution</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={professorSubjects.map(s => ({
                            name: s.code,
                            value: s.credits
                          }))}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={(entry) => `${entry.name}: ${entry.value}`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {professorSubjects.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={['#0176D3', '#032D60', '#54698D', '#006DCC', '#032E61', '#1589EE'][index % 6]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>

                    {/* Workload Metrics */}
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Total Credits</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {professorSubjects.reduce((sum, s) => sum + s.credits, 0)}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Average Class Size</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {Math.round(professorSubjects.reduce((sum, s) => sum + s.students, 0) / professorSubjects.length)}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-600 mb-1">Largest Class</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {Math.max(...professorSubjects.map(s => s.students))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Student Satisfaction Ratings */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.professors.studentSatisfaction}</h3>

              {ratings.length > 0 ? (
                <>
                  {/* Overall Rating Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-2 border-yellow-200">
                      <p className="text-sm text-gray-600 mb-2">{t.professors.averageRating}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-yellow-600">{averageRating}</span>
                        <span className="text-2xl text-yellow-500">★</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">out of 5.0</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">{t.professors.totalRatings}</p>
                      <p className="text-4xl font-bold text-salesforce-blue">{ratings.length}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Positive Feedback</p>
                      <p className="text-4xl font-bold text-green-600">
                        {Math.round((ratings.filter(r => r.rating >= 4).length / ratings.length) * 100)}%
                      </p>
                    </div>
                  </div>

                  {/* Rating Distribution */}
                  <div className="mb-6">
                    <h4 className="text-md font-semibold text-gray-700 mb-4">{t.professors.ratingDistribution}</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={ratingDistribution}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="stars"
                          tickFormatter={(value) => `${value} ★`}
                        />
                        <YAxis />
                        <Tooltip
                          formatter={(value: any) => [`${value} ratings`, 'Count']}
                          labelFormatter={(label) => `${label} Stars`}
                        />
                        <Legend />
                        <Bar dataKey="count" fill="#FBBF24" name="Number of Ratings" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Rating Trend */}
                  {ratingTrend.length > 1 && (
                    <div className="mb-6">
                      <h4 className="text-md font-semibold text-gray-700 mb-4">{t.professors.ratingTrend}</h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={ratingTrend}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[0, 5]} />
                          <Tooltip
                            formatter={(value: any) => [value.toFixed(1), 'Average Rating']}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="average"
                            stroke="#FBBF24"
                            strokeWidth={3}
                            dot={{ fill: '#FBBF24', r: 5 }}
                            name="Average Rating"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  {/* Recent Feedback */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-700 mb-4">{t.professors.recentFeedback}</h4>
                    <div className="space-y-4">
                      {ratings.slice(-5).reverse().map((rating) => (
                        <div key={rating.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-semibold text-gray-900">{rating.studentName}</p>
                              <p className="text-xs text-gray-500">{rating.subjectCode}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500 font-bold">{rating.rating}</span>
                              <span className="text-yellow-500">★</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 italic">&ldquo;{rating.feedback}&rdquo;</p>
                          <p className="text-xs text-gray-500 mt-2">{new Date(rating.date).toLocaleDateString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">⭐</div>
                  <p className="text-gray-500">{t.professors.noRatings}</p>
                </div>
              )}
            </div>

            {/* Professional Development */}
            <div className="sf-card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.professors.professionalDevelopment}</h3>

              {pdActivities.length > 0 ? (
                <>
                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
                      <p className="text-sm text-gray-600 mb-2">{t.professors.totalPDHours}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-purple-600">{totalPDHours}</span>
                        <span className="text-xl text-purple-500">hrs</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">{t.professors.activitiesCompleted}</p>
                      <p className="text-4xl font-bold text-green-600">{completedActivities.length}</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">{t.professors.inProgress}</p>
                      <p className="text-4xl font-bold text-yellow-600">{inProgressActivities.length}</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">{t.professors.planned}</p>
                      <p className="text-4xl font-bold text-blue-600">{plannedActivities.length}</p>
                    </div>
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Activity Type Distribution */}
                    {pdByType.length > 0 && (
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-md font-semibold text-gray-700 mb-4">Activities by Type</h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie
                              data={pdByType}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={(entry: any) => `${entry.type}: ${entry.count}`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="count"
                            >
                              {pdByType.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    )}

                    {/* Timeline */}
                    {pdTimeline.length > 1 && (
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-md font-semibold text-gray-700 mb-4">Activity Timeline</h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <BarChart data={pdTimeline}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8B5CF6" name="Activities" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </div>

                  {/* Activities List */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-700 mb-4">Recent Activities</h4>
                    <div className="space-y-3">
                      {pdActivities
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((activity) => (
                        <div
                          key={activity.id}
                          className={`border-l-4 p-4 rounded-r-lg ${
                            activity.status === 'completed'
                              ? 'border-green-500 bg-green-50'
                              : activity.status === 'in-progress'
                              ? 'border-yellow-500 bg-yellow-50'
                              : 'border-blue-500 bg-blue-50'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                  activity.type === 'certification'
                                    ? 'bg-green-200 text-green-900'
                                    : activity.type === 'course'
                                    ? 'bg-blue-200 text-blue-900'
                                    : activity.type === 'conference'
                                    ? 'bg-yellow-200 text-yellow-900'
                                    : activity.type === 'publication'
                                    ? 'bg-purple-200 text-purple-900'
                                    : 'bg-pink-200 text-pink-900'
                                }`}>
                                  {t.professors.pdTypes[activity.type]}
                                </span>
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                  activity.status === 'completed'
                                    ? 'bg-green-100 text-green-800'
                                    : activity.status === 'in-progress'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {t.professors.pdStatus[activity.status]}
                                </span>
                              </div>
                              <h5 className="font-semibold text-gray-900 mb-1">{activity.title}</h5>
                              <p className="text-sm text-gray-700 mb-2">{activity.description}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-600">
                                <span>🏫 {activity.institution}</span>
                                <span>📅 {new Date(activity.date).toLocaleDateString()}</span>
                                {activity.hours && <span>⏱️ {activity.hours} hours</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-gray-500">{t.professors.noPDActivities}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
