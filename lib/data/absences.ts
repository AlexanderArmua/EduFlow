export interface AbsenceRequest {
  id: string;
  studentId: string;
  studentName: string;
  requestedBy: string;
  requestDate: string;
  absenceDate: string;
  absenceEndDate?: string;
  reason: string;
  category: 'medical' | 'family' | 'academic' | 'personal' | 'other';
  status: 'pending' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewDate?: string;
  reviewNotes?: string;
  attachments?: string[];
  affectedSubjects: string[];
}

export const absenceRequests: AbsenceRequest[] = [
  {
    id: 'abs1',
    studentId: 'stu1',
    studentName: 'Emma Thompson',
    requestedBy: 'Parent - Jennifer Thompson',
    requestDate: '2024-03-15',
    absenceDate: '2024-03-18',
    absenceEndDate: '2024-03-20',
    reason: 'Medical appointment and recovery - scheduled surgery',
    category: 'medical',
    status: 'approved',
    reviewedBy: 'Dr. Sarah Mitchell',
    reviewDate: '2024-03-15',
    reviewNotes: 'Valid medical documentation provided. Approved.',
    attachments: ['medical_note.pdf'],
    affectedSubjects: ['CS101', 'MATH201', 'ENG102'],
  },
  {
    id: 'abs2',
    studentId: 'stu2',
    studentName: 'James Rodriguez',
    requestedBy: 'Parent - Maria Rodriguez',
    requestDate: '2024-03-20',
    absenceDate: '2024-03-25',
    reason: 'Family emergency - grandmother hospitalized',
    category: 'family',
    status: 'pending',
    affectedSubjects: ['MATH201', 'PHYS101'],
  },
  {
    id: 'abs3',
    studentId: 'stu3',
    studentName: 'Sophia Chen',
    requestedBy: 'Parent - David Chen',
    requestDate: '2024-03-18',
    absenceDate: '2024-03-22',
    absenceEndDate: '2024-03-23',
    reason: 'Participating in National Science Competition',
    category: 'academic',
    status: 'approved',
    reviewedBy: 'Prof. Michael Chen',
    reviewDate: '2024-03-18',
    reviewNotes: 'Approved for academic competition participation. Assignments to be submitted upon return.',
    affectedSubjects: ['CS101', 'CHEM101'],
  },
  {
    id: 'abs4',
    studentId: 'stu4',
    studentName: 'Oliver Martinez',
    requestedBy: 'Self',
    requestDate: '2024-03-21',
    absenceDate: '2024-03-24',
    reason: 'College campus visit',
    category: 'academic',
    status: 'pending',
    affectedSubjects: ['HIST201', 'ENG102'],
  },
  {
    id: 'abs5',
    studentId: 'stu5',
    studentName: 'Ava Johnson',
    requestedBy: 'Parent - Michael Johnson',
    requestDate: '2024-03-19',
    absenceDate: '2024-03-21',
    reason: 'Feeling unwell - flu symptoms',
    category: 'medical',
    status: 'approved',
    reviewedBy: 'Dr. Emily Rodriguez',
    reviewDate: '2024-03-19',
    reviewNotes: 'Approved. Please provide medical note if absence extends beyond 2 days.',
    affectedSubjects: ['MATH201', 'ART101'],
  },
  {
    id: 'abs6',
    studentId: 'stu2',
    studentName: 'James Rodriguez',
    requestedBy: 'Parent - Maria Rodriguez',
    requestDate: '2024-03-17',
    absenceDate: '2024-03-19',
    reason: 'Religious observance',
    category: 'personal',
    status: 'rejected',
    reviewedBy: 'Dr. Sarah Mitchell',
    reviewDate: '2024-03-17',
    reviewNotes: 'Insufficient notice provided. Please submit requests at least 48 hours in advance.',
    affectedSubjects: ['MATH201', 'PHYS101'],
  },
];

// Financial Insights