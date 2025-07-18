# replit.md

## Overview

This is a React-based web application for the ASK BAL Student Advice Centre at De Montfort University's Faculty of Business & Law. The application serves as a digital presence for the student advice centre, featuring a modern responsive design with DMU branding, 3D interactive elements, and comprehensive student support information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The application follows a modern React architecture with:

- **React 18** with TypeScript for type safety and modern React features
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API interactions
- **Tailwind CSS** for utility-first styling with custom DMU brand colors
- **shadcn/ui** component library for consistent, accessible UI components

### Backend Architecture

The backend is built with:

- **Express.js** server with TypeScript support
- **Drizzle ORM** for database operations (currently using memory storage with PostgreSQL configuration ready)
- **RESTful API** structure with `/api` prefix for all routes
- **Vite middleware integration** for seamless development experience

## Key Components

### Core Application Structure

1. **App.tsx** - Root component with providers and routing setup
2. **Home.tsx** - Main single-page application containing all sections
3. **ProgrammeFinder.tsx** - Dedicated page for school/programme discovery

### UI Components

1. **Hero Section** - Split-screen design with DMU branding and 3D cube text effect
2. **Header** - Responsive navigation with DMU logo and mobile menu
3. **About Section** - Information about the Student Advice Centre services
4. **Services Section** - Grid layout showing support categories
5. **Contact Section** - Multiple contact methods with authentic DMU staff images
6. **Footer** - Site links and additional contact information

### 3D Interactive Elements

- **CubeText Component** - 3D animated "2025" text with DMU burgundy gradient
- Responsive scaling and positioning across devices
- CSS transform3d for hardware-accelerated animations

### Design System

- **DMU Brand Colors**: Primary burgundy (#990033) with variations
- **Typography**: Open Sans and Poppins fonts
- **Responsive Breakpoints**: Mobile-first approach with tablet and desktop optimizations
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation

## Data Flow

### Client-Side State Management

1. **React Query** manages server state and API caching
2. **Local Component State** for UI interactions and form handling
3. **Custom Hooks** for reusable stateful logic (mobile detection, toast notifications)

### API Communication

1. **RESTful Endpoints** under `/api` prefix
2. **JSON Request/Response** format with proper error handling
3. **Credential Inclusion** for session management
4. **Request Logging** middleware for development debugging

### Storage Layer

- **Memory Storage** implementation for development
- **PostgreSQL** configuration ready via Drizzle ORM
- **User Schema** defined with Zod validation
- **Migration Support** through Drizzle Kit

## External Dependencies

### Core Dependencies

- **React Ecosystem**: React, React DOM, React Hook Form
- **Routing**: Wouter for lightweight routing
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: Radix UI primitives via shadcn/ui
- **Database**: Drizzle ORM with Neon Database serverless support

### Development Tools

- **TypeScript** for type safety across frontend and backend
- **Vite** for development server and build optimization
- **ESBuild** for server bundling
- **Cross-env** for environment variable management

### Asset Management

- **Static Assets**: Images stored in `attached_assets/` directory
- **DMU Branding**: Authentic university building images and staff photos
- **Logo Assets**: Official DMU logo in SVG format

## Deployment Strategy

### Production Build

1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Served from build output directory

### Hosting Configuration

- **Vercel Deployment**: Configured with `vercel.json` for seamless deployment
- **Build Command**: `npm run build` handles both frontend and backend
- **Output Directory**: `dist/public` for static assets
- **Environment Variables**: Database URL and other secrets via platform configuration

### Development Workflow

1. **Local Development**: `npm run dev` starts both Vite dev server and Express backend
2. **Database Management**: `npm run db:push` for schema synchronization
3. **Type Checking**: `npm run check` for TypeScript validation
4. **Hot Reload**: Vite HMR for frontend, nodemon equivalent for backend changes

### Performance Optimizations

- **Code Splitting**: Vite automatic chunking for optimal loading
- **CSS Optimization**: Tailwind purging and PostCSS processing
- **Bundle Analysis**: Source maps and build output analysis available

## Recent Changes: Latest modifications with dates

### July 18, 2025
- ✅ **Completed School Finder Page**: Full implementation with 30 programmes across 3 schools
- ✅ **Applied DMU Brand Colors**: Consistent #820628 burgundy and #2B5F57 forest green
- ✅ **Enhanced School Cards**: Different background opacity variations for visual distinction
- ✅ **Resolved Git Conflicts**: Cleaned all conflict markers from React components
- ✅ **Cross-Platform Compatibility**: Fixed Windows development environment with cross-env
- ✅ **Cleaned Project Structure**: Removed unnecessary files, keeping only essential deployment files
- ✅ **Restored Authentic DMU Images**: Replaced placeholder images with official DMU photos and branding
- ✅ **Removed GitHub Dependencies**: Cleaned project references for standalone Replit deployment
- ✅ **Disconnected Remote Origin**: Removed GitHub remote connection for independent development