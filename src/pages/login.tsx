/**
 * Login Page for 1CAR Enterprise Portal
 * Trang đăng nhập cho Cổng Thông tin Quản trị 1CAR
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from '@docusaurus/router';
import styles from './login.module.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const { currentUser, signInWithEmail, signInWithGoogle } = useAuth();
  const history = useHistory();

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      history.push('/welcome');
    }
  }, [currentUser, history]);

  // Handle email/password login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signInWithEmail(email, password);
      setSuccess('Đăng nhập thành công! Đang chuyển hướng...');
      setTimeout(() => {
        const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/welcome';
        sessionStorage.removeItem('redirectAfterLogin');
        history.push(redirectPath);
      }, 1500);
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Handle Firebase Auth errors
      switch (error.code) {
        case 'auth/user-not-found':
          setError('Không tìm thấy tài khoản với email này');
          break;
        case 'auth/wrong-password':
          setError('Mật khẩu không chính xác');
          break;
        case 'auth/invalid-email':
          setError('Email không hợp lệ');
          break;
        case 'auth/user-disabled':
          setError('Tài khoản đã bị vô hiệu hóa');
          break;
        case 'auth/too-many-requests':
          setError('Quá nhiều lần thử đăng nhập. Vui lòng thử lại sau');
          break;
        default:
          setError('Đăng nhập thất bại. Vui lòng thử lại');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      setSuccess('Đăng nhập thành công! Đang chuyển hướng...');
      setTimeout(() => {
        const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/welcome';
        sessionStorage.removeItem('redirectAfterLogin');
        history.push(redirectPath);
      }, 1500);
    } catch (error: any) {
      console.error('Google login error:', error);
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          setError('Đăng nhập bị hủy bởi người dùng');
          break;
        case 'auth/popup-blocked':
          setError('Popup bị chặn. Vui lòng cho phép popup và thử lại');
          break;
        default:
          setError('Đăng nhập Google thất bại. Vui lòng thử lại');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logoContainer}>
          <img 
            src="/img/LOGO-1CAR.png" 
            alt="1CAR Logo" 
            className={styles.logo}
          />
          <h1 className={styles.title}>Đăng nhập</h1>
          <p className={styles.subtitle}>
            Cổng Thông tin Quản trị 1CAR
          </p>
        </div>

        <form onSubmit={handleEmailLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập địa chỉ email của bạn"
              className={styles.input}
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu của bạn"
              className={styles.input}
              disabled={loading}
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className={styles.errorMessage}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className={styles.successMessage}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              {success}
            </div>
          )}

          <div className={styles.buttonGroup}>
            <button
              type="submit"
              className={styles.loginButton}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className={styles.loadingSpinner}></div>
                  Đang đăng nhập...
                </>
              ) : (
                'Đăng nhập'
              )}
            </button>

            <div className={styles.divider}>
              hoặc
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className={styles.googleButton}
              disabled={loading}
            >
              <svg className={styles.googleIcon} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Đăng nhập với Google
            </button>
          </div>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="/welcome" style={{ color: '#64748b', textDecoration: 'none' }}>
            ← Quay lại trang chào mừng
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;