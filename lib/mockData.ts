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
  professorName?: string;
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
    professorName: 'Dr. Martín Fernández',
  },
  {
    id: '2',
    title: 'Examen Final - Análisis Matemático II',
    date: '2025-12-05',
    type: 'exam',
    description: 'Examen final del cuatrimestre',
    location: 'Aula Magna',
    subjectCode: 'MAT201',
    professorName: 'Prof. Ana María González',
  },
  {
    id: '3',
    title: 'Examen Parcial - Física General I',
    date: '2025-11-25',
    type: 'exam',
    description: 'Segundo examen parcial',
    location: 'Laboratorio 3',
    subjectCode: 'FIS101',
    professorName: 'Dr. Santiago Rodríguez',
  },
  {
    id: '4',
    title: 'Recuperatorio - Estructuras de Datos',
    date: '2025-12-12',
    type: 'exam',
    description: 'Examen recuperatorio para alumnos ausentes',
    location: 'Aula 205',
    subjectCode: 'INF301',
    professorName: 'Dr. Martín Fernández',
  },
  {
    id: '16',
    title: 'Examen Parcial - Álgebra Lineal',
    date: '2025-11-18',
    type: 'exam',
    description: 'Primer examen parcial',
    location: 'Aula 302',
    subjectCode: 'MAT301',
    professorName: 'Prof. Ana María González',
  },
  {
    id: '17',
    title: 'Examen Final - Electromagnetismo',
    date: '2025-12-08',
    type: 'exam',
    description: 'Examen final del cuatrimestre',
    location: 'Laboratorio 2',
    subjectCode: 'FIS202',
    professorName: 'Dr. Santiago Rodríguez',
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
  },
  {
    id: '10',
    title: 'Reunión de Padres - Matemáticas',
    date: '2025-11-28',
    type: 'meeting',
    description: 'Entrega de boletines y consultas individuales',
    location: 'Aula 301',
    professorName: 'Prof. Ana María González',
  },
  {
    id: '11',
    title: 'Reunión de Padres - Física',
    date: '2025-12-03',
    type: 'meeting',
    description: 'Revisión del desempeño académico del cuatrimestre',
    location: 'Laboratorio 1',
    professorName: 'Dr. Santiago Rodríguez',
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
