// ------------------------- menu -------------------------
const btn = document.querySelector(".submenu");
const x = document.querySelector(".clos");

btn.addEventListener("click", function () {
  document.querySelector(".menu-options").classList.toggle("invi");
});

x.addEventListener("click", function () {
  document.querySelector(".menu-options").classList.toggle("invi");
});

// ------------------------- CARRINHO -------------------------
const bag = document.querySelector(".bag");

bag.addEventListener("click", function () {
  document.querySelector(".carrinho").classList.toggle("bagScreen");
});

// ------------------------- Go to top -------------------------
function goToTop() {
  document.documentElement.scrollTop = 0;
}
