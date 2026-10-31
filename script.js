const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-card').forEach((card) => {
  card.addEventListener('click', () => {
    lightboxImage.src = card.dataset.full;
    lightboxImage.alt = card.querySelector('img').alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
document.getElementById('year').textContent = new Date().getFullYear();
