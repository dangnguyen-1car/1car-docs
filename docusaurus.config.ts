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
              label: 'Điều lệ công ty',
              to: '/docs/phap-ly-co-dong/dieu-le-cong-ty/ban-thao',
            },
            {
              label: 'Quy chế công bố thông tin',
              to: '/docs/phap-ly-co-dong/quy-che-cong-bo-thong-tin/ban-thao',
            },  
            {
              label: 'Quy chế Ban kiểm soát',
              to: '/docs/phap-ly-co-dong/quy-che-hoat-dong-cua-ban-kiem-soat/ban-thao',
            }, 
          ],            
        },
        {            
          title: 'Quản trị cấp cao', 
          items: [                                          
            {
              label: 'Quy chế HĐQT',
              to: '/docs/quan-tri-cap-cao/quy-che-hoat-dong-hdqt/ban-thao',
            },
            {
              label: 'Quy chế Tiểu ban Kiểm toán',
              to: '/docs/quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-kiem-toan',
            },
            {
              label: 'Quy chế Tiểu ban Chiến lược',
              to: '/docs/quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-chien-luoc-dau-tu',
            },
            {
              label: 'Quy chế Tiểu ban Nhân sự',
              to: '/docs/quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-nhan-su-luong-thuong',
            },                        
          ],
        },
        {            
          title: 'Quản trị nội bộ', 
          items: [                                          
            {
              label: 'Quy chế Kiểm soát nội bộ',
              to: '/docs/quan-tri-noi-bo/quy-che-kiem-soat-noi-bo/ban-thao',
            },
            {
              label: 'Ma trận phân quyền DOA',
              to: '/docs/quan-tri-noi-bo/ma-tran-phan-quyen/ban-thao',
            },
            {
              label: 'Quy chế Quản trị Rủi ro',
              to: '/docs/quan-tri-noi-bo/quy-che-quan-tri-rui-ro/ban-thao',
            },
            {
              label: 'Quy chế Mua sắm',
              to: '/docs/quan-tri-noi-bo/quy-che-mua-sam-quan-ly-nha-cung-cap/ban-thao',
            },    
            {
              label: 'Quy chế Hợp đồng',
              to: '/docs/quan-tri-noi-bo/quy-che-hop-dong/ban-thao',
            },                                 
          ],
        },        
        {
          title: 'Vận hành chuyên môn',
          items: [
            {
              label: 'Quy chế Quản trị Tài chính',
              to: '/docs/van-hanh-chuyen-mon/quy-che-quan-tri-tai-chinh/ban-thao',
            },
            {
              label: 'Quy chế Hoạt động Kinh doanh',
              to: '/docs/van-hanh-chuyen-mon/quy-che-hoat-dong-kinh-doanh/ban-thao',
            },
            {
              label: 'Quy chế Lương thưởng',
              to: '/docs/van-hanh-chuyen-mon/quy-che-luong-thuong-va-phuc-loi/ban-thao',
            },
            {
              label: 'Quy chế Tuyển dụng',
              to: '/docs/van-hanh-chuyen-mon/quy-che-tuyen-dung-bo-nhiem-mien-nhiem-tu-chuc/ban-thao',
            },
            {
              label: 'Chính sách Giá và Chiết khấu',
              to: '/docs/van-hanh-chuyen-mon/chinh-sach-gia-va-chiet-khau/ban-thao',
            },
            {
              label: 'Nội quy lao động',
              to: '/docs/van-hanh-chuyen-mon/noi-quy-lao-dong/ban-thao',
            },                                                            
          ],
        },
        {
          title: 'Tuân thủ và Đạo đức',
          items: [
            {
              label: 'Quy định Đạo đức và Xung đột',
              to: '/docs/tuan-thu-dao-duc/quy-dinh-dao-duc-xung-dot-loi-ich/ban-thao',
            },
            {
              label: 'Quy định an toàn và vệ sinh lao động',
              to: '/docs/tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/an-toan-lao-dong',
            },
            {
              label: 'Quy định bảo vệ môi trường',
              to: '/docs/tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/bao-ve-moi-truong',
            },
            {
              label: 'Quy định phòng cháy chữa cháy',
              to: '/docs/tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/phong-chay-chua-chay',
            },                                                           
          ],
        },        
        {
          title: 'Triển khai và Công cụ',
          items: [
            {
              label: 'Quy chế Quản lý và Sử dụng Hệ thống Công nghệ Thông tin',
              to: '/docs/trien-khai-cong-cu/quy-che-quan-tri-cong-nghe-thong-tin/ban-thao',
            },
            {
              label: 'Quy định bảo vệ môi trường',
              to: '/docs/trien-khai-cong-cu/ke-hoach-trien-khai-he-thong-quy-che/ke-hoach',
            },
            {
              label: 'Quy định phòng cháy chữa cháy',
              to: '/docs/trien-khai-cong-cu/ke-hoach-trien-khai-he-thong-quy-che/tai-lieu-dao-tao-noi-bo',
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
