// ดึงปุ่มและ navbar
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// ตั้งค่าให้ navbar เปิด-ปิดเมื่อกดปุ่ม
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
