const categoryButtons = document.querySelectorAll(".category-toggle");

categoryButtons.forEach((button) => {
  const pictures = button.nextElementSibling;
  const categoryName =
    button.querySelector("span")?.textContent.trim() || "Portfolio";

  // Load gallery photos only when they are near the screen.
  // This keeps the page faster, especially on phones.
  pictures.querySelectorAll("img").forEach((image, index) => {
    image.loading = "lazy";

    // Supply useful fallback text when an image has no written alt text.
    if (!image.hasAttribute("alt")) {
      image.alt = `${categoryName} portfolio photograph ${index + 1}`;
    }
  });

  button.addEventListener("click", () => {
    const category = button.closest(".portfolio-category");
    pictures.classList.toggle("open");

    // Tell screen readers whether this category is open or closed.
    const isOpen = pictures.classList.contains("open");
    button.setAttribute("aria-expanded", isOpen);

    // Let the opened gallery stretch across all grid columns.
    category.classList.toggle("open", isOpen);
  });
});

const aboutText = document.querySelector(".about-text");

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      // Fade/slide the text in
      entry.target.classList.add("show");

      // Stop observing after it appears
      // so it cannot fade away again
      aboutObserver.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.3
});

aboutObserver.observe(aboutText);
