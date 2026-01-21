# Module C - Bán hàng & Tồn kho

# BỘ QUY TRÌNH MODULE C - DỰ BÁO BÁN HÀNG & TỒN KHO

Tài liệu này được thiết lập và chuẩn hóa bởi nhằm cụ thể hóa vai trò Hệ thống phanh của CFO trong việc kiểm soát sự lạc quan quá mức của bộ phận kinh doanh và tối ưu hóa hiệu quả sử dụng vốn lưu động tại 1CAR Gara.

---

## SOP-C01: KHỚP LỆNH DỰ BÁO DOANH THU & NĂNG LỰC XƯỞNG

### 1. Mục tiêu
Đảm bảo con số dự báo doanh thu hàng tháng dựa trên cơ sở dữ liệu thực tế (dữ liệu lịch sử, phễu Marketing) và năng lực sản xuất thực tế (số lượng thợ, khoang sửa chữa), ngăn chặn tình trạng lạc quan dẫn đến lãng phí ngân sách Marketing và nhân sự.

### 2. Phạm vi áp dụng
Áp dụng cho CFO, Giám đốc Vận hành, Trưởng bộ phận Marketing và Quản lý các Garage trong hệ thống 1CAR.

### 3. Định nghĩa & Thuật ngữ
- Khớp lệnh: Quy trình đối soát và phê duyệt con số dự báo cuối cùng giữa các bộ phận.
- Lạc quan quá mức: Việc đưa ra dự báo doanh thu cao vượt mức năng lực đáp ứng hoặc không có cơ sở dữ liệu hỗ trợ.
- Năng lực xưởng: Doanh thu tối đa một garage có thể tạo ra dựa trên số giờ công thợ và số khoang khả dụng.

### 4. Đầu vào
- Báo cáo phễu khách hàng (Leads) từ Marketing.
- Dữ liệu doanh thu 03 tháng gần nhất cùng kỳ từ ERP.
- Bảng định biên nhân sự hiện hữu (số lượng thợ thực tế đang làm việc).
- Công suất khai thác khoang (Bay Occupancy) hiện tại.

### 5. Quy trình thực hiện
1. Ngày 20 hàng tháng: Marketing và Quản lý Garage gửi bản dự thảo doanh thu tháng T+1 cho CFO.
2. CFO Thẩm định 1 - Cơ sở dữ liệu: Đối chiếu dự báo với dữ liệu lịch sử. Nếu dự báo tăng trưởng > 20% mà không có chiến dịch đặc biệt, CFO yêu cầu giải trình.
3. CFO Thẩm định 2 - Năng lực: Tính toán Doanh thu dự báo / Số lượng thợ. Nếu chỉ số > 60 triệu VNĐ/thợ/tháng, CFO đánh giá là quá tải gây rủi ro chất lượng.
4. Họp Khớp lệnh Ngày 23: CFO chủ trì cuộc họp. Các bên thống nhất con số Doanh thu Pháp lệnh.
5. Chốt ngân sách: CFO phê duyệt ngân sách Marketing và vật tư tương ứng với con số doanh thu đã khớp.

### 6. Chỉ số kiểm soát (KPI)
- Độ chính xác dự báo (Forecast Accuracy): Sai lệch thực tế vs. Dự báo < 15%.
- Hiệu suất nhân sự mục tiêu: 50.000.000 VNĐ/người/tháng.

### 7. Trigger cảnh báo
- Dự báo doanh thu vượt > 120% năng lực xưởng hiện tại.
- Ngân sách Marketing đề xuất > 5% doanh thu dự kiến mà không chứng minh được tỷ lệ chuyển đổi lịch sử.

### 8. Quyền quyết định & phủ quyết của CFO
- Quyền phủ quyết: CFO có quyền bác bỏ dự báo doanh thu của bộ phận Kinh doanh nếu không chứng minh được nguồn khách hàng (Leads) hoặc thiếu hụt thợ.
- Quyền điều chỉnh: CFO có quyền cắt giảm ngân sách Marketing tương ứng nếu hạ dự báo doanh thu để đảm bảo tỷ lệ OPEX.

### 9. Quản trị rủi ro
- Rủi ro Đói việc: Dự báo quá thấp dẫn đến thợ ngồi chơi.
- Rủi ro Vỡ trận: Dự báo quá cao dẫn đến nhận xe vượt năng lực, gây nợ đọng xe và khách hàng khiếu nại.

### 10. Biểu mẫu & Báo cáo
- Biểu mẫu: 1CAR-C01-FM01: Bảng khớp lệnh dự báo tích hợp.
- Báo cáo: Báo cáo phân tích sai lệch dự báo (hàng tháng).

### 11. Đầu ra
- Bản kế hoạch doanh thu tháng được CFO phê duyệt làm căn cứ chi ngân sách.

---

## SOP-C02: THANH LỌC TỒN KHO & GIẢI PHÓNG VỐN LƯU ĐỘNG

### 1. Mục tiêu
Định nghĩa và xử lý triệt để hàng tồn kho chậm luân chuyển để thu hồi tiền mặt, giảm chi phí lưu kho và ngăn chặn tình trạng chôn vốn vào phụ tùng/vật tư không hiệu quả.

### 2. Phạm vi áp dụng
CFO, Bộ phận Kho (IWMS), Bộ phận Thu mua, Quản lý Garage.

### 3. Định nghĩa & Thuật ngữ
- Hàng chậm luân chuyển: Các mã hàng không có bất kỳ giao dịch xuất kho nào trong vòng 90 ngày.
- Hàng chết: Không luân chuyển trên 180 ngày.
- Vòng quay tồn kho: Giá vốn hàng bán / Tồn kho bình quân.

### 4. Đầu vào
- Báo cáo tuổi hàng tồn kho từ hệ thống IWMS.
- Danh mục phụ tùng thay thế nhanh.

### 5. Quy trình thực hiện
1. Ngày 05 hàng tháng: Thủ kho xuất báo cáo danh sách hàng > 90 ngày gửi CFO.
2. Phân loại & Gán nhãn: CFO phân loại hàng chậm luân chuyển thành các nhóm: Phụ tùng hiếm, Phụ tùng thông dụng nhưng dư thừa, Vật tư sắp hết hạn.
3. Kích hoạt Lệnh xả hàng: 
    - Nhóm 90-120 ngày: Giảm giá 10-15% hoặc đóng gói vào các combo bảo dưỡng.
    - Nhóm > 120 ngày: Giảm giá sâu (đến mức hòa vốn) hoặc chào bán lại cho các garage vệ tinh/đại lý phụ tùng.
4. Đình chỉ mua mới: CFO thực hiện lệnh Đóng băng trên hệ thống đối với các mã hàng cùng loại hoặc tương đương cho đến khi lượng tồn cũ giảm xuống dưới ngưỡng an toàn.
5. Giám sát tiêu hủy/thanh lý: Đối với hàng hỏng hóc/hết hạn hoàn toàn.

### 6. Chỉ số kiểm soát (KPI)
- Tỷ lệ hàng chậm luân chuyển: < 10% tổng giá trị kho.
- Vòng quay tồn kho mục tiêu: > 8 vòng/năm.

### 7. Trigger cảnh báo
- Giá trị tồn kho vượt > 15% doanh thu trung bình tháng.
- Một mã hàng có số lượng tồn > 6 tháng nhu cầu sử dụng thực tế.

### 8. Quyền quyết định & Veto của CFO
- Quyền đình chỉ: CFO có quyền dừng mọi lệnh mua hàng mới (phi khẩn cấp) của một Garage nếu garage đó chưa xử lý được 50% danh mục hàng chậm luân chuyển đã cảnh báo.
- Quyền duyệt giá xả kho: CFO là người duy nhất duyệt mức giảm giá vượt quá khung quy định để thu hồi vốn nhanh.

### 9. Quản trị rủi ro
- Rủi ro mất vốn: Xả hàng dưới giá vốn quá nhiều.
- Rủi ro thiếu hàng: Ngừng nhập hàng dẫn đến xe chờ vật tư (khắc phục bằng danh mục "Hàng khẩn cấp").

### 10. Biểu mẫu & Báo cáo
- Biểu mẫu: 1CAR-C02-FM02: Danh mục thanh lý tồn kho.
- Báo cáo: Báo cáo vòng quay vốn lưu động.

### 11. Đầu ra
- Tiền mặt được thu hồi từ hàng tồn kho cũ.
- Kho bãi được tối ưu không gian cho hàng luân chuyển nhanh.

---

## SOP-C03: ĐÓNG BĂNG COGS & KIỂM SOÁT ĐỊNH MỨC VẬT TƯ

### 1. Mục tiêu
Thiết lập cơ chế kiểm soát giá vốn hàng bán (COGS) không vượt quá 60% doanh thu, đảm bảo duy trì biên lợi nhuận gộp và bảo vệ quỹ dự phòng 5% của hệ thống.

### 2. Phạm vi áp dụng
CFO, Kế toán trưởng, Quản lý Garage, Tổ trưởng các tổ kỹ thuật (Sơn, Máy, Detailing).

### 3. Định nghĩa & Thuật ngữ
- COGS (Cost of Goods Sold): Bao gồm Giá vốn vật tư/phụ tùng (< 40%) và Lương thợ trực tiếp (< 20%).
- Đóng băng COGS: Lệnh tạm dừng các hoạt động nhập hàng hoặc chi phí không thiết yếu khi tỷ lệ vượt ngưỡng.
- Hàng khẩn cấp (Emergency Orders): Vật tư bắt buộc phải có để hoàn thành xe đang nằm tại xưởng.

### 4. Đầu vào
- Báo cáo kết quả kinh doanh (P&L) nhanh hàng tuần.
- Dữ liệu quyết toán vật tư trên từng lệnh sửa chữa.
- Bảng định mức tiêu hao vật tư vật tư/sơn/hóa chất đã ban hành.

### 5. Quy trình thực hiện
1. Đối soát hàng tuần (Thứ Sáu): CFO rà soát tỷ lệ COGS thực tế trên ERP.
2. Kích hoạt Lệnh Đóng băng: Nếu COGS > 60%, CFO phát lệnh dừng toàn bộ các đề xuất nhập kho phi khẩn cấp (hàng dự trữ, công cụ dụng cụ chưa cần ngay).
3. Rà soát định mức: CFO phối hợp với Kỹ thuật trưởng kiểm tra đột xuất 05 lệnh sửa chữa có biên lợi nhuận thấp nhất để tìm nguyên nhân (Hao hụt vật tư hay sai sót báo giá).
4. Điều chỉnh nhân sự: Nếu COGS cao do lương thợ (doanh thu thấp), CFO yêu cầu điều chuyển thợ giữa các chi nhánh hoặc tạm dừng tăng ca.
5. Gỡ bỏ lệnh đóng băng: Chỉ khi tỷ lệ COGS dự kiến của tuần kế tiếp quay về mức < 58%.

### 6. Chỉ số kiểm soát (KPI)
- Tỷ lệ COGS tiêu chuẩn: 60% doanh thu.
- Lãng phí vật tư: < 5% so với định mức kỹ thuật.

### 7. Trigger cảnh báo
- Cảnh báo Vàng: COGS chạm mức 62% (Lấn vào quỹ dự phòng).
- Cảnh báo Đỏ: COGS > 65% (Kích hoạt dừng hoạt động mua sắm tài sản và rà soát toàn diện quy trình kỹ thuật).

### 8. Quyền quyết định & phue quyết của CFO
- Quyền Phủ quyết: CFO có quyền từ chối mọi yêu cầu mua hàng từ Quản lý Garage nếu COGS đang ở vùng Đỏ, trừ khi đó là lệnh mua hàng khẩn cấp để trả xe cho khách.
- Quyền điều tra: CFO có quyền đình chỉ công tác quản lý kho nếu phát hiện sai lệch định mức vật tư > 10% mà không có lý do kỹ thuật.

### 9. Quản trị rủi ro
- Rủi ro chất lượng: Siết vật tư quá mức dẫn đến thợ làm ẩu (CFO kiểm soát thông qua tỷ lệ xe quay lại bảo hành).
- Rủi ro gián đoạn: Thiếu vật tư sơn dẫn đến dừng cả dây chuyền (Khắc phục bằng quy trình "Phê duyệt khẩn cấp trong 2 giờ").

### 10. Biểu mẫu & Báo cáo
- Biểu mẫu: 1CAR-C03-FM03: Lệnh dừng nhập hàng khẩn cấp.
- Báo cáo: Báo cáo phân tích biên lợi nhuận gộp theo nhóm dịch vụ.

### 11. Đầu ra
- Tỷ lệ COGS được duy trì ở mức an toàn 60%.
- Ý thức tiết kiệm vật tư được quán triệt đến từng kỹ thuật viên.