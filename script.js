const categoryButtons = document.querySelectorAll(".category-toggle");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pictures = button.nextElementSibling;
    pictures.classList.toggle("open");
  });
});