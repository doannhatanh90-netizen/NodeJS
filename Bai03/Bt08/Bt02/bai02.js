const http = require('http');

// Thay thông tin bên dưới bằng thông tin sinh viên nộp bài.
const hoTen = 'HO_VA_TEN';
const maSV = 'MA_SINH_VIEN';
const lop = 'CD-CNTT18A';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end(`<h1>CHÀO MỪNG ĐẾN WEBSITE SINH VIÊN</h1>
            <p>Xin chào! Đây là bài thực hành Node.js.</p>
            <p>Mã sinh viên: ${maSV}</p>
            <a href="/about">Giới thiệu bản thân</a>`);
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(`<h1>GIỚI THIỆU BẢN THÂN</h1>
            <p>Họ và tên: ${hoTen}</p>
            <p>Mã sinh viên: ${maSV}</p>
            <p>Lớp: ${lop}</p>
            <p>Ngành: Công nghệ thông tin</p>
            <a href="/">Quay về trang chủ</a>`);
    } else {
        res.statusCode = 404;
        res.end(`<h1>404 - Không tìm thấy trang</h1>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
            <a href="/">Quay về trang chủ</a>`);
    }
});

server.listen(3000, () => {
    console.log('Web Server đang chạy tại http://localhost:3000');
});
