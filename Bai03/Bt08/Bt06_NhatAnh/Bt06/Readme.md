# Bài 6. Xây dựng module xử lý điểm sinh viên

## 1. Thông tin sinh viên
- Họ tên: Đoàn Mai Nhật Anh
- Lớp: CD-CNTT18A
- Mã sinh viên: CD-CNTT18A01

## 2. Mục tiêu
Sử dụng module tự định nghĩa trong Node.js để tính điểm trung bình ba môn và xếp loại học tập.

## 3. Các bước thực hiện
1. Tạo thư mục `NodeJS/Bai03/Bt06`.
2. Tạo `xulyDiem.js` với hàm `tinhDiemTrungBinh()` và `xepLoai()`.
3. Xuất hai hàm bằng `module.exports`.
4. Tạo `bai06.js`, nhập các hàm bằng `require('./xulyDiem')`.
5. Tạo dữ liệu ba sinh viên, tính điểm trung bình và hiển thị kết quả bằng `console.table()`.

## 4. Quy tắc xếp loại
| Điểm trung bình | Xếp loại |
|---|---|
| Từ 8 | Giỏi |
| Từ 6.5 đến dưới 8 | Khá |
| Từ 5 đến dưới 6.5 | Trung bình |
| Dưới 5 | Yếu |

## 5. Lệnh chạy
Mở Terminal trong thư mục Bt06 và chạy:

```bash
node bai06.js
```

Không cần cài thư viện ngoài hoặc MongoDB.

## 6. Hình ảnh thực hiện
Chụp ảnh thực tế và lưu cùng thư mục với Readme.md theo tên dưới đây trước khi nộp.

### 6.1. Mã nguồn module xử lý điểm
![Module xử lý điểm](01_xulyDiem.png)

### 6.2. Mã nguồn chương trình chính
![Chương trình chính](02_bai06.png)

### 6.3. Chạy chương trình và kết quả cuối cùng
![Kết quả Terminal](03_KetQua.png)

## 7. Kết quả dự kiến
| Họ tên | Điểm trung bình | Xếp loại |
|---|---:|---|
| Đoàn Mai Nhật Anh | 8.50 | Giỏi |
| Nguyễn Minh Tuấn | 7.00 | Khá |
| Trần Thu Hà | 5.50 | Trung bình |

## 8. Nộp bài
Đưa hai file JavaScript, Readme.md và ba ảnh thực tế lên thư mục `NodeJS/Bai03/Bt06` trên GitHub.
