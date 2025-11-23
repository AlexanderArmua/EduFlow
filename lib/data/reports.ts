export interface Report {
  id: string;
  name: string;
  type: 'academic' | 'financial' | 'attendance' | 'behavioral' | 'custom';
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'on-demand';
  lastGenerated: string;
  nextScheduled?: string;
  createdBy: string;
  format: 'pdf' | 'excel' | 'csv';
  recipients?: string[];
  status: 'active' | 'paused' | 'draft';
}

export interface ReportTemplate {
  id: string;
  name: string;
  category: 'academic' | 'financial' | 'attendance' | 'behavioral' | 'administrative';
  description: string;
  dataFields: string[];
  filters: string[];
  icon: string;
}

export const reportTemplates: ReportTemplate[] = [
  {
    id: 'tmpl1',
    name: 'Student Performance Report',
    category: 'academic',
    description: 'Comprehensive overview of student grades, attendance, and progress',
    dataFields: ['Student Name', 'GPA', 'Attendance %', 'Assignments Completed', 'Current Grade'],
    filters: ['Class', 'Subject', 'Date Range', 'Grade Level'],
    icon: '📊',
  },
  {
    id: 'tmpl2',
    name: 'Financial Summary Report',
    category: 'financial',
    description: 'Detailed breakdown of tuition payments, outstanding balances, and revenue',
    dataFields: ['Student Name', 'Tuition Amount', 'Amount Paid', 'Balance', 'Payment Status'],
    filters: ['Payment Status', 'Date Range', 'Program'],
    icon: '💰',
  },
  {
    id: 'tmpl3',
    name: 'Attendance Report',
    category: 'attendance',
    description: 'Track student attendance patterns and identify trends',
    dataFields: ['Student Name', 'Present Days', 'Absent Days', 'Attendance %', 'Tardiness'],
    filters: ['Class', 'Date Range', 'Attendance Status'],
    icon: '📅',
  },
  {
    id: 'tmpl4',
    name: 'Behavioral Incidents Report',
    category: 'behavioral',
    description: 'Summary of behavioral incidents, interventions, and outcomes',
    dataFields: ['Student Name', 'Incident Type', 'Date', 'Severity', 'Resolution'],
    filters: ['Incident Type', 'Severity', 'Date Range', 'Class'],
    icon: '⚠️',
  },
  {
    id: 'tmpl5',
    name: 'Professor Workload Report',
    category: 'administrative',
    description: 'Overview of professor teaching assignments, student counts, and schedules',
    dataFields: ['Professor Name', 'Subjects', 'Total Students', 'Contact Hours', 'Satisfaction'],
    filters: ['Department', 'Semester', 'Status'],
    icon: '👨‍🏫',
  },
  {
    id: 'tmpl6',
    name: 'Course Completion Report',
    category: 'academic',
    description: 'Track course completion rates and student success metrics',
    dataFields: ['Course Name', 'Enrolled Students', 'Completed', 'Pass Rate', 'Average Grade'],
    filters: ['Subject', 'Semester', 'Professor'],
    icon: '🎓',
  },
];


export const savedReports: Report[] = [
  {
    id: 'rpt1',
    name: 'Weekly Academic Performance',
    type: 'academic',
    description: 'Automated weekly report showing student performance across all subjects',
    frequency: 'weekly',
    lastGenerated: '2024-01-08',
    nextScheduled: '2024-01-15',
    createdBy: 'Dr. Sarah Johnson',
    format: 'pdf',
    recipients: ['admin@eduflow.edu', 'principal@eduflow.edu'],
    status: 'active',
  },
  {
    id: 'rpt2',
    name: 'Monthly Financial Summary',
    type: 'financial',
    description: 'Monthly overview of tuition payments, revenue, and outstanding balances',
    frequency: 'monthly',
    lastGenerated: '2024-01-01',
    nextScheduled: '2024-02-01',
    createdBy: 'Finance Department',
    format: 'excel',
    recipients: ['finance@eduflow.edu', 'admin@eduflow.edu'],
    status: 'active',
  },
  {
    id: 'rpt3',
    name: 'Daily Attendance Summary',
    type: 'attendance',
    description: 'Daily report of student attendance and absences',
    frequency: 'daily',
    lastGenerated: '2024-01-10',
    nextScheduled: '2024-01-11',
    createdBy: 'Attendance Office',
    format: 'csv',
    recipients: ['attendance@eduflow.edu'],
    status: 'active',
  },
  {
    id: 'rpt4',
    name: 'Behavioral Incidents - Q1',
    type: 'behavioral',
    description: 'Quarterly report on behavioral incidents and interventions',
    frequency: 'on-demand',
    lastGenerated: '2024-01-05',
    createdBy: 'Dr. Michael Chen',
    format: 'pdf',
    status: 'active',
  },
  {
    id: 'rpt5',
    name: 'Custom Grade Analysis',
    type: 'custom',
    description: 'Custom report analyzing grade distributions by subject and professor',
    frequency: 'on-demand',
    lastGenerated: '2024-01-03',
    createdBy: 'Academic Affairs',
    format: 'excel',
    status: 'draft',
  },
  {
    id: 'rpt6',
    name: 'Parent Communication Log',
    type: 'custom',
    description: 'Weekly summary of parent communications and response rates',
    frequency: 'weekly',
    lastGenerated: '2024-01-08',
    nextScheduled: '2024-01-15',
    createdBy: 'Communications Office',
    format: 'pdf',
    recipients: ['communications@eduflow.edu'],
    status: 'active',
  },
];