const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');

menuToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', isOpen);
});

filterButtons.forEach((button) => {
	button.addEventListener('click', () => {
		filterButtons.forEach((filter) => filter.classList.remove('active'));
		button.classList.add('active');
		const selectedFilter = button.dataset.filter;
		galleryItems.forEach((item) => {
			item.hidden = selectedFilter !== 'all' && item.dataset.category !== selectedFilter;
		});
	});
});

galleryItems.forEach((item) => {
	item.addEventListener('click', () => {
		lightboxImage.src = item.dataset.image;
		lightboxImage.alt = item.querySelector('img').alt;
		lightboxCaption.textContent = item.dataset.title;
		lightbox.hidden = false;
		document.body.classList.add('modal-open');
	});
});

function closeLightbox() {
	lightbox.hidden = true;
	document.body.classList.remove('modal-open');
}

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
	if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') closeLightbox();
});
