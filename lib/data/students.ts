export interface Student {
  id: string;
  name: string;
  email: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  enrollmentDate: string;
  currentYear: string;
  status: 'Active' | 'Inactive' | 'Graduated';
  gpa: number;
  attendanceRate: number;
  subjects: string[];
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Excused';
  subjectCode: string;
  notes?: string;
}

export interface BehavioralReport {
  id: string;
  studentId: string;
  date: string;
  type: 'positive' | 'negative' | 'neutral';
  category: 'Academic' | 'Social' | 'Conduct' | 'Participation';
  description: string;
  reportedBy: string;
}

export const students: Student[] = [
  {
    id: '1',
    name: 'Juan Martínez',
    email: 'juan.martinez@estudiantes.edu.ar',
    parentName: 'María Martínez',
    parentEmail: 'maria.martinez@gmail.com',
    parentPhone: '+54 11 5555-1111',
    enrollmentDate: '2023-03-01',
    currentYear: '2do Año',
    status: 'Active',
    gpa: 8.5,
    attendanceRate: 94,
    subjects: ['INF101', 'MAT201', 'FIS101']
  },
  {
    id: '2',
    name: 'Sofía Álvarez',
    email: 'sofia.alvarez@estudiantes.edu.ar',
    parentName: 'Roberto Álvarez',
    parentEmail: 'roberto.alvarez@gmail.com',
    parentPhone: '+54 11 5555-2222',
    enrollmentDate: '2022-03-01',
    currentYear: '3er Año',
    status: 'Active',
    gpa: 9.2,
    attendanceRate: 98,
    subjects: ['INF301', 'MAT301', 'FIS202']
  },
  {
    id: '3',
    name: 'Tomás Ramírez',
    email: 'tomas.ramirez@estudiantes.edu.ar',
    parentName: 'Laura Ramírez',
    parentEmail: 'laura.ramirez@gmail.com',
    parentPhone: '+54 11 5555-3333',
    enrollmentDate: '2023-03-01',
    currentYear: '2do Año',
    status: 'Active',
    gpa: 7.8,
    attendanceRate: 91,
    subjects: ['INF101', 'INF301', 'MAT201']
  },
  {
    id: '4',
    name: 'Valentina Pérez',
    email: 'valentina.perez@estudiantes.edu.ar',
    parentName: 'Carlos Pérez',
    parentEmail: 'carlos.perez@gmail.com',
    parentPhone: '+54 11 5555-4444',
    enrollmentDate: '2021-03-01',
    currentYear: '4to Año',
    status: 'Active',
    gpa: 9.5,
    attendanceRate: 99,
    subjects: ['INF301', 'MAT301']
  },
  {
    id: '5',
    name: 'Mateo Sánchez',
    email: 'mateo.sanchez@estudiantes.edu.ar',
    parentName: 'Patricia Sánchez',
    parentEmail: 'patricia.sanchez@gmail.com',
    parentPhone: '+54 11 5555-5555',
    enrollmentDate: '2022-03-01',
    currentYear: '3er Año',
    status: 'Active',
    gpa: 8.3,
    attendanceRate: 95,
    subjects: ['FIS101', 'FIS202', 'MAT201']
  },
];

// Attendance Records

export const attendanceRecords: AttendanceRecord[] = [
  { id: '1', studentId: '1', date: '2025-11-01', status: 'Present', subjectCode: 'INF101' },
  { id: '2', studentId: '1', date: '2025-11-02', status: 'Present', subjectCode: 'MAT201' },
  { id: '3', studentId: '1', date: '2025-11-03', status: 'Absent', subjectCode: 'FIS101', notes: 'Turno médico' },
  { id: '4', studentId: '1', date: '2025-11-04', status: 'Present', subjectCode: 'INF101' },
  { id: '5', studentId: '1', date: '2025-11-05', status: 'Late', subjectCode: 'MAT201', notes: 'Llegada tarde - tráfico' },
  { id: '6', studentId: '2', date: '2025-11-01', status: 'Present', subjectCode: 'INF301' },
  { id: '7', studentId: '2', date: '2025-11-02', status: 'Present', subjectCode: 'MAT301' },
  { id: '8', studentId: '2', date: '2025-11-03', status: 'Present', subjectCode: 'FIS202' },
  { id: '9', studentId: '3', date: '2025-11-01', status: 'Present', subjectCode: 'INF101' },
  { id: '10', studentId: '3', date: '2025-11-02', status: 'Absent', subjectCode: 'INF301', notes: 'Enfermedad' },
];

// Behavioral Reports

export const behavioralReports: BehavioralReport[] = [
  {
    id: '1',
    studentId: '1',
    date: '2025-11-10',
    type: 'neutral',
    category: 'Academic',
    description: 'Necesita apoyo adicional con conceptos de recursión',
    reportedBy: 'Dr. Martín Fernández'
  },
  {
    id: '2',
    studentId: '2',
    date: '2025-11-12',
    type: 'positive',
    category: 'Participation',
    description: 'Excelente participación en la discusión de clase',
    reportedBy: 'Dr. Martín Fernández'
  },
  {
    id: '3',
    studentId: '2',
    date: '2025-11-05',
    type: 'positive',
    category: 'Academic',
    description: 'Entregó un proyecto excepcional con creatividad destacada',
    reportedBy: 'Prof. Ana María González'
  },
  {
    id: '4',
    studentId: '3',
    date: '2025-11-08',
    type: 'negative',
    category: 'Conduct',
    description: 'Interrupción durante la clase',
    reportedBy: 'Dr. Martín Fernández'
  },
  {
    id: '5',
    studentId: '4',
    date: '2025-11-11',
    type: 'positive',
    category: 'Academic',
    description: 'Mejor calificación en el examen parcial',
    reportedBy: 'Prof. Ana María González'
  },
  {
    id: '6',
    studentId: '5',
    date: '2025-11-09',
    type: 'positive',
    category: 'Social',
    description: 'Ayudó a compañeros con dificultades en física',
    reportedBy: 'Dr. Santiago Rodríguez'
  },
];

// Achievement Badges