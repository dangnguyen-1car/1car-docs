# Module D - Quản trị công nợ

# BỘ QUY TRÌNH MODULE MODULE D - QUẢN TRỊ CÔNG NỢ

Tài liệu này thiết lập hệ thống kiểm soát công nợ tại 1CAR Gara, đảm bảo doanh thu trên sổ sách phải được chuyển hóa thành tiền mặt thực tế. Tại 1CAR, CFO không chấp nhận khái niệm doanh thu treo. Mọi khoản nợ phải được định danh, định hạn và cưỡng chế thu hồi bằng công nghệ.

---

## SOP-D01: PHÂN LOẠI KHÁCH HÀNG & THIẾT LẬP HẠN MỨC TÍN DỤNG (CREDIT LIMIT)

### 1. Mục đích
Xác định mức độ tín nhiệm của khách hàng để cấp hạn mức nợ (Credit Limit) phù hợp, nhằm tối ưu hóa doanh thu nhưng vẫn đảm bảo an toàn dòng tiền, tránh rủi ro nợ xấu.

### 2. Phạm vi áp dụng
Áp dụng cho tất cả các đối tác có giao dịch phát sinh nợ tại hệ thống 1CAR Gara.

### 3. Tài liệu liên quan
- IFMS: Hệ thống quản lý tài chính tích hợp.
- DOA: Ma trận phân cấp thẩm quyền tài chính.
- QC-BGĐ-2025-06: Quy chế Tài chính 1CAR.

### 4. Định nghĩa và viết tắt
- Credit Limit (CL): Hạn mức nợ tối đa một khách hàng được phép duy trì.
- DSO (Days Sales Outstanding): Số ngày thu hồi nợ bình quân.
- Veto: Quyền phủ quyết tuyệt đối của CFO.

### 5. Trách nhiệm
- Cố vấn dịch vụ (CVDV): Thu thập hồ sơ khách hàng, đề xuất nhóm phân loại.
- Kế toán: Thẩm định lịch sử thanh toán và cập nhật CL lên hệ thống.
- CFO: Phê duyệt CL cho nhóm khách hàng chiến lược và các trường hợp ngoại lệ.

### 7. Nội dung quy trình

#### 7.1 Phân loại nhóm khách hàng
Hệ thống ERP tự động phân loại khách hàng vào 3 nhóm dựa trên hồ sơ đầu vào:

| Nhóm khách hàng      | Đặc điểm                                                  | Chính sách nợ (Credit Limit)                                                 |
| :------------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------- |
| Nhóm 1: Cá nhân      | Khách lẻ sửa chữa, chăm sóc xe.                           | CL = 0. Thanh toán 100% trước khi xuất xưởng.                                |
| Nhóm 2: Doanh nghiệp | Các đơn vị vận tải, taxi, xe cơ quan có hợp đồng dài hạn. | CL = 50% doanh thu bình quân 3 tháng gần nhất hoặc theo thỏa thuận hợp đồng. |
| Nhóm 3: Bảo hiểm     | Các hãng PVI, Bảo Việt, BSH, Liberty...                   | CL dựa trên cam kết bảo lãnh. Tối đa không quá 500 triệu VNĐ/nhánh Garage.   |

#### 7.2 Cách tính Credit Limit (CL) cho khách hàng trả sau
CL được tính toán dựa trên công thức trọng số Scorecard:

CL = (Doanh thu TB 3 tháng) x (Hệ số uy tín K)

*Trong đó, Hệ số K được xác định:*
- K = 1.0: Thanh toán đúng hạn 100% trong 6 tháng.
- K = 0.7: Có lịch sử trễ hạn 1-7 ngày.
- K = 0.5: Khách hàng mới (giai đoạn thử thách 3 tháng).
- K = 0: Khách hàng từng có nợ quá hạn > 30 ngày (Chuyển về chế độ thanh toán ngay).

### 8. Chỉ số kiểm soát (KPI)
- Tỷ lệ nợ xấu: < 0.5% tổng doanh thu.
- DSO (Số ngày thu hồi nợ): < 45 ngày.
- Tỷ lệ hồ sơ CL chính xác: 100%.

### 9. Trigger cảnh báo & Quyền Phủ quyết của CFO
- Trigger: Khi dư nợ khách hàng chạm 90% CL, hệ thống tự động gửi thông báo đến CVDV và Kế toán.
- Quyền Phủ quyết: Khi dư nợ chạm 100% CL, ERP tự động khóa chức năng tạo Lệnh sửa chữa mới. Chỉ CFO mới có quyền mở khóa tạm thời sau khi thẩm định kế hoạch trả nợ của đối tác.

### 10. Hồ sơ lưu trữ
- Hợp đồng kinh tế (Bản scan trên ERP).
- Bảng chấm điểm tín dụng khách hàng.

### 11. Phụ lục
- Biểu mẫu đề xuất hạn mức tín dụng.

---

## SOP-D02: QUY TRÌNH SERVICE STOP & CƯỠNG CHẾ THU HỒI NỢ

### 1. Mục đích
Thiết lập cơ chế Phanh khẩn cấp đối với các khoản nợ quá hạn, đảm bảo tính kỷ luật trong thanh toán của đối tác.

### 2. Phạm vi áp dụng
Toàn bộ hệ thống 1CAR Gara.

### 3. Tài liệu liên quan
- C-SOP-DE-001: Phân loại khách hàng & CL.
- Quy trình bàn giao xe (C-PR-CS-HD-008).

### 4. Định nghĩa và viết tắt
- Service Stop: Đình chỉ dịch vụ.
- ERP Lock: Khóa quyền thao tác trên phần mềm.

### 5. Trách nhiệm
- Hệ thống ERP: Tự động quét và phân loại tuổi nợ hàng ngày.
- Kế toán trưởng: Giám sát các cảnh báo Cấp độ Vàng và Cam.
- CFO: Thực thi cảnh báo Cấp độ Đỏ.

### 6. Nội dung quy trình (3 Cấp độ Service Stop)

| Cấp độ                | Tình trạng nợ                         | Hành động cưỡng chế                                                                                                      | Thẩm quyền      |
| :-------------------- | :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------- | :-------------- |
| Vàng (Nhắc nợ)        | Quá hạn 1-7 ngày hoặc nợ chạm 90% CL. | ERP gửi SMS/Email nhắc nợ tự động. CVDV gọi điện thông báo.                                                              | Kế toán công nợ |
| Cam (Tạm dừng ưu đãi) | Quá hạn 8-15 ngày.                    | Hệ thống tự động cắt bỏ các chiết khấu, ưu đãi, điểm tích lũy của khách hàng. Mọi lệnh sửa chữa phải trả giá Full-price. | Kế toán trưởng  |
| Đỏ (Khóa hệ thống)    | Quá hạn > 15 ngày hoặc nợ vượt CL.    | ERP khóa toàn bộ chức năng: Không thể mở RO mới, không thể xuất kho phụ tùng cho khách hàng này trên toàn chuỗi.         | CFO (Phủ quyết) |

### 7. Chỉ số kiểm soát (KPI)
- Thời gian xử lý nợ cấp độ Đỏ: < 24h kể từ khi phát sinh.
- Tỷ lệ thu hồi nợ sau Service Stop: > 95%.

### 8. Quyền Phủ quyết tuyệt đối của CFO
Tại 1CAR Gara, chúng tôi vận hành theo triết lý: *"Dòng tiền là máu, CFO là người giữ van"*.
- Cấm tuyệt đối: CEO, Quản lý Garage hay Cố vấn dịch vụ không có quyền yêu cầu kỹ thuật thực hiện sửa chữa nếu hệ thống đã khóa Đỏ.
- Mở khóa: Duy nhất CFO sở hữu quyền duyệt trên ERP để mở khóa cho khách hàng nợ quá hạn. Quyền này chỉ được sử dụng khi khách hàng có văn bản cam kết thanh toán hoặc ký quỹ tiền mặt tương ứng.

### 9. Hồ sơ lưu trữ
- Lịch sử nhắc nợ trên ERP.
- Biên bản làm việc về nợ quá hạn.

### 10. Phụ lục
- Mẫu thông báo dừng dịch vụ.

---

> Quy trình này không nhằm mục đích gây khó khăn cho khách hàng, mà để loại bỏ những đối tác chiếm dụng vốn, bảo vệ lợi ích của cổ đông và đảm bảo lương thưởng cho đội ngũ thợ máy luôn được chi trả đúng hạn. Thực thi quyết liệt - Thu hồi triệt để.