export type Language = 'en' | 'es' | 'ja';

export interface Translations {
  // Navigation
  nav: {
    dashboard: string;
    professors: string;
    subjects: string;
    students: string;
    communications: string;
    analytics: string;
    calendar: string;
    logout: string;
  };

  // Login Page
  login: {
    title: string;
    subtitle: string;
    email: string;
    password: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    rememberMe: string;
    forgotPassword: string;
    signIn: string;
    demoCredentials: string;
    copyright: string;
  };

  // Dashboard
  dashboard: {
    title: string;
    subtitle: string;
    activeProfessors: string;
    totalSubjects: string;
    unreadMessages: string;
    totalStudents: string;
    recentMessages: string;
    viewAll: string;
    quickActions: string;
    addNewProfessor: string;
    viewAllSubjects: string;
    checkMessages: string;
    activeSubjects: string;
    subjectCode: string;
    subjectName: string;
    professor: string;
    students: string;
    credits: string;
  };

  // Professors
  professors: {
    title: string;
    subtitle: string;
    addProfessor: string;
    search: string;
    searchPlaceholder: string;
    status: string;
    allStatuses: string;
    active: string;
    inactive: string;
    name: string;
    email: string;
    department: string;
    phone: string;
    subjects: string;
    actions: string;
    view: string;
    edit: string;
    noResults: string;
    backToProfessors: string;
    professorNotFound: string;
    teachingSubjects: string;
    noSubjects: string;
    statistics: string;
    totalSubjects: string;
    totalStudents: string;
    viewDetails: string;
    editProfessor: string;
    addNewProfessor: string;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    saveChanges: string;
    cancel: string;
    code: string;
    semester: string;
    studentSatisfaction: string;
    averageRating: string;
    totalRatings: string;
    ratingDistribution: string;
    stars: string;
    recentFeedback: string;
    noRatings: string;
    studentFeedback: string;
    ratingTrend: string;
    professionalDevelopment: string;
    totalPDHours: string;
    activitiesCompleted: string;
    inProgress: string;
    planned: string;
    noPDActivities: string;
    pdTypes: {
      course: string;
      certification: string;
      conference: string;
      publication: string;
      workshop: string;
    };
    pdStatus: {
      completed: string;
      'in-progress': string;
      planned: string;
    };
  };

  // Subjects
  subjects: {
    title: string;
    subtitle: string;
    searchSubjects: string;
    searchPlaceholder: string;
    credits: string;
    professor: string;
    students: string;
    semester: string;
    viewDetails: string;
    noResults: string;
    backToSubjects: string;
    subjectNotFound: string;
    courseInformation: string;
    totalNotes: string;
    gradedAssignments: string;
    studentNotes: string;
    addNote: string;
    noNotes: string;
    studentScores: string;
    addScore: string;
    noScores: string;
    studentName: string;
    assignment: string;
    score: string;
    percentage: string;
    date: string;
    overview: string;
    notes: string;
    scores: string;
    noteTypes: {
      attendance: string;
      behavioral: string;
      academic: string;
      achievement: string;
    };
  };

  // Communications
  communications: {
    title: string;
    subtitle: string;
    searchMessages: string;
    allStatus: string;
    unread: string;
    read: string;
    replied: string;
    allPriorities: string;
    highPriority: string;
    mediumPriority: string;
    lowPriority: string;
    noMessages: string;
    selectMessage: string;
    selectMessageDesc: string;
    priority: string;
    high: string;
    medium: string;
    low: string;
    from: string;
    student: string;
    message: string;
    yourReply: string;
    repliedOn: string;
    replyToMessage: string;
    replyPlaceholder: string;
    sendReply: string;
    markAsRead: string;
    totalMessages: string;
    re: string;
    readReceipt: string;
    readBy: string;
    readOn: string;
    analytics: string;
    settings: string;
    composeNewMessage: string;
    notificationSettings: string;
    composeModal: {
      title: string;
      recipients: string;
      selected: string;
      selectAll: string;
      deselectAll: string;
      parentOf: string;
      priority: string;
      subject: string;
      subjectRequired: string;
      message: string;
      messageRequired: string;
      messagePlaceholder: string;
      sendMessage: string;
      cancel: string;
      selectRecipientAlert: string;
      enterSubjectAlert: string;
      enterMessageAlert: string;
      successMessage: string;
      successNote: string;
    };
  };

  // Analytics
  analytics: {
    title: string;
    subtitle: string;
    keyMetrics: string;
    totalStudents: string;
    averageGrade: string;
    attendanceRate: string;
    activeCourses: string;
    performanceBySubject: string;
    gradeTrends: string;
    departmentDistribution: string;
    attendanceTrends: string;
    enrollmentTrends: string;
    retentionRates: string;
    passFailRates: string;
    subject: string;
    average: string;
    month: string;
    grade: string;
    department: string;
    students: string;
    attendance: string;
    period: string;
    year: string;
    retained: string;
    dropped: string;
    passed: string;
    failed: string;
    passRate: string;
  };

  // Calendar
  calendar: {
    title: string;
    subtitle: string;
    upcomingEvents: string;
    allEvents: string;
    filterByType: string;
    allTypes: string;
    exams: string;
    holidays: string;
    meetings: string;
    academic: string;
    breaks: string;
    eventDetails: string;
    date: string;
    endDate: string;
    location: string;
    description: string;
    professor: string;
    subject: string;
    noEvents: string;
    viewMode: string;
    dayView: string;
    weekView: string;
    monthView: string;
    today: string;
    previous: string;
    next: string;
    typeLabels: {
      exam: string;
      holiday: string;
      meeting: string;
      academic: string;
      break: string;
    };
  };

  // Notifications
  notifications: {
    title: string;
    noNotifications: string;
    markAsRead: string;
    markAllAsRead: string;
    viewAll: string;
    new: string;
    types: {
      message: string;
      exam: string;
      meeting: string;
      grade: string;
      system: string;
    };
  };

  // Message Templates
  templates: {
    title: string;
    useTemplate: string;
    selectTemplate: string;
    categories: {
      general: string;
      homework: string;
      behavior: string;
      absence: string;
      achievement: string;
    };
  };

  // Communication Analytics
  communicationAnalytics: {
    title: string;
    subtitle: string;
    backToCommunications: string;
    totalMessages: string;
    responseRate: string;
    avgResponseTime: string;
    pendingReplies: string;
    messageVolumeTrend: string;
    priorityBreakdown: string;
    mostActiveParents: string;
    recentActivity: string;
    exportData: string;
    exportCSV: string;
    exportPDF: string;
    parentName: string;
    student: string;
    messages: string;
    lastContact: string;
    week: string;
    replies: string;
    highPriority: string;
    mediumPriority: string;
    lowPriority: string;
    ofTotal: string;
    receivedMessages: string;
    sentReplies: string;
    requiresAttention: string;
    fromLastMonth: string;
    timeRange: {
      lastWeek: string;
      lastMonth: string;
      lastQuarter: string;
      lastYear: string;
    };
  };

  // Notification Settings
  notificationSettings: {
    title: string;
    subtitle: string;
    emailNotifications: string;
    emailSubtitle: string;
    smsNotifications: string;
    smsSubtitle: string;
    inAppNotifications: string;
    inAppSubtitle: string;
    notificationFrequency: string;
    frequencySubtitle: string;
    quietHours: string;
    quietHoursSubtitle: string;
    emailDigest: string;
    emailDigestSubtitle: string;
    savePreferences: string;
    resetToDefaults: string;
    enable: string;
    startTime: string;
    endTime: string;
    deliveryTime: string;
    deliveryTimeDesc: string;
    frequencyOptions: {
      immediate: string;
      immediateDesc: string;
      daily: string;
      dailyDesc: string;
      weekly: string;
      weeklyDesc: string;
    };
    categories: {
      newMessages: string;
      gradeUpdates: string;
      attendanceAlerts: string;
      behaviorReports: string;
      examReminders: string;
      generalAnnouncements: string;
      urgentMessages: string;
    };
  };

  // Students
  students: {
    title: string;
    subtitle: string;
    search: string;
    searchPlaceholder: string;
    viewProfile: string;
    studentNotFound: string;
    backToStudents: string;
    studentProfile: string;
    academicInfo: string;
    contactInfo: string;
    parentInfo: string;
    gpa: string;
    attendanceRate: string;
    enrollmentDate: string;
    currentYear: string;
    enrolledSubjects: string;
    gradeProgression: string;
    attendanceHistory: string;
    behavioralReports: string;
    achievements: string;
    parentEngagement: string;
    status: {
      active: string;
      inactive: string;
      graduated: string;
    };
    attendanceStatus: {
      present: string;
      absent: string;
      late: string;
      excused: string;
    };
    reportTypes: {
      positive: string;
      negative: string;
      neutral: string;
    };
  };

  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    required: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      dashboard: 'Dashboard',
      professors: 'Professors',
      subjects: 'Subjects',
      students: 'Students',
      communications: 'Parent Communications',
      analytics: 'Analytics',
      calendar: 'Calendar',
      logout: 'Logout',
    },
    login: {
      title: 'EduFlow CRM',
      subtitle: 'Powered by Salesforce Education',
      email: 'Email Address',
      password: 'Password',
      emailPlaceholder: 'professor@eduflow.edu',
      passwordPlaceholder: 'Enter your password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      signIn: 'Sign In',
      demoCredentials: 'Demo credentials: Any email and password will work',
      copyright: '© 2024 EduFlow. All rights reserved.',
    },
    dashboard: {
      title: 'Dashboard',
      subtitle: "Welcome back! Here's an overview of your education system.",
      activeProfessors: 'Active Professors',
      totalSubjects: 'Total Subjects',
      unreadMessages: 'Unread Messages',
      totalStudents: 'Total Students',
      recentMessages: 'Recent Messages',
      viewAll: 'View All',
      quickActions: 'Quick Actions',
      addNewProfessor: '+ Add New Professor',
      viewAllSubjects: 'View All Subjects',
      checkMessages: 'Check Messages',
      activeSubjects: 'Active Subjects',
      subjectCode: 'Subject Code',
      subjectName: 'Subject Name',
      professor: 'Professor',
      students: 'Students',
      credits: 'Credits',
    },
    professors: {
      title: 'Professors',
      subtitle: 'Manage your faculty members',
      addProfessor: '+ Add Professor',
      search: 'Search',
      searchPlaceholder: 'Search by name, email, or department...',
      status: 'Status',
      allStatuses: 'All Statuses',
      active: 'Active',
      inactive: 'Inactive',
      name: 'Name',
      email: 'Email',
      department: 'Department',
      phone: 'Phone',
      subjects: 'Subjects',
      actions: 'Actions',
      view: 'View',
      edit: 'Edit',
      noResults: 'No professors found matching your criteria.',
      backToProfessors: '← Back to Professors',
      professorNotFound: 'Professor Not Found',
      teachingSubjects: 'Teaching Subjects',
      noSubjects: 'No subjects assigned yet.',
      statistics: 'Statistics',
      totalSubjects: 'Total Subjects',
      totalStudents: 'Total Students',
      viewDetails: 'View Details',
      editProfessor: 'Edit Professor',
      addNewProfessor: 'Add New Professor',
      fullName: 'Full Name *',
      emailAddress: 'Email Address *',
      phoneNumber: 'Phone Number *',
      saveChanges: 'Save Changes',
      cancel: 'Cancel',
      code: 'Code',
      semester: 'Semester',
      studentSatisfaction: 'Student Satisfaction',
      averageRating: 'Average Rating',
      totalRatings: 'Total Ratings',
      ratingDistribution: 'Rating Distribution',
      stars: 'Stars',
      recentFeedback: 'Recent Student Feedback',
      noRatings: 'No ratings yet',
      studentFeedback: 'Student Feedback',
      ratingTrend: 'Rating Trend Over Time',
      professionalDevelopment: 'Professional Development',
      totalPDHours: 'Total PD Hours',
      activitiesCompleted: 'Activities Completed',
      inProgress: 'In Progress',
      planned: 'Planned',
      noPDActivities: 'No professional development activities recorded yet',
      pdTypes: {
        course: 'Course',
        certification: 'Certification',
        conference: 'Conference',
        publication: 'Publication',
        workshop: 'Workshop',
      },
      pdStatus: {
        completed: 'Completed',
        'in-progress': 'In Progress',
        planned: 'Planned',
      },
    },
    subjects: {
      title: 'Subjects',
      subtitle: 'View and manage course subjects',
      searchSubjects: 'Search Subjects',
      searchPlaceholder: 'Search by subject name, code, or professor...',
      credits: 'Credits',
      professor: 'Professor',
      students: 'Students',
      semester: 'Semester',
      viewDetails: 'View Details →',
      noResults: 'No subjects found matching your search.',
      backToSubjects: '← Back to Subjects',
      subjectNotFound: 'Subject Not Found',
      courseInformation: 'Course Information',
      totalNotes: 'Total Notes',
      gradedAssignments: 'Graded Assignments',
      studentNotes: 'Student Notes',
      addNote: '+ Add Note',
      noNotes: 'No notes recorded yet.',
      studentScores: 'Student Scores',
      addScore: '+ Add Score',
      noScores: 'No scores recorded yet.',
      studentName: 'Student Name',
      assignment: 'Assignment',
      score: 'Score',
      percentage: 'Percentage',
      date: 'Date',
      overview: 'Overview',
      notes: 'Notes',
      scores: 'Scores',
      noteTypes: {
        attendance: 'Attendance',
        behavioral: 'Behavioral',
        academic: 'Academic',
        achievement: 'Achievement',
      },
    },
    communications: {
      title: 'Parent Communications',
      subtitle: 'Manage messages from parents and guardians',
      searchMessages: 'Search messages...',
      allStatus: 'All Status',
      unread: 'Unread',
      read: 'Read',
      replied: 'Replied',
      allPriorities: 'All Priorities',
      highPriority: 'High Priority',
      mediumPriority: 'Medium Priority',
      lowPriority: 'Low Priority',
      noMessages: 'No messages found',
      selectMessage: 'Select a message to view',
      selectMessageDesc: 'Choose a message from the list to read and reply',
      priority: 'Priority',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      from: 'From',
      student: 'Student',
      message: 'Message:',
      yourReply: 'Your Reply:',
      repliedOn: 'Replied on',
      replyToMessage: 'Reply to this message:',
      replyPlaceholder: 'Type your reply here...',
      sendReply: 'Send Reply',
      markAsRead: 'Mark as Read',
      totalMessages: 'Total Messages',
      re: 're',
      readReceipt: 'Read Receipt',
      readBy: 'Read by',
      readOn: 'Read on',
      analytics: 'Analytics',
      settings: 'Settings',
      composeNewMessage: 'Compose New Message',
      notificationSettings: 'Notification Settings',
      composeModal: {
        title: 'Compose New Message',
        recipients: 'Recipients',
        selected: 'selected',
        selectAll: 'Select All',
        deselectAll: 'Deselect All',
        parentOf: 'Parent of',
        priority: 'Priority',
        subject: 'Subject',
        subjectRequired: 'Subject *',
        message: 'Message',
        messageRequired: 'Message *',
        messagePlaceholder: 'Type your message here...',
        sendMessage: 'Send Message',
        cancel: 'Cancel',
        selectRecipientAlert: 'Please select at least one recipient',
        enterSubjectAlert: 'Please enter a subject',
        enterMessageAlert: 'Please enter a message',
        successMessage: 'Message sent successfully to',
        successNote: 'Note: This is a demo. In production, this would send actual emails/notifications.',
      },
    },
    analytics: {
      title: 'Analytics Dashboard',
      subtitle: 'Track institutional performance and trends',
      keyMetrics: 'Key Metrics',
      totalStudents: 'Total Students',
      averageGrade: 'Average Grade',
      attendanceRate: 'Attendance Rate',
      activeCourses: 'Active Courses',
      performanceBySubject: 'Performance by Subject',
      gradeTrends: 'Grade Trends Over Time',
      departmentDistribution: 'Student Distribution by Department',
      attendanceTrends: 'Attendance Trends',
      enrollmentTrends: 'Enrollment Trends by Semester',
      retentionRates: 'Student Retention Rates',
      passFailRates: 'Pass/Fail Rates by Subject',
      subject: 'Subject',
      average: 'Average',
      month: 'Month',
      grade: 'Grade',
      department: 'Department',
      students: 'Students',
      attendance: 'Attendance',
      period: 'Period',
      year: 'Year',
      retained: 'Retained',
      dropped: 'Dropped',
      passed: 'Passed',
      failed: 'Failed',
      passRate: 'Pass Rate',
    },
    calendar: {
      title: 'Academic Calendar',
      subtitle: 'View important dates, exams, and events',
      upcomingEvents: 'Upcoming Events',
      allEvents: 'All Events',
      filterByType: 'Filter by Type',
      allTypes: 'All Types',
      exams: 'Exams',
      holidays: 'Holidays',
      meetings: 'Parent-Teacher Meetings',
      academic: 'Academic Events',
      breaks: 'Breaks',
      eventDetails: 'Event Details',
      date: 'Date',
      endDate: 'End Date',
      location: 'Location',
      description: 'Description',
      professor: 'Professor',
      subject: 'Subject',
      noEvents: 'No events found',
      viewMode: 'View',
      dayView: 'Day',
      weekView: 'Week',
      monthView: 'Month',
      today: 'Today',
      previous: 'Previous',
      next: 'Next',
      typeLabels: {
        exam: 'Exam',
        holiday: 'Holiday',
        meeting: 'Meeting',
        academic: 'Academic',
        break: 'Break',
      },
    },
    notifications: {
      title: 'Notifications',
      noNotifications: 'No new notifications',
      markAsRead: 'Mark as read',
      markAllAsRead: 'Mark all as read',
      viewAll: 'View all notifications',
      new: 'New',
      types: {
        message: 'Message',
        exam: 'Exam',
        meeting: 'Meeting',
        grade: 'Grade',
        system: 'System',
      },
    },
    templates: {
      title: 'Message Templates',
      useTemplate: 'Use Template',
      selectTemplate: 'Select a template',
      categories: {
        general: 'General',
        homework: 'Homework',
        behavior: 'Behavior',
        absence: 'Absence',
        achievement: 'Achievement',
      },
    },
    communicationAnalytics: {
      title: 'Communication Analytics',
      subtitle: 'Track and analyze your communication patterns',
      backToCommunications: 'Back to Communications',
      totalMessages: 'Total Messages',
      responseRate: 'Response Rate',
      avgResponseTime: 'Avg Response Time',
      pendingReplies: 'Pending Replies',
      messageVolumeTrend: 'Message Volume Trend',
      priorityBreakdown: 'Priority Breakdown',
      mostActiveParents: 'Most Active Parents',
      recentActivity: 'Recent Activity',
      exportData: 'Export Communication Data',
      exportCSV: 'Export as CSV',
      exportPDF: 'Export as PDF',
      parentName: 'Parent Name',
      student: 'Student',
      messages: 'Messages',
      lastContact: 'Last Contact',
      week: 'Week',
      replies: 'Replies',
      highPriority: 'High Priority',
      mediumPriority: 'Medium Priority',
      lowPriority: 'Low Priority',
      ofTotal: 'of total',
      receivedMessages: 'Received Messages',
      sentReplies: 'Sent Replies',
      requiresAttention: 'Requires attention',
      fromLastMonth: 'from last month',
      timeRange: {
        lastWeek: 'Last Week',
        lastMonth: 'Last Month',
        lastQuarter: 'Last Quarter',
        lastYear: 'Last Year',
      },
    },
    notificationSettings: {
      title: 'Notification Preferences',
      subtitle: 'Customize how and when you receive notifications',
      emailNotifications: 'Email Notifications',
      emailSubtitle: 'Receive updates via email',
      smsNotifications: 'SMS Notifications',
      smsSubtitle: 'Receive urgent alerts via text message',
      inAppNotifications: 'In-App Notifications',
      inAppSubtitle: 'Receive notifications within the application',
      notificationFrequency: 'Notification Frequency',
      frequencySubtitle: 'Control how often you receive non-urgent notifications',
      quietHours: 'Quiet Hours',
      quietHoursSubtitle: 'Silence non-urgent notifications during specific hours',
      emailDigest: 'Email Digest',
      emailDigestSubtitle: 'Receive a daily summary email',
      savePreferences: 'Save Preferences',
      resetToDefaults: 'Reset to Defaults',
      enable: 'Enable',
      startTime: 'Start Time',
      endTime: 'End Time',
      deliveryTime: 'Delivery Time',
      deliveryTimeDesc: "You'll receive a daily summary of all activity at this time",
      frequencyOptions: {
        immediate: 'Immediate',
        immediateDesc: 'Receive notifications as they happen',
        daily: 'Daily Digest',
        dailyDesc: 'Receive a summary once per day',
        weekly: 'Weekly Digest',
        weeklyDesc: 'Receive a summary once per week',
      },
      categories: {
        newMessages: 'New Messages',
        gradeUpdates: 'Grade Updates',
        attendanceAlerts: 'Attendance Alerts',
        behaviorReports: 'Behavior Reports',
        examReminders: 'Exam Reminders',
        generalAnnouncements: 'General Announcements',
        urgentMessages: 'Urgent Messages',
      },
    },
    students: {
      title: 'Students',
      subtitle: 'Manage student profiles and academic progress',
      search: 'Search',
      searchPlaceholder: 'Search by name or email...',
      viewProfile: 'View Profile',
      studentNotFound: 'Student not found',
      backToStudents: 'Back to Students',
      studentProfile: 'Student Profile',
      academicInfo: 'Academic Information',
      contactInfo: 'Contact Information',
      parentInfo: 'Parent Information',
      gpa: 'GPA',
      attendanceRate: 'Attendance Rate',
      enrollmentDate: 'Enrollment Date',
      currentYear: 'Current Year',
      enrolledSubjects: 'Enrolled Subjects',
      gradeProgression: 'Grade Progression',
      attendanceHistory: 'Attendance History',
      behavioralReports: 'Behavioral Reports',
      achievements: 'Achievements',
      parentEngagement: 'Parent Engagement Score',
      status: {
        active: 'Active',
        inactive: 'Inactive',
        graduated: 'Graduated',
      },
      attendanceStatus: {
        present: 'Present',
        absent: 'Absent',
        late: 'Late',
        excused: 'Excused',
      },
      reportTypes: {
        positive: 'Positive',
        negative: 'Needs Attention',
        neutral: 'Neutral',
      },
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      required: 'Required',
    },
  },
  es: {
    nav: {
      dashboard: 'Panel Principal',
      professors: 'Profesores',
      subjects: 'Materias',
      students: 'Estudiantes',
      communications: 'Comunicación con Padres',
      analytics: 'Analíticas',
      calendar: 'Calendario',
      logout: 'Cerrar Sesión',
    },
    login: {
      title: 'EduFlow CRM',
      subtitle: 'Impulsado por Salesforce Education',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      emailPlaceholder: 'profesor@eduflow.edu',
      passwordPlaceholder: 'Ingrese su contraseña',
      rememberMe: 'Recordarme',
      forgotPassword: '¿Olvidó su contraseña?',
      signIn: 'Iniciar Sesión',
      demoCredentials: 'Credenciales de demostración: Cualquier correo y contraseña funcionará',
      copyright: '© 2024 EduFlow. Todos los derechos reservados.',
    },
    dashboard: {
      title: 'Panel Principal',
      subtitle: '¡Bienvenido de nuevo! Aquí hay un resumen de su sistema educativo.',
      activeProfessors: 'Profesores Activos',
      totalSubjects: 'Total de Materias',
      unreadMessages: 'Mensajes Sin Leer',
      totalStudents: 'Total de Estudiantes',
      recentMessages: 'Mensajes Recientes',
      viewAll: 'Ver Todos',
      quickActions: 'Acciones Rápidas',
      addNewProfessor: '+ Agregar Nuevo Profesor',
      viewAllSubjects: 'Ver Todas las Materias',
      checkMessages: 'Revisar Mensajes',
      activeSubjects: 'Materias Activas',
      subjectCode: 'Código',
      subjectName: 'Nombre de Materia',
      professor: 'Profesor',
      students: 'Estudiantes',
      credits: 'Créditos',
    },
    professors: {
      title: 'Profesores',
      subtitle: 'Administre los miembros de su facultad',
      addProfessor: '+ Agregar Profesor',
      search: 'Buscar',
      searchPlaceholder: 'Buscar por nombre, correo o departamento...',
      status: 'Estado',
      allStatuses: 'Todos los Estados',
      active: 'Activo',
      inactive: 'Inactivo',
      name: 'Nombre',
      email: 'Correo',
      department: 'Departamento',
      phone: 'Teléfono',
      subjects: 'Materias',
      actions: 'Acciones',
      view: 'Ver',
      edit: 'Editar',
      noResults: 'No se encontraron profesores que coincidan con sus criterios.',
      backToProfessors: '← Volver a Profesores',
      professorNotFound: 'Profesor No Encontrado',
      teachingSubjects: 'Materias que Enseña',
      noSubjects: 'No hay materias asignadas aún.',
      statistics: 'Estadísticas',
      totalSubjects: 'Total de Materias',
      totalStudents: 'Total de Estudiantes',
      viewDetails: 'Ver Detalles',
      editProfessor: 'Editar Profesor',
      addNewProfessor: 'Agregar Nuevo Profesor',
      fullName: 'Nombre Completo *',
      emailAddress: 'Correo Electrónico *',
      phoneNumber: 'Número de Teléfono *',
      saveChanges: 'Guardar Cambios',
      cancel: 'Cancelar',
      code: 'Código',
      semester: 'Semestre',
      studentSatisfaction: 'Satisfacción Estudiantil',
      averageRating: 'Calificación Promedio',
      totalRatings: 'Total de Calificaciones',
      ratingDistribution: 'Distribución de Calificaciones',
      stars: 'Estrellas',
      recentFeedback: 'Comentarios Recientes de Estudiantes',
      noRatings: 'Aún no hay calificaciones',
      studentFeedback: 'Comentarios de Estudiantes',
      ratingTrend: 'Tendencia de Calificación',
      professionalDevelopment: 'Desarrollo Profesional',
      totalPDHours: 'Total de Horas de DP',
      activitiesCompleted: 'Actividades Completadas',
      inProgress: 'En Progreso',
      planned: 'Planificadas',
      noPDActivities: 'No hay actividades de desarrollo profesional registradas aún',
      pdTypes: {
        course: 'Curso',
        certification: 'Certificación',
        conference: 'Conferencia',
        publication: 'Publicación',
        workshop: 'Taller',
      },
      pdStatus: {
        completed: 'Completado',
        'in-progress': 'En Progreso',
        planned: 'Planificado',
      },
    },
    subjects: {
      title: 'Materias',
      subtitle: 'Ver y administrar materias del curso',
      searchSubjects: 'Buscar Materias',
      searchPlaceholder: 'Buscar por nombre de materia, código o profesor...',
      credits: 'Créditos',
      professor: 'Profesor',
      students: 'Estudiantes',
      semester: 'Semestre',
      viewDetails: 'Ver Detalles →',
      noResults: 'No se encontraron materias que coincidan con su búsqueda.',
      backToSubjects: '← Volver a Materias',
      subjectNotFound: 'Materia No Encontrada',
      courseInformation: 'Información del Curso',
      totalNotes: 'Total de Notas',
      gradedAssignments: 'Tareas Calificadas',
      studentNotes: 'Notas de Estudiantes',
      addNote: '+ Agregar Nota',
      noNotes: 'No hay notas registradas aún.',
      studentScores: 'Calificaciones de Estudiantes',
      addScore: '+ Agregar Calificación',
      noScores: 'No hay calificaciones registradas aún.',
      studentName: 'Nombre del Estudiante',
      assignment: 'Tarea',
      score: 'Puntaje',
      percentage: 'Porcentaje',
      date: 'Fecha',
      overview: 'Resumen',
      notes: 'Notas',
      scores: 'Calificaciones',
      noteTypes: {
        attendance: 'Asistencia',
        behavioral: 'Conducta',
        academic: 'Académico',
        achievement: 'Logro',
      },
    },
    communications: {
      title: 'Comunicación con Padres',
      subtitle: 'Administre mensajes de padres y tutores',
      searchMessages: 'Buscar mensajes...',
      allStatus: 'Todos los Estados',
      unread: 'Sin Leer',
      read: 'Leído',
      replied: 'Respondido',
      allPriorities: 'Todas las Prioridades',
      highPriority: 'Prioridad Alta',
      mediumPriority: 'Prioridad Media',
      lowPriority: 'Prioridad Baja',
      noMessages: 'No se encontraron mensajes',
      selectMessage: 'Seleccione un mensaje para ver',
      selectMessageDesc: 'Elija un mensaje de la lista para leer y responder',
      priority: 'Prioridad',
      high: 'Alta',
      medium: 'Media',
      low: 'Baja',
      from: 'De',
      student: 'Estudiante',
      message: 'Mensaje:',
      yourReply: 'Su Respuesta:',
      repliedOn: 'Respondido el',
      replyToMessage: 'Responder a este mensaje:',
      replyPlaceholder: 'Escriba su respuesta aquí...',
      sendReply: 'Enviar Respuesta',
      markAsRead: 'Marcar como Leído',
      totalMessages: 'Total de Mensajes',
      re: 're',
      readReceipt: 'Confirmación de Lectura',
      readBy: 'Leído por',
      readOn: 'Leído el',
      analytics: 'Analíticas',
      settings: 'Configuración',
      composeNewMessage: 'Redactar Nuevo Mensaje',
      notificationSettings: 'Configuración de Notificaciones',
      composeModal: {
        title: 'Redactar Nuevo Mensaje',
        recipients: 'Destinatarios',
        selected: 'seleccionados',
        selectAll: 'Seleccionar Todos',
        deselectAll: 'Deseleccionar Todos',
        parentOf: 'Padre de',
        priority: 'Prioridad',
        subject: 'Asunto',
        subjectRequired: 'Asunto *',
        message: 'Mensaje',
        messageRequired: 'Mensaje *',
        messagePlaceholder: 'Escriba su mensaje aquí...',
        sendMessage: 'Enviar Mensaje',
        cancel: 'Cancelar',
        selectRecipientAlert: 'Por favor seleccione al menos un destinatario',
        enterSubjectAlert: 'Por favor ingrese un asunto',
        enterMessageAlert: 'Por favor ingrese un mensaje',
        successMessage: 'Mensaje enviado exitosamente a',
        successNote: 'Nota: Esta es una demostración. En producción, esto enviaría correos electrónicos/notificaciones reales.',
      },
    },
    analytics: {
      title: 'Panel de Analíticas',
      subtitle: 'Seguimiento del rendimiento y tendencias institucionales',
      keyMetrics: 'Métricas Clave',
      totalStudents: 'Total de Estudiantes',
      averageGrade: 'Promedio General',
      attendanceRate: 'Tasa de Asistencia',
      activeCourses: 'Cursos Activos',
      performanceBySubject: 'Rendimiento por Materia',
      gradeTrends: 'Tendencias de Calificaciones',
      departmentDistribution: 'Distribución de Estudiantes por Departamento',
      attendanceTrends: 'Tendencias de Asistencia',
      enrollmentTrends: 'Tendencias de Inscripción por Cuatrimestre',
      retentionRates: 'Tasas de Retención de Estudiantes',
      passFailRates: 'Tasas de Aprobación/Desaprobación por Materia',
      subject: 'Materia',
      average: 'Promedio',
      month: 'Mes',
      grade: 'Calificación',
      department: 'Departamento',
      students: 'Estudiantes',
      attendance: 'Asistencia',
      period: 'Período',
      year: 'Año',
      retained: 'Retenidos',
      dropped: 'Abandonaron',
      passed: 'Aprobados',
      failed: 'Desaprobados',
      passRate: 'Tasa de Aprobación',
    },
    calendar: {
      title: 'Calendario Académico',
      subtitle: 'Consulte fechas importantes, exámenes y eventos',
      upcomingEvents: 'Próximos Eventos',
      allEvents: 'Todos los Eventos',
      filterByType: 'Filtrar por Tipo',
      allTypes: 'Todos los Tipos',
      exams: 'Exámenes',
      holidays: 'Feriados',
      meetings: 'Reuniones de Padres',
      academic: 'Eventos Académicos',
      breaks: 'Recesos',
      eventDetails: 'Detalles del Evento',
      date: 'Fecha',
      endDate: 'Fecha de Fin',
      location: 'Ubicación',
      description: 'Descripción',
      professor: 'Profesor',
      subject: 'Materia',
      noEvents: 'No se encontraron eventos',
      viewMode: 'Vista',
      dayView: 'Día',
      weekView: 'Semana',
      monthView: 'Mes',
      today: 'Hoy',
      previous: 'Anterior',
      next: 'Siguiente',
      typeLabels: {
        exam: 'Examen',
        holiday: 'Feriado',
        meeting: 'Reunión',
        academic: 'Académico',
        break: 'Receso',
      },
    },
    notifications: {
      title: 'Notificaciones',
      noNotifications: 'No hay notificaciones nuevas',
      markAsRead: 'Marcar como leído',
      markAllAsRead: 'Marcar todas como leídas',
      viewAll: 'Ver todas las notificaciones',
      new: 'Nuevo',
      types: {
        message: 'Mensaje',
        exam: 'Examen',
        meeting: 'Reunión',
        grade: 'Calificación',
        system: 'Sistema',
      },
    },
    templates: {
      title: 'Plantillas de Mensajes',
      useTemplate: 'Usar Plantilla',
      selectTemplate: 'Seleccionar una plantilla',
      categories: {
        general: 'General',
        homework: 'Tareas',
        behavior: 'Comportamiento',
        absence: 'Ausencia',
        achievement: 'Logros',
      },
    },
    communicationAnalytics: {
      title: 'Analíticas de Comunicación',
      subtitle: 'Seguimiento y análisis de sus patrones de comunicación',
      backToCommunications: 'Volver a Comunicación',
      totalMessages: 'Total de Mensajes',
      responseRate: 'Tasa de Respuesta',
      avgResponseTime: 'Tiempo Promedio de Respuesta',
      pendingReplies: 'Respuestas Pendientes',
      messageVolumeTrend: 'Tendencia de Volumen de Mensajes',
      priorityBreakdown: 'Desglose por Prioridad',
      mostActiveParents: 'Padres Más Activos',
      recentActivity: 'Actividad Reciente',
      exportData: 'Exportar Datos de Comunicación',
      exportCSV: 'Exportar como CSV',
      exportPDF: 'Exportar como PDF',
      parentName: 'Nombre del Padre',
      student: 'Estudiante',
      messages: 'Mensajes',
      lastContact: 'Último Contacto',
      week: 'Semana',
      replies: 'Respuestas',
      highPriority: 'Prioridad Alta',
      mediumPriority: 'Prioridad Media',
      lowPriority: 'Prioridad Baja',
      ofTotal: 'del total',
      receivedMessages: 'Mensajes Recibidos',
      sentReplies: 'Respuestas Enviadas',
      requiresAttention: 'Requiere atención',
      fromLastMonth: 'del último mes',
      timeRange: {
        lastWeek: 'Última Semana',
        lastMonth: 'Último Mes',
        lastQuarter: 'Último Trimestre',
        lastYear: 'Último Año',
      },
    },
    notificationSettings: {
      title: 'Preferencias de Notificaciones',
      subtitle: 'Personalice cómo y cuándo recibe notificaciones',
      emailNotifications: 'Notificaciones por Correo',
      emailSubtitle: 'Reciba actualizaciones por correo electrónico',
      smsNotifications: 'Notificaciones por SMS',
      smsSubtitle: 'Reciba alertas urgentes por mensaje de texto',
      inAppNotifications: 'Notificaciones en la Aplicación',
      inAppSubtitle: 'Reciba notificaciones dentro de la aplicación',
      notificationFrequency: 'Frecuencia de Notificaciones',
      frequencySubtitle: 'Controle la frecuencia de notificaciones no urgentes',
      quietHours: 'Horario de Silencio',
      quietHoursSubtitle: 'Silenciar notificaciones no urgentes en horarios específicos',
      emailDigest: 'Resumen por Correo',
      emailDigestSubtitle: 'Reciba un resumen diario por correo',
      savePreferences: 'Guardar Preferencias',
      resetToDefaults: 'Restaurar Valores Predeterminados',
      enable: 'Activar',
      startTime: 'Hora de Inicio',
      endTime: 'Hora de Fin',
      deliveryTime: 'Hora de Entrega',
      deliveryTimeDesc: 'Recibirá un resumen diario de toda la actividad a esta hora',
      frequencyOptions: {
        immediate: 'Inmediato',
        immediateDesc: 'Recibir notificaciones cuando ocurran',
        daily: 'Resumen Diario',
        dailyDesc: 'Recibir un resumen una vez al día',
        weekly: 'Resumen Semanal',
        weeklyDesc: 'Recibir un resumen una vez a la semana',
      },
      categories: {
        newMessages: 'Nuevos Mensajes',
        gradeUpdates: 'Actualizaciones de Calificaciones',
        attendanceAlerts: 'Alertas de Asistencia',
        behaviorReports: 'Reportes de Conducta',
        examReminders: 'Recordatorios de Exámenes',
        generalAnnouncements: 'Anuncios Generales',
        urgentMessages: 'Mensajes Urgentes',
      },
    },
    students: {
      title: 'Estudiantes',
      subtitle: 'Gestión de perfiles estudiantiles y progreso académico',
      search: 'Buscar',
      searchPlaceholder: 'Buscar por nombre o correo...',
      viewProfile: 'Ver Perfil',
      studentNotFound: 'Estudiante no encontrado',
      backToStudents: 'Volver a Estudiantes',
      studentProfile: 'Perfil del Estudiante',
      academicInfo: 'Información Académica',
      contactInfo: 'Información de Contacto',
      parentInfo: 'Información de los Padres',
      gpa: 'Promedio',
      attendanceRate: 'Tasa de Asistencia',
      enrollmentDate: 'Fecha de Inscripción',
      currentYear: 'Año Actual',
      enrolledSubjects: 'Materias Inscritas',
      gradeProgression: 'Progresión de Calificaciones',
      attendanceHistory: 'Historial de Asistencia',
      behavioralReports: 'Reportes de Conducta',
      achievements: 'Logros',
      parentEngagement: 'Compromiso de los Padres',
      status: {
        active: 'Activo',
        inactive: 'Inactivo',
        graduated: 'Graduado',
      },
      attendanceStatus: {
        present: 'Presente',
        absent: 'Ausente',
        late: 'Tarde',
        excused: 'Justificado',
      },
      reportTypes: {
        positive: 'Positivo',
        negative: 'Requiere Atención',
        neutral: 'Neutral',
      },
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      required: 'Requerido',
    },
  },
  ja: {
    nav: {
      dashboard: 'ダッシュボード',
      professors: '教授',
      subjects: '科目',
      students: '学生',
      communications: '保護者との連絡',
      analytics: '分析',
      calendar: 'カレンダー',
      logout: 'ログアウト',
    },
    login: {
      title: 'EduFlow CRM',
      subtitle: 'Salesforce Educationを搭載',
      email: 'メールアドレス',
      password: 'パスワード',
      emailPlaceholder: 'professor@eduflow.edu',
      passwordPlaceholder: 'パスワードを入力してください',
      rememberMe: 'ログイン状態を保持',
      forgotPassword: 'パスワードをお忘れですか？',
      signIn: 'ログイン',
      demoCredentials: 'デモ用認証情報：任意のメールとパスワードが使用できます',
      copyright: '© 2024 EduFlow. 無断転載を禁じます。',
    },
    dashboard: {
      title: 'ダッシュボード',
      subtitle: 'おかえりなさい！教育システムの概要をご覧ください。',
      activeProfessors: '在籍教授数',
      totalSubjects: '科目総数',
      unreadMessages: '未読メッセージ',
      totalStudents: '学生総数',
      recentMessages: '最近のメッセージ',
      viewAll: 'すべて表示',
      quickActions: 'クイックアクション',
      addNewProfessor: '+ 教授を追加',
      viewAllSubjects: 'すべての科目を表示',
      checkMessages: 'メッセージを確認',
      activeSubjects: '開講中の科目',
      subjectCode: '科目コード',
      subjectName: '科目名',
      professor: '教授',
      students: '学生',
      credits: '単位',
    },
    professors: {
      title: '教授',
      subtitle: '教員を管理',
      addProfessor: '+ 教授を追加',
      search: '検索',
      searchPlaceholder: '名前、メール、または所属で検索...',
      status: 'ステータス',
      allStatuses: 'すべてのステータス',
      active: '在籍',
      inactive: '休職',
      name: '名前',
      email: 'メール',
      department: '所属',
      phone: '電話番号',
      subjects: '科目',
      actions: 'アクション',
      view: '表示',
      edit: '編集',
      noResults: '条件に一致する教授が見つかりません。',
      backToProfessors: '← 教授一覧に戻る',
      professorNotFound: '教授が見つかりません',
      teachingSubjects: '担当科目',
      noSubjects: 'まだ科目が割り当てられていません。',
      statistics: '統計',
      totalSubjects: '科目総数',
      totalStudents: '学生総数',
      viewDetails: '詳細を表示',
      editProfessor: '教授を編集',
      addNewProfessor: '教授を追加',
      fullName: '氏名 *',
      emailAddress: 'メールアドレス *',
      phoneNumber: '電話番号 *',
      saveChanges: '変更を保存',
      cancel: 'キャンセル',
      code: 'コード',
      semester: '学期',
      studentSatisfaction: '学生満足度',
      averageRating: '平均評価',
      totalRatings: '評価総数',
      ratingDistribution: '評価分布',
      stars: '星',
      recentFeedback: '最近の学生フィードバック',
      noRatings: '評価はまだありません',
      studentFeedback: '学生フィードバック',
      ratingTrend: '評価トレンド',
      professionalDevelopment: '専門能力開発',
      totalPDHours: '総研修時間',
      activitiesCompleted: '完了した活動',
      inProgress: '進行中',
      planned: '予定',
      noPDActivities: '専門能力開発活動の記録はまだありません',
      pdTypes: {
        course: 'コース',
        certification: '認定資格',
        conference: '会議',
        publication: '出版',
        workshop: 'ワークショップ',
      },
      pdStatus: {
        completed: '完了',
        'in-progress': '進行中',
        planned: '予定',
      },
    },
    subjects: {
      title: '科目',
      subtitle: 'コース科目の表示と管理',
      searchSubjects: '科目を検索',
      searchPlaceholder: '科目名、コード、または教授名で検索...',
      credits: '単位',
      professor: '教授',
      students: '学生',
      semester: '学期',
      viewDetails: '詳細を表示 →',
      noResults: '検索条件に一致する科目が見つかりません。',
      backToSubjects: '← 科目一覧に戻る',
      subjectNotFound: '科目が見つかりません',
      courseInformation: 'コース情報',
      totalNotes: '記録総数',
      gradedAssignments: '採点済み課題',
      studentNotes: '学生記録',
      addNote: '+ 記録を追加',
      noNotes: 'まだ記録がありません。',
      studentScores: '学生の成績',
      addScore: '+ 成績を追加',
      noScores: 'まだ成績が記録されていません。',
      studentName: '学生名',
      assignment: '課題',
      score: '得点',
      percentage: 'パーセンテージ',
      date: '日付',
      overview: '概要',
      notes: '記録',
      scores: '成績',
      noteTypes: {
        attendance: '出席',
        behavioral: '行動',
        academic: '学業',
        achievement: '成果',
      },
    },
    communications: {
      title: '保護者との連絡',
      subtitle: '保護者や後見人からのメッセージを管理',
      searchMessages: 'メッセージを検索...',
      allStatus: 'すべてのステータス',
      unread: '未読',
      read: '既読',
      replied: '返信済み',
      allPriorities: 'すべての優先度',
      highPriority: '優先度：高',
      mediumPriority: '優先度：中',
      lowPriority: '優先度：低',
      noMessages: 'メッセージが見つかりません',
      selectMessage: 'メッセージを選択して表示',
      selectMessageDesc: 'リストからメッセージを選んで読み、返信してください',
      priority: '優先度',
      high: '高',
      medium: '中',
      low: '低',
      from: '差出人',
      student: '学生',
      message: 'メッセージ：',
      yourReply: 'あなたの返信：',
      repliedOn: '返信日',
      replyToMessage: 'このメッセージに返信：',
      replyPlaceholder: 'ここに返信を入力...',
      sendReply: '返信を送信',
      markAsRead: '既読にする',
      totalMessages: 'メッセージ総数',
      re: 're',
      readReceipt: '開封確認',
      readBy: '既読者',
      readOn: '既読日時',
      analytics: '分析',
      settings: '設定',
      composeNewMessage: '新しいメッセージを作成',
      notificationSettings: '通知設定',
      composeModal: {
        title: '新しいメッセージを作成',
        recipients: '宛先',
        selected: '選択済み',
        selectAll: 'すべて選択',
        deselectAll: 'すべて解除',
        parentOf: '保護者：',
        priority: '優先度',
        subject: '件名',
        subjectRequired: '件名 *',
        message: 'メッセージ',
        messageRequired: 'メッセージ *',
        messagePlaceholder: 'ここにメッセージを入力...',
        sendMessage: 'メッセージを送信',
        cancel: 'キャンセル',
        selectRecipientAlert: '少なくとも1人の宛先を選択してください',
        enterSubjectAlert: '件名を入力してください',
        enterMessageAlert: 'メッセージを入力してください',
        successMessage: 'メッセージの送信に成功しました：',
        successNote: '注: これはデモです。本番環境では実際のメール/通知が送信されます。',
      },
    },
    analytics: {
      title: '分析ダッシュボード',
      subtitle: '機関のパフォーマンスとトレンドを追跡',
      keyMetrics: '主要指標',
      totalStudents: '総学生数',
      averageGrade: '平均成績',
      attendanceRate: '出席率',
      activeCourses: 'アクティブコース',
      performanceBySubject: '科目別パフォーマンス',
      gradeTrends: '成績の推移',
      departmentDistribution: '学部別学生分布',
      attendanceTrends: '出席率の推移',
      enrollmentTrends: '学期別入学者数の推移',
      retentionRates: '学生定着率',
      passFailRates: '科目別合格/不合格率',
      subject: '科目',
      average: '平均',
      month: '月',
      grade: '成績',
      department: '学部',
      students: '学生',
      attendance: '出席',
      period: '期間',
      year: '年',
      retained: '定着',
      dropped: '離脱',
      passed: '合格',
      failed: '不合格',
      passRate: '合格率',
    },
    calendar: {
      title: '学事暦',
      subtitle: '重要な日付、試験、イベントを確認',
      upcomingEvents: '今後のイベント',
      allEvents: 'すべてのイベント',
      filterByType: 'タイプで絞り込み',
      allTypes: 'すべてのタイプ',
      exams: '試験',
      holidays: '祝日',
      meetings: '保護者面談',
      academic: '学事イベント',
      breaks: '休暇',
      eventDetails: 'イベント詳細',
      date: '日付',
      endDate: '終了日',
      location: '場所',
      description: '説明',
      professor: '教授',
      subject: '科目',
      noEvents: 'イベントが見つかりません',
      viewMode: '表示',
      dayView: '日',
      weekView: '週',
      monthView: '月',
      today: '今日',
      previous: '前',
      next: '次',
      typeLabels: {
        exam: '試験',
        holiday: '祝日',
        meeting: '面談',
        academic: '学事',
        break: '休暇',
      },
    },
    notifications: {
      title: '通知',
      noNotifications: '新しい通知はありません',
      markAsRead: '既読にする',
      markAllAsRead: 'すべて既読にする',
      viewAll: 'すべての通知を表示',
      new: '新規',
      types: {
        message: 'メッセージ',
        exam: '試験',
        meeting: '面談',
        grade: '成績',
        system: 'システム',
      },
    },
    templates: {
      title: 'メッセージテンプレート',
      useTemplate: 'テンプレートを使用',
      selectTemplate: 'テンプレートを選択',
      categories: {
        general: '一般',
        homework: '宿題',
        behavior: '行動',
        absence: '欠席',
        achievement: '達成',
      },
    },
    communicationAnalytics: {
      title: 'コミュニケーション分析',
      subtitle: 'コミュニケーションパターンの追跡と分析',
      backToCommunications: '連絡に戻る',
      totalMessages: '総メッセージ数',
      responseRate: '返信率',
      avgResponseTime: '平均返信時間',
      pendingReplies: '保留中の返信',
      messageVolumeTrend: 'メッセージ量の推移',
      priorityBreakdown: '優先度別内訳',
      mostActiveParents: '最もアクティブな保護者',
      recentActivity: '最近の活動',
      exportData: 'コミュニケーションデータをエクスポート',
      exportCSV: 'CSVとしてエクスポート',
      exportPDF: 'PDFとしてエクスポート',
      parentName: '保護者名',
      student: '学生',
      messages: 'メッセージ',
      lastContact: '最終連絡',
      week: '週',
      replies: '返信',
      highPriority: '優先度：高',
      mediumPriority: '優先度：中',
      lowPriority: '優先度：低',
      ofTotal: '全体の',
      receivedMessages: '受信メッセージ',
      sentReplies: '送信返信',
      requiresAttention: '要対応',
      fromLastMonth: '先月から',
      timeRange: {
        lastWeek: '先週',
        lastMonth: '先月',
        lastQuarter: '前四半期',
        lastYear: '昨年',
      },
    },
    notificationSettings: {
      title: '通知設定',
      subtitle: '通知の受信方法とタイミングをカスタマイズ',
      emailNotifications: 'メール通知',
      emailSubtitle: 'メールで更新を受信',
      smsNotifications: 'SMS通知',
      smsSubtitle: '緊急アラートをテキストメッセージで受信',
      inAppNotifications: 'アプリ内通知',
      inAppSubtitle: 'アプリケーション内で通知を受信',
      notificationFrequency: '通知頻度',
      frequencySubtitle: '緊急でない通知の受信頻度を制御',
      quietHours: 'サイレント時間',
      quietHoursSubtitle: '特定の時間帯に緊急でない通知を無音に',
      emailDigest: 'メール要約',
      emailDigestSubtitle: '毎日の要約メールを受信',
      savePreferences: '設定を保存',
      resetToDefaults: 'デフォルトに戻す',
      enable: '有効化',
      startTime: '開始時刻',
      endTime: '終了時刻',
      deliveryTime: '配信時刻',
      deliveryTimeDesc: 'この時刻に全活動の日次要約を受信します',
      frequencyOptions: {
        immediate: '即時',
        immediateDesc: '発生時に通知を受信',
        daily: '日次要約',
        dailyDesc: '1日1回要約を受信',
        weekly: '週次要約',
        weeklyDesc: '週1回要約を受信',
      },
      categories: {
        newMessages: '新しいメッセージ',
        gradeUpdates: '成績更新',
        attendanceAlerts: '出席アラート',
        behaviorReports: '行動報告',
        examReminders: '試験リマインダー',
        generalAnnouncements: '一般お知らせ',
        urgentMessages: '緊急メッセージ',
      },
    },
    students: {
      title: '学生',
      subtitle: '学生プロフィールと学業進捗の管理',
      search: '検索',
      searchPlaceholder: '名前またはメールで検索...',
      viewProfile: 'プロフィールを表示',
      studentNotFound: '学生が見つかりません',
      backToStudents: '学生一覧に戻る',
      studentProfile: '学生プロフィール',
      academicInfo: '学業情報',
      contactInfo: '連絡先情報',
      parentInfo: '保護者情報',
      gpa: 'GPA',
      attendanceRate: '出席率',
      enrollmentDate: '入学日',
      currentYear: '現在の学年',
      enrolledSubjects: '履修科目',
      gradeProgression: '成績推移',
      attendanceHistory: '出席履歴',
      behavioralReports: '行動報告',
      achievements: '達成',
      parentEngagement: '保護者エンゲージメント',
      status: {
        active: '在学中',
        inactive: '休学中',
        graduated: '卒業',
      },
      attendanceStatus: {
        present: '出席',
        absent: '欠席',
        late: '遅刻',
        excused: '届出済',
      },
      reportTypes: {
        positive: '良好',
        negative: '要注意',
        neutral: '普通',
      },
    },
    common: {
      loading: '読み込み中...',
      error: 'エラー',
      success: '成功',
      required: '必須',
    },
  },
};
