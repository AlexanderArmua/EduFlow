export interface Document {
  id: string;
  title: string;
  category: 'policy' | 'form' | 'report' | 'curriculum' | 'guide' | 'contract';
  uploadedBy: string;
  uploadDate: string;
  fileSize: string;
  fileType: string;
  description: string;
  tags: string[];
  department: string;
  accessLevel: 'public' | 'staff' | 'admin';
  downloads: number;
}

export const documents: Document[] = [
  {
    id: 'doc1',
    title: 'Student Enrollment Policy 2024',
    category: 'policy',
    uploadedBy: 'Dr. Sarah Mitchell',
    uploadDate: '2024-01-15',
    fileSize: '2.4 MB',
    fileType: 'PDF',
    description: 'Complete enrollment policy and procedures for the 2024 academic year',
    tags: ['enrollment', 'policy', '2024', 'admissions'],
    department: 'Administration',
    accessLevel: 'staff',
    downloads: 156,
  },
  {
    id: 'doc2',
    title: 'Grade Entry Form Template',
    category: 'form',
    uploadedBy: 'Prof. Michael Chen',
    uploadDate: '2024-02-01',
    fileSize: '524 KB',
    fileType: 'DOCX',
    description: 'Template for entering student grades and assessments',
    tags: ['grades', 'form', 'template', 'assessment'],
    department: 'Academic Affairs',
    accessLevel: 'staff',
    downloads: 342,
  },
  {
    id: 'doc3',
    title: 'Q1 Performance Report',
    category: 'report',
    uploadedBy: 'Dr. Emily Rodriguez',
    uploadDate: '2024-03-20',
    fileSize: '5.8 MB',
    fileType: 'PDF',
    description: 'Quarterly performance analysis and statistics for Q1 2024',
    tags: ['report', 'Q1', 'performance', 'analytics'],
    department: 'Administration',
    accessLevel: 'admin',
    downloads: 89,
  },
  {
    id: 'doc4',
    title: 'Computer Science Curriculum 2024-2025',
    category: 'curriculum',
    uploadedBy: 'Prof. Michael Chen',
    uploadDate: '2024-01-10',
    fileSize: '3.2 MB',
    fileType: 'PDF',
    description: 'Complete curriculum outline for Computer Science program',
    tags: ['curriculum', 'computer science', 'syllabus'],
    department: 'Computer Science',
    accessLevel: 'public',
    downloads: 278,
  },
  {
    id: 'doc5',
    title: 'Teacher Onboarding Guide',
    category: 'guide',
    uploadedBy: 'Dr. Sarah Mitchell',
    uploadDate: '2024-02-15',
    fileSize: '1.8 MB',
    fileType: 'PDF',
    description: 'Comprehensive guide for new faculty members',
    tags: ['onboarding', 'guide', 'teachers', 'HR'],
    department: 'Human Resources',
    accessLevel: 'staff',
    downloads: 67,
  },
  {
    id: 'doc6',
    title: 'Mathematics Department Contract Template',
    category: 'contract',
    uploadedBy: 'Dr. James Wilson',
    uploadDate: '2024-03-01',
    fileSize: '456 KB',
    fileType: 'DOCX',
    description: 'Standard contract template for Mathematics department staff',
    tags: ['contract', 'template', 'mathematics', 'HR'],
    department: 'Mathematics',
    accessLevel: 'admin',
    downloads: 23,
  },
  {
    id: 'doc7',
    title: 'Student Code of Conduct',
    category: 'policy',
    uploadedBy: 'Dr. Emily Rodriguez',
    uploadDate: '2024-01-05',
    fileSize: '1.2 MB',
    fileType: 'PDF',
    description: 'Official code of conduct and disciplinary procedures',
    tags: ['policy', 'conduct', 'discipline', 'students'],
    department: 'Student Affairs',
    accessLevel: 'public',
    downloads: 512,
  },
  {
    id: 'doc8',
    title: 'Absence Request Form',
    category: 'form',
    uploadedBy: 'Dr. Sarah Mitchell',
    uploadDate: '2024-02-10',
    fileSize: '328 KB',
    fileType: 'DOCX',
    description: 'Form for requesting student absence approval',
    tags: ['absence', 'form', 'attendance'],
    department: 'Administration',
    accessLevel: 'staff',
    downloads: 189,
  },
];

// Absence Approval Workflow