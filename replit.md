# ASK BAL Student Advice Centre - System Architecture

## Overview

This is a React-based web application for the ASK BAL Student Advice Centre at De Montfort University's Faculty of Business & Law. The application serves as a digital presence for the student advice centre, providing information about services, contact details, and a programme finder to help students identify their school contacts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React architecture with the following key decisions:

**Problem**: Need for a lightweight, fast-loading single-page application
**Solution**: React with Wouter for routing and Vite for build tooling
**Rationale**: Wouter provides minimal routing overhead compared to React Router, while Vite offers fast development builds and hot module replacement

**Technology Stack**:
- React 18 with TypeScript for type safety
- Wouter for client-side routing (lightweight alternative to React Router)
- Vite for development server and build optimization
- Tailwind CSS for styling with shadcn/ui component library
- TanStack Query for server state management

### Backend Architecture
**Problem**: Need for a minimal backend with potential for future expansion
**Solution**: Express.js server with modular route registration and storage abstraction
**Current State**: Basic Express setup with memory storage, ready for database integration

**Components**:
- Express.js server with middleware for JSON parsing and request logging
- Modular route registration system (`registerRoutes`)
- Storage abstraction layer with in-memory implementation
- Separate development and production static file serving

### Data Storage Solutions
**Problem**: Current need for simple user management with future scalability
**Solution**: Drizzle ORM with PostgreSQL configuration and memory storage fallback
**Implementation**: 
- Drizzle configured for PostgreSQL with migrations support
- Schema defined for users table with username/password
- Memory storage class implementing the storage interface for development
- Ready for PostgreSQL connection via environment variables

### Authentication and Authorization
**Current State**: Basic user schema defined but no authentication implemented
**Prepared Architecture**: User table with username/password fields, ready for session-based or JWT authentication

## Key Components

### Client-Side Components
1. **Header**: Navigation with DMU branding and responsive mobile menu
2. **Hero**: Split-screen design with 3D cube animation and DMU imagery
3. **About**: Information about services with call-to-action cards
4. **Services**: Grid layout of support categories
5. **Contact**: Multi-channel contact methods with school-specific information
6. **Programme Finder**: Search functionality for 30+ programmes across 3 schools

### UI Component System
- shadcn/ui components for consistent design language
- Custom CubeText component for 3D text animations
- Responsive design with mobile-first approach
- DMU brand colors integrated throughout (#820628 burgundy, #2B5F57 forest green)

### Server Components
1. **Route Registration**: Modular system for API endpoint management
2. **Storage Layer**: Abstract interface for database operations
3. **Static File Serving**: Development (Vite) and production (Express) configurations

## Data Flow

### Client-Side Data Flow
1. **Component State**: Local state for UI interactions (search, mobile menu)
2. **Query Management**: TanStack Query for server state caching and synchronization
3. **Route Navigation**: Wouter handles client-side routing without page refreshes

### Server-Side Data Flow
1. **Request Processing**: Express middleware chain for parsing and logging
2. **Route Handling**: Modular route registration system
3. **Storage Operations**: Abstract storage interface for CRUD operations

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Type safety across client and server
- **Vite**: Fast development server and optimized builds
- **ESLint/Prettier**: Code quality and formatting (configured)

### Server Dependencies
- **Express**: Web framework for API and static file serving
- **Drizzle ORM**: Type-safe database operations
- **Neon**: PostgreSQL serverless database provider (configured)

## Deployment Strategy

### Build Configuration
**Problem**: Need for production-ready builds with proper static file handling
**Solution**: Dual build process for client and server with Vercel deployment

**Build Process**:
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Images and fonts included in build output

### Deployment Platform
- **Vercel**: Configured for serverless deployment
- **Environment Variables**: Ready for PostgreSQL connection string
- **Rewrites**: API routes proxied to serverless functions, SPA routing handled

### Production Considerations
- **Static File Serving**: Express serves built React app in production
- **API Routes**: Prefixed with `/api` for clear separation
- **Database**: Configured for Neon PostgreSQL with connection pooling
- **Error Handling**: Request logging and error boundaries for debugging