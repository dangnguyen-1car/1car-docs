import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';

const MobileSidebarToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 996);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    // Close sidebar when navigating to a new page
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobile) {
      let backdrop = document.querySelector('.mobile-sidebar-backdrop');
      let mobileSidebar = document.querySelector('.mobile-document-sidebar');

      // Create white backdrop
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mobile-sidebar-backdrop';
        backdrop.addEventListener('click', () => setIsOpen(false));
        document.body.appendChild(backdrop);
      }

      // Always recreate mobile sidebar content when location changes
      const desktopContainer = document.querySelector('.theme-doc-sidebar-container');
      console.log('Desktop container found:', !!desktopContainer);
      
      if (desktopContainer) {
        // Temporarily show desktop container to ensure it's accessible
        const originalDisplay = (desktopContainer as HTMLElement).style.display;
        const originalVisibility = (desktopContainer as HTMLElement).style.visibility;
        (desktopContainer as HTMLElement).style.display = 'block';
        (desktopContainer as HTMLElement).style.visibility = 'visible';
        (desktopContainer as HTMLElement).style.position = 'fixed';
        (desktopContainer as HTMLElement).style.top = '-9999px';
        
        // Remove existing mobile sidebar if it exists
        if (mobileSidebar) {
          mobileSidebar.remove();
        }
        
        // Create fresh mobile sidebar
        mobileSidebar = document.createElement('div');
        mobileSidebar.className = 'mobile-document-sidebar';
        
        // Clone the entire desktop sidebar to preserve functionality
        const clonedSidebar = desktopContainer.cloneNode(true) as HTMLElement;
        clonedSidebar.classList.remove('theme-doc-sidebar-container');
        clonedSidebar.classList.add('mobile-sidebar-content');
        clonedSidebar.style.display = 'block';
        clonedSidebar.style.visibility = 'visible';
        clonedSidebar.style.position = 'static';
        
        console.log('Cloned sidebar content:', clonedSidebar.innerHTML.length > 0);
        
        mobileSidebar.appendChild(clonedSidebar);
        document.body.appendChild(mobileSidebar);
        
        // Restore original desktop container styles
        (desktopContainer as HTMLElement).style.display = originalDisplay;
        (desktopContainer as HTMLElement).style.visibility = originalVisibility;
        (desktopContainer as HTMLElement).style.position = '';
        (desktopContainer as HTMLElement).style.top = '';
        
        console.log('Mobile sidebar created with content length:', mobileSidebar.innerHTML.length);
      } else {
        console.log('Desktop container not found - mobile sidebar not created');
      }

      // Toggle visibility with white backdrop
      if (isOpen) {
        backdrop?.classList.add('backdrop--show');
        mobileSidebar?.classList.add('sidebar--show');
      } else {
        backdrop?.classList.remove('backdrop--show');
        mobileSidebar?.classList.remove('sidebar--show');
      }
    }

    return () => {
      // Only cleanup on unmount, not on location change
      if (!isMobile) {
        const backdrop = document.querySelector('.mobile-sidebar-backdrop');
        const mobileSidebar = document.querySelector('.mobile-document-sidebar');
        backdrop?.remove();
        mobileSidebar?.remove();
      }
    };
  }, [isOpen, isMobile, location.pathname]);

  // Only show on docs pages and mobile
  if (!isMobile || !location.pathname.startsWith('/docs/')) {
    return null;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="mobile-sidebar-toggle"
      onClick={toggleSidebar}
      aria-label="Toggle document sidebar"
      title="Hiển thị danh sách tài liệu"
    >
      {isOpen ? '×' : '☰'}
    </button>
  );
};

export default MobileSidebarToggle;
