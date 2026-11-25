// Sinh viên: Đoàn Mai Nhật Anh
// Lớp: CD-CNTT18A
// Mã sinh viên: CD-CNTT18A01
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const url = new URL(req.url, 'http://localhost:3001');
    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');
        if (!name || !name.trim()) {
            res.statusCode = 400;
            return res.end('Lỗi: Thiếu hoặc không hợp lệ tham số name.');
        }
        return res.end(`Xin chào ${name.trim()}`);
    }
    if (url.pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');
        if (a === null || b === null || !a.trim() || !b.trim() ||
            !Number.isFinite(Number(a)) || !Number.isFinite(Number(b)) ||
            !Number.isFinite(Number(a) + Number(b))) {
            res.statusCode = 400;
            return res.end('Lỗi: a và b phải là số hợp lệ và không được bỏ trống.');
        }
        return res.end(`Tổng = ${Number(a) + Number(b)}`);
    }
    if (url.pathname === '/') {
        return res.end('Bài 7 - Web Server Node.js\nThử /hello?name=Minh hoặc /sum?a=10&b=20');
    }
    res.statusCode = 404;
    res.end('404 - Không tìm thấy trang');
});
server.listen(3001, () => console.log('Web Server đang chạy tại http://localhost:3001'));
