import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';

const MobileSidebarToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Debug log to see if component loads
  console.log('MobileSidebarToggle component loaded');

  // Simple mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 996;
      setIsMobile(mobile);
      console.log('Screen width:', window.innerWidth, 'Is mobile:', mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Create and manage sidebar
  useEffect(() => {
    if (!isMobile) {
      // Clean up mobile elements on desktop
      document.getElementById('mobile-sidebar-overlay')?.remove();
      return;
    }

    console.log('Creating mobile sidebar...');

    // Wait for desktop sidebar to exist
    const checkAndCreate = () => {
      const desktopSidebar = document.querySelector('.theme-doc-sidebar-container');
      if (!desktopSidebar) {
        console.log('Desktop sidebar not found, retrying...');
        setTimeout(checkAndCreate, 100);
        return;
      }

      console.log('Desktop sidebar found, creating mobile version');

      // Remove existing overlay
      document.getElementById('mobile-sidebar-overlay')?.remove();

      // Create simple overlay
      const overlay = document.createElement('div');
      overlay.id = 'mobile-sidebar-overlay';
      overlay.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        " class="mobile-backdrop">
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 100%;
            background: white;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            overflow-y: auto;
            padding: 20px;
            box-sizing: border-box;
          " class="mobile-panel">
            <div style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 1px solid #eee;
            ">
              <h3 style="margin: 0; color: #D9232D;">Danh mục tài liệu</h3>
              <button style="
                background: #D9232D;
                color: white;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-weight: bold;
              " class="mobile-close">×</button>
            </div>
            <div class="mobile-content"></div>
          </div>
        </div>
      `;

      // Clone desktop content
      const contentDiv = overlay.querySelector('.mobile-content');
      const cloned = desktopSidebar.cloneNode(true) as HTMLElement;
      cloned.style.cssText = 'display: block !important; visibility: visible !important;';
      contentDiv?.appendChild(cloned);

      // Add event listeners
      const backdrop = overlay.querySelector('.mobile-backdrop');
      const closeBtn = overlay.querySelector('.mobile-close');
      
      backdrop?.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          setIsOpen(false);
        }
      });

      closeBtn?.addEventListener('click', () => {
        setIsOpen(false);
      });

      // Fix navigation links
      overlay.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href?.startsWith('/')) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            setIsOpen(false);
            window.location.href = href;
          });
        }
      });

      document.body.appendChild(overlay);
      console.log('Mobile sidebar overlay created');
    };

    checkAndCreate();

    return () => {
      document.getElementById('mobile-sidebar-overlay')?.remove();
    };
  }, [isMobile, location.pathname]);

  // Handle toggle
  useEffect(() => {
    const overlay = document.getElementById('mobile-sidebar-overlay');
    if (!overlay) return;

    const backdrop = overlay.querySelector('.mobile-backdrop') as HTMLElement;
    const panel = overlay.querySelector('.mobile-panel') as HTMLElement;

    if (isOpen) {
      backdrop.style.opacity = '1';
      backdrop.style.visibility = 'visible';
      panel.style.transform = 'translateX(0)';
      document.body.style.overflow = 'hidden';
      console.log('Sidebar opened');
    } else {
      backdrop.style.opacity = '0';
      backdrop.style.visibility = 'hidden';
      panel.style.transform = 'translateX(-100%)';
      document.body.style.overflow = '';
      console.log('Sidebar closed');
    }
  }, [isOpen]);

  console.log('Rendering button. isMobile:', isMobile, 'location:', location.pathname);

  // Always show button on docs pages when mobile
  if (!isMobile || !location.pathname.startsWith('/docs/')) {
    console.log('Not showing button - isMobile:', isMobile, 'path:', location.pathname);
    return null;
  }

  return (
    <button
      onClick={() => {
        console.log('Button clicked, current state:', isOpen);
        setIsOpen(!isOpen);
      }}
      style={{
        position: 'fixed',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1500,
        background: '#D9232D',
        color: 'white',
        border: 'none',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isOpen ? '×' : '☰'}
    </button>
  );
};

export default MobileSidebarToggle;
