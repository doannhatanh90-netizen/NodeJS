const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'data');
const fileCu = path.join(folder, 'ghichu.txt');
const fileMoi = path.join(folder, 'ghichu_moi.txt');
const fileTam = path.join(folder, 'tam.txt');
async function main() {
    try {
        console.log('===== BAI 08 - QUAN LY TAP TIN =====');
        fs.mkdirSync(folder, { recursive: true });
        console.log('1. Tao thu muc data thanh cong!');
        const noiDung = 'Ke hoach hoc tap\nHoc lap trinh Node.js\nHoan thanh bai tap File System';
        fs.writeFileSync(fileCu, noiDung, 'utf8');
        console.log('2. Tao va ghi tap tin ghichu.txt thanh cong!');
        await new Promise((resolve, reject) => {
            fs.rename(fileCu, fileMoi, err => err ? reject(err) : resolve());
        });
        console.log('3. Doi ten thanh ghichu_moi.txt thanh cong!');
        console.log('4. Noi dung tap tin sau khi doi ten:');
        console.log('----------------------------------');
        console.log(fs.readFileSync(fileMoi, 'utf8'));
        console.log('----------------------------------');
        fs.writeFileSync(fileTam, 'Day la tap tin tam.');
        console.log('5. Tao tap tin tam.txt thanh cong!');
        await new Promise((resolve, reject) => {
            fs.unlink(fileTam, err => err ? reject(err) : resolve());
        });
        console.log('6. Xoa tap tin tam.txt thanh cong!');
        console.log('===== HOAN THANH BAI TAP =====');
    } catch (err) {
        console.error('Loi:', err.message);
    }
}
main();
