document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = item.src.replace("-thumbnail", "");
    });
  });

  const closeBtn = document.getElementById("close-btn");

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});