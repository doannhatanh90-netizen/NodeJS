# Bài 2. Xây dựng Web Server bằng Node.js

## 1. Thông tin sinh viên
- Họ và tên: HO_VA_TEN
- Mã sinh viên: MA_SINH_VIEN
- Lớp: CD-CNTT18A

## 2. Mục tiêu
Sử dụng module http có sẵn trong Node.js để xây dựng Web Server tại cổng 3000, xử lý các đường dẫn và mã trạng thái HTTP.

## 3. Các bước thực hiện
1. Tạo thư mục `NodeJS/Bai03/Bt02` và tập tin `bai02.js`.
2. Khai báo module bằng `require('http')`.
3. Sử dụng `http.createServer()` để tạo máy chủ.
4. Kiểm tra `req.url` để xử lý đường dẫn `/` và `/about`.
5. Sử dụng `res.statusCode` và `res.end()` để trả về nội dung và mã trạng thái.
6. Sử dụng `server.listen(3000)` để chạy máy chủ.

## 4. Lệnh thực hiện
Kiểm tra Node.js:
```bash
node -v
```
Mở Terminal trong thư mục Bt02 và chạy:
```bash
node bai02.js
```
Không cần cài thêm thư viện. Nhấn Ctrl+C để dừng máy chủ.

## 5. Kiểm tra kết quả
| Đường dẫn | HTTP | Nội dung dự kiến |
|---|---|---|
| http://localhost:3000/ | 200 | Lời chào và mã sinh viên |
| http://localhost:3000/about | 200 | Giới thiệu bản thân |
| http://localhost:3000/test | 404 | Không tìm thấy trang |

Có thể kiểm tra mã HTTP bằng lệnh `curl.exe -i http://localhost:3000/test` trong Terminal thứ hai trên Windows.

## 6. Hình ảnh thực hiện
Chụp ảnh thực tế trên máy và lưu cùng thư mục với Readme.md theo đúng tên bên dưới. Các liên kết ảnh sẽ hiển thị khi đã bổ sung ảnh.

### 6.1. Mã nguồn
![Mã nguồn](01_Code.png)

### 6.2. Terminal chạy máy chủ
![Terminal](02_Terminal.png)

### 6.3. Trang chủ
![Trang chủ](03_TrangChu.png)

### 6.4. Trang giới thiệu
![Giới thiệu](04_GioiThieu.png)

### 6.5. Trang lỗi 404
![Lỗi 404](05_Loi404.png)

## 7. Kết luận
Chương trình được thiết kế để đáp ứng ba yêu cầu xử lý đường dẫn, sử dụng module http và cổng 3000. Sinh viên kiểm tra lại kết quả thực tế trước khi nộp.

## 8. Nộp bài
Đưa bai02.js, Readme.md và năm ảnh chụp vào thư mục Bai03/Bt02 của repository NodeJS trên GitHub.
