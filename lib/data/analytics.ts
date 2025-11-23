export interface GradeTrend {
  month: string;
  promedio: number;
}

export interface DepartmentDistribution {
  department: string;
  students: number;
}

export interface AttendanceData {
  month: string;
  attendance: number;
}

export interface EnrollmentTrend {
  period: string;
  students: number;
}

export interface RetentionRate {
  year: string;
  retained: number;
  dropped: number;
}

export interface PassFailRate {
  subject: string;
  passed: number;
  failed: number;
  passRate: number;
}

export const gradeTrends: GradeTrend[] = [
  { month: 'Marzo', promedio: 75 },
  { month: 'Abril', promedio: 78 },
  { month: 'Mayo', promedio: 80 },
  { month: 'Junio', promedio: 82 },
  { month: 'Julio', promedio: 79 },
  { month: 'Agosto', promedio: 83 },
  { month: 'Septiembre', promedio: 85 },
  { month: 'Octubre', promedio: 84 },
  { month: 'Noviembre', promedio: 86 },
];


export const departmentDistribution: DepartmentDistribution[] = [
  { department: 'Informática', students: 77 },
  { department: 'Matemáticas', students: 78 },
  { department: 'Física', students: 95 },
  { department: 'Química', students: 0 },
  { department: 'Literatura', students: 0 },
];


export const attendanceData: AttendanceData[] = [
  { month: 'Marzo', attendance: 92 },
  { month: 'Abril', attendance: 94 },
  { month: 'Mayo', attendance: 91 },
  { month: 'Junio', attendance: 93 },
  { month: 'Julio', attendance: 89 },
  { month: 'Agosto', attendance: 95 },
  { month: 'Septiembre', attendance: 94 },
  { month: 'Octubre', attendance: 96 },
  { month: 'Noviembre', attendance: 95 },
];


export const enrollmentTrends: EnrollmentTrend[] = [
  { period: '1er Cuatrimestre 2023', students: 220 },
  { period: '2do Cuatrimestre 2023', students: 235 },
  { period: '1er Cuatrimestre 2024', students: 242 },
  { period: '2do Cuatrimestre 2024', students: 250 },
  { period: '1er Cuatrimestre 2025', students: 268 },
];


export const retentionRates: RetentionRate[] = [
  { year: '2021', retained: 88, dropped: 12 },
  { year: '2022', retained: 90, dropped: 10 },
  { year: '2023', retained: 92, dropped: 8 },
  { year: '2024', retained: 94, dropped: 6 },
  { year: '2025', retained: 95, dropped: 5 },
];


export const passFailRates: PassFailRate[] = [
  { subject: 'Introducción a la Programación', passed: 38, failed: 7, passRate: 84 },
  { subject: 'Estructuras de Datos', passed: 28, failed: 4, passRate: 88 },
  { subject: 'Análisis Matemático II', passed: 42, failed: 8, passRate: 84 },
  { subject: 'Álgebra Lineal', passed: 25, failed: 3, passRate: 89 },
  { subject: 'Física General I', passed: 52, failed: 8, passRate: 87 },
  { subject: 'Electromagnetismo', passed: 31, failed: 4, passRate: 89 },
];

// Calendar Data