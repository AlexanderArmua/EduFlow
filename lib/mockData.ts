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
    name: 'Dr. Martín Fernández',
    email: 'martin.fernandez@eduflow.edu.ar',
    department: 'Informática',
    phone: '+54 11 4567-8901',
    status: 'Active',
    subjects: ['INF101', 'INF301']
  },
  {
    id: '2',
    name: 'Prof. Ana María González',
    email: 'ana.gonzalez@eduflow.edu.ar',
    department: 'Matemáticas',
    phone: '+54 11 4567-8902',
    status: 'Active',
    subjects: ['MAT201', 'MAT301']
  },
  {
    id: '3',
    name: 'Dr. Santiago Rodríguez',
    email: 'santiago.rodriguez@eduflow.edu.ar',
    department: 'Física',
    phone: '+54 11 4567-8903',
    status: 'Active',
    subjects: ['FIS101', 'FIS202']
  },
  {
    id: '4',
    name: 'Prof. Carolina López',
    email: 'carolina.lopez@eduflow.edu.ar',
    department: 'Química',
    phone: '+54 11 4567-8904',
    status: 'Inactive',
    subjects: ['QUI101']
  },
  {
    id: '5',
    name: 'Dra. Florencia Giménez',
    email: 'florencia.gimenez@eduflow.edu.ar',
    department: 'Literatura',
    phone: '+54 11 4567-8905',
    status: 'Active',
    subjects: ['LIT201', 'LIT301']
  }
];

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

export const parentMessages: ParentMessage[] = [
  {
    id: '1',
    parentName: 'María Martínez',
    studentName: 'Juan Martínez',
    subject: 'Consulta sobre tarea',
    message: 'Hola profesor, mi hijo está teniendo dificultades para entender la tarea de esta semana. ¿Podría brindarle alguna aclaración? Muchas gracias.',
    date: '2024-11-14',
    status: 'Unread',
    priority: 'High'
  },
  {
    id: '2',
    parentName: 'Roberto Álvarez',
    studentName: 'Sofía Álvarez',
    subject: 'Agradecimiento',
    message: 'Muchas gracias por la ayuda extra que le brindó a Sofía. ¡Sus calificaciones han mejorado significativamente!',
    date: '2024-11-13',
    status: 'Read',
    priority: 'Low'
  },
  {
    id: '3',
    parentName: 'Laura Ramírez',
    studentName: 'Tomás Ramírez',
    subject: 'Solicitud de reunión',
    message: 'Buenos días, me gustaría coordinar una reunión para conversar sobre el progreso de Tomás en este cuatrimestre. ¿Cuándo le vendría bien?',
    date: '2024-11-12',
    status: 'Replied',
    priority: 'Medium'
  },
  {
    id: '4',
    parentName: 'Carlos Pérez',
    studentName: 'Valentina Pérez',
    subject: 'Carta de recomendación',
    message: 'Estimado profesor, Valentina está aplicando a universidades. ¿Estaría dispuesto a escribir una carta de recomendación? Le agradeceríamos mucho.',
    date: '2024-11-11',
    status: 'Unread',
    priority: 'High'
  },
  {
    id: '5',
    parentName: 'Patricia Sánchez',
    studentName: 'Mateo Sánchez',
    subject: 'Notificación de ausencia',
    message: 'Hola, le informo que Mateo va a faltar la semana próxima por un evento familiar. ¿Cómo puede recuperar el trabajo que se pierda?',
    date: '2024-11-10',
    status: 'Read',
    priority: 'Medium'
  }
];

// Analytics Data
export interface SubjectPerformance {
  subjectName: string;
  averageScore: number;
  totalStudents: number;
}

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

export const subjectPerformance: SubjectPerformance[] = [
  { subjectName: 'Introducción a la Programación', averageScore: 85, totalStudents: 45 },
  { subjectName: 'Estructuras de Datos', averageScore: 82, totalStudents: 32 },
  { subjectName: 'Análisis Matemático II', averageScore: 78, totalStudents: 50 },
  { subjectName: 'Álgebra Lineal', averageScore: 88, totalStudents: 28 },
  { subjectName: 'Física General I', averageScore: 80, totalStudents: 60 },
  { subjectName: 'Electromagnetismo', averageScore: 84, totalStudents: 35 },
];

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
