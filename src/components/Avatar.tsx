/**
 * Avatar Component for 1CAR Enterprise Portal
 * Component hiển thị avatar với initials hoặc hình ảnh
 */

import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  name: string;
  photoURL?: string | null;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

// Hàm tạo màu avatar dựa trên tên
const getAvatarColor = (name: string): string => {
  const colors = [
    '#D9232D', // 1CAR Red
    '#FF6B6B', // Coral Red
    '#4ECDC4', // Turquoise
    '#45B7D1', // Sky Blue
    '#96CEB4', // Mint Green
    '#FFEAA7', // Light Yellow
    '#DDA0DD', // Plum
    '#98D8C8', // Mint
    '#F7DC6F', // Light Gold
    '#BB8FCE', // Light Purple
    '#85C1E9', // Light Blue
    '#F8C471', // Light Orange
    '#82E0AA', // Light Green
    '#F1948A', // Light Pink
    '#AED6F1', // Powder Blue
    '#D7BDE2', // Lavender
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};

// Hàm lấy initials từ tên
const getInitials = (name: string): string => {
  if (!name) return 'U';
  
  const words = name.trim().split(' ');
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

const Avatar: React.FC<AvatarProps> = ({ 
  name, 
  photoURL, 
  size = 'medium', 
  className = '' 
}) => {
  const initials = getInitials(name);
  const avatarColor = getAvatarColor(name);
  const sizeClass = styles[`avatar${size.charAt(0).toUpperCase() + size.slice(1)}`];

  if (photoURL) {
    return (
      <img
        src={photoURL}
        alt={name}
        className={`${styles.avatarImage} ${sizeClass} ${className}`}
      />
    );
  }

  return (
    <div 
      className={`${styles.avatarPlaceholder} ${sizeClass} ${className}`}
      style={{ backgroundColor: avatarColor }}
      title={name}
    >
      {initials}
    </div>
  );
};

export default Avatar;