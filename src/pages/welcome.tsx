/**
 * Welcome Page for 1CAR Enterprise Portal
 * Trang chào mừng sau khi đăng nhập thành công
 */

import React from 'react';
import Layout from '@theme/Layout';
import { useAuth } from '../context/AuthContext';
import Avatar from '../components/Avatar';
import styles from './welcome.module.css';

const WelcomePage: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <Layout title="Chào mừng" description="Trang chào mừng 1CAR Enterprise Portal">
        <div className={styles.container}>
          <div className={styles.notLoggedIn}>
            <h1>Bạn chưa đăng nhập</h1>
            <p>Vui lòng <a href="/login">đăng nhập</a> để truy cập hệ thống.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const displayName = currentUser.displayName || currentUser.email?.split('@')[0] || 'User';
  const joinDate = currentUser.metadata.creationTime 
    ? new Date(currentUser.metadata.creationTime).toLocaleDateString('vi-VN')
    : 'Không xác định';

  return (
    <Layout title="Chào mừng" description="Trang chào mừng 1CAR Enterprise Portal">
      <div className={styles.container}>
        <div className={styles.welcomeCard}>
          <div className={styles.header}>
            <div className={styles.avatarSection}>
              <Avatar 
                name={displayName} 
                photoURL={currentUser.photoURL} 
                size="large"
                className={styles.welcomeAvatar}
              />
              <div className={styles.statusBadge}>
                <span className={styles.statusDot}></span>
                Đang hoạt động
              </div>
            </div>
            <div className={styles.userInfo}>
              <h1 className={styles.welcomeTitle}>
                Chào mừng, {displayName}! 👋
              </h1>
              <p className={styles.welcomeSubtitle}>
                Bạn đã đăng nhập thành công vào Cổng Thông tin Quản trị 1CAR
              </p>
            </div>
          </div>

          <div className={styles.userDetails}>
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Email:</div>
              <div className={styles.detailValue}>{currentUser.email}</div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Tên hiển thị:</div>
              <div className={styles.detailValue}>{displayName}</div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Ngày tham gia:</div>
              <div className={styles.detailValue}>{joinDate}</div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Trạng thái email:</div>
              <div className={styles.detailValue}>
                {currentUser.emailVerified ? (
                  <span className={styles.verified}>✅ Đã xác thực</span>
                ) : (
                  <span className={styles.unverified}>⚠️ Chưa xác thực</span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="/docs/intro" className={styles.primaryButton}>
              📚 Truy cập Tài liệu
            </a>
            <a href="/" className={styles.secondaryButton}>
              🏠 Về Trang chủ
            </a>
          </div>
        </div>

        <div className={styles.quickLinks}>
          <h2>🚀 Liên kết nhanh</h2>
          <div className={styles.linkGrid}>
            <a href="/docs/phap-ly-co-dong/dieu-le-cong-ty/ban-thao" className={styles.linkCard}>
              <div className={styles.linkIcon}>⚖️</div>
              <div className={styles.linkTitle}>Pháp lý & Cổ đông</div>
              <div className={styles.linkDesc}>Điều lệ công ty, quy chế hoạt động</div>
            </a>
            
            <a href="/docs/quan-tri-cap-cao/quy-che-hoat-dong-hdqt/ban-thao" className={styles.linkCard}>
              <div className={styles.linkIcon}>👥</div>
              <div className={styles.linkTitle}>Quản trị Cấp cao</div>
              <div className={styles.linkDesc}>HĐQT, tiểu ban chuyên trách</div>
            </a>
            
            <a href="/docs/quan-tri-noi-bo/quy-che-kiem-soat-noi-bo/ban-thao" className={styles.linkCard}>
              <div className={styles.linkIcon}>🔒</div>
              <div className={styles.linkTitle}>Quản trị Nội bộ</div>
              <div className={styles.linkDesc}>Kiểm soát nội bộ, phân quyền</div>
            </a>
            
            <a href="/docs/van-hanh-chuyen-mon/quy-che-quan-tri-tai-chinh/ban-thao" className={styles.linkCard}>
              <div className={styles.linkIcon}>💼</div>
              <div className={styles.linkTitle}>Vận hành Chuyên môn</div>
              <div className={styles.linkDesc}>Tài chính, kinh doanh, nhân sự</div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WelcomePage;