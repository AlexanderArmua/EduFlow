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
