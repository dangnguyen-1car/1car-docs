/**
 * Protected Doc Page for 1CAR Enterprise Portal
 * Wrapper để bảo vệ các trang docs
 */

import React from 'react';
import OriginalDocPage from '@theme-original/DocPage';
import ProtectedRoute from '../../components/ProtectedRoute';

const DocPage: React.FC = (props) => {
  return (
    <ProtectedRoute>
      <OriginalDocPage {...props} />
    </ProtectedRoute>
  );
};

export default DocPage;