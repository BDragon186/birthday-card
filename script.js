const card = document.querySelector('.birthday-card');

card.addEventListener('click', () => {
    // Thêm hoặc xóa lớp 'open' khi nhấp vào thiệp
    card.classList.toggle('open');
});