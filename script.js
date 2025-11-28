document.addEventListener("DOMContentLoaded", () => {
  const catButtons = document.querySelectorAll(".cat-btn");
  const cards = document.querySelectorAll(".tour-card");

  const btnAzTours = document.getElementById("btnAzTours");
  const btnWorldTours = document.getElementById("btnWorldTours");
  const toursSection = document.getElementById("tours");

  function applyFilter(filter) {
    cards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  // Kateqoriya button klikləri
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      applyFilter(filter);
    });
  });

  // Hero-dan Azərbaycan turlarına keçid
  btnAzTours.addEventListener("click", () => {
    applyFilter("azerbaijan");
    catButtons.forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-filter") === "azerbaijan");
    });
    toursSection.scrollIntoView({ behavior: "smooth" });
  });

  // Hero-dan Dünya turlarına keçid
  btnWorldTours.addEventListener("click", () => {
    applyFilter("world");
    catButtons.forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-filter") === "world");
    });
    toursSection.scrollIntoView({ behavior: "smooth" });
  });
});
