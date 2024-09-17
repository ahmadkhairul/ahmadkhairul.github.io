document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const portfolioDescription = document.querySelectorAll(".portfolio-description");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, { threshold: 0.1 });

  portfolioItems.forEach(item => {
    observer.observe(item);
  });

  portfolioDescription.forEach(item => {
    observer.observe(item);
  });
});