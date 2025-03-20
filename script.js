// Fungsi untuk membuka menu (jika diperlukan)
function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

// Fungsi untuk membuka modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        console.error(`Modal dengan ID ${modalId} tidak ditemukan!`);
    }
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    } else {
        console.error(`Modal dengan ID ${modalId} tidak ditemukan!`);
    }
}

// Menutup modal saat mengklik di luar area modal
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};

// Menutup modal dengan tombol Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            closeModal(modal.id);
        });
    }
});