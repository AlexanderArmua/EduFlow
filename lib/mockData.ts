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
  readDate?: string;
  readBy?: string;
}

export interface Notification {
  id: string;
  type: 'message' | 'exam' | 'meeting' | 'grade' | 'system';
  title: string;
  description: string;
  date: string;
  read: boolean;
  link?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface MessageTemplate {
  id: string;
  name: string;
  category: 'general' | 'homework' | 'behavior' | 'absence' | 'achievement';
  subject: string;
  content: string;
}

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

export interface AchievementBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'academic' | 'attendance' | 'behavior' | 'participation';
  earnedDate?: string;
}

export interface ProfessorRating {
  id: string;
  professorId: string;
  studentId: string;
  studentName: string;
  rating: number; // 1-5 stars
  feedback: string;
  date: string;
  subjectCode: string;
}

export interface ProfessionalDevelopment {
  id: string;
  professorId: string;
  type: 'course' | 'certification' | 'conference' | 'publication' | 'workshop';
  title: string;
  description: string;
  institution: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  hours?: number;
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
    priority: 'Low',
    readDate: '2024-11-13 14:30',
    readBy: 'Dr. Martín Fernández'
  },
  {
    id: '3',
    parentName: 'Laura Ramírez',
    studentName: 'Tomás Ramírez',
    subject: 'Solicitud de reunión',
    message: 'Buenos días, me gustaría coordinar una reunión para conversar sobre el progreso de Tomás en este cuatrimestre. ¿Cuándo le vendría bien?',
    date: '2024-11-12',
    status: 'Replied',
    priority: 'Medium',
    readDate: '2024-11-12 10:15',
    readBy: 'Dr. Martín Fernández'
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
    priority: 'Medium',
    readDate: '2024-11-10 16:45',
    readBy: 'Dr. Martín Fernández'
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

export interface EnrollmentTrend {
  period: string;
  students: number;
}

export const enrollmentTrends: EnrollmentTrend[] = [
  { period: '1er Cuatrimestre 2023', students: 220 },
  { period: '2do Cuatrimestre 2023', students: 235 },
  { period: '1er Cuatrimestre 2024', students: 242 },
  { period: '2do Cuatrimestre 2024', students: 250 },
  { period: '1er Cuatrimestre 2025', students: 268 },
];

export interface RetentionRate {
  year: string;
  retained: number;
  dropped: number;
}

export const retentionRates: RetentionRate[] = [
  { year: '2021', retained: 88, dropped: 12 },
  { year: '2022', retained: 90, dropped: 10 },
  { year: '2023', retained: 92, dropped: 8 },
  { year: '2024', retained: 94, dropped: 6 },
  { year: '2025', retained: 95, dropped: 5 },
];

export interface PassFailRate {
  subject: string;
  passed: number;
  failed: number;
  passRate: number;
}

export const passFailRates: PassFailRate[] = [
  { subject: 'Introducción a la Programación', passed: 38, failed: 7, passRate: 84 },
  { subject: 'Estructuras de Datos', passed: 28, failed: 4, passRate: 88 },
  { subject: 'Análisis Matemático II', passed: 42, failed: 8, passRate: 84 },
  { subject: 'Álgebra Lineal', passed: 25, failed: 3, passRate: 89 },
  { subject: 'Física General I', passed: 52, failed: 8, passRate: 87 },
  { subject: 'Electromagnetismo', passed: 31, failed: 4, passRate: 89 },
];

// Calendar Data
export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  type: 'exam' | 'holiday' | 'meeting' | 'academic' | 'break';
  description: string;
  location?: string;
  subjectCode?: string;
  subjectId?: string;
  professorName?: string;
  professorId?: string;
  reminderEnabled?: boolean;
  reminderDays?: number; // Days before event to send reminder
}

export interface EventReminder {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  reminderDate: string;
  dismissed: boolean;
  type: 'exam' | 'holiday' | 'meeting' | 'academic' | 'break';
}

export const calendarEvents: CalendarEvent[] = [
  // Exams
  {
    id: '1',
    title: 'Examen Parcial - Introducción a la Programación',
    date: '2025-11-20',
    type: 'exam',
    description: 'Primer examen parcial del cuatrimestre',
    location: 'Aula 101',
    subjectCode: 'INF101',
    subjectId: '1',
    professorName: 'Dr. Martín Fernández',
    professorId: '1',
  },
  {
    id: '2',
    title: 'Examen Final - Análisis Matemático II',
    date: '2025-12-05',
    type: 'exam',
    description: 'Examen final del cuatrimestre',
    location: 'Aula Magna',
    subjectCode: 'MAT201',
    subjectId: '3',
    professorName: 'Prof. Ana María González',
    professorId: '2',
  },
  {
    id: '3',
    title: 'Examen Parcial - Física General I',
    date: '2025-11-25',
    type: 'exam',
    description: 'Segundo examen parcial',
    location: 'Laboratorio 3',
    subjectCode: 'FIS101',
    subjectId: '5',
    professorName: 'Dr. Santiago Rodríguez',
    professorId: '3',
  },
  {
    id: '4',
    title: 'Recuperatorio - Estructuras de Datos',
    date: '2025-12-12',
    type: 'exam',
    description: 'Examen recuperatorio para alumnos ausentes',
    location: 'Aula 205',
    subjectCode: 'INF301',
    subjectId: '2',
    professorName: 'Dr. Martín Fernández',
    professorId: '1',
  },
  {
    id: '16',
    title: 'Examen Parcial - Álgebra Lineal',
    date: '2025-11-18',
    type: 'exam',
    description: 'Primer examen parcial',
    location: 'Aula 302',
    subjectCode: 'MAT301',
    subjectId: '4',
    professorName: 'Prof. Ana María González',
    professorId: '2',
  },
  {
    id: '17',
    title: 'Examen Final - Electromagnetismo',
    date: '2025-12-08',
    type: 'exam',
    description: 'Examen final del cuatrimestre',
    location: 'Laboratorio 2',
    subjectCode: 'FIS202',
    subjectId: '6',
    professorName: 'Dr. Santiago Rodríguez',
    professorId: '3',
  },

  // Holidays and Breaks
  {
    id: '5',
    title: 'Día de la Soberanía Nacional',
    date: '2025-11-20',
    type: 'holiday',
    description: 'Feriado nacional - No hay clases',
  },
  {
    id: '6',
    title: 'Receso de Verano',
    date: '2025-12-20',
    endDate: '2025-12-31',
    type: 'break',
    description: 'Receso de fin de año - Reanudación de clases en marzo',
  },
  {
    id: '7',
    title: 'Navidad',
    date: '2025-12-25',
    type: 'holiday',
    description: 'Feriado nacional - No hay clases',
  },
  {
    id: '8',
    title: 'Día de la Inmaculada Concepción',
    date: '2025-12-08',
    type: 'holiday',
    description: 'Feriado nacional - No hay clases',
  },

  // Parent-Teacher Meetings
  {
    id: '9',
    title: 'Reunión de Padres - Informática',
    date: '2025-11-22',
    type: 'meeting',
    description: 'Reunión informativa sobre el progreso de los estudiantes',
    location: 'Salón de Actos',
    professorName: 'Dr. Martín Fernández',
    professorId: '1',
    reminderEnabled: true,
    reminderDays: 2,
  },
  {
    id: '10',
    title: 'Reunión de Padres - Matemáticas',
    date: '2025-11-28',
    type: 'meeting',
    description: 'Entrega de boletines y consultas individuales',
    location: 'Aula 301',
    professorName: 'Prof. Ana María González',
    professorId: '2',
  },
  {
    id: '11',
    title: 'Reunión de Padres - Física',
    date: '2025-12-03',
    type: 'meeting',
    description: 'Revisión del desempeño académico del cuatrimestre',
    location: 'Laboratorio 1',
    professorName: 'Dr. Santiago Rodríguez',
    professorId: '3',
  },
  {
    id: '18',
    title: 'Reunión General de Padres',
    date: '2025-11-15',
    type: 'meeting',
    description: 'Reunión general de inicio de cuatrimestre',
    location: 'Aula Magna',
  },
  {
    id: '19',
    title: 'Consultas Individuales - Todas las materias',
    date: '2025-12-13',
    type: 'meeting',
    description: 'Horario de consultas con todos los profesores',
    location: 'Oficinas de Profesores',
  },

  // Academic Events
  {
    id: '12',
    title: 'Inicio de Inscripciones',
    date: '2025-11-18',
    endDate: '2025-11-29',
    type: 'academic',
    description: 'Período de inscripción para el próximo cuatrimestre',
    location: 'Oficina de Alumnos',
  },
  {
    id: '13',
    title: 'Cierre del Cuatrimestre',
    date: '2025-12-15',
    type: 'academic',
    description: 'Último día de clases del 2do cuatrimestre 2025',
  },
  {
    id: '14',
    title: 'Coloquio de Fin de Año',
    date: '2025-12-10',
    type: 'academic',
    description: 'Presentación de trabajos finales de todas las carreras',
    location: 'Aula Magna',
  },
  {
    id: '15',
    title: 'Feria de Ciencias',
    date: '2025-11-30',
    type: 'academic',
    description: 'Exhibición de proyectos científicos de los estudiantes',
    location: 'Patio Central',
  },
  {
    id: '20',
    title: 'Jornada de Orientación Vocacional',
    date: '2025-11-21',
    type: 'academic',
    description: 'Charlas informativas sobre carreras universitarias',
    location: 'Salón de Actos',
  },
  {
    id: '21',
    title: 'Seminario de Tecnología',
    date: '2025-11-27',
    type: 'academic',
    description: 'Seminario sobre tendencias en tecnología y programación',
    location: 'Auditorio Principal',
  },
  {
    id: '22',
    title: 'Entrega de Diplomas',
    date: '2025-12-18',
    type: 'academic',
    description: 'Ceremonia de entrega de diplomas y certificados',
    location: 'Aula Magna',
  },
];

// Event Reminders
export const eventReminders: EventReminder[] = [
  {
    id: 'r1',
    eventId: '1',
    eventTitle: 'Examen Final - Programación Avanzada',
    eventDate: '2025-11-25',
    reminderDate: '2025-11-23',
    dismissed: false,
    type: 'exam',
  },
  {
    id: 'r2',
    eventId: '9',
    eventTitle: 'Reunión de Padres - Informática',
    eventDate: '2025-11-22',
    reminderDate: '2025-11-20',
    dismissed: false,
    type: 'meeting',
  },
  {
    id: 'r3',
    eventId: '2',
    eventTitle: 'Examen Parcial - Álgebra Lineal',
    eventDate: '2025-11-29',
    reminderDate: '2025-11-27',
    dismissed: true,
    type: 'exam',
  },
];

// Notifications Data
export const notifications: Notification[] = [
  {
    id: '1',
    type: 'message',
    title: 'Nuevo mensaje de María Martínez',
    description: 'Consulta sobre tarea de programación',
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    read: false,
    link: '/communications',
    priority: 'high',
  },
  {
    id: '2',
    type: 'exam',
    title: 'Examen próximo - Álgebra Lineal',
    description: 'El examen parcial es en 3 días',
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    read: false,
    link: '/calendar',
    priority: 'high',
  },
  {
    id: '3',
    type: 'meeting',
    title: 'Reunión de Padres - Informática',
    description: 'Reunión programada para el 22 de noviembre',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    read: false,
    link: '/calendar',
    priority: 'medium',
  },
  {
    id: '4',
    type: 'grade',
    title: 'Nueva calificación registrada',
    description: 'Juan Martínez - Evaluación 2: 90/100',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    read: true,
    link: '/subjects/1',
    priority: 'low',
  },
  {
    id: '5',
    type: 'message',
    title: 'Nuevo mensaje de Carlos Pérez',
    description: 'Solicitud de carta de recomendación',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    read: false,
    link: '/communications',
    priority: 'high',
  },
  {
    id: '6',
    type: 'system',
    title: 'Período de inscripciones abierto',
    description: 'Inscripciones para el próximo cuatrimestre hasta el 29/11',
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    read: true,
    link: '/dashboard',
    priority: 'medium',
  },
  {
    id: '7',
    type: 'exam',
    title: 'Examen Parcial - Introducción a la Programación',
    description: 'Programado para el 20 de noviembre',
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    read: true,
    link: '/calendar',
    priority: 'high',
  },
  {
    id: '8',
    type: 'meeting',
    title: 'Reunión General de Padres',
    description: 'Reunión general el 15 de noviembre',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    read: true,
    link: '/calendar',
    priority: 'medium',
  },
];

// Message Templates
export const messageTemplates: MessageTemplate[] = [
  {
    id: '1',
    name: 'Agradecimiento General',
    category: 'general',
    subject: 'Gracias por su mensaje',
    content: 'Estimado/a padre/madre,\n\nGracias por ponerse en contacto conmigo. He recibido su mensaje y me pondré en contacto con usted a la brevedad para discutir este asunto.\n\nCordialmente,\nProfesor/a',
  },
  {
    id: '2',
    name: 'Consulta sobre Tarea',
    category: 'homework',
    subject: 'Re: Consulta sobre tarea',
    content: 'Estimado/a padre/madre,\n\nCon respecto a su consulta sobre la tarea, le sugiero que su hijo/a revise los siguientes recursos:\n\n1. Material de clase disponible en el aula virtual\n2. Capítulos del libro de texto\n3. Ejemplos trabajados en clase\n\nSi persisten las dificultades, puede agendar una tutoría individual.\n\nSaludos cordiales,\nProfesor/a',
  },
  {
    id: '3',
    name: 'Reporte de Buen Comportamiento',
    category: 'behavior',
    subject: 'Felicitaciones por el comportamiento',
    content: 'Estimado/a padre/madre,\n\nQuiero felicitarles por el excelente comportamiento de su hijo/a en clase. Ha demostrado respeto, colaboración y una actitud positiva que contribuye al ambiente de aprendizaje.\n\nContinúen con el gran trabajo.\n\nSaludos,\nProfesor/a',
  },
  {
    id: '4',
    name: 'Reporte de Comportamiento a Mejorar',
    category: 'behavior',
    subject: 'Necesitamos hablar sobre el comportamiento',
    content: 'Estimado/a padre/madre,\n\nMe gustaría programar una reunión para discutir algunos aspectos del comportamiento de su hijo/a en clase que requieren atención. He notado algunos patrones que creo podemos abordar juntos para mejorar la experiencia de aprendizaje.\n\n¿Podríamos coordinar una reunión esta semana?\n\nCordialmente,\nProfesor/a',
  },
  {
    id: '5',
    name: 'Justificación de Ausencia',
    category: 'absence',
    subject: 'Re: Notificación de ausencia',
    content: 'Estimado/a padre/madre,\n\nGracias por informarme sobre la ausencia de su hijo/a. He tomado nota y le compartiré el material de clase que se perdió. Por favor, coordine con su hijo/a para que se ponga al día con las siguientes tareas:\n\n1. [Tarea/Lectura]\n2. [Ejercicios]\n\nCualquier consulta, estoy a disposición.\n\nSaludos,\nProfesor/a',
  },
  {
    id: '6',
    name: 'Felicitaciones por Logro Académico',
    category: 'achievement',
    subject: 'Felicitaciones por el excelente desempeño',
    content: 'Estimado/a padre/madre,\n\n¡Felicitaciones! Su hijo/a ha demostrado un desempeño sobresaliente en el último examen/proyecto. Su dedicación y esfuerzo son evidentes y dignos de reconocimiento.\n\nSigan apoyándolo/a en este camino de éxito académico.\n\nCon alegría,\nProfesor/a',
  },
  {
    id: '7',
    name: 'Ofrecer Ayuda Adicional',
    category: 'homework',
    subject: 'Apoyo académico disponible',
    content: 'Estimado/a padre/madre,\n\nHe notado que su hijo/a podría beneficiarse de apoyo adicional en algunos temas. Ofrezco las siguientes opciones:\n\n1. Tutorías después de clase (Martes y Jueves 15:00-16:00)\n2. Material de refuerzo adicional\n3. Trabajo en grupos de estudio\n\nPor favor, háganme saber qué opción prefieren.\n\nSaludos,\nProfesor/a',
  },
  {
    id: '8',
    name: 'Carta de Recomendación - Respuesta Positiva',
    category: 'general',
    subject: 'Re: Solicitud de carta de recomendación',
    content: 'Estimado/a padre/madre,\n\nSería un honor escribir una carta de recomendación para su hijo/a. Ha sido un placer tenerlo/a en mi clase y puedo dar fe de sus habilidades académicas y personales.\n\nPor favor, envíenme los siguientes detalles:\n1. Fecha límite de entrega\n2. Institución/programa al que aplica\n3. Cualquier información adicional relevante\n\nCordialmente,\nProfesor/a',
  },
];

// Students Data
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
export const professorRatings: ProfessorRating[] = [
  {
    id: '1',
    professorId: '1',
    studentId: '1',
    studentName: 'Juan Martínez',
    rating: 5,
    feedback: 'Excelente profesor, explica muy claramente los conceptos de programación.',
    date: '2024-10-15',
    subjectCode: 'INF101'
  },
  {
    id: '2',
    professorId: '1',
    studentId: '2',
    studentName: 'Sofía Álvarez',
    rating: 5,
    feedback: 'Muy buen profesor, siempre dispuesto a ayudar con las dudas.',
    date: '2024-10-20',
    subjectCode: 'INF101'
  },
  {
    id: '3',
    professorId: '1',
    studentId: '3',
    studentName: 'Tomás Ramírez',
    rating: 4,
    feedback: 'Me gusta su metodología de enseñanza, aunque a veces va muy rápido.',
    date: '2024-10-18',
    subjectCode: 'INF301'
  },
  {
    id: '4',
    professorId: '1',
    studentId: '4',
    studentName: 'Valentina Pérez',
    rating: 5,
    feedback: 'El mejor profesor que he tenido. Hace que la programación sea fácil de entender.',
    date: '2024-10-22',
    subjectCode: 'INF301'
  },
  {
    id: '5',
    professorId: '1',
    studentId: '5',
    studentName: 'Mateo Sánchez',
    rating: 4,
    feedback: 'Buen profesor, sus clases son interesantes y prácticas.',
    date: '2024-10-25',
    subjectCode: 'INF101'
  },
  {
    id: '6',
    professorId: '2',
    studentId: '1',
    studentName: 'Juan Martínez',
    rating: 5,
    feedback: 'Profesora excelente, muy paciente y clara en sus explicaciones matemáticas.',
    date: '2024-10-16',
    subjectCode: 'MAT201'
  },
  {
    id: '7',
    professorId: '2',
    studentId: '2',
    studentName: 'Sofía Álvarez',
    rating: 4,
    feedback: 'Buena profesora, aunque a veces los ejercicios son muy difíciles.',
    date: '2024-10-21',
    subjectCode: 'MAT201'
  },
  {
    id: '8',
    professorId: '2',
    studentId: '3',
    studentName: 'Tomás Ramírez',
    rating: 5,
    feedback: 'Me encanta cómo enseña matemáticas, hace que todo tenga sentido.',
    date: '2024-10-19',
    subjectCode: 'MAT301'
  },
  {
    id: '9',
    professorId: '3',
    studentId: '1',
    studentName: 'Juan Martínez',
    rating: 4,
    feedback: 'Buen profesor de física, los experimentos en clase son muy útiles.',
    date: '2024-10-17',
    subjectCode: 'FIS101'
  },
  {
    id: '10',
    professorId: '3',
    studentId: '4',
    studentName: 'Valentina Pérez',
    rating: 5,
    feedback: 'Explica la física de manera muy interesante y fácil de comprender.',
    date: '2024-10-23',
    subjectCode: 'FIS101'
  },
  {
    id: '11',
    professorId: '3',
    studentId: '5',
    studentName: 'Mateo Sánchez',
    rating: 4,
    feedback: 'Me gusta su enfoque práctico para enseñar física.',
    date: '2024-10-26',
    subjectCode: 'FIS202'
  },
  {
    id: '12',
    professorId: '4',
    studentId: '2',
    studentName: 'Sofía Álvarez',
    rating: 5,
    feedback: 'Excelente profesora de química, sus clases de laboratorio son increíbles.',
    date: '2024-10-24',
    subjectCode: 'QUI101'
  },
  {
    id: '13',
    professorId: '4',
    studentId: '3',
    studentName: 'Tomás Ramírez',
    rating: 5,
    feedback: 'Profesora muy dedicada, siempre está disponible para consultas.',
    date: '2024-10-20',
    subjectCode: 'QUI201'
  },
  {
    id: '14',
    professorId: '5',
    studentId: '1',
    studentName: 'Juan Martínez',
    rating: 4,
    feedback: 'Buena profesora de historia, las clases son muy informativas.',
    date: '2024-10-18',
    subjectCode: 'HIS101'
  },
  {
    id: '15',
    professorId: '5',
    studentId: '4',
    studentName: 'Valentina Pérez',
    rating: 3,
    feedback: 'Las clases a veces son un poco monótonas, pero el contenido es bueno.',
    date: '2024-10-21',
    subjectCode: 'HIS201'
  },
];

// Professional Development Records
export const professionalDevelopment: ProfessionalDevelopment[] = [
  {
    id: '1',
    professorId: '1',
    type: 'certification',
    title: 'Advanced Python Programming Certification',
    description: 'Certificación avanzada en Python con enfoque en machine learning y análisis de datos',
    institution: 'Universidad de Buenos Aires',
    date: '2024-08-15',
    status: 'completed',
    hours: 40
  },
  {
    id: '2',
    professorId: '1',
    type: 'conference',
    title: 'Latin American Computer Science Conference 2024',
    description: 'Conferencia anual sobre avances en ciencias de la computación',
    institution: 'CLEI',
    date: '2024-09-20',
    status: 'completed',
    hours: 24
  },
  {
    id: '3',
    professorId: '1',
    type: 'publication',
    title: 'Modern Approaches to Teaching Programming',
    description: 'Artículo sobre metodologías innovadoras en la enseñanza de programación',
    institution: 'Revista Argentina de Educación',
    date: '2024-07-01',
    status: 'completed'
  },
  {
    id: '4',
    professorId: '1',
    type: 'workshop',
    title: 'AI in Education Workshop',
    description: 'Taller sobre integración de inteligencia artificial en procesos educativos',
    institution: 'EdTech Argentina',
    date: '2024-11-10',
    status: 'in-progress',
    hours: 16
  },
  {
    id: '5',
    professorId: '1',
    type: 'course',
    title: 'Cloud Computing Architecture',
    description: 'Curso sobre arquitectura y diseño de sistemas en la nube',
    institution: 'Coursera - Google Cloud',
    date: '2025-01-15',
    status: 'planned',
    hours: 30
  },
  {
    id: '6',
    professorId: '2',
    type: 'certification',
    title: 'Advanced Mathematics Teaching Certification',
    description: 'Certificación en metodologías avanzadas de enseñanza matemática',
    institution: 'Universidad Nacional de La Plata',
    date: '2024-06-20',
    status: 'completed',
    hours: 60
  },
  {
    id: '7',
    professorId: '2',
    type: 'conference',
    title: 'International Mathematics Education Conference',
    description: 'Conferencia internacional sobre educación matemática',
    institution: 'ICME',
    date: '2024-08-05',
    status: 'completed',
    hours: 32
  },
  {
    id: '8',
    professorId: '2',
    type: 'publication',
    title: 'Engaging Students in Abstract Algebra',
    description: 'Investigación sobre estrategias para hacer el álgebra abstracta más accesible',
    institution: 'Journal of Mathematical Education',
    date: '2024-09-15',
    status: 'completed'
  },
  {
    id: '9',
    professorId: '2',
    type: 'workshop',
    title: 'Technology Integration in Mathematics',
    description: 'Taller sobre uso de tecnología en la enseñanza de matemáticas',
    institution: 'Math Teachers Association',
    date: '2024-10-28',
    status: 'in-progress',
    hours: 12
  },
  {
    id: '10',
    professorId: '3',
    type: 'certification',
    title: 'Quantum Physics Education Certificate',
    description: 'Certificado en métodos de enseñanza de física cuántica',
    institution: 'MIT Online',
    date: '2024-07-30',
    status: 'completed',
    hours: 50
  },
  {
    id: '11',
    professorId: '3',
    type: 'conference',
    title: 'South American Physics Symposium',
    description: 'Simposio sobre avances en física y su enseñanza',
    institution: 'SAPHYS',
    date: '2024-09-12',
    status: 'completed',
    hours: 20
  },
  {
    id: '12',
    professorId: '3',
    type: 'workshop',
    title: 'Laboratory Safety and Innovation',
    description: 'Taller sobre seguridad e innovación en laboratorios de física',
    institution: 'Safety First Education',
    date: '2024-11-05',
    status: 'in-progress',
    hours: 8
  },
  {
    id: '13',
    professorId: '4',
    type: 'certification',
    title: 'Green Chemistry Certification',
    description: 'Certificación en química verde y procesos sostenibles',
    institution: 'Universidad de Córdoba',
    date: '2024-08-25',
    status: 'completed',
    hours: 45
  },
  {
    id: '14',
    professorId: '4',
    type: 'publication',
    title: 'Sustainable Practices in Chemistry Labs',
    description: 'Artículo sobre prácticas sostenibles en laboratorios educativos',
    institution: 'Green Chemistry Journal',
    date: '2024-10-01',
    status: 'completed'
  },
  {
    id: '15',
    professorId: '4',
    type: 'conference',
    title: 'International Chemistry Education Conference',
    description: 'Conferencia sobre innovación en educación química',
    institution: 'ICEC',
    date: '2024-11-18',
    status: 'planned',
    hours: 24
  },
  {
    id: '16',
    professorId: '5',
    type: 'course',
    title: 'Digital History Teaching Methods',
    description: 'Curso sobre métodos digitales para enseñanza de historia',
    institution: 'Universidad de Rosario',
    date: '2024-07-10',
    status: 'completed',
    hours: 35
  },
  {
    id: '17',
    professorId: '5',
    type: 'workshop',
    title: 'Interactive History Presentations',
    description: 'Taller sobre presentaciones interactivas en clases de historia',
    institution: 'History Teachers Network',
    date: '2024-09-08',
    status: 'completed',
    hours: 10
  },
];

// Class Schedule (Weekly recurring classes)
export interface ClassSchedule {
  id: string;
  subjectId: string; // Links to subjects table
  subjectCode: string;
  subjectName: string;
  professorId: string;
  professorName: string;
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 6 = Saturday
  startTime: string; // HH:MM format
  endTime: string;
  location: string;
  color: string;
}

export const classSchedules: ClassSchedule[] = [
  // Monday
  {
    id: 'cs1',
    subjectId: '1',
    subjectCode: 'INF101',
    subjectName: 'Introducción a la Programación',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    dayOfWeek: 1,
    startTime: '08:00',
    endTime: '10:00',
    location: 'Aula 101',
    color: '#3B82F6'
  },
  {
    id: 'cs2',
    subjectId: '3',
    subjectCode: 'MAT201',
    subjectName: 'Análisis Matemático II',
    professorId: '2',
    professorName: 'Prof. Ana María González',
    dayOfWeek: 1,
    startTime: '10:00',
    endTime: '12:00',
    location: 'Aula 203',
    color: '#10B981'
  },
  {
    id: 'cs3',
    subjectId: '5',
    subjectCode: 'FIS101',
    subjectName: 'Física I',
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    dayOfWeek: 1,
    startTime: '14:00',
    endTime: '16:00',
    location: 'Lab. Física A',
    color: '#F59E0B'
  },
  // Tuesday
  {
    id: 'cs4',
    subjectId: '1',
    subjectCode: 'QUI101',
    subjectName: 'Química General',
    professorId: '4',
    professorName: 'Prof. Carolina López',
    dayOfWeek: 2,
    startTime: '08:00',
    endTime: '10:00',
    location: 'Lab. Química 1',
    color: '#8B5CF6'
  },
  {
    id: 'cs5',
    subjectId: '2',
    subjectCode: 'INF301',
    subjectName: 'Estructuras de Datos',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    dayOfWeek: 2,
    startTime: '10:00',
    endTime: '12:00',
    location: 'Aula 105',
    color: '#3B82F6'
  },
  {
    id: 'cs6',
    subjectId: '1',
    subjectCode: 'HIS101',
    subjectName: 'Historia Argentina',
    professorId: '5',
    professorName: 'Prof. Laura Martínez',
    dayOfWeek: 2,
    startTime: '14:00',
    endTime: '16:00',
    location: 'Aula 301',
    color: '#EC4899'
  },
  // Wednesday
  {
    id: 'cs7',
    subjectId: '4',
    subjectCode: 'MAT301',
    subjectName: 'Álgebra Lineal',
    professorId: '2',
    professorName: 'Prof. Ana María González',
    dayOfWeek: 3,
    startTime: '08:00',
    endTime: '10:00',
    location: 'Aula 204',
    color: '#10B981'
  },
  {
    id: 'cs8',
    subjectId: '6',
    subjectCode: 'FIS202',
    subjectName: 'Electromagnetismo',
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    dayOfWeek: 3,
    startTime: '10:00',
    endTime: '12:00',
    location: 'Lab. Física B',
    color: '#F59E0B'
  },
  {
    id: 'cs9',
    subjectId: '1',
    subjectCode: 'INF101',
    subjectName: 'Introducción a la Programación',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    dayOfWeek: 3,
    startTime: '14:00',
    endTime: '16:00',
    location: 'Lab. Computación',
    color: '#3B82F6'
  },
  // Thursday
  {
    id: 'cs10',
    subjectId: '1',
    subjectCode: 'QUI201',
    subjectName: 'Química Orgánica',
    professorId: '4',
    professorName: 'Prof. Carolina López',
    dayOfWeek: 4,
    startTime: '08:00',
    endTime: '10:00',
    location: 'Lab. Química 2',
    color: '#8B5CF6'
  },
  {
    id: 'cs11',
    subjectId: '1',
    subjectCode: 'HIS201',
    subjectName: 'Historia Mundial',
    professorId: '5',
    professorName: 'Prof. Laura Martínez',
    dayOfWeek: 4,
    startTime: '10:00',
    endTime: '12:00',
    location: 'Aula 302',
    color: '#EC4899'
  },
  {
    id: 'cs12',
    subjectId: '3',
    subjectCode: 'MAT201',
    subjectName: 'Análisis Matemático II',
    professorId: '2',
    professorName: 'Prof. Ana María González',
    dayOfWeek: 4,
    startTime: '14:00',
    endTime: '16:00',
    location: 'Aula 203',
    color: '#10B981'
  },
  // Friday
  {
    id: 'cs13',
    subjectId: '2',
    subjectCode: 'INF301',
    subjectName: 'Estructuras de Datos',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    dayOfWeek: 5,
    startTime: '08:00',
    endTime: '10:00',
    location: 'Aula 106',
    color: '#3B82F6'
  },
  {
    id: 'cs14',
    subjectId: '5',
    subjectCode: 'FIS101',
    subjectName: 'Física I',
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    dayOfWeek: 5,
    startTime: '10:00',
    endTime: '12:00',
    location: 'Aula 401',
    color: '#F59E0B'
  },
];

// Professor Availability
export interface ProfessorAvailability {
  id: string;
  professorId: string;
  professorName: string;
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  startTime: string;
  endTime: string;
  type: 'office-hours' | 'available' | 'busy';
  notes?: string;
}

export const professorAvailability: ProfessorAvailability[] = [
  // Dr. Martín Fernández
  {
    id: 'pa1',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    dayOfWeek: 1,
    startTime: '12:00',
    endTime: '14:00',
    type: 'office-hours',
    notes: 'Horario de consultas - Oficina 201'
  },
  {
    id: 'pa2',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    dayOfWeek: 3,
    startTime: '16:00',
    endTime: '18:00',
    type: 'office-hours',
    notes: 'Horario de consultas - Oficina 201'
  },
  {
    id: 'pa3',
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    dayOfWeek: 5,
    startTime: '12:00',
    endTime: '14:00',
    type: 'available',
    notes: 'Disponible para reuniones'
  },
  // Prof. Ana María González
  {
    id: 'pa4',
    professorId: '2',
    professorName: 'Prof. Ana María González',
    dayOfWeek: 2,
    startTime: '12:00',
    endTime: '14:00',
    type: 'office-hours',
    notes: 'Consultas de Matemáticas - Oficina 305'
  },
  {
    id: 'pa5',
    professorId: '2',
    professorName: 'Prof. Ana María González',
    dayOfWeek: 4,
    startTime: '16:00',
    endTime: '18:00',
    type: 'office-hours',
    notes: 'Consultas de Matemáticas - Oficina 305'
  },
  // Dr. Santiago Rodríguez
  {
    id: 'pa6',
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    dayOfWeek: 2,
    startTime: '16:00',
    endTime: '18:00',
    type: 'office-hours',
    notes: 'Consultas de Física - Lab. Física'
  },
  {
    id: 'pa7',
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    dayOfWeek: 5,
    startTime: '14:00',
    endTime: '16:00',
    type: 'office-hours',
    notes: 'Consultas de Física - Lab. Física'
  },
  // Prof. Carolina López
  {
    id: 'pa8',
    professorId: '4',
    professorName: 'Prof. Carolina López',
    dayOfWeek: 1,
    startTime: '16:00',
    endTime: '18:00',
    type: 'office-hours',
    notes: 'Consultas de Química - Lab. Química'
  },
  {
    id: 'pa9',
    professorId: '4',
    professorName: 'Prof. Carolina López',
    dayOfWeek: 3,
    startTime: '12:00',
    endTime: '14:00',
    type: 'available',
    notes: 'Disponible para reuniones'
  },
  // Prof. Laura Martínez
  {
    id: 'pa10',
    professorId: '5',
    professorName: 'Prof. Laura Martínez',
    dayOfWeek: 3,
    startTime: '16:00',
    endTime: '18:00',
    type: 'office-hours',
    notes: 'Consultas de Historia - Oficina 402'
  },
  {
    id: 'pa11',
    professorId: '5',
    professorName: 'Prof. Laura Martínez',
    dayOfWeek: 5,
    startTime: '14:00',
    endTime: '16:00',
    type: 'office-hours',
    notes: 'Consultas de Historia - Oficina 402'
  },
];

// Professor Performance Data
export interface ProfessorPerformance {
  professorId: string;
  professorName: string;
  department: string;
  totalStudents: number;
  totalSubjects: number;
  teachingHoursPerWeek: number;
  averageRating: number;
  totalRatings: number;
  classPerformance: {
    subjectCode: string;
    subjectName: string;
    averageGrade: number;
    passRate: number;
    students: number;
  }[];
  professionalDevelopment: {
    id: string;
    title: string;
    type: 'course' | 'seminar' | 'conference' | 'workshop';
    date: string;
    status: 'completed' | 'in-progress' | 'planned';
  }[];
}

export const professorPerformance: ProfessorPerformance[] = [
  {
    professorId: '1',
    professorName: 'Dr. Martín Fernández',
    department: 'Informática',
    totalStudents: 75,
    totalSubjects: 2,
    teachingHoursPerWeek: 12,
    averageRating: 4.6,
    totalRatings: 45,
    classPerformance: [
      {
        subjectCode: 'INF301',
        subjectName: 'Programación Avanzada',
        averageGrade: 85,
        passRate: 92,
        students: 40,
      },
      {
        subjectCode: 'INF101',
        subjectName: 'Introducción a la Programación',
        averageGrade: 82,
        passRate: 88,
        students: 35,
      },
    ],
    professionalDevelopment: [
      {
        id: 'pd1',
        title: 'Modern JavaScript Frameworks',
        type: 'course',
        date: '2024-09-15',
        status: 'completed',
      },
      {
        id: 'pd2',
        title: 'AI in Education Conference',
        type: 'conference',
        date: '2024-11-20',
        status: 'planned',
      },
      {
        id: 'pd3',
        title: 'Teaching Best Practices Workshop',
        type: 'workshop',
        date: '2024-10-10',
        status: 'completed',
      },
    ],
  },
  {
    professorId: '2',
    professorName: 'Prof. Ana María González',
    department: 'Matemáticas',
    totalStudents: 90,
    totalSubjects: 3,
    teachingHoursPerWeek: 15,
    averageRating: 4.8,
    totalRatings: 52,
    classPerformance: [
      {
        subjectCode: 'MAT201',
        subjectName: 'Álgebra Lineal',
        averageGrade: 88,
        passRate: 94,
        students: 35,
      },
      {
        subjectCode: 'MAT301',
        subjectName: 'Cálculo Diferencial',
        averageGrade: 86,
        passRate: 91,
        students: 30,
      },
      {
        subjectCode: 'MAT101',
        subjectName: 'Matemática Básica',
        averageGrade: 84,
        passRate: 89,
        students: 25,
      },
    ],
    professionalDevelopment: [
      {
        id: 'pd4',
        title: 'Advanced Mathematics Pedagogy',
        type: 'seminar',
        date: '2024-08-22',
        status: 'completed',
      },
      {
        id: 'pd5',
        title: 'Online Teaching Methods',
        type: 'course',
        date: '2024-10-15',
        status: 'in-progress',
      },
    ],
  },
  {
    professorId: '3',
    professorName: 'Dr. Santiago Rodríguez',
    department: 'Física',
    totalStudents: 65,
    totalSubjects: 2,
    teachingHoursPerWeek: 10,
    averageRating: 4.5,
    totalRatings: 38,
    classPerformance: [
      {
        subjectCode: 'FIS201',
        subjectName: 'Mecánica Clásica',
        averageGrade: 83,
        passRate: 87,
        students: 35,
      },
      {
        subjectCode: 'FIS301',
        subjectName: 'Electromagnetismo',
        averageGrade: 81,
        passRate: 89,
        students: 30,
      },
    ],
    professionalDevelopment: [
      {
        id: 'pd6',
        title: 'Physics Education Research',
        type: 'conference',
        date: '2024-07-10',
        status: 'completed',
      },
      {
        id: 'pd7',
        title: 'Lab Safety and Management',
        type: 'workshop',
        date: '2024-09-05',
        status: 'completed',
      },
      {
        id: 'pd8',
        title: 'Quantum Mechanics Teaching',
        type: 'seminar',
        date: '2024-12-01',
        status: 'planned',
      },
    ],
  },
  {
    professorId: '4',
    professorName: 'Prof. Carolina López',
    department: 'Química',
    totalStudents: 70,
    totalSubjects: 2,
    teachingHoursPerWeek: 11,
    averageRating: 4.9,
    totalRatings: 48,
    classPerformance: [
      {
        subjectCode: 'QUI101',
        subjectName: 'Química General',
        averageGrade: 87,
        passRate: 93,
        students: 35,
      },
      {
        subjectCode: 'QUI201',
        subjectName: 'Química Orgánica',
        averageGrade: 85,
        passRate: 90,
        students: 35,
      },
    ],
    professionalDevelopment: [
      {
        id: 'pd9',
        title: 'Green Chemistry Workshop',
        type: 'workshop',
        date: '2024-08-15',
        status: 'completed',
      },
      {
        id: 'pd10',
        title: 'Chemistry Lab Innovations',
        type: 'conference',
        date: '2024-11-10',
        status: 'in-progress',
      },
    ],
  },
  {
    professorId: '5',
    professorName: 'Prof. Laura Martínez',
    department: 'Historia',
    totalStudents: 55,
    totalSubjects: 2,
    teachingHoursPerWeek: 9,
    averageRating: 4.7,
    totalRatings: 35,
    classPerformance: [
      {
        subjectCode: 'HIS101',
        subjectName: 'Historia Universal',
        averageGrade: 86,
        passRate: 95,
        students: 30,
      },
      {
        subjectCode: 'HIS201',
        subjectName: 'Historia Argentina',
        averageGrade: 88,
        passRate: 96,
        students: 25,
      },
    ],
    professionalDevelopment: [
      {
        id: 'pd11',
        title: 'Digital History Tools',
        type: 'course',
        date: '2024-09-20',
        status: 'completed',
      },
      {
        id: 'pd12',
        title: 'Historical Research Methods',
        type: 'seminar',
        date: '2024-10-25',
        status: 'in-progress',
      },
    ],
  },
];

// Document Management
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
  headOfDepartment: string;
}

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
