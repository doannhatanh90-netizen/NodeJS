# Bài 7. Xử lý tham số URL trong Node.js

## 1. Thông tin sinh viên
- Họ tên: Đoàn Mai Nhật Anh
- Lớp: CD-CNTT18A
- Mã sinh viên: CD-CNTT18A01

## 2. Mục tiêu
Sử dụng module http và đối tượng URL để tạo Web Server tại cổng 3001, đọc tham số và kiểm tra dữ liệu đầu vào.

## 3. Các bước thực hiện
1. Tạo thư mục NodeJS/Bai03/Bt07 và tập tin bai07.js.
2. Sử dụng require('http') và require('url').
3. Tạo server bằng http.createServer().
4. Dùng URL và searchParams.get() để lấy tham số name, a, b.
5. Kiểm tra tham số thiếu, rỗng hoặc số không hợp lệ; trả về HTTP 400 nếu lỗi.
6. Dùng Number() chuyển đổi hai số và tính tổng.
7. Khởi động server bằng server.listen(3001).

## 4. Lệnh thực hiện
Mở Terminal tại thư mục Bt07:

```powershell
node bai07.js
```
Không cần cài thư viện ngoài. Giữ Terminal hoạt động khi kiểm tra trình duyệt. Nhấn Ctrl+C để dừng server.

## 5. Kết quả dự kiến
| Đường dẫn | Nội dung | HTTP |
| --- | --- | --- |
| /hello?name=Minh | Xin chào Minh | 200 |
| /sum?a=10&b=20 | Tổng = 30 | 200 |
| /hello | Thông báo lỗi thiếu name | 400 |
| /sum?a=10 | Thông báo lỗi thiếu b | 400 |
| /sum?a=abc&b=20 | Thông báo lỗi giá trị không hợp lệ | 400 |

## 6. Hình ảnh thực hiện
Chụp ảnh thực tế và lưu cùng thư mục với Readme.md theo các tên sau.

### Mã nguồn
![Mã nguồn](01_Code.png)

### Chạy server
![Terminal](02_Terminal.png)

### Kết quả hello
![Hello](03_Hello.png)

### Kết quả sum
![Sum](04_Sum.png)

### Lỗi thiếu tham số
![Thiếu tham số](05_ThieuThamSo.png)

### Lỗi giá trị không hợp lệ
![Giá trị không hợp lệ](06_GiaTriLoi.png)

## 7. Nộp bài
Mở repository NodeJS trên GitHub, vào Bai03, tải thư mục Bt07 (không tải thư mục bọc ngoài) chứa bai07.js, Readme.md và các ảnh. Commit changes. Kiểm tra đường dẫn NodeJS/Bai03/Bt07.
