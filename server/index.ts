// Core Express.js server imports and utilities
import express, { type Request, Response, NextFunction } from "express";  // Web framework
import { registerRoutes } from "./routes";                                // API route registration
import { setupVite, serveStatic, log } from "./vite";                    // Development/production setup

/**
 * Express Application Setup
 * 
 * PURPOSE: Creates and configures the main Express server
 * CONNECTS TO: 
 * - Frontend via Vite development server or static file serving
 * - API routes for data operations
 * - Database through storage layer
 */
const app = express();

// Middleware for parsing request bodies
app.use(express.json());                        // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded form data

/**
 * Request Logging Middleware
 * 
 * PURPOSE: Logs API requests with timing and response data for debugging
 * CONNECTS TO: Development console for monitoring API performance
 * 
 * FUNCTIONALITY:
 * - Tracks request timing
 * - Captures JSON responses for API routes
 * - Logs request method, path, status code, and duration
 * - Truncates long log lines to prevent console overflow
 */
app.use((req, res, next) => {
  const start = Date.now();                    // Start timing
  const path = req.path;                       // Request path
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Override res.json to capture response data
  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  // Log when request completes
  res.on("finish", () => {
    const duration = Date.now() - start;
    
    // Only log API routes (not static files)
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      
      // Include response data if available
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      // Truncate long log lines
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

/**
 * Server Initialization and Startup
 * 
 * PURPOSE: Initializes the full-stack application with proper error handling
 * CONNECTS TO: 
 * - API routes for backend functionality
 * - Vite development server for frontend
 * - Static file serving for production
 * - Database through registered routes
 */
(async () => {
  // Register API routes and get HTTP server instance
  const server = await registerRoutes(app);

  /**
   * Global Error Handler
   * 
   * PURPOSE: Catches and handles all unhandled errors in the application
   * CONNECTS TO: Client-side error handling through standardized JSON responses
   */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Send standardized error response
    res.status(status).json({ message });
    throw err;  // Re-throw for logging purposes
  });

  /**
   * Environment-Specific Setup
   * 
   * PURPOSE: Configures different serving strategies for development vs production
   * CONNECTS TO: 
   * - Vite dev server (development) - provides HMR and live reloading
   * - Static file serving (production) - serves pre-built assets
   */
  if (app.get("env") === "development") {
    // Development: Setup Vite middleware for hot module replacement
    // IMPORTANT: Must be after API routes to prevent catch-all interference
    await setupVite(app, server);
  } else {
    // Production: Serve static build files
    serveStatic(app);
  }

  /**
   * Server Startup Configuration
   * 
   * PURPOSE: Starts the HTTP server with appropriate configuration
   * CONNECTS TO: 
   * - Port 5000 (only non-firewalled port in deployment environments)
   * - Both API and frontend serving on same port
   * - Different host configurations for development vs production
   */
  const port = 5000;  // Fixed port for consistency across environments
  
  if (process.env.NODE_ENV === "development") {
    // Development: Local host binding for security
    server.listen(port, "127.0.0.1", () => {
      log(`serving on port ${port}`);
    });
  } else {
    // Production: Accept connections from all interfaces
    server.listen({
      port,
      host: "0.0.0.0",      // Accept external connections
      reusePort: true,      // Allow multiple processes to bind to same port
    }, () => {
      log(`serving on port ${port}`);
    });
  }
})();
