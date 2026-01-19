# Hướng dẫn Cấu hình Firebase Authentication cho 1CAR Enterprise Portal

## Bước 1: Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Nhấp "Add project" hoặc "Create a project"
3. Nhập tên project: `1car-enterprise-portal`
4. Tắt Google Analytics (không bắt buộc cho authentication)
5. Nhấp "Create project"

## Bước 2: Thêm Web App

1. Trong Firebase Console, nhấp vào biểu tượng Web (`</>`)
2. Nhập App nickname: `1CAR Web Portal`
3. Không cần chọn "Firebase Hosting" (vì đã deploy trên Render)
4. Nhấp "Register app"
5. Sao chép thông tin cấu hình Firebase

## Bước 3: Cấu hình Authentication

1. Trong Firebase Console, vào **Authentication** > **Get started**
2. Chọn tab **Sign-in method**
3. Bật các phương thức đăng nhập:

### Email/Password:
- Nhấp "Email/Password"
- Bật "Email/Password" 
- Nhấp "Save"

### Google Sign-in:
- Nhấp "Google"
- Bật "Google"
- Nhập Project support email
- Nhấp "Save"

## Bước 4: Cấu hình Authorized Domains

1. Trong **Authentication** > **Settings** > **Authorized domains**
2. Thêm domain của bạn trên Render:
   - `your-app-name.onrender.com`
   - `localhost` (cho development)

## Bước 5: Cập nhật Firebase Config

Mở file `src/firebase/config.ts` và thay thế các giá trị sau:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // Từ Firebase Console
  authDomain: "1car-enterprise-portal.firebaseapp.com", // Từ Firebase Console
  projectId: "1car-enterprise-portal", // Từ Firebase Console
  storageBucket: "1car-enterprise-portal.appspot.com", // Từ Firebase Console
  messagingSenderId: "123456789012", // Từ Firebase Console
  appId: "1:123456789012:web:abcdef123456789012345678", // Từ Firebase Console
  measurementId: "G-XXXXXXXXXX" // Từ Firebase Console (nếu có Analytics)
};
```

## Bước 6: Thêm Users (Tùy chọn)

### Cách 1: Tự động đăng ký qua UI
- Users có thể tự đăng ký qua trang login

### Cách 2: Thêm users thủ công
1. Trong **Authentication** > **Users**
2. Nhấp "Add user"
3. Nhập email và password
4. Nhấp "Add user"

## Bước 7: Cài đặt Dependencies

Chạy lệnh sau để cài đặt Firebase SDK:

```bash
npm install firebase
```

## Bước 8: Build và Deploy

```bash
# Build project
npm run build

# Test locally
npm run serve
```

## Bước 9: Cấu hình Environment Variables (Tùy chọn)

Để bảo mật hơn, bạn có thể sử dụng environment variables:

1. Tạo file `.env.local`:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

2. Cập nhật `src/firebase/config.ts`:
```typescript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
```

## Bước 10: Cấu hình Render.com

1. Trong Render Dashboard, vào Settings của web service
2. Thêm Environment Variables (nếu sử dụng):
   - `REACT_APP_FIREBASE_API_KEY`
   - `REACT_APP_FIREBASE_AUTH_DOMAIN`
   - etc.

## Troubleshooting

### Lỗi "Firebase: Error (auth/configuration-not-found)"
- Kiểm tra lại Firebase config
- Đảm bảo đã enable Authentication trong Firebase Console

### Lỗi "Firebase: Error (auth/unauthorized-domain)"
- Thêm domain vào Authorized domains trong Firebase Console

### Lỗi popup bị chặn
- Hướng dẫn user cho phép popup trong browser
- Hoặc sử dụng redirect thay vì popup

## Security Best Practices

1. **Firestore Security Rules** (nếu sử dụng Firestore):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

2. **Giới hạn domain**: Chỉ thêm domain thực tế vào Authorized domains
3. **Monitor usage**: Theo dõi usage trong Firebase Console
4. **Backup**: Xuất danh sách users định kỳ

## Tính năng bổ sung có thể thêm

1. **Password Reset**: Thêm chức năng reset password
2. **Email Verification**: Xác thực email sau khi đăng ký
3. **Multi-factor Authentication**: Thêm bảo mật 2 lớp
4. **Role-based Access**: Phân quyền theo vai trò
5. **Audit Logs**: Ghi log các hoạt động đăng nhập