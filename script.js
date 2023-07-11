const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    console.log("active");
    toggle.parentNode.classList.toggle("active");
  });
});
