# Script to create all markdown files for 1CAR documentation

$files = @(
    "quan-tri-cap-cao/quy-che-hoat-dong-hdqt/bien-ban-hop-hdqt.md",
    "quan-tri-cap-cao/quy-che-hoat-dong-hdqt/ho-so-thanh-vien-hdqt.md",
    "quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-kiem-toan.md",
    "quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-nhan-su-luong-thuong.md",
    "quan-tri-cap-cao/quy-che-tieu-ban-chuyen-trach/tieu-ban-chien-luoc-dau-tu.md",
    "quan-tri-noi-bo/quy-che-quan-tri-noi-bo/ban-thao.md",
    "quan-tri-noi-bo/quy-che-quan-tri-noi-bo/phien-ban-chinh-thuc.md",
    "quan-tri-noi-bo/quy-che-quan-tri-noi-bo/ma-tran-phan-quyen-doa.md",
    "quan-tri-noi-bo/quy-che-quan-ly-rui-ro/ban-thao.md",
    "quan-tri-noi-bo/quy-che-quan-ly-rui-ro/phien-ban-chinh-thuc.md",
    "quan-tri-noi-bo/quy-che-quan-ly-rui-ro/danh-muc-rui-ro.md",
    "van-hanh-chuyen-mon/quy-che-tai-chinh-dau-tu/ban-thao.md",
    "van-hanh-chuyen-mon/quy-che-tai-chinh-dau-tu/phien-ban-chinh-thuc.md",
    "van-hanh-chuyen-mon/quy-che-tai-chinh-dau-tu/bieu-mau-tham-dinh-du-an.md",
    "van-hanh-chuyen-mon/quy-che-quan-ly-mang-luoi-garage/ban-thao.md",
    "van-hanh-chuyen-mon/quy-che-quan-ly-mang-luoi-garage/phien-ban-chinh-thuc.md",
    "van-hanh-chuyen-mon/quy-che-quan-ly-mang-luoi-garage/bo-tieu-chuan-van-hanh-sops.md",
    "van-hanh-chuyen-mon/quy-che-quan-ly-mang-luoi-garage/hop-dong-nhuong-quyen-mau.md",
    "van-hanh-chuyen-mon/quy-che-nhan-su-cap-cao/ban-thao.md",
    "van-hanh-chuyen-mon/quy-che-nhan-su-cap-cao/phien-ban-chinh-thuc.md",
    "van-hanh-chuyen-mon/quy-che-nhan-su-cap-cao/chinh-sach-thu-lao-dai-ngo.md",
    "tuan-thu-dao-duc/quy-dinh-dao-duc-xung-dot-loi-ich/ban-thao.md",
    "tuan-thu-dao-duc/quy-dinh-dao-duc-xung-dot-loi-ich/phien-ban-chinh-thuc.md",
    "tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/an-toan-lao-dong.md",
    "tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/bao-ve-moi-truong.md",
    "tuan-thu-dao-duc/quy-dinh-tuan-thu-phap-luat-chuyen-nganh/phong-chay-chua-chay.md",
    "trien-khai-cong-cu/ke-hoach-trien-khai-he-thong-quy-che.md",
    "trien-khai-cong-cu/tai-lieu-dao-tao-noi-bo.md",
    "trien-khai-cong-cu/quy-che-quan-tri-cong-nghe-thong-tin.md"
)

$titles = @{
    "bien-ban-hop-hdqt.md" = "Biên Bản Họp HĐQT"
    "ho-so-thanh-vien-hdqt.md" = "Hồ Sơ Thành Viên HĐQT"
    "tieu-ban-kiem-toan.md" = "Tiểu Ban Kiểm Toán"
    "tieu-ban-nhan-su-luong-thuong.md" = "Tiểu Ban Nhân Sự, Lương Thưởng"
    "tieu-ban-chien-luoc-dau-tu.md" = "Tiểu Ban Chiến Lược & Đầu Tư"
    "ban-thao.md" = "Bản Thảo"
    "phien-ban-chinh-thuc.md" = "Phiên Bản Chính Thức"
    "ma-tran-phan-quyen-doa.md" = "Ma Trận Phân Quyền (DoA)"
    "danh-muc-rui-ro.md" = "Danh Mục Rủi ro"
    "bieu-mau-tham-dinh-du-an.md" = "Biểu Mẫu Thẩm Định Dự Án"
    "bo-tieu-chuan-van-hanh-sops.md" = "Bộ Tiêu Chuẩn Vận Hành (SOPs)"
    "hop-dong-nhuong-quyen-mau.md" = "Hợp Đồng Nhượng Quyền Mẫu"
    "chinh-sach-thu-lao-dai-ngo.md" = "Chính Sách Thù Lao, Đãi Ngộ"
    "an-toan-lao-dong.md" = "An Toàn Lao Động"
    "bao-ve-moi-truong.md" = "Bảo Vệ Môi Trường"
    "phong-chay-chua-chay.md" = "Phòng Cháy Chữa Cháy"
    "ke-hoach-trien-khai-he-thong-quy-che.md" = "Kế hoạch Triển khai Hệ thống Quy chế"
    "tai-lieu-dao-tao-noi-bo.md" = "Tài liệu Đào tạo Nội bộ"
    "quy-che-quan-tri-cong-nghe-thong-tin.md" = "Quy chế Quản trị Công nghệ Thông tin"
}

foreach ($file in $files) {
    $fullPath = "docs/$file"
    $fileName = Split-Path $file -Leaf
    $title = $titles[$fileName]
    if (-not $title) {
        $title = "Nội dung"
    }
    
    $content = @"
# $title

Nội dung đang được cập nhật.
"@
    
    # Create directory if it doesn't exist
    $dir = Split-Path $fullPath -Parent
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    # Write content to file
    $content | Out-File -FilePath $fullPath -Encoding utf8
    Write-Host "Created: $fullPath"
}
