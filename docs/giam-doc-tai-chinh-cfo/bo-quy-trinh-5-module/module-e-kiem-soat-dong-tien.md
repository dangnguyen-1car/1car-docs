# Module E - Kiểm soát dòng tiền

# BỘ QUY TRÌNH MODULE E - KIỂM SOÁT DÒNG TIỀN

Tài liệu này quy định cách thức quản trị dòng tiền, đảm bảo tính thanh khoản và an toàn tài chính cho hệ thống 1CAR Gara. Mọi cá nhân, bộ phận liên quan có trách nhiệm tuân thủ tuyệt đối các định mức và rào cản kỹ thuật được thiết lập dưới đây.

---

## SOP-E01: DỰ BÁO DÒNG TIỀN 13 TUẦN (13-WEEK ROLLING CASH FLOW)

### 1. Mục đích:
Thiết lập tầm nhìn tài chính ngắn hạn để chủ động điều phối nguồn vốn, đảm bảo không bao giờ rơi vào tình trạng mất thanh khoản đột ngột.

### 2. Tần suất & Nhân sự thực hiện:
- Thời gian: Cập nhật vào sáng Thứ Sáu hàng tuần.
- Thực hiện: Kế toán tổng hợp.
- Phê duyệt: Giám đốc Tài chính (CFO).

### 3. Luồng dữ liệu đầu vào:
- Từ Module C - Bán hàng: Dự báo doanh thu thu tiền ngay (Khách lẻ) dựa trên lịch hẹn xe và tỷ lệ chuyển đổi lịch sử.
- Từ Module D - Công nợ: Lịch thu hồi nợ từ các công ty Bảo hiểm và Đội xe (dựa trên DSO - số ngày phải thu bình quân).
- Từ Module A/B - Vận hành: Lịch thanh toán nhà cung cấp vật tư, tiền thuê mặt bằng, lương và các khoản thuế.

### 4. Biểu mẫu cấu trúc Dự báo:

| Hạng mục                                 | Tuần T+1 | Tuần T+2 | ... | Tuần T+13 |
| :--------------------------------------- | :------- | :------- | :-- | :-------- |
| I. Dòng tiền vào                         |          |          |     |           |
| 1. Thu từ khách lẻ (Module C)            |          |          |     |           |
| 2. Thu hồi nợ Bảo hiểm/Đội xe (Module D) |          |          |     |           |
| II. Dòng tiền ra                         |          |          |     |           |
| 1. Thanh toán NCC Phụ tùng/Vật tư/Sơn    |          |          |     |           |
| 2. Quỹ lương & Thưởng                    |          |          |     |           |
| 3. Chi phí vận hành (OPEX)               |          |          |     |           |
| III. Dòng tiền thuần                     |          |          |     |           |
| IV. Số dư tiền cuối kỳ                   |          |          |     |           |

### 5. Giao thức Cuốn chiếu:
- Khi kết thúc tuần T, dữ liệu thực tế sẽ được cập nhật để đối soát sai lệch. 
- Hệ thống tự động đẩy tuần T+1 thành tuần hiện tại và bổ sung thêm dự báo cho tuần T+13 mới.
- Cảnh báo: Nếu Số dư tiền cuối kỳ tại bất kỳ tuần nào trong 13 tuần < 1.0 tháng OPEX, CFO phải kích hoạt Giao thức ứng phó khẩn cấp.

---

## SOP-E02: CHIẾN THUẬT "3 HŨ TIỀN"

### 1. Mục đích:
Thực thi kỷ luật trích lập quỹ ngay khi dòng tiền thực thu đổ về, đảm bảo nguồn tiền cho tái đầu tư và dự phòng rủi ro không bị lạm dụng cho vận hành.

### 2. Quy tắc phân bổ (60-20-15-5):
Ngay khi tiền về tài khoản hoặc quỹ tiền mặt, Kế toán phải định danh và phân bổ theo tỷ lệ:

| Hũ tiền                           | Tỷ lệ | Mục đích sử dụng                                                                   |
| :-------------------------------- | :---- | :--------------------------------------------------------------------------------- |
| Hũ 1: Vận hành (COGS & OPEX)      | 60%   | Thanh toán vật tư, sơn, phụ tùng (35-40%) và chi phí vận hành, lương thợ (15-20%). |
| Hũ 2: Tái đầu tư & Lợi nhuận      | 20%   | Mua sắm máy chẩn đoán, cầu nâng mới, nâng cấp xưởng hoặc chia cổ tức định kỳ.      |
| Hũ 3: Lợi nhuận mục tiêu (EBITDA) | 15%   | Phần lợi nhuận cứng cam kết với Hội đồng thành viên/Cổ đông.                       |
| Hũ 4: Dự phòng rủi ro (Provision) | 5%    | Xử lý lỗi bảo hành, đền bù hư hỏng xe khách, hao hụt vật tư ngoài định mức.        |

### 3. Cơ chế thực thi:
- Kỹ thuật: Sử dụng tính năng Tài khoản phụ trên ERP hoặc hệ thống ngân hàng điện tử để tách bạch dòng tiền.
- Ưu tiên: Hũ Dự phòng 5% phải được lấp đầy đầu tiên. Nếu trong tháng không xảy ra rủi ro, số dư này được cộng dồn vào Hũ Tái đầu tư vào cuối năm.
- Cấm: Tuyệt đối không sử dụng tiền từ Hũ Tái đầu tư và Hũ Lợi nhuận để bù đắp cho sự yếu kém trong quản trị chi phí vận hành (Hũ 1).

---

## SOP-E03: PHÊ DUYỆT CHI THEO NGÂN SÁCH CÒN LẠI

### 1. Mục đích:
Ngăn chặn hành vi chi vượt định mức và đảm bảo tính hiệu lực của kế hoạch tài chính đã phê duyệt từ đầu tháng.

### 2. Nguyên tắc Phanh cứng trên ERP:
Hệ thống ERP của 1CAR Gara được cấu hình để khóa chức năng tạo phiếu chi/đề nghị thanh toán nếu:
- Hạng mục chi phí đó đã đạt mức 100% ngân sách tháng.
- Số dư khả dụng của hạng mục (Budget Remaining) = 0.

### 3. Ma trận phê duyệt và Quyền Phủ quyết của CFO:

| Bước | Hành động | Nhân sự | Lưu ý |
| :--- | :--- | :--- | :--- |
| 1 | Khởi tạo đề xuất chi | Trưởng bộ phận | Phải chọn đúng mã Code chi phí trên ERP. |
| 2 | Kiểm tra Ngân sách tự động | Hệ thống ERP | Nếu hết ngân sách -> Từ chối ngay lập tức. |
| 3 | Thẩm định tính hợp lý | CFO | Kiểm tra tính thực tế và chứng từ đi kèm. |
| 4 | Quyết định cuối cùng | CEO | Phê duyệt thực hiện chi. |

### 4. Quyền Phủ quyết tuyệt đối của CFO:
- Quyền phủ quyết: CFO có quyền bác bỏ bất kỳ khoản chi nào, ngay cả khi CEO đã đồng ý, nếu khoản chi đó:
    - Làm số dư tiền mặt xuống dưới ngưỡng an toàn (Cash Ratio < 1.0).
    - Không nằm trong kế hoạch chiến lược hoặc có dấu hiệu gian lận.
- Trường hợp khẩn cấp: Các khoản chi phát sinh ngoài ngân sách (ví dụ: cháy nổ, thiết bị trọng yếu hỏng đột xuất) phải được CFO thẩm định và lấy ý kiến từ Hội đồng thành viên trước khi thực hiện. CEO không được tự ý phá vỡ rào cản ERP.

### 5. Chỉ số kiểm soát (KPI):
- Tỷ lệ chi ngoài ngân sách: 0%.
- Độ lệch ngân sách thực tế (Variance): +/- 5%.
