# ASK BAL Student Advice Centre - Replit Development Guide

## Overview

This is a React-based web application for the ASK BAL Student Advice Centre at De Montfort University's Faculty of Business & Law. The application serves as a digital student support platform with modern UI components, 3D interactive elements, and comprehensive student services information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with custom DMU brand colors (#820628 burgundy, #2B5F57 forest green)
- **State Management**: TanStack Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Modular storage interface with in-memory implementation (ready for PostgreSQL upgrade)
- **Authentication**: Session-based authentication using connect-pg-simple

### Key Components

#### Core Application Structure
- **Single Page Application**: Main content served through `/` route with smooth scrolling navigation
- **Programme Finder**: Separate `/programme-finder` route for school and programme discovery
- **Component Architecture**: Modular components (Header, Hero, About, Services, Contact, Footer)

#### Interactive Elements
- **3D Cube Text Animation**: Custom CubeText component with hardware-accelerated CSS transforms
- **Responsive Design**: Mobile-first approach with breakpoint-specific optimizations
- **DMU Branding**: Consistent university colors and imagery throughout

#### UI Component System
- **Design System**: shadcn/ui components with Radix UI primitives
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: Radix Toast system for user feedback

### Data Flow

#### Frontend Data Management
1. **Query Client**: TanStack Query handles API requests and caching
2. **API Layer**: Centralized API request functions with error handling
3. **Component State**: Local state for UI interactions, server state for data

#### Backend Request Flow
1. **Express Middleware**: Request parsing, logging, and error handling
2. **Route Registration**: Modular route system with `/api` prefix
3. **Storage Layer**: Abstracted storage interface for database operations
4. **Response Handling**: JSON responses with proper error codes

### External Dependencies

#### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Lucide icons
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Development**: Vite, TypeScript, ESLint, Tailwind CSS

#### Production Dependencies
- **Build Tools**: esbuild for server bundling, Vite for client assets
- **Cross-Platform**: cross-env for environment variable handling
- **Database Migration**: Drizzle Kit for schema management

### Deployment Strategy

#### Vercel Configuration
- **Build Command**: `npm run build` - builds both client and server
- **Output Directory**: `dist/public` for static assets
- **API Routes**: Serverless functions through `/api/*` rewrites
- **Framework**: None (custom configuration for Express + Vite setup)

#### Environment Setup
- **Development**: Vite dev server with Express API proxy
- **Production**: Static files served with Express API backend
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

#### Asset Management
- **Images**: Stored in `attached_assets` directory with Vite alias
- **Static Files**: Served from `dist/public` in production
- **Font Loading**: Google Fonts (Open Sans) with preconnect optimization

## Development Notes

### Recent Enhancements
- **Programme Finder**: Complete implementation with 30+ academic programmes across 3 schools
- **3D Animations**: Interactive cube text effects in hero section
- **Mobile Optimization**: Responsive design with 60vh mobile hero height
- **DMU Branding**: Authentic university imagery and color schemes

### Code Organization
- **TypeScript Configuration**: Strict mode with path aliases for clean imports
- **Component Structure**: Atomic design with reusable UI components
- **Styling Approach**: Utility-first CSS with custom CSS variables for theming
- **Build Optimization**: Separate client and server builds with proper output directories

### Future Considerations
- The application is configured for PostgreSQL but currently uses in-memory storage
- Database schema is defined and ready for migration when PostgreSQL is provisioned
- All UI components are fully accessible and keyboard navigable
- Error boundaries and loading states are implemented for better user experience