// TanStack Query configuration for server state management
import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * HTTP Response Error Handler
 * 
 * PURPOSE: Standardizes error handling for API requests
 * CONNECTS TO: All API calls for consistent error management
 * THROWS: Formatted error messages with status codes
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * API Request Function
 * 
 * PURPOSE: Handles HTTP requests with proper headers and error handling
 * CONNECTS TO: React Query mutations for data operations
 * SUPPORTS: GET, POST, PUT, DELETE with JSON payloads
 * FEATURES: Automatic JSON serialization, credential inclusion, error handling
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",  // Include cookies/sessions
  });

  await throwIfResNotOk(res);
  return res;
}

// Type for handling unauthorized responses
type UnauthorizedBehavior = "returnNull" | "throw";

/**
 * Query Function Factory
 * 
 * PURPOSE: Creates query functions with configurable unauthorized behavior
 * CONNECTS TO: QueryClient for data fetching across components
 * HANDLES: 401 errors with flexible response strategies
 */
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Use queryKey as URL path (e.g., ['/api', 'users'] becomes '/api/users')
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    // Handle unauthorized responses based on configuration
    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

/**
 * QueryClient Configuration
 * 
 * PURPOSE: Configures TanStack Query with application-specific defaults
 * CONNECTS TO: All components using useQuery and useMutation
 * FEATURES: 
 * - Custom query function with error handling
 * - Disabled automatic refetching for better performance
 * - Infinite stale time (manual cache invalidation)
 * - No automatic retries for cleaner error handling
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),  // Default query function
      refetchInterval: false,                   // Disable automatic refetch
      refetchOnWindowFocus: false,             // Disable refetch on focus
      staleTime: Infinity,                     // Cache never goes stale automatically
      retry: false,                            // Disable automatic retries
    },
    mutations: {
      retry: false,                            // Disable automatic retries for mutations
    },
  },
});
