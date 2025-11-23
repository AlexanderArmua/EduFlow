export interface Professor {
  id: string;
  name: string;
  email: string;
  department: string;
  phone: string;
  status: 'Active' | 'Inactive';
  subjects: string[];
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
}

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
  },
];

// Document Management

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