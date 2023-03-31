let carrinhoList = document.querySelector(".carrinho-list");

let cart = JSON.parse(localStorage.getItem("shopCart")) || [];
refreshCart();

//2- ADD TO CART
function addCart(id) {
  if (cart.some((item) => item.id === id)) {
    addQuantity("more", id);
  } else {
    let package = products.find((item) => item.id === id);
    cart.unshift({ ...package, quantity: 1 });
    console.log(cart);
  }
  refreshCart();
}

//3- REFRESH CART
function refreshCart() {
  cartScreen();
  addPrice();
  seeSize();
  localStorage.setItem("shopCart", JSON.stringify(cart));
}

//4- SHOPPING CART SCREEN
function cartScreen() {
  carrinhoList.innerHTML = "";
  cart.forEach((item) => {
    carrinhoList.innerHTML += `
    <li class="carrinho-list-product">
    <div class="carrinho-list-product-pict">
      <img src="${item.img}" />
    </div>
    <div class="carrinho-list-product-info">
      <h3 class="carrinho-list-product-info-name">${item.name}</h3>
      <div class="carrinho-list-product-info-prod">
        <div class="carrinho-list-product-info-prod-quant">
          <p onclick="addQuantity('less', ${item.id})">-</p>
          <h4 class="carrinho-list-product-info-prod-quant-items">${item.quantity}</h4>
          <p onclick="addQuantity('more', ${item.id})">+</p>
        </div>
        <h4 class="carrinho-list-product-info-prod-price">$${item.price}</h4>
      </div>
    </div>
    <i class="bx bx-trash" onclick="deleteItem(${item.id})"></i>
  </li>
   `;
  });
}

//5- ADD QUANTITY
function addQuantity(option, id) {
  cart = cart.map((item) => {
    let quantity = item.quantity;
    let price = item.price;
    let initial = item.initial;

    if (item.id === id) {
      if (option === "less" && item.quantity > 1) {
        quantity--;
        console.log("menos");
        price -= item.initial * 1;
      } else if (option === "more") {
        quantity++;
        price += item.initial * 1;
        console.log("mais");
      }
    }
    return {
      ...item,
      price,
      quantity,
    };
  });
  refreshCart();
}

//6- ADD PRICE
function addPrice() {
  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.initial * item.quantity;
    totalItems += item.quantity;
  });
  document.querySelector(".carrinho-results-text-quants-total").innerHTML =
    totalPrice;
  document.querySelector(".carrinho-results-text-quants-prod").innerHTML =
    totalItems;
  document.querySelector(".bag-notification").innerHTML = totalItems;
}

//7- ADD A SCROLL ON LIST
function seeSize() {
  if (cart.length === 0) {
    document.querySelector(".carrinho-msg").style.cssText = "display:block";
    document.querySelector(".bag-notification").style.cssText = "display:none";
    carrinhoList.style.cssText = "overFlow-y: none";
  } else if (cart.length >= 1) {
    carrinhoList.style.cssText = "overFlow-y: scroll";
    document.querySelector(".bag-notification").style.cssText = "display:flex";
    document.querySelector(".carrinho-msg").style.cssText = "display:none";
  }
}

//8- DELETE PRODUCT
function deleteItem(id) {
  cart = cart.filter((item) => item.id !== id);
  refreshCart();
}
