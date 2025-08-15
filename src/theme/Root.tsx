import React from 'react';
import MobileSidebarToggle from '@site/src/components/MobileSidebarToggle';

// Default implementation, that you can customize
export default function Root({children}: {children: React.ReactNode}): React.ReactElement {
  return (
    <>
      {children}
      <MobileSidebarToggle />
    </>
  );
}
