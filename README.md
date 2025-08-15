# 1CAR Enterprise Documentation Portal

<div align="center">
  <img src="static/img/LOGO-1CAR.png" alt="1CAR Logo" width="200">
  
  **Cổng Thông Tin Quản Trị Toàn diện cho Chuỗi Garage Ô tô 1CAR**
  
  ![Docusaurus](https://img.shields.io/badge/Docusaurus-3.8.1-green.svg)
  ![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)
  ![Node](https://img.shields.io/badge/Node-%3E%3D18.0-green.svg)
</div>

## 📋 Giới thiệu

**1CAR Enterprise Documentation Portal** là hệ thống tài liệu quản trị doanh nghiệp được xây dựng trên nền tảng Docusaurus, cung cấp không gian lưu trữ và tra cứu tập trung cho toàn bộ khung quản trị, chính sách, quy chế và quy trình của chuỗi garage ô tô 1CAR.

### 🎯 Mục tiêu chính

- **Tập trung hóa tài liệu**: Nguồn duy nhất, chính xác và cập nhật cho toàn bộ khung quản trị
- **Tăng cường minh bạch**: Dễ dàng tiếp cận và tham khảo các văn kiện cốt lõi
- **Hỗ trợ ra quyết định**: Nền tảng thông tin vững chắc cho việc giám sát và đưa ra quyết định chiến lược

## 📂 Cấu trúc Tài liệu

```
docs/
├── 📁 phap-ly-co-dong/          # Pháp lý & Cổ đông
│   ├── dieu-le-cong-ty/         # Điều lệ công ty
│   └── quy-che-cong-bo-thong-tin/ # Quy chế công bố thông tin
├── 📁 quan-tri-cap-cao/         # Quản trị Cấp cao
│   ├── quy-che-hoat-dong-hdqt/   # Quy chế hoạt động HĐQT
│   └── quy-che-tieu-ban-chuyen-trach/ # Quy chế tiểu ban chuyên trách
├── 📁 quan-tri-noi-bo/          # Quản trị Nội bộ
│   ├── quy-che-quan-tri-noi-bo/ # Quy chế quản trị nội bộ
│   └── quy-che-quan-ly-rui-ro/  # Quy chế quản lý rủi ro
├── 📁 van-hanh-chuyen-mon/      # Vận hành Chuyên môn
│   ├── quy-che-tai-chinh-dau-tu/ # Quy chế tài chính đầu tư
│   ├── quy-che-nhan-su-cap-cao/  # Quy chế nhân sự cấp cao
│   └── quy-che-quan-ly-mang-luoi-garage/ # Quản lý mạng lưới garage
├── 📁 tuan-thu-dao-duc/         # Tuân thủ & Đạo đức
│   ├── quy-dinh-dao-duc-xung-dot-loi-ich/ # Đạo đức & Xung đột lợi ích
│   └── quy-dinh-tuan-thu-phap-luat-chuyen-nganh/ # Tuân thủ pháp luật chuyên ngành
└── 📁 trien-khai-cong-cu/       # Triển khai & Công cụ
    ├── ke-hoach-trien-khai-he-thong-quy-che.md
    ├── quy-che-quan-tri-cong-nghe-thong-tin.md
    └── tai-lieu-dao-tao-noi-bo.md
```

## 🛠️ Công nghệ sử dụng

- **Frontend Framework**: [Docusaurus 3.8.1](https://docusaurus.io/)
- **UI Library**: React 19.0.0
- **Language**: TypeScript 5.6.2
- **Styling**: CSS Modules + Custom CSS
- **Build Tool**: Webpack (via Docusaurus)
- **Deployment**: Static Site Generation

## ⚡ Bắt đầu nhanh

### Yêu cầu hệ thống

- Node.js >= 18.0
- npm hoặc yarn
- Git

### 1. Clone repository

```bash
git clone https://github.com/your-org/1car-docs.git
cd 1car-docs
```

### 2. Cài đặt dependencies

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### 3. Khởi chạy development server

```bash
# Sử dụng npm
npm start

# Hoặc sử dụng yarn  
yarn start
```

Trang web sẽ được mở tại `http://localhost:3000`. Hầu hết các thay đổi sẽ được cập nhật tự động mà không cần restart server.

## 🔧 Scripts có sẵn

| Script | Mô tả |
|--------|--------|
| `start` | Khởi chạy development server |
| `build` | Build production version |
| `serve` | Preview production build locally |
| `clear` | Xóa cache của Docusaurus |
| `deploy` | Deploy lên GitHub Pages |
| `typecheck` | Kiểm tra TypeScript |

### Development Commands

```bash
# Khởi chạy development server
npm start

# Build cho production
npm run build

# Preview production build
npm run serve

# Xóa cache khi gặp lỗi
npm run clear

# Kiểm tra TypeScript
npm run typecheck
```

## 🚀 Deployment

### GitHub Pages

#### Với SSH:
```bash
USE_SSH=true npm run deploy
```

#### Với HTTPS:
```bash
GIT_USER=<GitHub-username> npm run deploy
```

### Netlify/Vercel

1. Build project:
   ```bash
   npm run build
   ```

2. Deploy thư mục `build/` lên hosting service

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
```

## 📝 Hướng dẫn đóng góp

### Thêm tài liệu mới

1. Tạo file markdown trong thư mục `docs/`
2. Thêm metadata frontmatter:
   ```markdown
   ---
   id: document-id
   title: Tên tài liệu
   sidebar_label: Nhãn sidebar
   ---
   
   Nội dung tài liệu...
   ```

3. Cập nhật `sidebars.ts` nếu cần

### Cấu trúc file

```markdown
---
id: unique-id
title: Document Title
sidebar_label: Short Label
sidebar_position: 1
---

# Document Title

Nội dung chính của tài liệu...

## Sections

### Subsections
```

### Markdown Features

- ✅ Standard Markdown
- ✅ MDX (JSX in Markdown)
- ✅ Code blocks với syntax highlighting
- ✅ Admonitions (:::tip, :::warning, :::info)
- ✅ Tabs
- ✅ Tables

## ⚙️ Cấu hình

### Docusaurus Config (`docusaurus.config.ts`)

- **Title**: "Cổng Thông Tin Quản Trị 1CAR"
- **URL**: https://1car-docs.local
- **Locale**: Vietnamese (vi)
- **Theme**: Light/Dark mode support

### Customization

- **CSS**: `src/css/custom.css`
- **Components**: `src/components/`
- **Theme**: `src/theme/`
- **Static Assets**: `static/`

## 🔍 Tìm kiếm

Website tích hợp Algolia Search (cần cấu hình):

```typescript
algolia: {
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_SEARCH_API_KEY', 
  indexName: '1car-docs',
}
```

## 📱 Responsive Design

- ✅ Mobile-first design
- ✅ Responsive sidebar
- ✅ Touch-friendly navigation
- ✅ PWA support (có thể thêm)

## 🐛 Troubleshooting

### Lỗi thường gặp

**Build failed:**
```bash
# Xóa cache và reinstall
npm run clear
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
npm run typecheck
```

**Port đã được sử dụng:**
```bash
# Sử dụng port khác
npm start -- --port 3001
```

## 📄 License

© 2024 1CAR Enterprise. Tất cả quyền được bảo lưu.

## 🤝 Liên hệ

- **Website**: https://1car.vn
- **Email**: info@1car.vn
- **Version**: 1.0.0

---

<div align="center">
  Made with ❤️ by 1CAR Enterprise Team
</div>
