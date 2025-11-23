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