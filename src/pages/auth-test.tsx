/**
 * Auth Test Page for debugging
 * Trang test để kiểm tra trạng thái authentication
 */

import React from 'react';
import Layout from '@theme/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';

const AuthTestPage: React.FC = () => {
  const { currentUser, loading } = useAuth();

  return (
    <ProtectedRoute>
      <Layout title="Auth Test" description="Test authentication status">
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h1>🔐 Authentication Test Page</h1>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '1.5rem', 
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h2>Trạng thái hiện tại:</h2>
            <ul>
              <li><strong>Loading:</strong> {loading ? '✅ Đang tải...' : '❌ Đã tải xong'}</li>
              <li><strong>User:</strong> {currentUser ? '✅ Đã đăng nhập' : '❌ Chưa đăng nhập'}</li>
            </ul>
            
            {currentUser && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: '#e8f5e8', borderRadius: '4px' }}>
                <h3>Thông tin User:</h3>
                <ul>
                  <li><strong>Email:</strong> {currentUser.email}</li>
                  <li><strong>Display Name:</strong> {currentUser.displayName || 'Không có'}</li>
                  <li><strong>UID:</strong> {currentUser.uid}</li>
                  <li><strong>Email Verified:</strong> {currentUser.emailVerified ? 'Có' : 'Không'}</li>
                </ul>
              </div>
            )}
            
            {!currentUser && !loading && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: '#ffe8e8', borderRadius: '4px' }}>
                <p>❌ Không có user nào đăng nhập</p>
                <a href="/login" style={{ color: '#D9232D', fontWeight: 'bold' }}>
                  👉 Đi đến trang đăng nhập
                </a>
              </div>
            )}
          </div>

          <div style={{ 
            background: '#fff3cd', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #ffeaa7'
          }}>
            <h3>🧪 Test Links:</h3>
            <ul>
              <li><a href="/login">Trang đăng nhập</a></li>
              <li><a href="/docs/intro">Trang docs (protected)</a></li>
              <li><a href="/">Trang chủ</a></li>
            </ul>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default AuthTestPage;
