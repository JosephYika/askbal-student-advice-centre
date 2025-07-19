# ASK BAL Student Advice Centre - De Montfort University

## Overview

This is a React-based web application for the ASK BAL Student Advice Centre at De Montfort University's Faculty of Business & Law. The application serves as a digital presence for the student advice centre, featuring a modern responsive design with DMU branding, 3D interactive elements, and comprehensive student support information.

## Recent Changes (December 2024)

### Hero Section Updates
- Implemented split-screen design with burgundy left side and Hugh Aston building image on right
- Added responsive mobile layout with 50/50 split maintained across all screen sizes
- Optimized typography and button sizing for mobile devices
- Positioned building identification text centered on image for mobile, bottom-right for desktop
- Enhanced contrast and accessibility with proper text shadows and overlays

### Mobile Responsiveness
- Centered all text content on mobile devices (hero, about, services sections)
- Reduced hero section height to 60vh on mobile for better UX
- Implemented responsive padding and spacing throughout
- Maintained desktop layout while optimizing mobile experience

### Content Sections
- "What We Do" section text centered for mobile devices
- Services section completely centered across all screen sizes
- Contact and about sections optimized for mobile viewing

### 3D Interactive Elements (January 2025)
- Added interactive 3D "2025" cube text effect in hero section top-right corner
- Implemented burgundy DMU branding with gradient effects and hover animations
- Optimized cube scaling and positioning for mobile devices
- Fine-tuned hero section typography with custom line height (1.3) for optimal spacing

### Deployment Success (January 2025)
- Successfully deployed to Vercel at https://askbal-student-advice-centre.vercel.app/
- Implemented proper build configuration with simplified vercel.json
- Resolved deployment issues with correct buildCommand and outputDirectory settings
- All features working: 3D cubes, responsive design, DMU branding, and Hugh Aston imagery

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
- ✅ **Fresh Git Repository**: Created clean repository without bloated history for GitHub push
- ✅ **Successful Vercel Deployment**: Live website deployed at https://askbal-student-advice-centre.vercel.app/
- ✅ **Search Engine Prevention**: Added robots.txt and meta tags to prevent Google indexing
- ✅ **BAL Portal Page**: Comprehensive student services portal with 36 categorized tiles, hero section with stats, and consistent DMU design
- ✅ **Portal Design Updates**: Removed quick actions, uniform card sizing, improved hero section with gradient and service statistics
- ✅ **Card Redesign**: Smaller, centered cards with icons and titles only, removed descriptions for cleaner look
- ✅ **Hero Section Refinement**: Separated burgundy and forest green sections instead of gradient for better color distinction
- ✅ **School Finder-Style Hero**: Redesigned with sticky header, interactive category buttons, and professional layout matching programme finder design
- ✅ **Simplified Cards**: Removed priority and external badges for cleaner, minimalist card design with just icons and titles
- ✅ **Grid Layout Optimization**: Reverted to previous card design, increased card width, changed to 5 cards per row on desktop for better spacing

## User Preferences

- **Communication style**: Simple, everyday language
- **Documentation**: Always use README.md for all project documentation and user preferences (never create replit.md)
- **File management**: Maintain clean project structure with standard conventions

**Note**: This README.md serves as the single source of truth for project documentation and preferences. All project information and user preferences are documented here following standard industry practices.

## System Architecture

### Frontend Architecture

The application follows a modern React architecture with:

- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **Tailwind CSS** for styling with custom design system
- **shadcn/ui** component library for consistent UI components
- **Radix UI** primitives for accessible, unstyled components

### Backend Architecture

The backend uses a Node.js/Express setup with:

- **Express.js** server with TypeScript
- **In-memory storage** implementation as the primary data layer
- **RESTful API** structure with `/api` prefix
- **Session-based** architecture (evidence of session handling in dependencies)

### Database Strategy

The application is configured for **PostgreSQL** with:

- **Drizzle ORM** for database operations and migrations
- **Neon Database** serverless PostgreSQL (@neondatabase/serverless)
- Schema definitions in shared directory for type safety
- Migration system using drizzle-kit

## Key Components

### Frontend Components

1. **Page Components**
   - `Home`: Main landing page with all sections
   - `NotFound`: 404 error page

2. **Section Components**
   - `Header`: Navigation and branding
   - `Hero`: Main banner with call-to-action
   - `About`: Information about the service
   - `Services`: Available support services
   - `Contact`: Contact methods and forms
   - `QuickAccess`: Fast links to common actions
   - `Footer`: Site footer with links

3. **UI Components**
   - Comprehensive shadcn/ui component library
   - Custom styled components following DMU branding

### Backend Components

1. **Server Setup**
   - Express server with middleware for JSON parsing
   - Request logging and error handling
   - Vite integration for development

2. **Storage Layer**
   - `IStorage` interface for data operations
   - `MemStorage` implementation for in-memory data
   - User management operations (CRUD)

3. **Route Structure**
   - `registerRoutes` function for API endpoint registration
   - Placeholder for implementing actual API routes

## Data Flow

1. **Client-Side Data Management**
   - TanStack Query for server state management
   - React Hook Form for form handling
   - Wouter for navigation state

2. **Server Communication**
   - RESTful API calls with fetch
   - JSON request/response format
   - Error handling with status codes

3. **Database Operations**
   - Drizzle ORM for type-safe database queries
   - Schema validation with Zod
   - Migration-based database management

## External Dependencies

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Data Management
- **TanStack Query**: Server state management
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **date-fns**: Date manipulation

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **ESBuild**: Fast bundling
- **PostCSS**: CSS processing

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: `NODE_ENV=development` with Vite dev server
- **Production**: `NODE_ENV=production` with static file serving
- **Database**: `DATABASE_URL` environment variable required

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `check`: TypeScript type checking
- `db:push`: Apply database migrations

The application is designed to be deployed on platforms that support Node.js with PostgreSQL database connectivity, with particular consideration for Replit deployment (evidenced by Replit-specific plugins and configurations).

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Features

- **Modern React Frontend** with TypeScript and Tailwind CSS
- **Responsive Design** optimized for mobile devices
- **3D Interactive Elements** including animated cube text effects
- **WCAG 2.1 AA Compliant** for accessibility
- **Full-Stack Architecture** with Express.js backend
- **DMU Branding** with authentic imagery and colors

## 📁 File Structure & Architecture

### Core Configuration Files

#### **package.json**
- **Purpose**: Defines project dependencies, scripts, and metadata
- **Connects to**: All installed libraries and build processes
- **Key sections**: dependencies (runtime), devDependencies (build-time), scripts (automation)

#### **tsconfig.json**
- **Purpose**: TypeScript compiler configuration for type safety
- **Connects to**: All .ts/.tsx files for type checking and compilation
- **Key features**: Path mapping (@/ alias), strict type checking, ES modules

#### **vite.config.ts**
- **Purpose**: Build tool configuration for development and production
- **Connects to**: Frontend build process, asset handling, development server
- **Key features**: React plugin, path aliases, asset optimization

#### **tailwind.config.ts**
- **Purpose**: CSS framework configuration with custom DMU branding
- **Connects to**: All component styling via Tailwind classes
- **Key features**: Custom colors (#990033 burgundy), animations, responsive breakpoints

#### **vercel.json**
- **Purpose**: Deployment configuration for Vercel platform
- **Connects to**: Production build and hosting process
- **Key features**: Build commands, output directory, deployment settings

### Frontend Architecture

#### **client/src/App.tsx**
- **Purpose**: Root application component with global providers
- **Connects to**: All pages, routing system, global state management
- **Key features**: QueryClient provider, routing setup, toast notifications
- **Data flow**: Wraps entire app with context providers

#### **client/src/main.tsx**
- **Purpose**: Application entry point and React DOM rendering
- **Connects to**: App.tsx, index.html, global CSS
- **Key features**: React 18 concurrent features, CSS imports

#### **client/src/index.css**
- **Purpose**: Global styles, animations, and Tailwind configuration
- **Connects to**: All components for styling and animations
- **Key features**: Custom animations, DMU color variables, responsive utilities

### Page Components

#### **client/src/pages/home.tsx**
- **Purpose**: Main single-page application with all sections
- **Connects to**: All section components (Hero, Services, Contact, etc.)
- **Key features**: Full homepage layout, section organization

#### **client/src/pages/not-found.tsx**
- **Purpose**: 404 error page for invalid routes
- **Connects to**: Router for error handling
- **Key features**: User-friendly error messaging, navigation options

### Section Components

#### **client/src/components/hero.tsx**
- **Purpose**: Main landing section with DMU branding and call-to-actions
- **Connects to**: CubeText component, Button components, smooth scrolling navigation
- **Key features**: Split-screen design, responsive layout, 3D animations
- **Data flow**: Triggers navigation to other sections via scroll

#### **client/src/components/ui/cube-text.tsx**
- **Purpose**: 3D animated text effect component
- **Connects to**: Hero component for "2025" display
- **Key features**: CSS 3D transforms, DMU burgundy styling, hover effects

#### **client/src/components/ui/button.tsx**
- **Purpose**: Reusable button component with variants
- **Connects to**: All sections requiring interactive elements
- **Key features**: Multiple variants, accessibility, hover effects

### Backend Architecture

#### **server/index.ts**
- **Purpose**: Main Express server setup and configuration
- **Connects to**: Routes, Vite development server, static file serving
- **Key features**: Request logging, error handling, environment-specific setup
- **Data flow**: Coordinates between frontend and backend services

#### **server/routes.ts**
- **Purpose**: API route registration and configuration
- **Connects to**: Storage layer, frontend API calls
- **Key features**: RESTful API structure, route organization

#### **server/storage.ts**
- **Purpose**: Data storage abstraction layer
- **Connects to**: Database operations, API routes
- **Key features**: Interface-based design, in-memory fallback, type safety

#### **server/vite.ts**
- **Purpose**: Vite development server integration
- **Connects to**: Frontend build process, hot module replacement
- **Key features**: Development middleware, static file serving

### Database & Schema

#### **shared/schema.ts**
- **Purpose**: Type-safe database schema definitions
- **Connects to**: Frontend and backend for consistent data types
- **Key features**: Drizzle ORM integration, Zod validation, TypeScript inference

#### **drizzle.config.ts**
- **Purpose**: Database migration and introspection configuration
- **Connects to**: PostgreSQL database, schema changes
- **Key features**: Migration management, type generation

### UI Component Library

#### **client/src/components/ui/**
- **Purpose**: Reusable UI components based on shadcn/ui
- **Connects to**: All frontend components for consistent styling
- **Key features**: Accessibility, theming, variant management
- **Components include**: Forms, navigation, feedback, data display

### Build & Development

#### **build.js**
- **Purpose**: Custom build script for production deployment
- **Connects to**: Vite build process, server compilation
- **Key features**: Frontend and backend bundling, asset optimization

#### **postcss.config.js**
- **Purpose**: CSS processing configuration
- **Connects to**: Tailwind CSS, build process
- **Key features**: Autoprefixer, CSS optimization

### Static Assets

#### **attached_assets/**
- **Purpose**: Image and media assets for the application
- **Connects to**: Components via import statements
- **Key features**: DMU imagery, optimized formats, responsive images

#### **static-version/**
- **Purpose**: Static HTML version for alternative deployment
- **Connects to**: GitHub Pages hosting, CDN distribution
- **Key features**: Single-file deployment, embedded styles

### Data Flow Summary

1. **User Request** → **server/index.ts** → **server/routes.ts** → **server/storage.ts**
2. **Frontend** → **client/src/App.tsx** → **client/src/pages/home.tsx** → **Section Components**
3. **Styling** → **tailwind.config.ts** → **client/src/index.css** → **Component Classes**
4. **Build** → **vite.config.ts** → **build.js** → **dist/** (production files)
5. **Database** → **drizzle.config.ts** → **shared/schema.ts** → **Type-safe Operations**

### Component Connections

- **Hero Component** ↔ **CubeText Component** (3D animation)
- **App Component** ↔ **QueryClient** (data management)
- **All Components** ↔ **UI Components** (consistent styling)
- **Router** ↔ **Page Components** (navigation)
- **Server** ↔ **Vite** (development/production serving)

## License

MIT License - De Montfort University Faculty of Business & Law