
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Drivers from "./pages/Drivers";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: 'admin' | 'driver' | 'customer' }) => {
  const { session, userRole } = useAuth();
  
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // If a specific role is required and user doesn't have it (and isn't admin)
  if (requiredRole && userRole !== requiredRole && userRole !== 'admin') {
    // Redirect based on user role
    if (userRole === 'driver') {
      return <Navigate to="/orders" replace />;
    } else if (userRole === 'customer') {
      return <Navigate to="/" replace />;
    } else if (userRole === 'admin') {
      return <Navigate to="/customers" replace />;
    }
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/orders" element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            } />
            <Route path="/customers" element={
              <ProtectedRoute requiredRole="admin">
                <Customers />
              </ProtectedRoute>
            } />
            <Route path="/drivers" element={
              <ProtectedRoute requiredRole="admin">
                <Drivers />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
