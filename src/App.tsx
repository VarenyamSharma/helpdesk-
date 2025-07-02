import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { UserDashboard } from "@/pages/UserDashboard";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { TechnicalDashboard } from "@/pages/TechnicalDashboard";
import { OperationsDashboard } from "@/pages/OperationsDashboard";
import { TicketsPage } from "@/pages/TicketsPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { SettingsPage } from "@/pages/SettingsPage";
import { AdminTicketsPage } from "@/pages/admin/AdminTicketsPage";
import { UsersPage } from "@/pages/admin/UsersPage";
import { AnalyticsPage } from "@/pages/admin/AnalyticsPage";
import { TechnicalTicketsPage } from "@/pages/technical/TechnicalTicketsPage";
import { KnowledgeBasePage } from "@/pages/technical/KnowledgeBasePage";
import { ToolsPage } from "@/pages/technical/ToolsPage";
import { QueueManagementPage } from "@/pages/operations/QueueManagementPage";
import { EscalationsPage } from "@/pages/operations/EscalationsPage";
import { ReportsPage } from "@/pages/operations/ReportsPage";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="helpdesk-theme">
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
                  path="/admin/tickets"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <AdminTicketsPage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <UsersPage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/analytics"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <AnalyticsPage />
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
                  path="/technical/tickets"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <TechnicalTicketsPage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/technical/kb"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <KnowledgeBasePage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/technical/tools"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <ToolsPage />
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
                  path="/operations/queue"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <QueueManagementPage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/operations/escalations"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <EscalationsPage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/operations/reports"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <ReportsPage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/tickets"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <TicketsPage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <ProfilePage />
                      </AppLayout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute>
                      <AppLayout>
                        <SettingsPage />
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
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
