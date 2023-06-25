const scrollTopBtn = document.querySelector("#scroll-top");

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollTopBtn.addEventListener('click', scrollToTop);