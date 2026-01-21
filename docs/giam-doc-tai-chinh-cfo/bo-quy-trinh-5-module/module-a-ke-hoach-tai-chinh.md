# Module A - Quản trị tài chính

# BỘ QUY TRÌNH MODULE A - QUẢN TRỊ TÀI CHÍNH CHIẾN LƯỢC

Tài liệu này thiết lập các quy tắc vận hành cho Module A - Kế hoạch & Tài chính tại hệ thống 1CAR Gara, dựa trên triết lý: CFO là kiến trúc sư hệ thống phanh và định mức tài chính pháp lệnh 60-20-15-5.

---

## SOP-A01: LẬP NGÂN SÁCH TOP-DOWN (60-20-15-5)

### 1. Mục tiêu chiến lược
- Chấm dứt tình trạng lập ngân sách theo cảm tính từ dưới lên (Bottom-up).
- Đảm bảo lợi nhuận EBITDA mục tiêu luôn đạt mức 15% bằng cách khống chế chi phí ngay từ khâu lập kế hoạch.
- Quy hoạch dòng vốn tập trung, tránh đầu tư dàn trải.

### 2. Phạm vi áp dụng
Toàn bộ hệ thống 1CAR Gara bao gồm các chi nhánh và khối văn phòng trung tâm.

### 3. Trách nhiệm thực hiện (RACI)
| Hoạt động | HĐTV | CEO | CFO | Quản lý Gara |
| :--- | :---: | :---: | :---: | :---: |
| Phê duyệt mục tiêu doanh thu năm | A | R | C | I |
| Thiết lập hạn mức ngân sách (60-20-15-5) | I | C | A/R | I |
| Lập chi tiết kế hoạch vận hành theo hạn mức | I | I | C | R |
| Thẩm định và chốt ngân sách cuối cùng | I | C | A | I |

### 4. Chu kỳ thực hiện
- Ngân sách năm: Hoàn thành trước ngày 15/12 hàng năm.
- Phân bổ ngân sách tháng: Hoàn thành trước ngày 28 hàng tháng.

### 5. Input & Công cụ hỗ trợ (ERP)
- Input: Mục tiêu tăng trưởng doanh thu năm, dữ liệu lịch sử chi phí (COGS, OPEX) từ ERP.
- Công cụ: 
  - Module IFMS (Hệ thống tài chính 1CAR): Tự động tính toán các tỷ lệ.
  - AI Budget Simulator: Mô phỏng kịch bản lợi nhuận khi thay đổi các biến số đầu vào.

### 6. Các bước thực hiện chi tiết
1. Bước 1 - Xác lập mục tiêu: CEO trình mục tiêu doanh thu tổng và từng chi nhánh cho HĐTV.
2. Bước 2 - Áp định mức: CFO căn cứ trên mục tiêu doanh thu để áp Trần chi tiêu theo công thức:
   - COGS (60%): Vật tư < 40%; Nhân công trực tiếp < 20%.
   - OPEX (20%): Mặt bằng, Marketing, Quản lý.
   - Reserve (5%): Quỹ dự phòng bảo hành và rủi ro.
1. Bước 3 - Giao hạn mức: CFO gửi thông báo hạn mức chi tiêu (Trần ngân sách) cho từng Quản lý Garage thông qua hệ thống ERP.
2. Bước 4 - Lập kế hoạch chi tiết: Quản lý Garage lập chi tiết các hạng mục chi tiêu trong phạm vi hạn mức đã giao (không được vượt quá 1 đồng).
3. Bước 5 - Thẩm định & Khóa: CFO thẩm định tính logic của kế hoạch chi tiết. Sau khi duyệt, hệ thống ERP sẽ tự động khóa ngân sách. Mọi lệnh chi sau này không có trong danh mục sẽ bị ERP từ chối.

### 7. Chỉ số kiểm soát (KPI) & Trigger cảnh báo
- KPI: Tỷ lệ sai lệch dự báo/thực tế < 5%.
- Trigger đỏ: Nếu Quản lý Garage lập kế hoạch có tỷ lệ COGS > 62% hoặc OPEX > 22%, hệ thống ERP sẽ tự động từ chối (Block) cho đến khi CFO phê duyệt ngoại lệ.

### 8. Quyền Veto & Phanh khẩn cấp của CFO
CFO có quyền phủ quyết toàn bộ bản kế hoạch nếu kịch bản dòng tiền cho thấy Cash Runway (Thời gian chịu đựng) thấp hơn 3 tháng, bất kể CEO có đồng ý với mục tiêu doanh thu hay không.

### 9. Output & Hệ thống biểu mẫu
- Bảng ngân sách tổng thể.
- Bảng hạn mức chi phí chi tiết từng chi nhánh.
- File cấu hình ngân sách trên ERP.

### 10. Nguyên tắc kỷ luật & Tuân thủ
Nghiêm cấm hành vi tách nhỏ khoản chi để tránh hạn mức ngân sách. Mọi sai phạm về định mức chi phí vượt quá 10% mà không được phê duyệt sẽ dẫn đến đình chỉ quyền điều hành tài chính của Quản lý Garage đó.

---

## SOP-A02: RÀ SOÁT NGÀY 25 – NGÂN SÁCH LINH HOẠT

### 1. Mục tiêu chiến lược
- Đảm bảo chi phí luôn tỷ lệ thuận với doanh thu thực tế.
- Phanh kịp thời các khoản chi của tháng sau nếu doanh thu tháng này không đạt kỳ vọng.

### 2. Phạm vi áp dụng
Toàn bộ hệ thống 1CAR Gara.

### 3. Trách nhiệm thực hiện (RACI)
- R (Responsible): Kế toán trưởng/CFO.
- A (Accountable): CFO.
- C (Consulted): Quản lý Gara, Trưởng phòng Marketing.
- I (Informed): CEO.

### 4. Chu kỳ thực hiện
Ngày 25 hàng tháng.

### 5. Input & Công cụ hỗ trợ (ERP)
- Dữ liệu thực tế: Doanh thu thực đạt đến ngày 25 và dự kiến đến ngày 30.
- Dashboard Real-time: So sánh Real-time giữa Budget và Actual.

### 6. Các bước thực hiện chi tiết
1. Bước 1 - Đối soát doanh thu: Kế toán đối soát doanh thu thực thu (Cash-in) và doanh thu ghi nhận.
2. Bước 2 - Phân tích khoảng cách: CFO so sánh doanh thu thực tế với mục tiêu tháng.
3. Bước 3 - Điều chỉnh ngân sách tháng T+1:
   - Nếu Doanh thu thực tế < 80% mục tiêu: CFO tự động cắt giảm 15% ngân sách OPEX của tháng kế tiếp (Marketing phi chuyển đổi, chi phí văn phòng).
   - Nếu Doanh thu thực tế > 110% mục tiêu: CFO xem xét thưởng nóng hoặc tăng ngân sách vật tư để đón đầu lượt xe tăng.
4. Bước 4 - Thông báo & Cập nhật: CFO cập nhật hạn mức mới lên ERP và thông báo cho các bộ phận liên quan trước ngày 28.

### 7. Chỉ số kiểm soát (KPI) & Trigger cảnh báo
- KPI: Tỷ lệ lợi nhuận EBITDA được bảo toàn ngay cả khi doanh thu giảm.
- Trigger đỏ: Doanh thu thực tế hụt > 30% mục tiêu -> Kích hoạt giao thức "Thắt lưng buộc bụng": Dừng 100% chi phí mua sắm CAPEX và tuyển dụng mới.

### 8. Quyền Phủ quyết & Phanh khẩn cấp của CFO
CFO có quyền dừng các chiến dịch Marketing của tháng sau nếu biên lợi nhuận gộp của tháng hiện tại thấp hơn 30% (mức sàn an toàn).

### 9. Output & Hệ thống biểu mẫu
- Báo cáo biến động ngân sách.
- Thông báo hạn mức điều chỉnh tháng T+1.

### 10. Nguyên tắc kỷ luật & Tuân thủ
Mọi hành vi cố tình đẩy doanh thu ảo (chưa thu tiền) vào ngày 25 để giữ ngân sách chi tiêu tháng sau sẽ bị coi là gian lận tài chính cấp độ 1.

---

## SOP-A03: THẨM ĐỊNH 3 BƯỚC & VETO

### 1. Mục tiêu chiến lược
- Kiểm soát các khoản chi phát sinh, chi ngoài kế hoạch.
- Đảm bảo mọi khoản đầu tư (CAPEX) đều phải sinh lời (ROI > 25%).
- Bảo vệ dòng tiền mặt tối thượng của hệ thống.

### 2. Phạm vi áp dụng
Các khoản chi ngoài ngân sách đã duyệt hoặc các khoản đầu tư tài sản có giá trị > 10 triệu VNĐ.

### 3. Trách nhiệm thực hiện (RACI)
- Người đề xuất: Quản lý Garage/CEO.
- Người thẩm định: CFO.
- Người phê duyệt cuối: CFO (về tài chính) và CEO (về vận hành).
- *Lưu ý: CFO nắm quyền phủ quyết cuối cùng nếu ảnh hưởng thanh khoản.*

### 4. Chu kỳ thực hiện
Bất cứ khi nào có phát sinh.

### 5. Input & Công cụ hỗ trợ (ERP)
- Hồ sơ trình ký: Mục đích, Báo giá (3 bản), Phân tích ROI.
- IFMS Cashflow Forecast: Bảng dự báo dòng tiền 13 tuần để kiểm tra khả năng thanh toán.

### 6. Các bước thực hiện chi tiết (Logic 3 Bước)
1. Bước 1 - Tính thiết yếu: CFO thẩm tra khoản chi có thực sự phục vụ trực tiếp cho doanh thu hoặc an toàn lao động không? (Nếu không -> Phủ quyết ngay).
2. Bước 2 - Tính hiệu quả: 
   - Đối với tài sản: Thời gian hoàn vốn (Payback) phải < 24 tháng. ROIC > 25%.
   - Đối với chi phí: Phải chứng minh được giảm thiểu chi phí khác hoặc tăng doanh thu tương ứng.
3. Bước 3 - Khả năng thanh khoản: CFO kiểm tra bảng dự báo dòng tiền 13 tuần. Nếu chi khoản này dẫn đến số dư tiền mặt thấp hơn 1.5 tháng chi phí cố định (OPEX) -> Phủ quyết hoặc lùi lịch chi.

### 7. Chỉ số kiểm soát (KPI) & Trigger cảnh báo
- KPI: Tỷ lệ chi ngoài ngân sách / Tổng chi phí < 2%.
- Trigger đỏ: Nếu tổng các khoản đề xuất ngoài ngân sách trong tháng vượt quá 5% tổng ngân sách tháng -> CFO đóng chức năng trình ký trên ERP.

### 8. Quyền Veto & Phanh khẩn cấp của CFO
> Thẩm quyền Tuyệt đối: CFO có quyền từ chối xuất tiền (kể cả khi CEO đã ký) nếu số dư tiền mặt thực tế tại thời điểm đó chạm ngưỡng 1.0 tháng chi phí vận hành (Ngưỡng sinh tồn).

### 9. Output & Hệ thống biểu mẫu
- Tờ trình thẩm định đầu tư.
- Biên bản Phủ quyết của CFO (nêu rõ lý do tài chính).

### 10. Nguyên tắc kỷ luật & Tuân thủ
Tuyệt đối không thực hiện chi trước báo cáo sau. Mọi hành vi chi trước báo sau sẽ không được hạch toán và người đề xuất phải tự chịu trách nhiệm tài chính cá nhân. CFO chịu trách nhiệm trước HĐTV nếu để lọt các khoản chi không qua thẩm định 3 bước.