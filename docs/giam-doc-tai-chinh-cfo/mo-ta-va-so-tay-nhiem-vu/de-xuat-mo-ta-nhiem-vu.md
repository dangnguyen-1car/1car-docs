# Đề xuất mô tả nhiệm vụ

# MÔ TẢ NHIỆM VỤ & GIAO THỨC QUẢN TRỊ CFO - 1CAR GARA

## I. PHẠM VI TRÁCH NHIỆM

Tại 1CAR Gara, Giám đốc Tài chính (CFO) không phải là một Kế toán trưởng cấp cao tập trung vào việc ghi chép quá khứ. CFO là Người gác cổng của hệ thống, chịu trách nhiệm bảo vệ dòng máu tài chính và ngăn chặn các rủi ro hệ thống trước khi chúng xảy ra.

> Triết lý điều hành: CEO có thể nhấn ga để tăng trưởng, nhưng CFO là người quyết định hệ thống phanh có đủ an toàn để xe không lao khỏi vách đá hay không. CFO không can thiệp vào kỹ thuật sửa xe, nhưng kiểm soát mọi van dữ liệu để đảm bảo sự sống còn của doanh nghiệp.

---

## II. 5 MODULE QUẢN TRỊ CHIẾN LƯỢC TRÊN HỆ THỐNG

| Module                        | Hành động cốt lõi                                                                                    | Công cụ thực thi                                                                                              | Chỉ số KPI Sống còn        |
| :---------------------------- | :--------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ | :------------------------- |
| 1. Lập kế hoạch tài chính     | Thiết lập Hạn mức cứng cho Marketing và CAPEX.                                                       | *Budget Control Dashboard*: Tự động chặn lệnh chi nếu vượt 105% dự toán tháng.                                | OPEX < 20% doanh thu       |
| 2. Điểm hòa vốn & Hiệu suất   | Thẩm định biên lợi nhuận từng mã dịch vụ/phụ tùng. Veto các chiến dịch giảm giá gây lỗ biến phí.     | *Profitability Simulator*: Tính toán tác động của khuyến mãi đến Net Profit trước khi ban hành.               | EBITDA > 15%               |
| 3. Dự báo bán hàng và tồn kho | Điều phối lượng tồn kho phụ tùng dựa trên dự báo lượt xe. Tối ưu vòng quay vốn lưu động.             | *Demand Forecasting*: Cảnh báo đặt hàng dựa trên dữ liệu lịch sử và xu hướng thị trường.                      | Vòng quay kho > 6 vòng/năm |
| 4. Quản trị công nợ           | Thiết lập "Van khóa tín dụng" đối với các khách hàng Bảo hiểm/Tổ chức/Đội xe.                        | *Auto-Credit Valve*: Khóa chức năng tạo đơn hàng mới khi dư nợ chạm 100% hạn mức hoặc quá hạn 15 ngày.        | Nợ xấu < 1%                |
| 5. Kiểm soát số dư tiền mặt   | Kiểm soát số dư tiền mặt Real-time tại từng garage. Quản lý 3 loại quỹ (Vận hành, Dự phòng, Rủi ro). | *Treasury Real-time Tracking*: Đối soát dòng tiền 17:00 hàng ngày giữa số dư ảo (ERP) và thực tế (Bank/Cash). | Cash Ratio > 1.0           |

### Các công thức tài chính pháp lệnh:



1. Điểm hòa vốn hệ thống:
   BEP = Tổng chi phí cố định / (Giá bán – Chi phí biến đổi)

2. Hiệu suất nhân sự tối thiểu:
   S/H = Tổng doanh thu / Tổng số nhân sự

   Ngưỡng yêu cầu:
   S/H ≥ 50.000.000 VND / người / tháng

3. Biên lợi nhuận gộp mục tiêu:
   GM = (Doanh thu – COGS) / Doanh thu

   Mục tiêu kiểm soát:
   GM ≥ 40% (tương ứng COGS tiêu chuẩn ≤ 60%)

---

## III. MA TRẬN QUYỀN HẠN & QUYỀN PHỦ QUYẾT

Dựa trên Quy chế Tài chính (QC-BGĐ-2025-06) và Ma trận Phân cấp Thẩm quyền (DOA), CFO được trao quyền hạn đặc biệt để bảo vệ tính tuân thủ:

1. Quyền Phủ quyết Tuyệt đối (Điều 23 - Quản trị Công nợ):
   - CFO có quyền phủ quyết và đình chỉ ngay lập tức các giao dịch với đối tác có dấu hiệu nợ xấu vượt quá 40% vốn lưu động được phân bổ cho nhánh đó.
   - Không cá nhân nào (kể cả CEO) có quyền mở khóa lệnh "Auto-credit Valve" trên hệ thống ERP nếu không có đồng ý từ CFO.

2. Kiểm soát Ngân sách (Điều 10 - Kiểm soát chi phí):
   - Mọi khoản chi ngoài ngân sách vượt quá 5% tổng dự toán tháng phải có chữ ký thẩm định của CFO trước khi trình HĐQT.
   - CFO có quyền từ chối thanh toán các khoản chi không có chứng từ hợp lệ trên ERP hoặc không tuân thủ nguyên tắc bất kiêm nhiệm.

3. Thẩm định Giá (Chính sách Giá CS-BGĐ-2025-01):
   - CFO nắm quyền phê duyệt cuối cùng về bảng giá phụ tùng dựa trên tỷ suất lợi nhuận gộp. Bất kỳ thay đổi giá nào làm giảm Margin xuống dưới 20% đều bị hệ thống tự động loại bỏ.

---

## IV. GIAO THỨC ỨNG PHÓ KHẨN CẤP

Khi hệ thống phát tín hiệu cảnh báo, CFO kích hoạt các giao thức sau:

### Kịch bản A: Gian lận doanh thu
*Dấu hiệu: Số lượt xe ra/vào camera AI lệch >10% so với hóa đơn xuất trên ERP.*
- Bước 1: Kích hoạt lệnh phong tỏa tài khoản ERP của garage nghi vấn trong 24h để đối soát.
- Bước 2: Thành lập đoàn kiểm kê đột xuất (phối hợp với Ban Kiểm soát).
- Bước 3: Áp dụng chế tài.

### Kịch bản B: Khủng hoảng dòng tiền
*Dấu hiệu: Tiền mặt khả dụng < 30% tổng nợ đến hạn và quỹ lương tháng.*
- Bước 1: Kích hoạt chế độ "Thắt lưng buộc bụng".
- Bước 2: Cắt giảm ngay lập tức 100% ngân sách Marketing/R&D chưa triển khai.
- Bước 3: Đàm phán kéo dài thời hạn trả nợ nhà cung cấp phụ tùng thêm 15-30 ngày dựa trên uy tín tài chính.
- Bước 4: Báo cáo HĐTV phương án huy động vốn ngắn hạn hoặc thanh lý tài sản không cốt lõi.

### Kịch bản C: Đầu tư mở rộng nóng
*Dấu hiệu: CEO đề xuất mở 05 garage mới khi dòng tiền hoạt động (CFO) đang âm.*
- Bước 1: Thực hiện thẩm định độc lập dựa trên chỉ số IRR (Tỷ suất hoàn vốn nội bộ) và NPV (Giá trị hiện tại ròng).
- Bước 2: Áp dụng quyền Phủ quyết nếu thời gian hoàn vốn PBP > 36 tháng.
- Bước 3: Chỉ giải ngân theo giai đoạn: Chỉ rót vốn cho garage tiếp theo khi garage trước đó đạt 80% BEP mục tiêu.

---

## V. CHECKLIST TUÂN THỦ DÀNH CHO CFO

- [ ] Đối soát số dư tiền mặt toàn hệ thống vào 17:30 mỗi ngày.
- [ ] Rà soát danh sách "Nợ đen" trên ERP vào sáng thứ Hai hàng tuần.
- [ ] Thẩm định các chương trình khuyến mãi của Phòng Marketing (phải đảm bảo $Margin > Variable\ Costs$).
- [ ] Cập nhật bảng dự báo dòng tiền 13 tuần vào ngày 25 hàng tháng.
- [ ] Kiểm tra tính toàn vẹn của dữ liệu camera và hóa đơn ERP để phòng chống gian lận doanh thu.