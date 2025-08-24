'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  currentUser: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const login = (username: string, password: string): boolean => {
    // Mock authentication: username: admin@gmail.com, password: admin
    if (username === 'admin@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      setCurrentUser(username);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  };

  // Check localStorage on component mount
  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    const storedUser = localStorage.getItem('currentUser');
    if (storedLogin === 'true' && storedUser) {
      setIsLoggedIn(true);
      setCurrentUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
