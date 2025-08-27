import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cổng Thông Tin Quản Trị 1CAR',
  tagline: 'Hệ thống Quản trị Toàn diện cho Chuỗi Garage Ô tô 1CAR',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://1car-docs.local',
  baseUrl: '/',

  organizationName: '1CAR',
  projectName: '1car-enterprise-portal',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl: undefined, // Tắt chức năng "edit this page"
        },
        blog: false, // Tắt blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/1car-social-card.jpg',
    navbar: {
      title: '1CAR-EDMS',
      logo: {
        alt: '1CAR Logo',
        src: 'img/LOGO-1CAR.png',
        srcDark: 'img/LOGO-1CAR.png',
      },
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'enterpriseGovernanceSidebar',
          position: 'left',
          label: 'Tài liệu Quản trị',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Hệ thống Tài liệu',
          items: [
            {
              label: 'Giới thiệu',
              to: '/docs/intro',
            },
            {
              label: 'Pháp lý & Cổ đông',
              to: '/docs/phap-ly-co-dong/dieu-le-cong-ty/ban-thao',
            },
            {
              label: 'Quản trị Cấp cao',
              to: '/docs/quan-tri-cap-cao/quy-che-hoat-dong-hdqt/ban-thao',
            },
            {
              label: 'Quản trị Nội bộ',
              to: '/docs/quan-tri-noi-bo/quy-che-quan-tri-noi-bo/ban-thao',
            },
          ],
        },
        {
          title: 'Vận hành',
          items: [
            {
              label: 'Vận hành Chuyên môn',
              to: '/docs/van-hanh-chuyen-mon/quy-che-quan-tri-tai-chinh/ban-thao',
            },
            {
              label: 'Tuân thủ và Đạo đức',
              to: '/docs/tuan-thu-dao-duc/quy-dinh-dao-duc-xung-dot-loi-ich/ban-thao',
            },
            {
              label: 'Triển khai và Công cụ',
              to: '/docs/trien-khai-cong-cu/ke-hoach-trien-khai-he-thong-quy-che',
            },
          ],
        },
        {
          title: 'Thông tin',
          items: [
            {
              label: '1CAR Enterprise Portal',
              href: 'https://1car.vn',
            },
            {
              label: 'Phiên bản 1.0',
              href: '#',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} 1CAR Enterprise. Tất cả quyền được bảo lưu.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: '1car-docs',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
