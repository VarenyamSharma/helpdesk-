
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, AuthState, UserRole } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Simulate checking for existing session
    const savedUser = localStorage.getItem('helpdesk_user');
    if (savedUser) {
      setAuthState({
        user: JSON.parse(savedUser),
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: email.includes('admin') ? 'admin' : 
            email.includes('tech') ? 'technical' :
            email.includes('ops') ? 'operations' : 'user',
      createdAt: new Date(),
    };

    localStorage.setItem('helpdesk_user', JSON.stringify(mockUser));
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    // Redirect based on role
    const dashboardPath = getDashboardPath(mockUser.role);
    window.location.href = dashboardPath;
  };

  const signup = async (email: string, password: string, name: string, role: UserRole) => {
    // Simulate API call
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
      createdAt: new Date(),
    };

    localStorage.setItem('helpdesk_user', JSON.stringify(mockUser));
    setAuthState({
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
    });

    // Redirect based on role
    const dashboardPath = getDashboardPath(role);
    window.location.href = dashboardPath;
  };

  const logout = () => {
    localStorage.removeItem('helpdesk_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const getDashboardPath = (role: UserRole): string => {
    switch (role) {
      case 'admin':
        return '/admin/dashboard';
      case 'technical':
        return '/technical/dashboard';
      case 'operations':
        return '/operations/dashboard';
      default:
        return '/dashboard';
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
