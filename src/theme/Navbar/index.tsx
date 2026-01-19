/**
 * Protected Navbar for 1CAR Enterprise Portal
 * Navbar có điều kiện hiển thị dựa trên trạng thái đăng nhập
 */

import React from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser, loading } = useAuth();

  // Nếu đang ở trang login, hiển thị navbar đơn giản
  if (typeof window !== 'undefined' && window.location.pathname === '/login') {
    return (
      <nav className="navbar navbar--fixed-top">
        <div className="navbar__inner">
          <div className="navbar__items">
            <a className="navbar__brand" href="/">
              <div className="navbar__logo">
                <img src="/img/LOGO-1CAR.png" alt="1CAR Logo" />
              </div>
              <b className="navbar__title">1CAR-EDMS</b>
            </a>
          </div>
        </div>
      </nav>
    );
  }

  // Hiển thị navbar đầy đủ
  return <OriginalNavbar />;
};

export default Navbar;