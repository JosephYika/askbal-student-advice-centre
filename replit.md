# ASK BAL Student Advice Centre - De Montfort University

## Overview

This is a React-based web application for the ASK BAL Student Advice Centre at De Montfort University's Faculty of Business & Law. The application serves as a comprehensive digital platform providing student services, academic support, and information resources. The system includes a main homepage, a BAL Portal for student services, and a programme finder tool.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight routing library)
- **UI Framework**: Custom component system based on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom DMU branding colors
- **State Management**: TanStack Query for server state, React hooks for local state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript throughout the stack
- **API Design**: RESTful API structure with `/api` prefix
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Vite middleware integration for hot module replacement

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Core Pages
1. **Home Page** (`/`): Main landing page with hero section, services overview, contact information
2. **BAL Portal** (`/bal-portal`): Comprehensive student services dashboard with categorized tiles
3. **Programme Finder** (`/programme-finder`): Search tool for finding academic programmes and contacts
4. **404 Page**: Error handling for unknown routes

### UI Component System
- **Base Components**: Button, Card, Input, Dialog, Toast notifications
- **Navigation**: Header with mobile-responsive menu, Footer with quick links
- **Interactive Elements**: 3D cube text animations, responsive hero sections
- **Forms**: Form validation with React Hook Form and Zod schemas

### Special Features
- **3D Animations**: Custom CubeText component for "2025" display with CSS transforms
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Accessibility**: ARIA labels, skip links, keyboard navigation support
- **DMU Branding**: Custom color scheme matching university brand guidelines

## Data Flow

### Request Flow
1. **Client Requests**: Routed through Wouter to appropriate page components
2. **API Calls**: TanStack Query manages server state and caching
3. **Data Fetching**: Custom query functions handle HTTP requests with error handling
4. **Response Processing**: Automatic JSON parsing and error management

### State Management
- **Server State**: TanStack Query for API data, caching, and synchronization
- **Local State**: React useState and useEffect for component-level state
- **Form State**: React Hook Form for form validation and submission
- **Global Context**: Tooltip and Toast providers for UI feedback

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React Router alternative (Wouter)
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Utilities**: clsx, tailwind-merge for class management
- **Forms**: React Hook Form, Hookform resolvers
- **Validation**: Zod for schema validation

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Fast development server and optimized builds
- **Tailwind CSS**: Utility-first styling with custom configuration
- **ESBuild**: Backend bundling for production deployment

### Database & Storage
- **Drizzle ORM**: Type-safe database operations
- **PostgreSQL**: Primary database (Neon serverless configuration)
- **Session Storage**: connect-pg-simple for PostgreSQL session store

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite compiles React app to static assets in `dist/public`
- **Backend Build**: ESBuild bundles Express server to `dist/index.js`
- **Asset Management**: Vite handles asset optimization and fingerprinting

### Production Configuration
- **Platform**: Vercel deployment with Node.js runtime
- **Environment**: Production environment variables for database connections
- **Static Serving**: Vite-built assets served from `dist/public`
- **API Routes**: Express server handles `/api/*` routes

### Development Setup
- **Hot Reload**: Vite development server with Express middleware
- **Database**: Local PostgreSQL or Neon development database
- **Environment**: Cross-platform environment variable management
- **File Watching**: Automatic TypeScript compilation and server restart

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting via Vite
- **Asset Optimization**: Image optimization and lazy loading
- **Caching**: TanStack Query provides intelligent data caching
- **Bundle Analysis**: Vite build analyzer for optimization insights