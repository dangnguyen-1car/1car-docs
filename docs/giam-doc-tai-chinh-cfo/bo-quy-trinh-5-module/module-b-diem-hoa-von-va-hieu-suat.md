# Module B - Điểm hòa vốn & Hiệu suất

# BỘ QUY TRÌNH MODULE B - PHÂN TÍCH ĐIỂM HÒA VỐN & HIỆU SUẤT

Tài liệu này thiết lập các Hàng rào kỹ thuật và Hệ thống phanh tài chính tại 1CAR Gara. Mục tiêu tối thượng là đảm bảo mọi hoạt động kinh doanh không xâm phạm lợi ích của Cổ đông và duy trì sức khỏe dòng tiền thông qua việc kiểm soát biên lợi nhuận, điểm hòa vốn và hiệu suất nhân sự.

---

## SOP-B01: XÁC ĐỊNH GIÁ SÀN DỊCH VỤ & BẢO VỆ BIÊN LỢI NHUẬN

### 1. Mục tiêu
Thiết lập Lằn ranh đỏ về giá để ngăn chặn việc phá giá cực đoan hoặc các chương trình khuyến mãi gây lỗ biến phí, đảm bảo biên lợi nhuận gộp (Gross Margin) luôn đóng góp vào định phí và lợi nhuận ròng.

### 2. Định nghĩa & Công thức Pháp lệnh
Giá sàn dịch vụ là mức giá thấp nhất mà 1CAR Gara chấp nhận thực hiện dịch vụ, được tính toán dựa trên cấu trúc tài chính 60-20-15-5.

Giá sàn = (Giá vốn Phụ tùng + Vật tư tiêu hao + Lương thợ trực tiếp) / 0.8

*Trong đó:*
- COGS (Cost of Goods Sold): Phải chiếm tối đa 60% doanh thu.
- Hệ số 0.8: Đảm bảo Biên lợi nhuận gộp tối thiểu là 20% sau khi đã trừ toàn bộ giá vốn trực tiếp.

### 3. Quy trình thực hiện
1. Bước 1 - Thẩm định giá vốn: Quản lý vật tư và Kỹ thuật trưởng cung cấp định mức phụ tùng và giờ công thực tế cho từng mã dịch vụ.
2. Bước 2 - Tính toán giá sàn: CFO sử dụng công cụ *Profitability Simulator* để áp công thức và trích xuất bảng giá sàn cho từng chi nhánh.
3. Bước 3 - Thiết lập hệ thống ERP: CFO nhập giá sàn vào ERP. Hệ thống sẽ tự động chặn mọi lệnh báo giá/hóa đơn có đơn giá thấp hơn giá sàn.
4. Bước 4 - Phê duyệt ngoại lệ: Chỉ CEO mới có quyền đề xuất mức giá thấp hơn giá sàn (vì mục tiêu chiến lược), nhưng phải được CFO ký xác nhận "Chấp nhận lỗ kế hoạch".

### 4. Quyền Veto của CFO
> Quyền dừng dịch vụ: CFO có quyền đình chỉ ngay lập tức các dịch vụ/nhóm sản phẩm có Biên lợi nhuận gộp thực tế thấp hơn 20% trong 2 kỳ báo cáo liên tiếp mà không cần sự đồng ý của Giám đốc Vận hành.

---

## SOP-B02: THEO DÕI ĐIỂM HÒA VỐN (BEP) THỜI GIAN THỰC

### 1. Mục tiêu
Chuyển đổi dữ liệu tài chính từ trạng thái tĩnh (cuối tháng) sang trạng thái động (hàng ngày), giúp Ban điều hành nhìn thấy rủi ro lỗ ngay từ giữa tháng để kịp thời điều chỉnh hành động.

### 2. Cơ chế ERP tự động
Hệ thống ERP của 1CAR Gara được thiết lập để phân bổ Chi phí cố định (Fixed Costs - OPEX) theo ngày dựa trên ngân sách đã duyệt tại Module A.

BEP Ngày = (Tổng Định phí tháng + Mục tiêu Lợi nhuận tháng) / Số ngày làm việc
Tỷ lệ hoàn thành BEP (%) = (Doanh thu lũy kế thực tế / BEP lũy kế kế hoạch) * 100%

### 3. Các bước theo dõi & Kích hoạt phanh
1. Đối soát 17:30: Mỗi ngày, hệ thống tự động đối soát doanh thu thực tế (đã thu tiền hoặc có bảo lãnh thanh toán) với chỉ tiêu BEP ngày.
2. Dashboard Cảnh báo: Hiển thị biểu đồ nhiệt (Heatmap) tại văn phòng CFO và CEO.
   - 🟢 Xanh: Doanh thu lũy kế ≥ 100% BEP kế hoạch.
   - 🟡 Vàng: Doanh thu lũy kế từ 80% đến < 100% BEP kế hoạch.
   - 🔴 Đỏ: Doanh thu lũy kế < 80% BEP kế hoạch.

### 4. Trigger Đỏ - Ngày 15 (Mid-Month Brake)
Vào ngày 15 hàng tháng, nếu hệ thống ghi nhận doanh thu lũy kế < 80% BEP dự kiến:
- Hành động khẩn cấp: CFO kích hoạt lệnh "Đóng băng chi tiêu phi khẩn cấp". 
- Quyền phủ quyết: CFO có quyền tạm dừng các khoản chi Marketing không trực tiếp tạo ra chuyển đổi và các khoản chi mua sắm thiết bị mới cho đến khi chỉ số quay lại vùng Vàng.

---

## SOP-B03: QUẢN TRỊ HIỆU SUẤT NHÂN SỰ (LABOR EFFICIENCY)

### 1. Mục tiêu
Kiểm soát chi phí lớn nhất trong vận hành garage là Nhân sự. Đảm bảo quỹ lương luôn biến đổi nhịp nhàng theo doanh thu và không trở thành gánh nặng khi xưởng vắng khách.

### 2. Chỉ số Pháp lệnh: Tỷ lệ Labor-to-Sales (L/S)
Tỷ lệ chi phí lương nhân công trực tiếp (thợ máy, gầm, sơn) trên tổng doanh thu không được phép vượt quá 20%.

| Chỉ số L/S | Trạng thái     | Hành động của CFO                               |
| :--------- | :------------- | :---------------------------------------------- |
| ≤ 15%      | Tối ưu         | Duy trì, xem xét thưởng hiệu suất vào cuối quý. |
| 15% - 20%  | Ngưỡng an toàn | Giám sát chặt chẽ việc tăng ca (Overtime).      |
| > 20%      | Vùng nguy hiểm | Kích hoạt giao thức rà soát định biên.          |

### 3. Quy trình rà soát & Quyền hạn của CFO
1. Theo dõi tuần: CFO trích xuất báo cáo L/S vào sáng thứ Hai hàng tuần.
2. Kích hoạt rà soát: Nếu tỷ lệ L/S vượt ngưỡng 20% liên tục trong 2 tuần, CFO gửi "Lệnh rà soát định biên" cho Giám đốc chi nhánh và CEO.
3. Thực thi quyền Veto:
   - Đóng băng tuyển dụng: CFO có quyền từ chối ký duyệt mọi yêu cầu tuyển dụng mới cho chi nhánh đang vi phạm tỷ lệ L/S.
   - Cấu trúc lại lương: CFO có quyền yêu cầu Quản lý Garage chuyển đổi tối thiểu 30% lương cứng sang lương biến đổi (khoán sản phẩm) đối với các vị trí không đạt hiệu suất doanh thu/đầu người (< 50 triệu/tháng).

### 4. Nguyên tắc Kỷ luật
> CFO không quản lý con người, nhưng CFO quản lý Quỹ lương sinh tồn. Mọi sự gia tăng nhân sự không đi kèm với cam kết tăng trưởng doanh thu tương ứng (để giữ tỷ lệ L/S < 20%) đều bị CFO phủ quyết tại nguồn.

---

## MA TRẬN PHÊ DUYỆT & VETO (MODULE B)

| Tình huống | Đề xuất | Thẩm định | Quyết định cuối | Quyền Veto của CFO |
| :--- | :---: | :---: | :---: | :--- |
| Khuyến mãi giảm giá dịch vụ | Marketing | CFO | CEO | Có (Nếu biên lợi nhuận < 20%) |
| Tuyển thêm thợ cho chi nhánh | GĐ Gara | CFO | CEO | Có (Nếu L/S đang > 25%) |
| Chi tiền mua vật tư ngoài định phí | GĐ Gara | Kế toán | CFO | Có (Nếu đang ở vùng BEP Đỏ) |

> CFO 1CAR Gara không ngăn cản sự phát triển, CFO chỉ đảm bảo rằng sự phát triển đó không làm doanh nghiệp phá sản.