// ===== Klock Haus Starter JS =====

// Mobile nav
const toggleBtn = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
if (toggleBtn && navLinks) {
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!expanded));
  });
}

// Simple lightbox for gallery links
const lb = document.querySelector("[data-lightbox]");
const lbImg = document.querySelector("[data-lightbox-img]");
const lbClose = document.querySelector("[data-lightbox-close]");

function openLightbox(src, alt) {
  if (!lb || !lbImg) return;
  lbImg.src = src;
  lbImg.alt = alt || "Photo";
  lb.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  if (!lb) return;
  lb.classList.remove("show");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-lb-src]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    openLightbox(a.getAttribute("data-lb-src"), a.getAttribute("data-lb-alt"));
  });
});

if (lb) {
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
}
if (lbClose) lbClose.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
