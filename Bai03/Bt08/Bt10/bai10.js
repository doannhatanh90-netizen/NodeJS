const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main() {
    try {
        await client.connect();
        const db = client.db('qlsinhvien');
        const departments = db.collection('departments');
        const students = db.collection('students_join');
        console.log('1. Kết nối database qlsinhvien thành công!');
        const dsKhoa = [
            { makhoa: 'CNTT', tenkhoa: 'Công nghệ thông tin' },
            { makhoa: 'KT', tenkhoa: 'Kế toán' },
            { makhoa: 'DL', tenkhoa: 'Du lịch' }
        ];
        const dsSV = [
            { masv: 'SV001', hoten: 'Nguyễn Văn An', makhoa: 'CNTT' },
            { masv: 'SV002', hoten: 'Trần Minh Bình', makhoa: 'KT' },
            { masv: 'SV003', hoten: 'Lê Thu Hà', makhoa: 'DL' },
            { masv: 'SV004', hoten: 'Phạm Quốc Huy', makhoa: 'CNTT' },
            { masv: 'SV005', hoten: 'Võ Ngọc Mai', makhoa: 'KT' },
            { masv: 'SV006', hoten: 'Đặng Minh Nam', makhoa: 'DL' }
        ];
        // Chỉ thêm dữ liệu mẫu chưa tồn tại để tránh trùng khi chạy lại.
        for (const khoa of dsKhoa) {
            await departments.updateOne({ makhoa: khoa.makhoa }, { $setOnInsert: khoa }, { upsert: true });
        }
        console.log('2. Dữ liệu khoa:');
        console.table(await departments.find({}, { projection: { _id: 0 } }).toArray());
        for (const sv of dsSV) {
            await students.updateOne({ masv: sv.masv }, { $setOnInsert: sv }, { upsert: true });
        }
        console.log('3. Dữ liệu sinh viên:');
        console.table(await students.find({}, { projection: { _id: 0 } }).toArray());
        const ketQua = await students.aggregate([
            { $lookup: { from: 'departments', localField: 'makhoa', foreignField: 'makhoa', as: 'khoa' } },
            { $unwind: '$khoa' },
            { $project: { _id: 0, masv: 1, hoten: 1, makhoa: 1, tenkhoa: '$khoa.tenkhoa' } },
            { $sort: { masv: 1 } }
        ]).toArray();
        console.log('4. Danh sách sinh viên kèm tên khoa:');
        console.table(ketQua);
        console.log('Hoàn thành bài 10!');
    } catch (err) {
        console.error('Lỗi:', err.message);
        process.exitCode = 1;
    } finally {
        await client.close();
    }
}
main();
