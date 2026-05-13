let currentImgIndex = 0;
let allGalleryImages = [];

// Initialize the list of images when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const imagesInGrid = document.querySelectorAll('.gallery-grid .gallery-item img');
    allGalleryImages = Array.from(imagesInGrid).map(img => img.src);
});

function openGallery(index) {
  const modal = document.getElementById("galleryModal");
  currentImgIndex = index;
  
  updateModalImage();
  
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function updateModalImage() {
  const modalImg = document.getElementById("modalImg");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Set the image source
  modalImg.src = allGalleryImages[currentImgIndex];

  // Logic: Hide Previous arrow if on the first image
  if (currentImgIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
  }

  // Logic: Hide Next arrow if on the last image
  if (currentImgIndex === allGalleryImages.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "flex";
  }
}

function changeImage(step) {
  currentImgIndex += step;
  updateModalImage();
}

function closeGallery() {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

// Close on background click
window.addEventListener('click', (e) => {
  const modal = document.getElementById("galleryModal");
  if (e.target === modal) closeGallery();
});

// keyboard Support (Escape to close, Arrows to navigate)
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById("galleryModal");
  if (!modal || !modal.classList.contains('show')) return;

  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowLeft" && currentImgIndex > 0) changeImage(-1);
  if (e.key === "ArrowRight" && currentImgIndex < allGalleryImages.length - 1) changeImage(1);
});