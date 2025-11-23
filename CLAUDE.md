# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EduFlow CRM is a comprehensive education management system mockup built with Next.js 15, TypeScript, and Tailwind CSS. It simulates a Salesforce-style CRM for educational institutions, managing professors, students, subjects, communications, analytics, and more.

**Important**: This is a demo/mockup application using mock data. There is no real authentication, database, or data persistence.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure (Next.js 15)

The application uses Next.js App Router with the following main routes:

- `/` - Login page (accepts any credentials)
- `/dashboard` - Main dashboard with metrics and quick actions
- `/professors` - Professor management (list, view, add, edit)
- `/subjects` - Subject management with notes and scores
- `/students` - Student profiles and progress tracking
- `/communications` - Parent communications inbox
- `/analytics` - Analytics dashboard with Recharts visualizations
- `/calendar` - Academic calendar and scheduling
- `/documents` - Document management system
- `/absences` - Absence tracking and approval
- `/financial` - Financial insights (tuition, revenue, costs, budget)
- `/achievements` - Achievement badges and gamification
- `/leaderboard` - Student leaderboards
- `/reports` - Reporting center with custom report builder
- `/api-docs` - API documentation page
- `/settings` - Settings pages (notifications, etc.)
- `/timetable` - Schedule management

### Key Technical Details

**Styling Approach**:
- Custom Salesforce-inspired theme in `tailwind.config.ts` using green colors (`#10B981` primary, `#047857` dark)
- Reusable utility classes defined in `app/globals.css` (`.sf-card`, `.sf-button-primary`, etc.)
- Responsive design with mobile optimization

**Mock Data System**:
- All data is defined in `/lib/mockData.ts` with TypeScript interfaces
- Data includes: Professors, Subjects, Notes, Scores, ParentMessages, Students, Achievements, etc.
- No database integration - changes don't persist across page refreshes

**Internationalization**:
- Language context in `/contexts/LanguageContext.tsx`
- Supports English and Spanish
- Use `const { t } = useLanguage()` hook to access translations

**Components**:
- `/components/Navigation.tsx` - Main navigation bar with language switcher and notifications
- `/components/Providers.tsx` - Context providers wrapper
- `/components/NotificationDropdown.tsx` - Real-time notification center
- `/components/LanguageSwitcher.tsx` - Language toggle component

**Charts & Visualizations**:
- Uses `recharts` library for data visualization
- Implemented in analytics, financial, and various dashboard pages

## Code Patterns

### Page Component Structure
All pages follow this pattern:
```tsx
'use client';
import { useLanguage } from '@/contexts/LanguageContext';
// Component imports...

export default function PageName() {
  const { t } = useLanguage();
  // Component logic...
}
```

### Navigation Pattern
All authenticated pages should include the Navigation component:
```tsx
import Navigation from '@/components/Navigation';

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page content */}
      </main>
    </>
  );
}
```

### Mock Data Usage
Import and use mock data from the centralized file:
```tsx
import { professors, subjects } from '@/lib/mockData';
```

## Landing Page (docs/)

The `/docs` directory contains a static landing page separate from the main Next.js app:

- **Technology**: Plain HTML, CSS, JavaScript (no framework)
- **Files**: `index.html`, `index.css`, `index.js`
- **Purpose**: Marketing landing page for EduFlow CRM
- **Features**: Hero section, features grid, metrics, contact form, founders section
- **Deployment**: Can be deployed separately as static site

The landing page uses:
- Green color scheme matching the main app
- Intersection Observer for scroll animations
- Animated counters for statistics
- Form validation in vanilla JavaScript
- Mobile-responsive design

## Important Notes

1. **No Real Authentication**: The login page accepts any credentials - it's purely for demo purposes
2. **Mock Data Only**: All data is in-memory and resets on refresh
3. **TypeScript Interfaces**: Always use the defined interfaces from `lib/mockData.ts`
4. **Responsive Design**: All pages should work on mobile, tablet, and desktop
5. **Color Scheme**: Use the custom `salesforce-*` colors from Tailwind config
6. **Routing**: Use Next.js `Link` component for navigation, not `<a>` tags
7. **Client Components**: Most components need `'use client'` directive due to hooks usage
8. **i18n**: Always use translation keys from `useLanguage()` hook for user-facing text

## File Structure

```
eduflow/
├── app/                    # Next.js App Router pages
│   ├── [feature]/         # Feature-specific pages
│   ├── globals.css        # Global styles and utility classes
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Login page
├── components/            # Reusable React components
├── contexts/              # React contexts (Language)
├── lib/                   # Utilities and mock data
├── public/                # Static assets (logo.webp, etc.)
├── docs/                  # Static landing page (separate from app)
└── node_modules/          # Dependencies
```

## Adding New Features

When adding new features:
1. Create a new directory under `/app/[feature-name]`
2. Add corresponding route in Navigation component
3. Add mock data interfaces and data to `/lib/mockData.ts`
4. Follow existing page patterns for consistency
5. Use i18n for all user-facing text
6. Ensure mobile responsiveness
7. Use Salesforce-inspired styling (`.sf-*` classes)
