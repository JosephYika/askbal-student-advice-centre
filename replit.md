# ASK BAL Student Advice Centre - Replit Guide

## Overview

This is a React-based web application for the ASK BAL Student Advice Centre at De Montfort University's Faculty of Business & Law. The application serves as a student support portal with information about academic guidance, assessment deferrals, and various student services. The application features a modern, responsive design with DMU brand colors and includes interactive 3D elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a clear separation between frontend and backend components:

- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Configured for Vercel

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom DMU brand colors (#990033 burgundy, #2B5F57 forest green)

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Structure**: RESTful API with `/api` prefix
- **Session Management**: Uses connect-pg-simple for session storage
- **Development**: Hot reload with Vite middleware integration

### Database Schema
The database uses PostgreSQL with the following structure:
- **Users table**: Basic user authentication with id, username, password fields
- **Schema location**: `shared/schema.ts` using Drizzle ORM definitions
- **Migrations**: Located in `./migrations` directory

### Authentication & Authorization
- Basic user authentication system with username/password
- Session-based authentication using PostgreSQL session store
- User model supports future expansion for role-based access

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express.js routes handle requests with proper error handling
3. **Data Layer**: Drizzle ORM manages database operations
4. **Response Flow**: Data flows back through the same layers with proper error handling

The application uses a request/response pattern with:
- JSON API endpoints for data operations
- Client-side routing for navigation
- Server-side session management for authentication

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React-DOM, React-Hook-Form
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Database**: @neondatabase/serverless, Drizzle ORM
- **Styling**: Tailwind CSS, class-variance-authority
- **Development**: Vite, TypeScript, ESBuild

### Asset Management
- Images stored in `attached_assets/` directory
- Vite handles asset optimization and bundling
- DMU branding images and building photos included

### Build Tools
- **Development**: Vite dev server with hot reload
- **Production**: Vite build with Express.js server bundle
- **Cross-platform**: Uses cross-env for Windows compatibility

## Deployment Strategy

### Vercel Deployment
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **API Routes**: Proxied through Vercel's serverless functions
- **Static Files**: Served from build output directory

### Environment Setup
- **Development**: Uses NODE_ENV=development with Vite dev server
- **Production**: NODE_ENV=production with compiled Express server
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection

### File Structure
```
├── client/          # React frontend
│   ├── src/         # Source components and pages
│   └── public/      # Static assets
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── attached_assets/ # DMU images and branding
└── dist/           # Build output
```

The application is designed for easy deployment to Vercel with automatic builds and serverless function support. The monorepo structure keeps frontend and backend code organized while sharing common types and schemas.

### Key Features
- Responsive design optimized for mobile and desktop
- Interactive 3D "2025" cube animation in hero section
- DMU brand compliance with official colors and imagery
- Programme finder tool for student guidance
- Contact information and service descriptions
- Accessibility features with proper ARIA labels