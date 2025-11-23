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