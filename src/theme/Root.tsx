/**
 * Root component for 1CAR Enterprise Portal
 * Wrap toàn bộ ứng dụng với AuthProvider
 */

import React from 'react';
import { AuthProvider } from '../context/AuthContext';

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default Root;