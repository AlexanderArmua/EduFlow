export interface Professor {
  id: string;
  name: string;
  email: string;
  department: string;
  phone: string;
  status: 'Active' | 'Inactive';
  subjects: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  professorId: string;
  professorName: string;
  credits: number;
  semester: string;
  students: number;
}

export interface Note {
  id: string;
  subjectId: string;
  studentName: string;
  noteType: string;
  date: string;
  content: string;
}

export interface Score {
  id: string;
  subjectId: string;
  studentName: string;
  assignment: string;
  score: number;
  maxScore: number;
  date: string;
}

export interface ParentMessage {
  id: string;
  parentName: string;
  studentName: string;
  subject: string;
  message: string;
  date: string;
  status: 'Unread' | 'Read' | 'Replied';
  priority: 'High' | 'Medium' | 'Low';
}

export const professors: Professor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@eduflow.edu',
    department: 'Computer Science',
    phone: '+1 (555) 123-4567',
    status: 'Active',
    subjects: ['CS101', 'CS301']
  },
  {
    id: '2',
    name: 'Prof. Michael Chen',
    email: 'michael.chen@eduflow.edu',
    department: 'Mathematics',
    phone: '+1 (555) 234-5678',
    status: 'Active',
    subjects: ['MATH201', 'MATH301']
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    email: 'emily.rodriguez@eduflow.edu',
    department: 'Physics',
    phone: '+1 (555) 345-6789',
    status: 'Active',
    subjects: ['PHY101', 'PHY202']
  },
  {
    id: '4',
    name: 'Prof. James Williams',
    email: 'james.williams@eduflow.edu',
    department: 'Chemistry',
    phone: '+1 (555) 456-7890',
    status: 'Inactive',
    subjects: ['CHEM101']
  },
  {
    id: '5',
    name: 'Dr. Maria Garcia',
    email: 'maria.garcia@eduflow.edu',
    department: 'Literature',
    phone: '+1 (555) 567-8901',
    status: 'Active',
    subjects: ['LIT201', 'LIT301']
  }
];

export const subjects: Subject[] = [
  {
    id: '1',
    name: 'Introduction to Programming',
    code: 'CS101',
    professorId: '1',
    professorName: 'Dr. Sarah Johnson',
    credits: 4,
    semester: 'Fall 2024',
    students: 45
  },
  {
    id: '2',
    name: 'Data Structures',
    code: 'CS301',
    professorId: '1',
    professorName: 'Dr. Sarah Johnson',
    credits: 4,
    semester: 'Fall 2024',
    students: 32
  },
  {
    id: '3',
    name: 'Calculus II',
    code: 'MATH201',
    professorId: '2',
    professorName: 'Prof. Michael Chen',
    credits: 3,
    semester: 'Fall 2024',
    students: 50
  },
  {
    id: '4',
    name: 'Linear Algebra',
    code: 'MATH301',
    professorId: '2',
    professorName: 'Prof. Michael Chen',
    credits: 3,
    semester: 'Fall 2024',
    students: 28
  },
  {
    id: '5',
    name: 'General Physics I',
    code: 'PHY101',
    professorId: '3',
    professorName: 'Dr. Emily Rodriguez',
    credits: 4,
    semester: 'Fall 2024',
    students: 60
  },
  {
    id: '6',
    name: 'Electromagnetism',
    code: 'PHY202',
    professorId: '3',
    professorName: 'Dr. Emily Rodriguez',
    credits: 4,
    semester: 'Fall 2024',
    students: 35
  }
];

export const notes: Note[] = [
  {
    id: '1',
    subjectId: '1',
    studentName: 'John Smith',
    noteType: 'Attendance',
    date: '2024-11-10',
    content: 'Absent due to medical appointment'
  },
  {
    id: '2',
    subjectId: '1',
    studentName: 'Emma Davis',
    noteType: 'Behavioral',
    date: '2024-11-12',
    content: 'Excellent participation in class discussion'
  },
  {
    id: '3',
    subjectId: '2',
    studentName: 'Michael Brown',
    noteType: 'Academic',
    date: '2024-11-08',
    content: 'Needs additional support with recursion concepts'
  },
  {
    id: '4',
    subjectId: '3',
    studentName: 'Sarah Wilson',
    noteType: 'Achievement',
    date: '2024-11-11',
    content: 'Top score in midterm exam'
  },
  {
    id: '5',
    subjectId: '5',
    studentName: 'David Lee',
    noteType: 'Attendance',
    date: '2024-11-09',
    content: 'Late arrival - traffic issues'
  }
];

export const scores: Score[] = [
  {
    id: '1',
    subjectId: '1',
    studentName: 'John Smith',
    assignment: 'Midterm Exam',
    score: 85,
    maxScore: 100,
    date: '2024-10-15'
  },
  {
    id: '2',
    subjectId: '1',
    studentName: 'Emma Davis',
    assignment: 'Midterm Exam',
    score: 92,
    maxScore: 100,
    date: '2024-10-15'
  },
  {
    id: '3',
    subjectId: '1',
    studentName: 'Michael Brown',
    assignment: 'Homework 1',
    score: 78,
    maxScore: 100,
    date: '2024-09-20'
  },
  {
    id: '4',
    subjectId: '2',
    studentName: 'Sarah Wilson',
    assignment: 'Project 1',
    score: 95,
    maxScore: 100,
    date: '2024-10-30'
  },
  {
    id: '5',
    subjectId: '3',
    studentName: 'David Lee',
    assignment: 'Quiz 1',
    score: 88,
    maxScore: 100,
    date: '2024-09-25'
  },
  {
    id: '6',
    subjectId: '1',
    studentName: 'John Smith',
    assignment: 'Quiz 2',
    score: 90,
    maxScore: 100,
    date: '2024-11-05'
  }
];

export const parentMessages: ParentMessage[] = [
  {
    id: '1',
    parentName: 'Jennifer Smith',
    studentName: 'John Smith',
    subject: 'Homework Question',
    message: 'Hello, my son is having trouble understanding the homework assignment for this week. Could you provide some clarification?',
    date: '2024-11-14',
    status: 'Unread',
    priority: 'High'
  },
  {
    id: '2',
    parentName: 'Robert Davis',
    studentName: 'Emma Davis',
    subject: 'Thank You',
    message: 'Thank you for the extra help you provided to Emma. Her grades have improved significantly!',
    date: '2024-11-13',
    status: 'Read',
    priority: 'Low'
  },
  {
    id: '3',
    parentName: 'Linda Brown',
    studentName: 'Michael Brown',
    subject: 'Meeting Request',
    message: 'I would like to schedule a meeting to discuss Michael\'s progress this semester. When would be a good time?',
    date: '2024-11-12',
    status: 'Replied',
    priority: 'Medium'
  },
  {
    id: '4',
    parentName: 'Thomas Wilson',
    studentName: 'Sarah Wilson',
    subject: 'College Recommendation',
    message: 'Sarah is applying to universities. Would you be willing to write a letter of recommendation?',
    date: '2024-11-11',
    status: 'Unread',
    priority: 'High'
  },
  {
    id: '5',
    parentName: 'Patricia Lee',
    studentName: 'David Lee',
    subject: 'Absence Notification',
    message: 'David will be absent next week due to a family event. How can he make up the missed work?',
    date: '2024-11-10',
    status: 'Read',
    priority: 'Medium'
  }
];
