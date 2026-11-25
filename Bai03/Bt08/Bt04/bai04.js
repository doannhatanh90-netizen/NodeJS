// Sinh viên: Đoàn Mai Nhật Anh
// Lớp: CD-CNTT18A
// Mã sinh viên: CD-CNTT18A01
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main() {
    try {
        await client.connect();
        console.log('Kết nối MongoDB thành công!');
        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        const danhSach = [
            { masv: 'SV001', hoten: 'Nguyễn Văn An', tuoi: 19, diem: 8.5 },
            { masv: 'SV002', hoten: 'Trần Minh Bình', tuoi: 20, diem: 9 },
            { masv: 'SV003', hoten: 'Lê Thu Hà', tuoi: 19, diem: 8 }
        ];

        // Thêm sinh viên vào MongoDB
        const result = await students.insertMany(danhSach);
        console.log('Số sinh viên vừa thêm:', result.insertedCount);

        // Đọc và hiển thị danh sách sinh viên
        const data = await students.find({}, { projection: { _id: 0 } }).toArray();
        console.log('\nDANH SÁCH SINH VIÊN');
        console.table(data);
    } catch (err) {
        console.error('Lỗi:', err.message);
        process.exitCode = 1;
    } finally {
        await client.close();
        console.log('Đã đóng kết nối MongoDB.');
    }
}
main();
