// Sinh viên: Đoàn Mai Nhật Anh
// Lớp: CD-CNTT18A
// Mã sinh viên: CD-CNTT18A01
const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

const sinhVien = [
    { hoten: 'Đoàn Mai Nhật Anh', mon1: 9, mon2: 8, mon3: 8.5 },
    { hoten: 'Nguyễn Minh Tuấn', mon1: 7, mon2: 6.5, mon3: 7.5 },
    { hoten: 'Trần Thu Hà', mon1: 5, mon2: 6, mon3: 5.5 }
];

const ketQua = sinhVien.map(sv => {
    const diemTB = tinhDiemTrungBinh(sv.mon1, sv.mon2, sv.mon3);
    return {
        'Họ tên': sv.hoten,
        'Điểm trung bình': diemTB.toFixed(2),
        'Xếp loại': xepLoai(diemTB)
    };
});

console.log('KẾT QUẢ XẾP LOẠI HỌC TẬP');
console.table(ketQua);
