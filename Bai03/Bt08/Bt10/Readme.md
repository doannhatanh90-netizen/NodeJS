# Bài 10 – Liên kết hai Collection trong MongoDB

## 1. Mục tiêu
Liên kết sinh viên với khoa qua trường makhoa bằng aggregate() và $lookup. Database: qlsinhvien. Collection departments gồm 3 khoa; students_join gồm 6 sinh viên mẫu.

## 2. Chuẩn bị và chạy
Cài Node.js và MongoDB Community Server, khởi động dịch vụ MongoDB. Mở thư mục Bt10 trong VS Code, mở Terminal và chạy:

```powershell
npm.cmd install
node bai10.js
```

## 3. Các thao tác
- MongoClient và connect(): kết nối MongoDB tại 127.0.0.1:27017.
- db.collection(): chọn collection departments và students_join; MongoDB tự tạo collection khi ghi dữ liệu lần đầu.
- updateOne() với upsert và $setOnInsert: thêm dữ liệu mẫu chưa tồn tại, tránh tạo bản ghi trùng khi chạy lại, không xóa dữ liệu cũ.
- find(): đọc dữ liệu từng collection.
- aggregate(): thực hiện pipeline liên kết.
- $lookup: đối chiếu makhoa của students_join với makhoa của departments.
- $unwind: tách mảng khoa thành bản ghi.
- $project: chọn masv, hoten, makhoa, tenkhoa và bỏ _id.
- $sort: sắp xếp theo masv.
- console.table(): hiển thị kết quả.
- client.close(): đóng kết nối.

## 4. Kết quả dự kiến khi database chưa có dữ liệu khác
| masv | hoten | makhoa | tenkhoa |
|---|---|---|---|
| SV001 | Nguyễn Văn An | CNTT | Công nghệ thông tin |
| SV002 | Trần Minh Bình | KT | Kế toán |
| SV003 | Lê Thu Hà | DL | Du lịch |
| SV004 | Phạm Quốc Huy | CNTT | Công nghệ thông tin |
| SV005 | Võ Ngọc Mai | KT | Kế toán |
| SV006 | Đặng Minh Nam | DL | Du lịch |

## 5. Ảnh minh chứng thực tế
Sau khi chạy trên máy, lưu các ảnh sau vào thư mục Bt10 để README tự hiển thị ảnh.

### Mã nguồn
![Mã nguồn](01_Code.png)

### Kết nối và dữ liệu mẫu
![Dữ liệu mẫu](02_Terminal.png)

### Kết quả liên kết
![Kết quả liên kết](03_KetQua.png)

## 6. Nộp bài
Đưa thư mục Bt10 vào NodeJS/Bai03/Bt10 trên GitHub. Không tải node_modules lên GitHub. Kết quả phải hiển thị cả mã khoa và tên khoa.
