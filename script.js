const sideMenu = document.getElementById("sideMenu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// MENU OCHISH
function openMenu(){
  sideMenu.classList.add("open");
  overlay.classList.add("show");

  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  sideMenu.setAttribute("aria-hidden", "false");
  overlay.setAttribute("aria-hidden", "false");
}

// MENU YOPISH
function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");

  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
  sideMenu.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "true");
}

// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Dark mode saqlash
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

// ESC tugmasi bilan menu yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// OVERLAY bosilganda menu yopish
overlay.addEventListener("click", closeMenu);

// === MODAL ===
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");

function openModal(img, text) {
  modalImg.src = img;
  modalText.innerText = text;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// SCROLL ANIMATSIYA
const fadeElements = document.querySelectorAll(".fade-up");

function showOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 80) el.classList.add("show");
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
