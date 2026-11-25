# Bài 09 – Xóa dữ liệu sinh viên trong MongoDB

## 1. Mục tiêu
Kết nối database `qlsinhvien`, collection `students_test`, thêm dữ liệu mẫu, xóa bằng `deleteOne()` và `deleteMany()`, hiển thị kết quả bằng `find()`.

## 2. Chuẩn bị và chạy
Cài Node.js và MongoDB Community Server, khởi động dịch vụ MongoDB. Mở thư mục Bt09 bằng VS Code, mở Terminal và thực hiện:

```powershell
npm.cmd install
node bai09.js
```

Địa chỉ mặc định: `mongodb://127.0.0.1:27017`. Có thể cấu hình biến môi trường `MONGODB_URI` nếu cần.

## 3. Các thao tác
- `client.connect()`: kết nối MongoDB.
- `client.db('qlsinhvien').collection('students_test')`: chọn database và collection.
- `insertMany()`: thêm 6 sinh viên có masv, hoten, tuoi, diem.
- `deleteOne()`: xóa sinh viên mẫu SV002.
- `deleteMany()`: xóa sinh viên mẫu có `diem: { $lt: 5 }`.
- `deletedCount`: lấy số bản ghi bị xóa.
- `find().toArray()`: lấy danh sách sinh viên còn lại.
- `client.close()`: đóng kết nối.

Trường `bai09Demo` đánh dấu dữ liệu mẫu để tránh xóa dữ liệu khác khi chạy lại. Nên dùng collection thử nghiệm riêng, không dùng dữ liệu thật.

## 4. Dữ liệu mẫu
| Mã SV | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV001 | Nguyễn Văn An | 19 | 8 |
| SV002 | Trần Minh Bình | 20 | 7 |
| SV003 | Lê Thu Hà | 19 | 4 |
| SV004 | Phạm Quốc Huy | 21 | 3.5 |
| SV005 | Võ Ngọc Mai | 20 | 9 |
| SV006 | Đặng Minh Nam | 19 | 5 |

## 5. Kết quả dự kiến (collection ban đầu trống)
Thêm 6 sinh viên, xóa theo mã 1 sinh viên, xóa theo điểm 2 sinh viên, tổng cộng xóa 3 sinh viên.

| Mã SV | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV001 | Nguyễn Văn An | 19 | 8 |
| SV005 | Võ Ngọc Mai | 20 | 9 |
| SV006 | Đặng Minh Nam | 19 | 5 |

Sinh viên có điểm bằng 5 không bị xóa.

## 6. Ảnh minh chứng thực tế cần bổ sung trước khi nộp
Lưu ảnh vào thư mục Bt09 cùng README:
- `01_Code.png`: mã nguồn trong VS Code.
- `02_Terminal.png`: lệnh chạy và số bản ghi đã thêm, đã xóa.
- `03_KetQua.png`: bảng sinh viên còn lại trong Terminal hoặc MongoDB Compass.

Sau khi chụp, có thể bỏ dấu chú thích HTML bên dưới để hiển thị ảnh:

<!--
![Mã nguồn](01_Code.png)
![Chạy chương trình](02_Terminal.png)
![Kết quả](03_KetQua.png)
-->

## 7. Nộp bài
Đưa thư mục Bt09 lên GitHub theo đường dẫn `NodeJS/Bai03/Bt09`. Không tải thư mục `node_modules` hoặc thông tin kết nối bí mật lên GitHub.

## 8. Kết luận
Bài thực hành minh họa thao tác thêm, xóa một, xóa nhiều và truy vấn dữ liệu trong MongoDB.
