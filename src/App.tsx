
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { UserDashboard } from "@/pages/UserDashboard";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { TechnicalDashboard } from "@/pages/TechnicalDashboard";
import { OperationsDashboard } from "@/pages/OperationsDashboard";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <UserDashboard />
                  </AppLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <AdminDashboard />
                  </AppLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/technical/dashboard"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <TechnicalDashboard />
                  </AppLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/operations/dashboard"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <OperationsDashboard />
                  </AppLayout>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/" 
              element={<Navigate to="/dashboard" replace />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
