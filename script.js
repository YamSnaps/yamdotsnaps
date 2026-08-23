const categoryButtons = document.querySelectorAll(".category-toggle");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pictures = button.nextElementSibling;
    pictures.classList.toggle("open");
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