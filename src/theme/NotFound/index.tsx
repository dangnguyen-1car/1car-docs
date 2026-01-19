/**
 * Protected 404 Page for 1CAR Enterprise Portal
 */

import React from 'react';
import OriginalNotFound from '@theme-original/NotFound';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from '@docusaurus/router';

const NotFound: React.FC = () => {
  const { currentUser, loading } = useAuth();
  const history = useHistory();

  // Nếu chưa đăng nhập, redirect về welcome
  React.useEffect(() => {
    if (!loading && !currentUser) {
      history.push('/welcome');
    }
  }, [currentUser, loading, history]);

  // Nếu đã đăng nhập, hiển thị 404 bình thường
  if (currentUser) {
    return <OriginalNotFound />;
  }

  // Nếu chưa đăng nhập, không hiển thị gì (sẽ redirect)
  return null;
};

export default NotFound;