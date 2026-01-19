import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ProtectedRoute from '../components/ProtectedRoute';

import styles from './index.module.css';

function AnnouncementBar() {
  return (
    <div className={styles.announcementBar}>
      <div className="container">
        <p className={styles.announcementText}>
          Hệ thống Quản trị Doanh nghiệp 1CAR - Phiên bản 1.0 | 
          <strong> Dành riêng cho HĐQT và Ban Điều hành</strong>
        </p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img 
              src="/img/LOGO-1CAR.png" 
              alt="1CAR Logo" 
              className={styles.heroLogo}
            />
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button', styles.primaryButton)}
              to="/docs/intro">
              <span className={styles.buttonIcon}>📚</span>
              Bắt đầu khám phá
            </Link>
            <Link
              className={clsx('button', styles.secondaryButton)}
              to="/docs/phap-ly-co-dong/dieu-le-cong-ty/phien-ban-chinh-thuc">
              <span className={styles.buttonIcon}>📋</span>
              Xem Điều lệ
            </Link>
          </div>

          <div className={styles.quickStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Nhóm Quy chế</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Văn bản</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Tiếng Việt</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}></div>
    </header>
  );
}

function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <div className="container">
        <div className={styles.welcomeContent}>
          <div className={styles.welcomeHeader}>
            <h2>Kính gửi Hội đồng Quản trị</h2>
            <p className={styles.welcomeDescription}>
              Chào mừng quý vị đến với <strong>Cổng Thông Tin Quản Trị Doanh Nghiệp 1CAR</strong> – 
              không gian lưu trữ và tra cứu tập trung, được thiết kế đặc biệt để phục vụ công tác 
              quản lý và hoạch định chiến lược của chuỗi garage ô tô.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section className={styles.getStartedSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Bắt đầu với Hệ thống</h2>
        <p className={styles.sectionSubtitle}>
          Nếu quý vị mới sử dụng hệ thống hoặc cần tìm hiểu về Quản trị Doanh nghiệp, chúng tôi khuyến nghị:
        </p>
        
        <div className="row">
          <div className="col col--6">
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>01</div>
              <h3>Tìm hiểu Cấu trúc</h3>
              <p>Khám phá cấu trúc tổ chức và các bộ phận quản trị</p>
              <Link to="/docs/intro" className={styles.stepLink}>
                Xem giới thiệu →
              </Link>
            </div>
          </div>
          
          <div className="col col--6">
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <h3>Đọc Điều lệ</h3>
              <p>Nghiên cứu điều lệ công ty và quy chế hoạt động</p>
              <Link to="/docs/phap-ly-co-dong/dieu-le-cong-ty/phien-ban-chinh-thuc" className={styles.stepLink}>
                Truy cập Điều lệ →
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col--6">
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <h3>Quy chế HĐQT</h3>
              <p>Tìm hiểu quy chế hoạt động và cơ cấu tổ chức HĐQT</p>
              <Link to="/docs/quan-tri-cap-cao/quy-che-hoat-dong-hdqt/phien-ban-chinh-thuc" className={styles.stepLink}>
                Xem Quy chế →
              </Link>
            </div>
          </div>
          
          <div className="col col--6">
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>04</div>
              <h3>Tiểu ban Chuyên trách</h3>
              <p>Tìm hiểu về các tiểu ban và chức năng hoạt động</p>
              <Link to="/docs/quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-kiem-toan" className={styles.stepLink}>
                Khám phá Tiểu ban →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentCategoriesSection() {
  const categories = [
    {
      title: "Pháp lý & Cổ đông",
      description: "Điều lệ công ty, quy chế công bố thông tin",
      icon: "⚖️",
      link: "/docs/phap-ly-co-dong/dieu-le-cong-ty/ban-thao"
    },
    {
      title: "Quản trị Cấp cao",
      description: "HĐQT, tiểu ban chuyên trách, cơ cấu lãnh đạo",
      icon: "👥",
      link: "/docs/quan-tri-cap-cao/quy-che-hoat-dong-hdqt/ban-thao"
    },
    {
      title: "Quản trị Nội bộ",
      description: "Quản trị nội bộ, quản lý rủi ro",
      icon: "🏢",
      link: "/docs/intro"
    },
    {
      title: "Vận hành Chuyên môn",
      description: "Tài chính, nhân sự, mạng lưới garage",
      icon: "⚙️",
      link: "/docs/intro"
    },
    {
      title: "Tuân thủ & Đạo đức",
      description: "Đạo đức kinh doanh, tuân thủ pháp luật",
      icon: "🛡️",
      link: "/docs/intro"
    },
    {
      title: "Triển khai & Công cụ",
      description: "Kế hoạch triển khai, đào tạo nội bộ",
      icon: "🚀",
      link: "/docs/intro"
    },
    {
      title: "Giám đốc Tài chính - CFO",
      description: "Mô tả, sổ tay nhiệm vụ và quy trình triển khai",
      icon: "🚀",
      link: "/docs/intro"
    }    
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Khám phá Tài liệu</h2>
        <div className="row">
          {categories.map((category, idx) => (
            <div key={idx} className="col col--4">
              <div className={styles.categoryCard}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link to={category.link} className={styles.categoryLink}>
                  Xem chi tiết →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImportantNoticeSection() {
  return (
    <section className={styles.noticeSection}>
      <div className="container">
        <div className={styles.noticeCard}>
          <div className={styles.noticeHeader}>
            <span className={styles.noticeIcon}>📋</span>
            <h3>Lưu ý quan trọng</h3>
          </div>
          <div className={styles.noticeContent}>
            <p>
              Đây <strong>KHÔNG</strong> phải là các văn bản cụ thể nhưng <strong>LÀ KHUNG QUẢN TRỊ TOÀN DIỆN</strong> 
              để tổng hợp và xây dựng các văn bản cuối cùng, sẵn sàng cho giai đoạn phát triển và mở rộng quy mô của công ty.
            </p>
            <p>
              Các văn bản sẽ được xây dựng trên bộ khung này và <strong>KHÔNG CẦN LẤY Ý KIẾN</strong> lại 
              nếu trùng chính xác với quan điểm đã nêu trong khung.
            </p>
          </div>
        </div>
        
        <div className={styles.signature}>
          <p><strong>Trân trọng,</strong></p>
          <p><em>1CAR Enterprise Management Team</em></p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <ProtectedRoute>
      <Layout
        title="Trang chủ"
        description="Cổng Thông Tin Quản Trị Doanh Nghiệp 1CAR - Hệ thống Quản trị Toàn diện cho Chuỗi Garage Ô tô">
        <AnnouncementBar />
        <HomepageHeader />
        <main>
          <WelcomeSection />
          <GetStartedSection />
          <DocumentCategoriesSection />
          <ImportantNoticeSection />
        </main>
      </Layout>
    </ProtectedRoute>
  );
}
