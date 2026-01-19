/**
 * Protected Doc Sidebar Navbar Item for 1CAR Enterprise Portal
 * Chỉ hiển thị menu "Tài liệu quản trị" khi đã đăng nhập
 */

import React from 'react';
import OriginalDocSidebarNavbarItem from '@theme-original/NavbarItem/DocSidebarNavbarItem';
import { useAuth } from '../../context/AuthContext';

const DocSidebarNavbarItem: React.FC<any> = (props) => {
  const { currentUser, loading } = useAuth();

  // Không hiển thị menu khi đang loading hoặc chưa đăng nhập
  if (loading || !currentUser) {
    return null;
  }

  // Chỉ hiển thị menu khi đã đăng nhập
  return <OriginalDocSidebarNavbarItem {...props} />;
};

export default DocSidebarNavbarItem;