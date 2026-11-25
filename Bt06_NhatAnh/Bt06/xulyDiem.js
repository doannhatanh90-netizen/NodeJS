function tinhDiemTrungBinh(mon1, mon2, mon3) {
    return (mon1 + mon2 + mon3) / 3;
}

function xepLoai(diemTB) {
    if (diemTB >= 8) return 'Giỏi';
    if (diemTB >= 6.5) return 'Khá';
    if (diemTB >= 5) return 'Trung bình';
    return 'Yếu';
}

module.exports = { tinhDiemTrungBinh, xepLoai };
