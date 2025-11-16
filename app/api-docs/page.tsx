'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  parameters?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
  requestBody?: {
    type: string;
    example: string;
  };
  response: {
    status: number;
    example: string;
  };
}

interface ApiCategory {
  name: string;
  icon: string;
  description: string;
  endpoints: ApiEndpoint[];
}

export default function ApiDocsPage() {
  const { t } = useLanguage();
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Students');

  const baseUrl = 'https://api.eduflow.edu/v1';

  const apiCategories: ApiCategory[] = [
    {
      name: 'Students',
      icon: '🎓',
      description: 'Manage student records, enrollments, and academic information',
      endpoints: [
        {
          method: 'GET',
          path: '/students',
          description: 'Retrieve a list of all students',
          parameters: [
            { name: 'page', type: 'integer', required: false, description: 'Page number for pagination' },
            { name: 'limit', type: 'integer', required: false, description: 'Number of items per page (default: 20)' },
            { name: 'grade', type: 'string', required: false, description: 'Filter by grade level' },
            { name: 'status', type: 'string', required: false, description: 'Filter by status (active, inactive)' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "std001",
      "name": "Emily Johnson",
      "email": "emily.j@eduflow.edu",
      "grade": "10th Grade",
      "gpa": 3.8,
      "status": "active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 145
  }
}`,
          },
        },
        {
          method: 'GET',
          path: '/students/{id}',
          description: 'Retrieve a specific student by ID',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Student ID' },
          ],
          response: {
            status: 200,
            example: `{
  "id": "std001",
  "name": "Emily Johnson",
  "email": "emily.j@eduflow.edu",
  "grade": "10th Grade",
  "gpa": 3.8,
  "attendance": 95.5,
  "status": "active",
  "enrolledSubjects": [
    {
      "id": "sub001",
      "name": "Advanced Mathematics",
      "professor": "Dr. Sarah Johnson"
    }
  ]
}`,
          },
        },
        {
          method: 'POST',
          path: '/students',
          description: 'Create a new student record',
          requestBody: {
            type: 'application/json',
            example: `{
  "name": "John Smith",
  "email": "john.s@eduflow.edu",
  "grade": "9th Grade",
  "dateOfBirth": "2008-05-15",
  "parentEmail": "parent@example.com",
  "parentPhone": "+1-555-0123"
}`,
          },
          response: {
            status: 201,
            example: `{
  "id": "std146",
  "name": "John Smith",
  "email": "john.s@eduflow.edu",
  "grade": "9th Grade",
  "status": "active",
  "createdAt": "2024-01-15T10:30:00Z"
}`,
          },
        },
        {
          method: 'PUT',
          path: '/students/{id}',
          description: 'Update an existing student record',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Student ID' },
          ],
          requestBody: {
            type: 'application/json',
            example: `{
  "grade": "11th Grade",
  "email": "emily.johnson@eduflow.edu",
  "status": "active"
}`,
          },
          response: {
            status: 200,
            example: `{
  "id": "std001",
  "name": "Emily Johnson",
  "email": "emily.johnson@eduflow.edu",
  "grade": "11th Grade",
  "updatedAt": "2024-01-15T10:35:00Z"
}`,
          },
        },
        {
          method: 'DELETE',
          path: '/students/{id}',
          description: 'Delete a student record (admin only)',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Student ID' },
          ],
          response: {
            status: 204,
            example: ``,
          },
        },
      ],
    },
    {
      name: 'Professors',
      icon: '👨‍🏫',
      description: 'Access professor data, assignments, and department information',
      endpoints: [
        {
          method: 'GET',
          path: '/professors',
          description: 'Retrieve a list of all professors',
          parameters: [
            { name: 'department', type: 'string', required: false, description: 'Filter by department' },
            { name: 'status', type: 'string', required: false, description: 'Filter by status (active, inactive)' },
            { name: 'page', type: 'integer', required: false, description: 'Page number for pagination' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "prof001",
      "name": "Dr. Sarah Johnson",
      "email": "sarah.j@eduflow.edu",
      "department": "Mathematics",
      "subjects": ["Advanced Mathematics", "Calculus"],
      "status": "active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 28
  }
}`,
          },
        },
        {
          method: 'GET',
          path: '/professors/{id}',
          description: 'Retrieve a specific professor by ID',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Professor ID' },
          ],
          response: {
            status: 200,
            example: `{
  "id": "prof001",
  "name": "Dr. Sarah Johnson",
  "email": "sarah.j@eduflow.edu",
  "department": "Mathematics",
  "subjects": [
    {
      "id": "sub001",
      "name": "Advanced Mathematics",
      "students": 25
    }
  ],
  "office": "Building A, Room 205",
  "phone": "+1-555-0101",
  "status": "active"
}`,
          },
        },
        {
          method: 'POST',
          path: '/professors',
          description: 'Create a new professor record',
          requestBody: {
            type: 'application/json',
            example: `{
  "name": "Dr. Michael Chen",
  "email": "michael.c@eduflow.edu",
  "department": "Computer Science",
  "phone": "+1-555-0102",
  "office": "Building B, Room 310"
}`,
          },
          response: {
            status: 201,
            example: `{
  "id": "prof029",
  "name": "Dr. Michael Chen",
  "email": "michael.c@eduflow.edu",
  "department": "Computer Science",
  "status": "active",
  "createdAt": "2024-01-15T11:00:00Z"
}`,
          },
        },
        {
          method: 'PUT',
          path: '/professors/{id}',
          description: 'Update professor information',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Professor ID' },
          ],
          requestBody: {
            type: 'application/json',
            example: `{
  "department": "Applied Mathematics",
  "office": "Building A, Room 301"
}`,
          },
          response: {
            status: 200,
            example: `{
  "id": "prof001",
  "name": "Dr. Sarah Johnson",
  "department": "Applied Mathematics",
  "office": "Building A, Room 301",
  "updatedAt": "2024-01-15T11:15:00Z"
}`,
          },
        },
      ],
    },
    {
      name: 'Subjects',
      icon: '📚',
      description: 'Query course information, schedules, and enrollment data',
      endpoints: [
        {
          method: 'GET',
          path: '/subjects',
          description: 'Retrieve a list of all subjects',
          parameters: [
            { name: 'department', type: 'string', required: false, description: 'Filter by department' },
            { name: 'semester', type: 'string', required: false, description: 'Filter by semester' },
            { name: 'professorId', type: 'string', required: false, description: 'Filter by professor ID' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "sub001",
      "name": "Advanced Mathematics",
      "code": "MATH401",
      "department": "Mathematics",
      "professor": "Dr. Sarah Johnson",
      "semester": "Fall 2024",
      "credits": 4,
      "enrolledStudents": 25
    }
  ],
  "total": 42
}`,
          },
        },
        {
          method: 'GET',
          path: '/subjects/{id}',
          description: 'Get detailed information about a specific subject',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Subject ID' },
          ],
          response: {
            status: 200,
            example: `{
  "id": "sub001",
  "name": "Advanced Mathematics",
  "code": "MATH401",
  "department": "Mathematics",
  "professor": {
    "id": "prof001",
    "name": "Dr. Sarah Johnson"
  },
  "semester": "Fall 2024",
  "credits": 4,
  "schedule": "Mon/Wed/Fri 10:00-11:30",
  "room": "Building A, Room 105",
  "enrolledStudents": 25,
  "capacity": 30
}`,
          },
        },
        {
          method: 'GET',
          path: '/subjects/{id}/students',
          description: 'Get all students enrolled in a specific subject',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Subject ID' },
          ],
          response: {
            status: 200,
            example: `{
  "subjectId": "sub001",
  "subjectName": "Advanced Mathematics",
  "students": [
    {
      "id": "std001",
      "name": "Emily Johnson",
      "grade": "10th Grade",
      "currentGrade": "A",
      "attendance": 95.5
    }
  ],
  "totalEnrolled": 25
}`,
          },
        },
        {
          method: 'POST',
          path: '/subjects/{id}/enroll',
          description: 'Enroll a student in a subject',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Subject ID' },
          ],
          requestBody: {
            type: 'application/json',
            example: `{
  "studentId": "std002",
  "semester": "Fall 2024"
}`,
          },
          response: {
            status: 201,
            example: `{
  "enrollmentId": "enr123",
  "subjectId": "sub001",
  "studentId": "std002",
  "semester": "Fall 2024",
  "enrolledAt": "2024-01-15T12:00:00Z"
}`,
          },
        },
      ],
    },
    {
      name: 'Communications',
      icon: '💬',
      description: 'Send messages and manage communications with parents',
      endpoints: [
        {
          method: 'GET',
          path: '/communications',
          description: 'Retrieve all communication messages',
          parameters: [
            { name: 'status', type: 'string', required: false, description: 'Filter by status (unread, read, replied)' },
            { name: 'priority', type: 'string', required: false, description: 'Filter by priority (high, medium, low)' },
            { name: 'studentId', type: 'string', required: false, description: 'Filter by student ID' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "msg001",
      "from": "parent@example.com",
      "subject": "Question about homework",
      "status": "unread",
      "priority": "medium",
      "studentId": "std001",
      "studentName": "Emily Johnson",
      "receivedAt": "2024-01-15T09:30:00Z"
    }
  ],
  "total": 45,
  "unread": 12
}`,
          },
        },
        {
          method: 'GET',
          path: '/communications/{id}',
          description: 'Get a specific communication message',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Message ID' },
          ],
          response: {
            status: 200,
            example: `{
  "id": "msg001",
  "from": "parent@example.com",
  "fromName": "Jennifer Johnson",
  "subject": "Question about homework",
  "message": "Hello, I wanted to ask about...",
  "status": "read",
  "priority": "medium",
  "studentId": "std001",
  "studentName": "Emily Johnson",
  "receivedAt": "2024-01-15T09:30:00Z",
  "readAt": "2024-01-15T10:00:00Z"
}`,
          },
        },
        {
          method: 'POST',
          path: '/communications',
          description: 'Send a new message to a parent',
          requestBody: {
            type: 'application/json',
            example: `{
  "to": "parent@example.com",
  "studentId": "std001",
  "subject": "Academic Progress Update",
  "message": "I wanted to share some positive news...",
  "priority": "medium"
}`,
          },
          response: {
            status: 201,
            example: `{
  "id": "msg046",
  "to": "parent@example.com",
  "subject": "Academic Progress Update",
  "status": "sent",
  "sentAt": "2024-01-15T13:00:00Z"
}`,
          },
        },
        {
          method: 'PUT',
          path: '/communications/{id}',
          description: 'Update message status (mark as read/replied)',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Message ID' },
          ],
          requestBody: {
            type: 'application/json',
            example: `{
  "status": "replied"
}`,
          },
          response: {
            status: 200,
            example: `{
  "id": "msg001",
  "status": "replied",
  "updatedAt": "2024-01-15T13:15:00Z"
}`,
          },
        },
      ],
    },
    {
      name: 'Analytics',
      icon: '📊',
      description: 'Access performance metrics, trends, and statistical data',
      endpoints: [
        {
          method: 'GET',
          path: '/analytics/overview',
          description: 'Get overall system analytics and metrics',
          parameters: [
            { name: 'startDate', type: 'string', required: false, description: 'Start date (YYYY-MM-DD)' },
            { name: 'endDate', type: 'string', required: false, description: 'End date (YYYY-MM-DD)' },
          ],
          response: {
            status: 200,
            example: `{
  "totalStudents": 145,
  "totalProfessors": 28,
  "totalSubjects": 42,
  "averageAttendance": 92.5,
  "averageGPA": 3.2,
  "enrollmentTrend": [
    { "semester": "Fall 2023", "count": 138 },
    { "semester": "Spring 2024", "count": 142 },
    { "semester": "Fall 2024", "count": 145 }
  ]
}`,
          },
        },
        {
          method: 'GET',
          path: '/analytics/students/{id}',
          description: 'Get analytics for a specific student',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Student ID' },
          ],
          response: {
            status: 200,
            example: `{
  "studentId": "std001",
  "studentName": "Emily Johnson",
  "currentGPA": 3.8,
  "attendance": 95.5,
  "gradeProgression": [
    { "semester": "Fall 2023", "gpa": 3.6 },
    { "semester": "Spring 2024", "gpa": 3.7 },
    { "semester": "Fall 2024", "gpa": 3.8 }
  ],
  "subjectPerformance": [
    { "subject": "Advanced Mathematics", "grade": "A", "percentage": 95 }
  ]
}`,
          },
        },
        {
          method: 'GET',
          path: '/analytics/professors/{id}',
          description: 'Get performance analytics for a professor',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Professor ID' },
          ],
          response: {
            status: 200,
            example: `{
  "professorId": "prof001",
  "professorName": "Dr. Sarah Johnson",
  "totalStudents": 75,
  "averageClassGrade": 3.4,
  "studentSatisfaction": 4.5,
  "subjectsTeaching": 3,
  "classPerformance": [
    { "subject": "Advanced Mathematics", "avgGrade": 3.6, "passRate": 92 }
  ]
}`,
          },
        },
      ],
    },
    {
      name: 'Attendance',
      icon: '✓',
      description: 'Track and analyze student attendance records',
      endpoints: [
        {
          method: 'GET',
          path: '/attendance',
          description: 'Retrieve attendance records',
          parameters: [
            { name: 'studentId', type: 'string', required: false, description: 'Filter by student ID' },
            { name: 'subjectId', type: 'string', required: false, description: 'Filter by subject ID' },
            { name: 'date', type: 'string', required: false, description: 'Filter by date (YYYY-MM-DD)' },
            { name: 'status', type: 'string', required: false, description: 'Filter by status (present, absent, excused)' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "att001",
      "studentId": "std001",
      "studentName": "Emily Johnson",
      "subjectId": "sub001",
      "subjectName": "Advanced Mathematics",
      "date": "2024-01-15",
      "status": "present"
    }
  ],
  "summary": {
    "totalRecords": 450,
    "present": 428,
    "absent": 15,
    "excused": 7,
    "attendanceRate": 95.1
  }
}`,
          },
        },
        {
          method: 'POST',
          path: '/attendance',
          description: 'Record attendance for a class session',
          requestBody: {
            type: 'application/json',
            example: `{
  "subjectId": "sub001",
  "date": "2024-01-15",
  "attendanceRecords": [
    { "studentId": "std001", "status": "present" },
    { "studentId": "std002", "status": "absent" },
    { "studentId": "std003", "status": "excused" }
  ]
}`,
          },
          response: {
            status: 201,
            example: `{
  "subjectId": "sub001",
  "date": "2024-01-15",
  "recordsCreated": 25,
  "createdAt": "2024-01-15T14:00:00Z"
}`,
          },
        },
        {
          method: 'GET',
          path: '/attendance/students/{id}/summary',
          description: 'Get attendance summary for a specific student',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Student ID' },
          ],
          response: {
            status: 200,
            example: `{
  "studentId": "std001",
  "studentName": "Emily Johnson",
  "totalClasses": 120,
  "present": 115,
  "absent": 3,
  "excused": 2,
  "attendanceRate": 95.8,
  "bySubject": [
    {
      "subjectId": "sub001",
      "subjectName": "Advanced Mathematics",
      "attendanceRate": 96.7
    }
  ]
}`,
          },
        },
      ],
    },
    {
      name: 'Grades',
      icon: '📝',
      description: 'Submit and retrieve student grades and performance metrics',
      endpoints: [
        {
          method: 'GET',
          path: '/grades',
          description: 'Retrieve grade records',
          parameters: [
            { name: 'studentId', type: 'string', required: false, description: 'Filter by student ID' },
            { name: 'subjectId', type: 'string', required: false, description: 'Filter by subject ID' },
            { name: 'semester', type: 'string', required: false, description: 'Filter by semester' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "grade001",
      "studentId": "std001",
      "studentName": "Emily Johnson",
      "subjectId": "sub001",
      "subjectName": "Advanced Mathematics",
      "assignmentName": "Midterm Exam",
      "grade": 92,
      "maxPoints": 100,
      "percentage": 92,
      "letterGrade": "A",
      "date": "2024-01-10"
    }
  ],
  "total": 350
}`,
          },
        },
        {
          method: 'POST',
          path: '/grades',
          description: 'Submit a grade for a student',
          requestBody: {
            type: 'application/json',
            example: `{
  "studentId": "std001",
  "subjectId": "sub001",
  "assignmentName": "Final Exam",
  "grade": 95,
  "maxPoints": 100,
  "date": "2024-01-15",
  "notes": "Excellent work"
}`,
          },
          response: {
            status: 201,
            example: `{
  "id": "grade351",
  "studentId": "std001",
  "subjectId": "sub001",
  "assignmentName": "Final Exam",
  "grade": 95,
  "percentage": 95,
  "letterGrade": "A",
  "createdAt": "2024-01-15T15:00:00Z"
}`,
          },
        },
        {
          method: 'GET',
          path: '/grades/students/{id}/summary',
          description: 'Get grade summary for a specific student',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Student ID' },
          ],
          response: {
            status: 200,
            example: `{
  "studentId": "std001",
  "studentName": "Emily Johnson",
  "overallGPA": 3.8,
  "semester": "Fall 2024",
  "subjects": [
    {
      "subjectId": "sub001",
      "subjectName": "Advanced Mathematics",
      "currentGrade": "A",
      "percentage": 94.5,
      "assignments": 8
    }
  ]
}`,
          },
        },
      ],
    },
    {
      name: 'Financial',
      icon: '💰',
      description: 'Manage tuition payments and financial records',
      endpoints: [
        {
          method: 'GET',
          path: '/financial/students/{id}',
          description: 'Get financial records for a student',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'Student ID' },
          ],
          response: {
            status: 200,
            example: `{
  "studentId": "std001",
  "studentName": "Emily Johnson",
  "tuitionTotal": 12000,
  "paidAmount": 12000,
  "balance": 0,
  "status": "Paid",
  "payments": [
    {
      "id": "pay001",
      "amount": 6000,
      "date": "2023-08-15",
      "method": "Bank Transfer"
    }
  ]
}`,
          },
        },
        {
          method: 'POST',
          path: '/financial/payments',
          description: 'Record a tuition payment',
          requestBody: {
            type: 'application/json',
            example: `{
  "studentId": "std002",
  "amount": 3000,
  "method": "Credit Card",
  "date": "2024-01-15",
  "notes": "Partial payment - 1st installment"
}`,
          },
          response: {
            status: 201,
            example: `{
  "id": "pay125",
  "studentId": "std002",
  "amount": 3000,
  "method": "Credit Card",
  "processedAt": "2024-01-15T16:00:00Z"
}`,
          },
        },
        {
          method: 'GET',
          path: '/financial/overview',
          description: 'Get financial overview and statistics',
          parameters: [
            { name: 'semester', type: 'string', required: false, description: 'Filter by semester' },
          ],
          response: {
            status: 200,
            example: `{
  "totalRevenue": 1740000,
  "totalOutstanding": 45000,
  "paidInFull": 132,
  "partiallyPaid": 10,
  "unpaid": 3,
  "collectionRate": 97.4
}`,
          },
        },
      ],
    },
    {
      name: 'Documents',
      icon: '📄',
      description: 'Manage and retrieve educational documents',
      endpoints: [
        {
          method: 'GET',
          path: '/documents',
          description: 'Retrieve all documents',
          parameters: [
            { name: 'type', type: 'string', required: false, description: 'Filter by document type' },
            { name: 'studentId', type: 'string', required: false, description: 'Filter by student ID' },
            { name: 'subjectId', type: 'string', required: false, description: 'Filter by subject ID' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "doc001",
      "name": "Syllabus - Advanced Mathematics",
      "type": "Syllabus",
      "subjectId": "sub001",
      "uploadedBy": "Dr. Sarah Johnson",
      "uploadedAt": "2023-08-20T10:00:00Z",
      "fileSize": "245KB",
      "url": "/documents/doc001.pdf"
    }
  ],
  "total": 156
}`,
          },
        },
        {
          method: 'POST',
          path: '/documents',
          description: 'Upload a new document',
          requestBody: {
            type: 'multipart/form-data',
            example: `{
  "file": "(binary data)",
  "name": "Quiz 1 - Results",
  "type": "Assessment",
  "subjectId": "sub001"
}`,
          },
          response: {
            status: 201,
            example: `{
  "id": "doc157",
  "name": "Quiz 1 - Results",
  "type": "Assessment",
  "subjectId": "sub001",
  "uploadedAt": "2024-01-15T17:00:00Z",
  "url": "/documents/doc157.pdf"
}`,
          },
        },
      ],
    },
    {
      name: 'Achievements',
      icon: '🏆',
      description: 'Track student achievements and awards',
      endpoints: [
        {
          method: 'GET',
          path: '/achievements',
          description: 'Get all student achievements',
          parameters: [
            { name: 'studentId', type: 'string', required: false, description: 'Filter by student ID' },
            { name: 'type', type: 'string', required: false, description: 'Filter by achievement type' },
          ],
          response: {
            status: 200,
            example: `{
  "data": [
    {
      "id": "ach001",
      "studentId": "std001",
      "studentName": "Emily Johnson",
      "title": "Perfect Attendance",
      "description": "100% attendance for Fall 2024",
      "type": "Attendance",
      "earnedDate": "2024-01-10",
      "icon": "🎯"
    }
  ],
  "total": 89
}`,
          },
        },
        {
          method: 'POST',
          path: '/achievements',
          description: 'Award an achievement to a student',
          requestBody: {
            type: 'application/json',
            example: `{
  "studentId": "std001",
  "title": "Academic Excellence",
  "description": "GPA above 3.8 for the semester",
  "type": "Academic",
  "icon": "🌟"
}`,
          },
          response: {
            status: 201,
            example: `{
  "id": "ach090",
  "studentId": "std001",
  "title": "Academic Excellence",
  "earnedDate": "2024-01-15",
  "createdAt": "2024-01-15T18:00:00Z"
}`,
          },
        },
      ],
    },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'POST':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'DELETE':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const toggleEndpoint = (path: string) => {
    setExpandedEndpoint(expandedEndpoint === path ? null : path);
  };

  const activeCategoryData = apiCategories.find(cat => cat.name === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-salesforce-darkblue mb-3">
            {t.api.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{t.api.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">{t.api.baseUrl}</h3>
              <code className="text-sm bg-white px-3 py-2 rounded border border-gray-300 block">
                {baseUrl}
              </code>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">{t.api.version}</h3>
              <code className="text-sm bg-white px-3 py-2 rounded border border-gray-300 block">
                v1.0.0
              </code>
            </div>
          </div>
        </div>

        {/* Authentication Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-salesforce-darkblue mb-4">
            {t.api.authentication}
          </h2>
          <p className="text-gray-600 mb-4">
            All API requests require authentication using Bearer tokens. Include your API token in the Authorization header:
          </p>
          <div className="bg-gray-900 rounded-lg p-4">
            <code className="text-green-400 text-sm">
              Authorization: Bearer YOUR_API_TOKEN
            </code>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Contact your system administrator to obtain an API token.
          </p>
        </div>

        {/* Categories and Endpoints */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-bold text-salesforce-darkblue mb-4">
                {t.api.resources}
              </h3>
              <div className="space-y-2">
                {apiCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name);
                      setExpandedEndpoint(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeCategory === category.name
                        ? 'bg-salesforce-blue text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{category.name}</div>
                      <div className={`text-xs ${activeCategory === category.name ? 'text-gray-200' : 'text-gray-500'}`}>
                        {category.endpoints.length} endpoints
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Endpoints Content */}
          <div className="lg:col-span-3">
            {activeCategoryData && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{activeCategoryData.icon}</span>
                    <h2 className="text-2xl font-bold text-salesforce-darkblue">
                      {activeCategoryData.name}
                    </h2>
                  </div>
                  <p className="text-gray-600">{activeCategoryData.description}</p>
                </div>

                <div className="space-y-4">
                  {activeCategoryData.endpoints.map((endpoint, index) => {
                    const endpointKey = `${endpoint.method}-${endpoint.path}`;
                    const isExpanded = expandedEndpoint === endpointKey;

                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        {/* Endpoint Header */}
                        <button
                          onClick={() => toggleEndpoint(endpointKey)}
                          className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`px-3 py-1 rounded font-semibold text-sm border ${getMethodColor(
                                endpoint.method
                              )}`}
                            >
                              {endpoint.method}
                            </span>
                            <code className="text-sm font-mono text-gray-800">
                              {baseUrl}{endpoint.path}
                            </code>
                          </div>
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              isExpanded ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Endpoint Details */}
                        {isExpanded && (
                          <div className="px-6 py-4 border-t border-gray-200">
                            {/* Description */}
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                {t.api.description}
                              </h4>
                              <p className="text-gray-600">{endpoint.description}</p>
                            </div>

                            {/* Parameters */}
                            {endpoint.parameters && endpoint.parameters.length > 0 && (
                              <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                  {t.api.parameters}
                                </h4>
                                <div className="bg-gray-50 rounded-lg overflow-hidden">
                                  <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100">
                                      <tr>
                                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">
                                          Name
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">
                                          Type
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">
                                          Required
                                        </th>
                                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">
                                          Description
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                      {endpoint.parameters.map((param, pIndex) => (
                                        <tr key={pIndex}>
                                          <td className="px-4 py-2 text-sm font-mono text-gray-800">
                                            {param.name}
                                          </td>
                                          <td className="px-4 py-2 text-sm text-gray-600">
                                            {param.type}
                                          </td>
                                          <td className="px-4 py-2 text-sm">
                                            {param.required ? (
                                              <span className="text-red-600 font-semibold">
                                                Yes
                                              </span>
                                            ) : (
                                              <span className="text-gray-500">No</span>
                                            )}
                                          </td>
                                          <td className="px-4 py-2 text-sm text-gray-600">
                                            {param.description}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {/* Request Body */}
                            {endpoint.requestBody && (
                              <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                  {t.api.request} ({endpoint.requestBody.type})
                                </h4>
                                <div className="bg-gray-900 rounded-lg p-4">
                                  <pre className="text-green-400 text-sm overflow-x-auto">
                                    {endpoint.requestBody.example}
                                  </pre>
                                </div>
                              </div>
                            )}

                            {/* Response */}
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                {t.api.response} ({endpoint.response.status})
                              </h4>
                              <div className="bg-gray-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm overflow-x-auto">
                                  {endpoint.response.example || '(No content)'}
                                </pre>
                              </div>
                            </div>

                            {/* Try It Button */}
                            <div className="pt-4 border-t border-gray-200">
                              <button className="sf-button-primary px-6 py-2">
                                {t.api.tryIt}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
