/**
 * Authentication Context for 1CAR Enterprise Portal
 * Context quản lý trạng thái đăng nhập cho toàn bộ ứng dụng
 */

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  UserCredential 
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

// Interface định nghĩa các method của Auth Context
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

// Tạo Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook để sử dụng Auth Context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Props cho AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Đăng nhập bằng Email và Password
  const signInWithEmail = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Đăng nhập bằng Google
  const signInWithGoogle = (): Promise<UserCredential> => {
    return signInWithPopup(auth, googleProvider);
  };

  // Đăng xuất
  const signOut = (): Promise<void> => {
    return firebaseSignOut(auth);
  };

  // Theo dõi trạng thái đăng nhập
  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log('🔥 Firebase Auth State Changed:', user ? 'User logged in' : 'User logged out');
        setCurrentUser(user);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error('🔥 Firebase Auth Error:', error);
      setLoading(false);
    }
  }, []);

  // Giá trị context
  const value: AuthContextType = {
    currentUser,
    loading,
    signInWithEmail,
    signInWithGoogle,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};