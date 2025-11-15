# EduFlow CRM - Education Management System

A modern education CRM mockup built with Next.js, TypeScript, and Tailwind CSS, inspired by Salesforce Education.

## Features

### Authentication
- Simple login page (demo - any credentials work)

### Dashboard
- Overview of key metrics (professors, subjects, students, messages)
- Quick actions and recent activity
- Active subjects list

### Professors Management
- View all professors with search and filtering
- Professor detail pages with assigned subjects
- Add new professors
- Edit professor information
- Track professor status (Active/Inactive)

### Subjects Management
- Browse all subjects in a card layout
- Detailed subject pages with tabs:
  - **Overview**: Course information and statistics
  - **Notes**: Student notes (attendance, behavioral, academic, achievements)
  - **Scores**: Student grades and assignments with percentage calculations

### Parent Communications
- Message inbox with filtering by status and priority
- Search functionality
- Message detail view with reply interface
- Status tracking (Unread, Read, Replied)
- Priority levels (High, Medium, Low)
- Quick statistics dashboard

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Salesforce-inspired theme
- **Data**: Mock data (no database required)

## Getting Started

### Prerequisites
- Node.js 20+ installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Login
Use any email and password to log in (this is a demo/mockup).

## Project Structure

```
eduflow/
├── app/
│   ├── dashboard/          # Main dashboard
│   ├── professors/         # Professors management
│   │   ├── [id]/          # Professor detail & edit
│   │   └── new/           # Add professor
│   ├── subjects/          # Subjects management
│   │   └── [id]/          # Subject detail with notes & scores
│   ├── communications/    # Parent communications
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Login page
├── components/
│   └── Navigation.tsx     # Main navigation component
└── lib/
    └── mockData.ts        # Mock data for demo
```

## Mock Data

The application includes mock data for:
- 5 Professors
- 6 Subjects
- 5 Student Notes
- 6 Student Scores
- 5 Parent Messages

## Customization

### Colors
The Salesforce-inspired color scheme is defined in `tailwind.config.ts`:
- Primary Blue: #0176D3
- Dark Blue: #032D60
- Cloud Blue: #E3F3FF
- Border Gray: #DDDBDA

### Components
Custom component classes are defined in `globals.css`:
- `.sf-card` - Card container
- `.sf-button-primary` - Primary button
- `.sf-button-secondary` - Secondary button
- `.sf-input` - Form input
- `.sf-table` - Data table

## Build for Production

```bash
npm run build
npm start
```

## Planned Features & Enhancements

### 📊 Analytics & Metrics Dashboard
- [x] Analytics dashboard page with key metrics
- [x] Visual charts (Bar, Line, Pie) using Recharts
- [x] Enrollment trends by year/semester
- [x] Student retention rates
- [x] Academic performance metrics by subject/professor
- [x] Attendance statistics
- [x] Pass/fail rates visualization

### 📅 Calendar & Scheduling
- [x] Academic calendar with important dates
- [x] Exam schedule view
- [ ] Teacher availability calendar
- [x] Holidays and breaks
- [x] Parent-teacher meeting scheduler
- [ ] Event reminders and notifications

### 💬 Enhanced Communication Tools
- [ ] Communication history timeline
- [ ] Bulk messaging capability
- [ ] Message templates
- [ ] Read receipts
- [ ] Response time metrics
- [ ] Notification center with badges

### 🎓 Student Progress Tracking
- [ ] Individual student profiles page
- [ ] Grade progression graphs
- [ ] Behavioral reports timeline
- [ ] Attendance records view
- [ ] Parent engagement scoring

### 👨‍🏫 Professor Performance
- [ ] Teaching load visualization
- [ ] Student satisfaction ratings
- [ ] Class performance comparison
- [ ] Professional development tracking

### 📋 Administrative Tools
- [ ] Pending tasks/to-dos list
- [ ] Document management system
- [ ] Enhanced grade entry interface
- [ ] Absence approval workflow

### 💰 Financial Insights
- [ ] Tuition payment status dashboard
- [ ] Revenue per course metrics
- [ ] Cost per student analysis
- [ ] Budget allocation by department

### 🔔 Notifications & Alerts
- [ ] Real-time notification center
- [ ] Priority indicators
- [ ] Unread message counter
- [ ] Alert badges throughout app

### 📱 Mobile Optimization
- [ ] Enhanced responsive design
- [ ] Touch-friendly interfaces
- [ ] Mobile quick actions

### 🔗 Integration Features
- [ ] Export to Excel/PDF
- [ ] Email integration preview
- [ ] API documentation page
- [ ] Enhanced Salesforce branding

### 🏆 Gamification
- [ ] Achievement badges for students
- [ ] Leaderboards
- [ ] Visual progress bars

### 📊 Reporting Center
- [ ] Custom report builder
- [ ] Automated weekly/monthly reports
- [ ] Print-friendly formats
- [ ] Report sharing functionality

### 🪲 Bugs
- [ ] When I click on `Total Students` it redirects me to `/subjects` instead of a page that shows students information

## Notes

This is a **mockup/demo application** designed for presentations. It does not include:
- Real authentication
- Database integration
- API endpoints
- Data persistence
- User roles/permissions

All data is mocked and any changes (adding/editing) will not persist after page refresh.

## License

MIT
