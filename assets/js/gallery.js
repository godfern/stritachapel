let currentImgIndex = 0; // For the Enlarged Modal
let sliderPosition = 0; // For the Grid Slider track
let allGalleryImages = [];

window.addEventListener('DOMContentLoaded', () => {
    const imagesInGrid = document.querySelectorAll('.gallery-grid .gallery-item img');
    allGalleryImages = Array.from(imagesInGrid).map(img => img.src);
    
    // Initialize the slider UI (Show/Hide arrows)
    initSlider();
});

/* ── SLIDER LOGIC (FOR THE MAIN ROW) ── */
function initSlider() {
    const nextBtn = document.getElementById('sliderNext');
    const prevBtn = document.getElementById('sliderPrev');
    
    if (!nextBtn || !prevBtn) return;

    // Only show slider navigation if there are more than 4 images
    if (allGalleryImages.length > 4) {
        updateSliderButtons();
    } else {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
    }
}

function moveSlider(direction) {
    const track = document.getElementById('galleryTrack');

    sliderPosition += direction;

    const totalPages = Math.ceil(allGalleryImages.length / 4);
    const maxSlides = totalPages - 1;

    if (sliderPosition < 0) sliderPosition = 0;
    if (sliderPosition > maxSlides) sliderPosition = maxSlides;

    track.style.transform = `translateX(-${sliderPosition * 100}%)`;

    updateSliderButtons();
}

function updateSliderButtons() {
    const nextBtn = document.getElementById('sliderNext');
    const prevBtn = document.getElementById('sliderPrev');

    const totalPages = Math.ceil(allGalleryImages.length / 4);
    const maxSlides = totalPages - 1;

    prevBtn.style.display = sliderPosition === 0 ? "none" : "flex";
    nextBtn.style.display = sliderPosition >= maxSlides ? "none" : "flex";
}

/* ── MODAL LOGIC (FOR ENLARGED VIEW) ── */
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

  modalImg.src = allGalleryImages[currentImgIndex];
  prevBtn.style.display = (currentImgIndex === 0) ? "none" : "flex";
  nextBtn.style.display = (currentImgIndex === allGalleryImages.length - 1) ? "none" : "flex";
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

window.addEventListener('click', (e) => {
  if (e.target.id === "galleryModal") closeGallery();
});

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById("galleryModal");
  if (!modal || !modal.classList.contains('show')) return;
  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowLeft" && currentImgIndex > 0) changeImage(-1);
  if (e.key === "ArrowRight" && currentImgIndex < allGalleryImages.length - 1) changeImage(1);
});