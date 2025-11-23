export interface AchievementBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'academic' | 'attendance' | 'behavior' | 'participation';
  earnedDate?: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'academic' | 'participation' | 'improvement' | 'special';
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  points: number;
  earnedDate?: string;
}

export interface StudentAchievement {
  studentId: string;
  studentName: string;
  totalPoints: number;
  level: number;
  achievements: Achievement[];
  progressToNextLevel: number; // percentage
}

export interface LeaderboardEntry {
  rank: number;
  studentId: string;
  studentName: string;
  year: string;
  totalPoints: number;
  level: number;
  badges: number;
  change: number; // rank change from previous period
}

export const achievementBadges: AchievementBadge[] = [
  {
    id: '1',
    name: 'Asistencia Perfecta',
    description: 'Sin ausencias durante todo el cuatrimestre',
    icon: '🎯',
    category: 'attendance'
  },
  {
    id: '2',
    name: 'Excelencia Académica',
    description: 'Promedio superior a 9.0',
    icon: '⭐',
    category: 'academic'
  },
  {
    id: '3',
    name: 'Mejor Compañero',
    description: 'Reconocido por ayudar a otros estudiantes',
    icon: '🤝',
    category: 'behavior'
  },
  {
    id: '4',
    name: 'Participación Activa',
    description: 'Participación destacada en todas las clases',
    icon: '💬',
    category: 'participation'
  },
  {
    id: '5',
    name: 'Proyecto Sobresaliente',
    description: 'Mejor proyecto del cuatrimestre',
    icon: '🏆',
    category: 'academic'
  },
  {
    id: '6',
    name: 'Puntualidad',
    description: 'Sin llegadas tarde durante el mes',
    icon: '⏰',
    category: 'attendance'
  },
];

// Professor Ratings

export const achievements: Achievement[] = [
  // Academic
  { id: 'ach1', name: 'Perfect Score', description: 'Achieved 100% on an exam', icon: '🎯', category: 'academic', tier: 'gold', points: 100 },
  { id: 'ach2', name: 'Honor Roll', description: 'Maintained GPA above 3.5', icon: '📚', category: 'academic', tier: 'silver', points: 75 },
  { id: 'ach3', name: 'Top of Class', description: 'Ranked #1 in a subject', icon: '🏆', category: 'academic', tier: 'platinum', points: 150 },
  { id: 'ach4', name: 'Straight As', description: 'All A grades in a semester', icon: '⭐', category: 'academic', tier: 'gold', points: 100 },

  // Participation
  { id: 'ach5', name: 'Perfect Attendance', description: 'No absences for a semester', icon: '📅', category: 'participation', tier: 'silver', points: 50 },
  { id: 'ach6', name: 'Class Contributor', description: 'Participated in 50+ discussions', icon: '💬', category: 'participation', tier: 'bronze', points: 30 },
  { id: 'ach7', name: 'Early Bird', description: 'Never late for class in a month', icon: '⏰', category: 'participation', tier: 'bronze', points: 25 },

  // Improvement
  { id: 'ach8', name: 'Rising Star', description: 'Improved GPA by 0.5+ points', icon: '🌟', category: 'improvement', tier: 'gold', points: 80 },
  { id: 'ach9', name: 'Comeback Kid', description: 'Improved from failing to passing', icon: '💪', category: 'improvement', tier: 'silver', points: 60 },
  { id: 'ach10', name: 'Steady Progress', description: 'Consistent grade improvement', icon: '📈', category: 'improvement', tier: 'bronze', points: 40 },

  // Special
  { id: 'ach11', name: 'Helping Hand', description: 'Tutored fellow students', icon: '🤝', category: 'special', tier: 'gold', points: 90 },
  { id: 'ach12', name: 'Extra Mile', description: 'Completed bonus assignments', icon: '🎁', category: 'special', tier: 'silver', points: 50 },
];


export const studentAchievements: StudentAchievement[] = [
  {
    studentId: '1',
    studentName: 'Emily Johnson',
    totalPoints: 465,
    level: 5,
    progressToNextLevel: 65,
    achievements: [
      { ...achievements[0], earnedDate: '2024-03-15' },
      { ...achievements[1], earnedDate: '2024-02-20' },
      { ...achievements[4], earnedDate: '2024-01-10' },
      { ...achievements[7], earnedDate: '2024-03-01' },
      { ...achievements[10], earnedDate: '2024-02-14' },
    ],
  },
  {
    studentId: '2',
    studentName: 'Michael Chen',
    totalPoints: 580,
    level: 6,
    progressToNextLevel: 45,
    achievements: [
      { ...achievements[2], earnedDate: '2024-03-10' },
      { ...achievements[3], earnedDate: '2024-02-25' },
      { ...achievements[4], earnedDate: '2024-01-15' },
      { ...achievements[6], earnedDate: '2024-02-05' },
      { ...achievements[11], earnedDate: '2024-03-20' },
    ],
  },
  {
    studentId: '3',
    studentName: 'Sarah Williams',
    totalPoints: 320,
    level: 4,
    progressToNextLevel: 20,
    achievements: [
      { ...achievements[1], earnedDate: '2024-03-05' },
      { ...achievements[5], earnedDate: '2024-02-18' },
      { ...achievements[9], earnedDate: '2024-01-22' },
      { ...achievements[11], earnedDate: '2024-03-12' },
    ],
  },
  {
    studentId: '4',
    studentName: 'David Martinez',
    totalPoints: 720,
    level: 7,
    progressToNextLevel: 85,
    achievements: [
      { ...achievements[0], earnedDate: '2024-03-18' },
      { ...achievements[2], earnedDate: '2024-02-28' },
      { ...achievements[3], earnedDate: '2024-03-10' },
      { ...achievements[4], earnedDate: '2024-01-20' },
      { ...achievements[7], earnedDate: '2024-02-15' },
      { ...achievements[10], earnedDate: '2024-03-05' },
    ],
  },
  {
    studentId: '5',
    studentName: 'Jessica Brown',
    totalPoints: 195,
    level: 2,
    progressToNextLevel: 95,
    achievements: [
      { ...achievements[5], earnedDate: '2024-03-08' },
      { ...achievements[6], earnedDate: '2024-02-22' },
      { ...achievements[9], earnedDate: '2024-01-18' },
    ],
  },
];

// Leaderboard

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, studentId: '4', studentName: 'David Martinez', year: 'Sophomore', totalPoints: 720, level: 7, badges: 6, change: 2 },
  { rank: 2, studentId: '2', studentName: 'Michael Chen', year: 'Junior', totalPoints: 580, level: 6, badges: 5, change: -1 },
  { rank: 3, studentId: '1', studentName: 'Emily Johnson', year: 'Senior', totalPoints: 465, level: 5, badges: 5, change: 0 },
  { rank: 4, studentId: '3', studentName: 'Sarah Williams', year: 'Freshman', totalPoints: 320, level: 4, badges: 4, change: 1 },
  { rank: 5, studentId: '5', studentName: 'Jessica Brown', year: 'Sophomore', totalPoints: 195, level: 2, badges: 3, change: -2 },
];

// ============================================================================
// REPORTING CENTER
// ============================================================================
