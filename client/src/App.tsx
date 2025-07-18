// Core routing and application setup imports
import { Switch, Route } from "wouter";                        // Lightweight routing library
import { queryClient } from "./lib/queryClient";               // TanStack Query client configuration
import { QueryClientProvider } from "@tanstack/react-query";   // Server state management provider
import { Toaster } from "@/components/ui/toaster";             // Toast notification system
import { TooltipProvider } from "@/components/ui/tooltip";     // Tooltip component provider
import Home from "@/pages/home";                               // Main homepage component
import ProgrammeFinder from "@/pages/programme-finder";        // School finder page component
import BALPortal from "@/pages/bal-portal";                    // BAL Portal page component
import NotFound from "@/pages/not-found";                      // 404 error page component

/**
 * Router Component - Handles client-side routing
 * 
 * PURPOSE: Defines all application routes and their corresponding components
 * CONNECTS TO: Home page component and 404 error handling
 * 
 * ROUTES:
 * - "/" (root) -> Home component with all sections
 * - All other routes -> NotFound component (404 page)
 */
function Router() {
  return (
    <Switch>
      {/* Main homepage route - displays the full single-page application */}
      <Route path="/" component={Home} />
      
      {/* School finder route - helps students find their school contact */}
      <Route path="/programme-finder" component={ProgrammeFinder} />
      
      {/* BAL Portal route - comprehensive student services portal */}
      <Route path="/bal-portal" component={BALPortal} />
      
      {/* Catch-all route for 404 errors - must be last */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Main App Component - Root application wrapper
 * 
 * PURPOSE: Provides global context providers and initializes the application
 * CONNECTS TO: 
 * - QueryClient for server state management across components
 * - Tooltip system for UI interactions
 * - Toast notifications for user feedback
 * - Router for page navigation
 * 
 * PROVIDER HIERARCHY:
 * 1. QueryClientProvider - Enables data fetching and caching
 * 2. TooltipProvider - Enables tooltip functionality
 * 3. Toaster - Provides toast notification system
 * 4. Router - Handles page routing
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
