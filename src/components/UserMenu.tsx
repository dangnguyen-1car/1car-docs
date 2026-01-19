/**
 * User Menu Component for 1CAR Enterprise Portal
 * Component hiển thị thông tin user và menu đăng xuất
 */

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from '@docusaurus/router';
import Avatar from './Avatar';
import styles from './UserMenu.module.css';

const UserMenu: React.FC = () => {
  const { currentUser, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
      history.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  if (!currentUser) {
    return (
      <a href="/login" className={styles.loginLink}>
        Đăng nhập
      </a>
    );
  }

  const displayName = currentUser.displayName || currentUser.email?.split('@')[0] || 'User';
  const photoURL = currentUser.photoURL;

  return (
    <div className={styles.userMenu} ref={menuRef}>
      <button
        className={styles.userButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Avatar 
          name={displayName} 
          photoURL={photoURL} 
          size="medium"
          className={styles.navbarAvatar}
        />
        <span className={styles.userName}>{displayName}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatarSection}>
              <Avatar 
                name={displayName} 
                photoURL={photoURL} 
                size="large"
                className={styles.dropdownAvatar}
              />
            </div>
            <div className={styles.userDetails}>
              <div className={styles.userDisplayName}>{displayName}</div>
              <div className={styles.userEmail}>{currentUser.email}</div>
            </div>
          </div>
          
          <div className={styles.divider}></div>
          
          <button
            className={styles.signOutButton}
            onClick={handleSignOut}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
            </svg>
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;