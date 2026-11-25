# Bài 4 – Kết nối MongoDB và thêm sinh viên

## 1. Thông tin sinh viên
- Họ và tên: Đoàn Mai Nhật Anh
- Mã sinh viên: CD-CNTT18A01
- Lớp: CD-CNTT18A

## 2. Mục tiêu
Kết nối MongoDB bằng Node.js, sử dụng database `qlsinhvien` và collection `students`. Thêm ít nhất 3 sinh viên gồm `masv`, `hoten`, `tuoi`, `diem` bằng `insertMany()`, đọc dữ liệu bằng `find()` và đóng kết nối sau khi hoàn thành.

## 3. Các bước thực hiện
1. Khởi động MongoDB Server trên máy, mặc định tại cổng 27017.
2. Mở thư mục Bt04 trong Visual Studio Code.
3. Mở Terminal và cài thư viện MongoDB:
   ```powershell
   npm.cmd install
   ```
4. Sử dụng `MongoClient` để kết nối tới `mongodb://127.0.0.1:27017`.
5. Chọn database `qlsinhvien` và collection `students`.
6. Sử dụng `insertMany()` để thêm 3 sinh viên.
7. Sử dụng `find().toArray()` để lấy danh sách và `console.table()` để hiển thị.
8. Sử dụng `client.close()` trong `finally` để đóng kết nối.

## 4. Lệnh chạy
```powershell
node bai04.js
```

## 5. Kết quả dự kiến
- Kết nối MongoDB thành công.
- Số sinh viên vừa thêm: 3.
- Terminal hiển thị danh sách sinh viên.
- Dữ liệu được lưu trong `qlsinhvien.students`.
- Kết nối được đóng sau khi xử lý.

Dữ liệu mẫu (nếu collection ban đầu rỗng):

| masv | hoten | tuoi | diem |
|---|---|---:|---:|
| SV001 | Nguyễn Văn An | 19 | 8.5 |
| SV002 | Trần Minh Bình | 20 | 9 |
| SV003 | Lê Thu Hà | 19 | 8 |

Lưu ý: mỗi lần chạy sẽ thêm 3 bản ghi mới. Nếu collection đã có dữ liệu, bảng sẽ hiển thị cả dữ liệu cũ.

## 6. Hình ảnh thực hiện
Chụp ảnh thực tế và lưu cùng thư mục Readme.md với các tên bên dưới trước khi nộp.

### 6.1. Mã nguồn
![Mã nguồn](01_Code.png)

### 6.2. Cài thư viện MongoDB
![Cài thư viện](02_CaiThuVien.png)

### 6.3. Kết quả chạy Terminal
![Kết quả](03_KetQua.png)

### 6.4. Dữ liệu trong MongoDB Compass
![MongoDB Compass](04_MongoDB.png)

## 7. Nộp bài
Đưa thư mục Bt04 vào `NodeJS/Bai03/Bt04` trên GitHub, gồm mã nguồn, Readme.md, package.json và ảnh thực tế. Không tải thư mục node_modules.
