// ------------------------- CARRINHO -------------------------
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

// ------------------------- SEE MORE -------------------------
const see = document.querySelector(".see-more");

see.addEventListener("click", function () {
  let shop2 = document.querySelector(".shop2-zone");
  shop2.style.cssText = "overFlow:auto";
});
