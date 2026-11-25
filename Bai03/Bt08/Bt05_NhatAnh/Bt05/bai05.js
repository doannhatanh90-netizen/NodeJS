// Sinh viên: Đoàn Mai Nhật Anh
// Lớp: CD-CNTT18A
// Mã sinh viên: CD-CNTT18A01
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017', { serverSelectionTimeoutMS: 5000 });

async function main() {
    try {
        await client.connect();
        console.log('Kết nối MongoDB thành công!');
        const students = client.db('qlsinhvien').collection('students');
        const data = await students.find({ diem: { $gte: 7 } }, { projection: { _id: 0 } }).sort({ diem: -1 }).toArray();
        console.log('\nDANH SÁCH SINH VIÊN CÓ ĐIỂM >= 7 (GIẢM DẦN)');
        console.table(data);

        const masv = 'SV001';
        const before = await students.findOne({ masv });
        if (!before) {
            console.log('Không tìm thấy SV001. Hãy chạy Bài 4 trước.');
            return;
        }
        console.log('Điểm trước cập nhật:', before.diem);
        const result = await students.updateOne({ masv }, { $set: { diem: 9.5 } });
        console.log('Số sinh viên tìm thấy:', result.matchedCount);
        console.log('Số sinh viên thay đổi:', result.modifiedCount);
        console.log(result.modifiedCount ? 'Cập nhật thành công!' : 'Điểm đã là 9.5, không cần thay đổi.');
        const after = await students.find({ masv }, { projection: { _id: 0 } }).toArray();
        console.log('\nTHÔNG TIN SAU CẬP NHẬT');
        console.table(after);
    } catch (err) {
        console.error('Lỗi:', err.message);
        process.exitCode = 1;
    } finally {
        await client.close();
        console.log('Đã đóng kết nối MongoDB.');
    }
}
main();
