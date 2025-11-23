export interface TuitionPayment {
  id: string;
  studentId: string;
  studentName: string;
  semester: string;
  totalTuition: number;
  amountPaid: number;
  amountDue: number;
  dueDate: string;
  status: 'paid' | 'partial' | 'overdue' | 'pending';
  paymentHistory: {
    date: string;
    amount: number;
    method: string;
  }[];
}

export interface CourseRevenue {
  subjectCode: string;
  subjectName: string;
  department: string;
  enrolledStudents: number;
  tuitionPerStudent: number;
  totalRevenue: number;
  semester: string;
  professor: string;
}

export interface StudentCostAnalysis {
  year: string;
  totalStudents: number;
  totalCosts: number;
  costPerStudent: number;
  breakdown: {
    category: string;
    amount: number;
    percentage: number;
  }[];
}

export interface DepartmentBudget {
  department: string;
  totalBudget: number;
  allocated: number;
  spent: number;
  remaining: number;
  categories: {
    name: string;
    budgeted: number;
    spent: number;
  }[];
  headOfDepartment?: string;
}

export const tuitionPayments: TuitionPayment[] = [
  {
    id: 'pay1',
    studentId: 'stu1',
    studentName: 'Emma Thompson',
    semester: 'Spring 2024',
    totalTuition: 15000,
    amountPaid: 15000,
    amountDue: 0,
    dueDate: '2024-01-15',
    status: 'paid',
    paymentHistory: [
      { date: '2024-01-10', amount: 15000, method: 'Bank Transfer' },
    ],
  },
  {
    id: 'pay2',
    studentId: 'stu2',
    studentName: 'James Rodriguez',
    semester: 'Spring 2024',
    totalTuition: 15000,
    amountPaid: 10000,
    amountDue: 5000,
    dueDate: '2024-03-30',
    status: 'partial',
    paymentHistory: [
      { date: '2024-01-15', amount: 7500, method: 'Credit Card' },
      { date: '2024-02-15', amount: 2500, method: 'Credit Card' },
    ],
  },
  {
    id: 'pay3',
    studentId: 'stu3',
    studentName: 'Sophia Chen',
    semester: 'Spring 2024',
    totalTuition: 15000,
    amountPaid: 7500,
    amountDue: 7500,
    dueDate: '2024-03-01',
    status: 'overdue',
    paymentHistory: [
      { date: '2024-01-20', amount: 7500, method: 'Check' },
    ],
  },
  {
    id: 'pay4',
    studentId: 'stu4',
    studentName: 'Oliver Martinez',
    semester: 'Spring 2024',
    totalTuition: 15000,
    amountPaid: 0,
    amountDue: 15000,
    dueDate: '2024-04-15',
    status: 'pending',
    paymentHistory: [],
  },
  {
    id: 'pay5',
    studentId: 'stu5',
    studentName: 'Ava Johnson',
    semester: 'Spring 2024',
    totalTuition: 15000,
    amountPaid: 15000,
    amountDue: 0,
    dueDate: '2024-01-20',
    status: 'paid',
    paymentHistory: [
      { date: '2024-01-05', amount: 5000, method: 'Bank Transfer' },
      { date: '2024-01-12', amount: 5000, method: 'Bank Transfer' },
      { date: '2024-01-18', amount: 5000, method: 'Bank Transfer' },
    ],
  },
];


export const courseRevenue: CourseRevenue[] = [
  {
    subjectCode: 'CS101',
    subjectName: 'Introduction to Programming',
    department: 'Computer Science',
    enrolledStudents: 45,
    tuitionPerStudent: 2500,
    totalRevenue: 112500,
    semester: 'Spring 2024',
    professor: 'Prof. Michael Chen',
  },
  {
    subjectCode: 'MATH201',
    subjectName: 'Calculus II',
    department: 'Mathematics',
    enrolledStudents: 38,
    tuitionPerStudent: 2200,
    totalRevenue: 83600,
    semester: 'Spring 2024',
    professor: 'Dr. James Wilson',
  },
  {
    subjectCode: 'ENG102',
    subjectName: 'English Literature',
    department: 'English',
    enrolledStudents: 52,
    tuitionPerStudent: 2000,
    totalRevenue: 104000,
    semester: 'Spring 2024',
    professor: 'Dr. Sarah Mitchell',
  },
  {
    subjectCode: 'PHYS101',
    subjectName: 'Physics I',
    department: 'Physics',
    enrolledStudents: 35,
    tuitionPerStudent: 2400,
    totalRevenue: 84000,
    semester: 'Spring 2024',
    professor: 'Dr. Emily Rodriguez',
  },
  {
    subjectCode: 'HIST201',
    subjectName: 'World History',
    department: 'History',
    enrolledStudents: 42,
    tuitionPerStudent: 1900,
    totalRevenue: 79800,
    semester: 'Spring 2024',
    professor: 'Dr. Robert Taylor',
  },
  {
    subjectCode: 'CHEM101',
    subjectName: 'General Chemistry',
    department: 'Chemistry',
    enrolledStudents: 40,
    tuitionPerStudent: 2300,
    totalRevenue: 92000,
    semester: 'Spring 2024',
    professor: 'Prof. Lisa Anderson',
  },
];


export const studentCostAnalysis: StudentCostAnalysis[] = [
  {
    year: '2024',
    totalStudents: 450,
    totalCosts: 4500000,
    costPerStudent: 10000,
    breakdown: [
      { category: 'Faculty Salaries', amount: 2250000, percentage: 50 },
      { category: 'Facilities & Maintenance', amount: 900000, percentage: 20 },
      { category: 'Learning Materials', amount: 675000, percentage: 15 },
      { category: 'Technology & Software', amount: 450000, percentage: 10 },
      { category: 'Administrative Costs', amount: 225000, percentage: 5 },
    ],
  },
  {
    year: '2023',
    totalStudents: 420,
    totalCosts: 4200000,
    costPerStudent: 10000,
    breakdown: [
      { category: 'Faculty Salaries', amount: 2100000, percentage: 50 },
      { category: 'Facilities & Maintenance', amount: 840000, percentage: 20 },
      { category: 'Learning Materials', amount: 630000, percentage: 15 },
      { category: 'Technology & Software', amount: 420000, percentage: 10 },
      { category: 'Administrative Costs', amount: 210000, percentage: 5 },
    ],
  },
];


export const departmentBudgets: DepartmentBudget[] = [
  {
    department: 'Computer Science',
    totalBudget: 850000,
    allocated: 850000,
    spent: 675000,
    remaining: 175000,
    categories: [
      { name: 'Salaries', budgeted: 500000, spent: 450000 },
      { name: 'Equipment', budgeted: 200000, spent: 150000 },
      { name: 'Software Licenses', budgeted: 80000, spent: 50000 },
      { name: 'Research', budgeted: 50000, spent: 20000 },
      { name: 'Supplies', budgeted: 20000, spent: 5000 },
    ],
    headOfDepartment: 'Prof. Michael Chen',
  },
  {
    department: 'Mathematics',
    totalBudget: 650000,
    allocated: 650000,
    spent: 520000,
    remaining: 130000,
    categories: [
      { name: 'Salaries', budgeted: 450000, spent: 400000 },
      { name: 'Equipment', budgeted: 100000, spent: 70000 },
      { name: 'Software Licenses', budgeted: 40000, spent: 25000 },
      { name: 'Research', budgeted: 40000, spent: 20000 },
      { name: 'Supplies', budgeted: 20000, spent: 5000 },
    ],
    headOfDepartment: 'Dr. James Wilson',
  },
  {
    department: 'English',
    totalBudget: 550000,
    allocated: 550000,
    spent: 480000,
    remaining: 70000,
    categories: [
      { name: 'Salaries', budgeted: 400000, spent: 370000 },
      { name: 'Library Resources', budgeted: 80000, spent: 65000 },
      { name: 'Events', budgeted: 40000, spent: 30000 },
      { name: 'Supplies', budgeted: 30000, spent: 15000 },
    ],
    headOfDepartment: 'Dr. Sarah Mitchell',
  },
  {
    department: 'Physics',
    totalBudget: 750000,
    allocated: 750000,
    spent: 600000,
    remaining: 150000,
    categories: [
      { name: 'Salaries', budgeted: 450000, spent: 400000 },
      { name: 'Lab Equipment', budgeted: 200000, spent: 150000 },
      { name: 'Research', budgeted: 70000, spent: 40000 },
      { name: 'Supplies', budgeted: 30000, spent: 10000 },
    ],
    headOfDepartment: 'Dr. Emily Rodriguez',
  },
  {
    department: 'History',
    totalBudget: 500000,
    allocated: 500000,
    spent: 425000,
    remaining: 75000,
    categories: [
      { name: 'Salaries', budgeted: 380000, spent: 350000 },
      { name: 'Library Resources', budgeted: 60000, spent: 45000 },
      { name: 'Field Trips', budgeted: 40000, spent: 25000 },
      { name: 'Supplies', budgeted: 20000, spent: 5000 },
    ],
    headOfDepartment: 'Dr. Robert Taylor',
  },
];

