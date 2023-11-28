/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // Validasi bahwa ada variabel
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            //Kami menambahkan kelas show-menu ke tag div dengan kelas nav__menu
            nav.classList.toggle("show-menu");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*==================== HAPUS MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // Ketika kami mengklik setiap nav__link, kami menghapus kelas show-menu
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*==================== GANTI BACKGROUND ATAS ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // Ketika scroll lebih besar dari 200 ketinggian viewport, tambahkan kelas scroll-header ke tag header
    if (this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);