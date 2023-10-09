const hamburger = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".dropdown_menu");

// Fungsi untuk menutup dropDownMenu
function closeDropDownMenu() {
  dropDownMenu.classList.remove("open");
}

// Mengaktifkan toggle dropDownMenu saat mengklik hamburger
hamburger.onclick = function (e) {
  e.stopPropagation(); // Mencegah event klik menyebar ke elemen document
  dropDownMenu.classList.toggle("open");
};

// Menutup dropDownMenu saat mengklik di luar elemen
document.addEventListener("click", function (e) {
  if (
    !dropDownMenu.contains(e.target) &&
    dropDownMenu.classList.contains("open")
  ) {
    closeDropDownMenu();
  }
});
