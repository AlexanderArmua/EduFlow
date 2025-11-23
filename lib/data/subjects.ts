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

export interface SubjectPerformance {
  subjectName: string;
  averageScore: number;
  totalStudents: number;
}

export const subjects: Subject[] = [
  {
    id: '1',
    name: 'Introducción a la Programación',
    code: 'INF101',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    credits: 4,
    semester: '2do Cuatrimestre 2024',
    students: 45
  },
  {
    id: '2',
    name: 'Estructuras de Datos',
    code: 'INF301',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    credits: 4,
    semester: '2do Cuatrimestre 2024',
    students: 32
  },
  {
    id: '3',
    name: 'Análisis Matemático II',
    code: 'MAT201',
    professorId: '2',
    professorName: 'Prof. Ana María González',
    credits: 3,
    semester: '2do Cuatrimestre 2024',
    students: 50
  },
  {
    id: '4',
    name: 'Álgebra Lineal',
    code: 'MAT301',
    professorId: '2',
    professorName: 'Prof. Ana María González',
    credits: 3,
    semester: '2do Cuatrimestre 2024',
    students: 28
  },
  {
    id: '5',
    name: 'Física General I',
    code: 'FIS101',
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    credits: 4,
    semester: '2do Cuatrimestre 2024',
    students: 60
  },
  {
    id: '6',
    name: 'Electromagnetismo',
    code: 'FIS202',
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    credits: 4,
    semester: '2do Cuatrimestre 2024',
    students: 35
  }
];


export const notes: Note[] = [
  {
    id: '1',
    subjectId: '1',
    studentName: 'Juan Martínez',
    noteType: 'Attendance',
    date: '2024-11-10',
    content: 'Ausente por turno médico'
  },
  {
    id: '2',
    subjectId: '1',
    studentName: 'Sofía Álvarez',
    noteType: 'Behavioral',
    date: '2024-11-12',
    content: 'Excelente participación en la discusión de clase'
  },
  {
    id: '3',
    subjectId: '2',
    studentName: 'Tomás Ramírez',
    noteType: 'Academic',
    date: '2024-11-08',
    content: 'Necesita apoyo adicional con conceptos de recursión'
  },
  {
    id: '4',
    subjectId: '3',
    studentName: 'Valentina Pérez',
    noteType: 'Achievement',
    date: '2024-11-11',
    content: 'Mejor calificación en el examen parcial'
  },
  {
    id: '5',
    subjectId: '5',
    studentName: 'Mateo Sánchez',
    noteType: 'Attendance',
    date: '2024-11-09',
    content: 'Llegada tarde - problemas de tránsito'
  }
];


export const scores: Score[] = [
  {
    id: '1',
    subjectId: '1',
    studentName: 'Juan Martínez',
    assignment: 'Examen Parcial',
    score: 85,
    maxScore: 100,
    date: '2024-10-15'
  },
  {
    id: '2',
    subjectId: '1',
    studentName: 'Sofía Álvarez',
    assignment: 'Examen Parcial',
    score: 92,
    maxScore: 100,
    date: '2024-10-15'
  },
  {
    id: '3',
    subjectId: '1',
    studentName: 'Tomás Ramírez',
    assignment: 'Trabajo Práctico 1',
    score: 78,
    maxScore: 100,
    date: '2024-09-20'
  },
  {
    id: '4',
    subjectId: '2',
    studentName: 'Valentina Pérez',
    assignment: 'Proyecto Final',
    score: 95,
    maxScore: 100,
    date: '2024-10-30'
  },
  {
    id: '5',
    subjectId: '3',
    studentName: 'Mateo Sánchez',
    assignment: 'Evaluación 1',
    score: 88,
    maxScore: 100,
    date: '2024-09-25'
  },
  {
    id: '6',
    subjectId: '1',
    studentName: 'Juan Martínez',
    assignment: 'Evaluación 2',
    score: 90,
    maxScore: 100,
    date: '2024-11-05'
  }
];


export const subjectPerformance: SubjectPerformance[] = [
  { subjectName: 'Introducción a la Programación', averageScore: 85, totalStudents: 45 },
  { subjectName: 'Estructuras de Datos', averageScore: 82, totalStudents: 32 },
  { subjectName: 'Análisis Matemático II', averageScore: 78, totalStudents: 50 },
  { subjectName: 'Álgebra Lineal', averageScore: 88, totalStudents: 28 },
  { subjectName: 'Física General I', averageScore: 80, totalStudents: 60 },
  { subjectName: 'Electromagnetismo', averageScore: 84, totalStudents: 35 },
];
