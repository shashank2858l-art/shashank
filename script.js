// Responsive navigation menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.textContent = isOpen ? "×" : "☰";
  });
}

// Display the current year in the footer
document.querySelectorAll("#year").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
