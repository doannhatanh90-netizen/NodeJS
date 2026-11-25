const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017');
const students = [
    { masv: 'SV001', hoten: 'Nguyễn Văn An', tuoi: 19, diem: 8 },
    { masv: 'SV002', hoten: 'Trần Minh Bình', tuoi: 20, diem: 7 },
    { masv: 'SV003', hoten: 'Lê Thu Hà', tuoi: 19, diem: 4 },
    { masv: 'SV004', hoten: 'Phạm Quốc Huy', tuoi: 21, diem: 3.5 },
    { masv: 'SV005', hoten: 'Võ Ngọc Mai', tuoi: 20, diem: 9 },
    { masv: 'SV006', hoten: 'Đặng Minh Nam', tuoi: 19, diem: 5 }
];
async function main() {
    try {
        await client.connect();
        const collection = client.db('qlsinhvien').collection('students_test');
        console.log('1. Ket noi qlsinhvien / students_test thanh cong!');
        // Chỉ làm mới các bản ghi mẫu của bài tập để có thể chạy lại.
        await collection.deleteMany({ masv: { $in: students.map(s => s.masv) }, bai09Demo: true });
        const inserted = await collection.insertMany(students.map(s => ({ ...s, bai09Demo: true })));
        console.log('2. So sinh vien da them:', inserted.insertedCount);
        console.table(await collection.find({}, { projection: { _id: 0, bai09Demo: 0 } }).sort({ masv: 1 }).toArray());
        const one = await collection.deleteOne({ masv: 'SV002', bai09Demo: true });
        console.log('3. So ban ghi xoa theo ma SV002:', one.deletedCount);
        const many = await collection.deleteMany({ diem: { $lt: 5 }, bai09Demo: true });
        console.log('4. So ban ghi mau co diem duoi 5 da xoa:', many.deletedCount);
        console.log('5. Tong so ban ghi da xoa:', one.deletedCount + many.deletedCount);
        console.log('6. Danh sach sinh vien con lai:');
        console.table(await collection.find({}, { projection: { _id: 0, bai09Demo: 0 } }).sort({ masv: 1 }).toArray());
    } catch (err) {
        console.error('Loi:', err.message);
        process.exitCode = 1;
    } finally {
        await client.close();
    }
}
main();
