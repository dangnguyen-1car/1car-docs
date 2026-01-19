/**
 * Protected Route Component for 1CAR Enterprise Portal
 * Component bảo vệ các route yêu cầu đăng nhập
 */

import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from '@docusaurus/router';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  redirectTo = '/welcome' 
}) => {
  const { currentUser, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!loading && !currentUser) {
      // Lưu URL hiện tại để redirect sau khi đăng nhập
      const currentPath = window.location.pathname + window.location.search;
      sessionStorage.setItem('redirectAfterLogin', currentPath);
      
      // Redirect to login page
      history.push(redirectTo);
    }
  }, [currentUser, loading, redirectTo, history]);

  // Show loading while checking auth state
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #D9232D',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Đang kiểm tra quyền truy cập...
        </p>
      </div>
    );
  }

  // If user is authenticated, render children
  if (currentUser) {
    return <>{children}</>;
  }

  // If not authenticated, return null (redirect will happen in useEffect)
  return null;
};

export default ProtectedRoute;