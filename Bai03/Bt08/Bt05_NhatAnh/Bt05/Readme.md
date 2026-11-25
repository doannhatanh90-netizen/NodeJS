# Bài 5. Truy vấn, sắp xếp và cập nhật MongoDB

## 1. Thông tin sinh viên
- Họ tên: Đoàn Mai Nhật Anh
- Mã sinh viên: CD-CNTT18A01
- Lớp: CD-CNTT18A

## 2. Mục tiêu
Sử dụng database `qlsinhvien`, collection `students` đã tạo ở Bài 4. Lọc sinh viên có điểm từ 7 trở lên, sắp xếp giảm dần và cập nhật điểm theo mã sinh viên.

## 3. Chuẩn bị và chạy
- Khởi động MongoDB tại `mongodb://127.0.0.1:27017`.
- Chạy Bài 4 nếu chưa có dữ liệu.
- Mở thư mục Bt05 trong VS Code và mở Terminal tại thư mục này.

```powershell
npm.cmd install
node bai05.js
```

## 4. Các lệnh thực hiện
- `find({ diem: { $gte: 7 } })`: lọc điểm từ 7.
- `sort({ diem: -1 })`: sắp xếp giảm dần.
- `updateOne({ masv: 'SV001' }, { $set: { diem: 9.5 } })`: cập nhật một sinh viên.
- `find({ masv: 'SV001' })`: kiểm tra thông tin sau cập nhật.
- `client.close()`: đóng kết nối.

## 5. Hình ảnh thực hiện
Chụp ảnh thực tế, lưu cùng thư mục với Readme.md theo đúng tên bên dưới.

### 5.1. Mã nguồn
![Mã nguồn](01_Code.png)

### 5.2. Cài thư viện
![Cài thư viện](02_CaiThuVien.png)

### 5.3. Kết quả chạy
![Kết quả](03_KetQua.png)

### 5.4. Kiểm tra trong MongoDB Compass
![MongoDB Compass](04_MongoDB.png)

## 6. Kết quả dự kiến
Với dữ liệu ban đầu của Bài 4, danh sách lọc gồm SV002 (9), SV001 (8.5), SV003 (8). Điểm SV001 được cập nhật thành 9.5. Nếu chạy lại, điểm có thể đã là 9.5; nếu Bài 4 từng chạy nhiều lần, có thể có mã trùng và updateOne chỉ sửa một bản ghi. Kết quả thực tế phụ thuộc dữ liệu hiện có.

## 7. Nộp bài
Đưa thư mục Bt05 vào repository NodeJS tại đường dẫn `Bai03/Bt05`. Không tải node_modules lên GitHub. Bổ sung ảnh thật trước khi nộp.
