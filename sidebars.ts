import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  enterpriseGovernanceSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Giới thiệu',
    },
    {
      type: 'category',
      label: '01. PHÁP LÝ & CỔ ĐÔNG',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Điều lệ Công ty',
          items: [
            'phap-ly-co-dong/dieu-le-cong-ty/ban-thao',
            'phap-ly-co-dong/dieu-le-cong-ty/phien-ban-chinh-thuc',
            'phap-ly-co-dong/dieu-le-cong-ty/tai-lieu-tham-chieu',
            'phap-ly-co-dong/dieu-le-cong-ty/bien-ban-hop-dhcdcd',
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Công bố Thông tin',
          items: [
            'phap-ly-co-dong/quy-che-cong-bo-thong-tin/ban-thao',
            'phap-ly-co-dong/quy-che-cong-bo-thong-tin/phien-ban-chinh-thuc',
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Hoạt động của Ban Kiểm soát',
          items: [
            'phap-ly-co-dong/quy-che-hoat-dong-cua-ban-kiem-soat/ban-thao',
            'phap-ly-co-dong/quy-che-hoat-dong-cua-ban-kiem-soat/phien-ban-chinh-thuc',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '02. QUẢN TRỊ CẤP CA0',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Quy chế Hoạt động HĐQT',
          items: [
            'quan-tri-cap-cao/quy-che-hoat-dong-hdqt/ban-thao',
            'quan-tri-cap-cao/quy-che-hoat-dong-hdqt/phien-ban-chinh-thuc',
            'quan-tri-cap-cao/quy-che-hoat-dong-hdqt/bien-ban-hop-hdqt',
            'quan-tri-cap-cao/quy-che-hoat-dong-hdqt/ho-so-thanh-vien-hdqt',
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Tiểu ban Chuyên trách',
          items: [
            'quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-kiem-toan',
            'quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-nhan-su-luong-thuong',
            'quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-chien-luoc-dau-tu',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '03. QUẢN TRỊ NỘI BỘ',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Quy chế Kiểm soát Nội bộ',
          items: [
            'quan-tri-noi-bo/quy-che-kiem-soat-noi-bo/ban-thao',
            'quan-tri-noi-bo/quy-che-kiem-soat-noi-bo/phien-ban-chinh-thuc',            
          ],
        },
        {
          type: 'category',
          label: 'Ma trận phân quyền DOA',
          items: [
            'quan-tri-noi-bo/ma-tran-phan-quyen/ban-thao',
            'quan-tri-noi-bo/ma-tran-phan-quyen/phien-ban-chinh-thuc',            
          ],
        },        
        {
          type: 'category',
          label: 'Quy chế Quản trị Rủi ro',
          items: [
            'quan-tri-noi-bo/quy-che-quan-tri-rui-ro/ban-thao',
            'quan-tri-noi-bo/quy-che-quan-tri-rui-ro/phien-ban-chinh-thuc',
            'quan-tri-noi-bo/quy-che-quan-tri-rui-ro/danh-muc-rui-ro',
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Mua sắm và Quản lý Nhà cung cấp',
          items: [
            'quan-tri-noi-bo/quy-che-mua-sam-quan-ly-nha-cung-cap/ban-thao',
            'quan-tri-noi-bo/quy-che-mua-sam-quan-ly-nha-cung-cap/phien-ban-chinh-thuc',
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Hợp đồng',
          items: [
            'quan-tri-noi-bo/quy-che-hop-dong/ban-thao',
            'quan-tri-noi-bo/quy-che-hop-dong/phien-ban-chinh-thuc',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '04. VẬN HÀNH CHUYÊN MÔN',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Quy chế Quản trị Tài chính',
          items: [
            'van-hanh-chuyen-mon/quy-che-quan-tri-tai-chinh/ban-thao',
            'van-hanh-chuyen-mon/quy-che-quan-tri-tai-chinh/phien-ban-chinh-thuc',            
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Hoạt động Kinh doanh',
          items: [
            'van-hanh-chuyen-mon/quy-che-hoat-dong-kinh-doanh/ban-thao',
            'van-hanh-chuyen-mon/quy-che-hoat-dong-kinh-doanh/phien-ban-chinh-thuc',
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Lương, Thưởng và Phúc lợi',
          items: [
            'van-hanh-chuyen-mon/quy-che-luong-thuong-va-phuc-loi/ban-thao',
            'van-hanh-chuyen-mon/quy-che-luong-thuong-va-phuc-loi/phien-ban-chinh-thuc',           
          ],
        },
        {
          type: 'category',
          label: 'Quy chế Tuyển dụng, Bổ nhiệm, Miễn nhiệm và Từ chức',
          items: [
            'van-hanh-chuyen-mon/quy-che-tuyen-dung-bo-nhiem-mien-nhiem-tu-chuc/ban-thao',
            'van-hanh-chuyen-mon/quy-che-tuyen-dung-bo-nhiem-mien-nhiem-tu-chuc/phien-ban-chinh-thuc',           
          ],
        },
        {
          type: 'category',
          label: 'Chính sách Giá và Chiết khấu',
          items: [
            'van-hanh-chuyen-mon/chinh-sach-gia-va-chiet-khau/ban-thao',
            'van-hanh-chuyen-mon/chinh-sach-gia-va-chiet-khau/phien-ban-chinh-thuc',           
          ],
        },
        {
          type: 'category',
          label: 'Nội quy lao động',
          items: [
            'van-hanh-chuyen-mon/noi-quy-lao-dong/ban-thao',
            'van-hanh-chuyen-mon/noi-quy-lao-dong/phien-ban-chinh-thuc',           
          ],
        },                        
      ],
    },
    {
      type: 'category',
      label: '05. TUÂN THỦ & ĐẠO ĐỨC',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Quy định Đạo đức & Xung đột Lợi ích',
          items: [
            'tuan-thu-dao-duc/quy-dinh-dao-duc-xung-dot-loi-ich/ban-thao',
            'tuan-thu-dao-duc/quy-dinh-dao-duc-xung-dot-loi-ich/phien-ban-chinh-thuc',
          ],
        },
        {
          type: 'category',
          label: 'Quy định Tuân thủ Pháp luật Chuyên ngành',
          items: [
            'tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/an-toan-lao-dong',
            'tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/bao-ve-moi-truong',
            'tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/phong-chay-chua-chay',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '06. TRIỂN KHAI & CÔNG CỤ',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Quy chế Quản lý và Sử dụng Hệ thống CNTT',
          items: [
            'trien-khai-cong-cu/quy-che-quan-tri-cong-nghe-thong-tin/ban-thao',
            'trien-khai-cong-cu/quy-che-quan-tri-cong-nghe-thong-tin/phien-ban-chinh-thuc',
          ],
        },
        {
          type: 'category',
          label: 'Kế hoạch triển khai Hệ thống quy chế',
          items: [
            'trien-khai-cong-cu/ke-hoach-trien-khai-he-thong-quy-che/ke-hoach',
            'trien-khai-cong-cu/ke-hoach-trien-khai-he-thong-quy-che/tai-lieu-dao-tao-noi-bo',            
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '07. GIÁM ĐỐC TÀI CHÍNH - CFO',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Nhiệm vụ & sổ tay',
          items: [
            'giam-doc-tai-chinh-cfo/mo-ta-va-so-tay-nhiem-vu/de-xuat-mo-ta-nhiem-vu',
            'giam-doc-tai-chinh-cfo/mo-ta-va-so-tay-nhiem-vu/khung-module-va-nhiem-vu',
            'giam-doc-tai-chinh-cfo/mo-ta-va-so-tay-nhiem-vu/phan-tich-cac-tham-so-quan-tri',
            'giam-doc-tai-chinh-cfo/mo-ta-va-so-tay-nhiem-vu/mo-ta-nhiem-vu-cfo',
            'giam-doc-tai-chinh-cfo/mo-ta-va-so-tay-nhiem-vu/so-tay-nhiem-vu',                               
          ],
        },
        {
          type: 'category',
          label: 'Bộ quy trình 5 module',
          items: [
            'giam-doc-tai-chinh-cfo/bo-quy-trinh-5-module/module-a-ke-hoach-tai-chinh',
            'giam-doc-tai-chinh-cfo/bo-quy-trinh-5-module/module-b-diem-hoa-von-va-hieu-suat',
            'giam-doc-tai-chinh-cfo/bo-quy-trinh-5-module/module-c-ban-hang-va-ton-kho',
            'giam-doc-tai-chinh-cfo/bo-quy-trinh-5-module/module-d-quan-tri-cong-no',
            'giam-doc-tai-chinh-cfo/bo-quy-trinh-5-module/module-e-kiem-soat-dong-tien',                               
          ],
        },
      ],
    },
  ],
};

export default sidebars;
