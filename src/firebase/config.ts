/**
 * Firebase Configuration for 1CAR Enterprise Portal
 * Cấu hình Firebase cho Cổng Thông tin Quản trị 1CAR
 */

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration object
// Thay thế các giá trị này bằng thông tin từ Firebase Console của bạn
const firebaseConfig = {
  apiKey: "AIzaSyBTvR9IbLyC8I_YuVuCudgdIbx9jBMDKS8",
  authDomain: "car-docs-d2409.firebaseapp.com",
  projectId: "car-docs-d2409",
  storageBucket: "car-docs-d2409.firebasestorage.app",
  messagingSenderId: "443680892099",
  appId: "1:443680892099:web:b2443f907e663590a16e76"
};

// Initialize Firebase
let app;
let auth;
let googleProvider;

try {
  app = initializeApp(firebaseConfig);
  console.log('🔥 Firebase initialized successfully');
  
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
  console.log('🔥 Firebase Auth initialized successfully');

  // Initialize Google Auth Provider
  googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });
  console.log('🔥 Google Auth Provider initialized successfully');
} catch (error) {
  console.error('🔥 Firebase initialization error:', error);
}

export { auth, googleProvider };
export default app;