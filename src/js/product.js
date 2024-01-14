import { setLocalStorage, getLocalStorage } from "./utils.mjs"; // call getLocalStorage as well
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

// create a list/array for the cart
function addProductToCart(product) {
  let cart = getLocalStorage("so-cart");

  if (!Array.isArray(cart)) {
    cart = [];
  }

  // Add product quantity and push product into cart array
  product.Quantity = 1;

  cart.push(product);

  setLocalStorage("so-cart", cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);