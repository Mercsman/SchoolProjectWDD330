import { setLocalStorage } from "./utils.mjs"

function productDetailsTemplate(product) {
    return `<section class="product-detail">
        <h3>${product.Brand.Name}</h3>
        <h2 class="divider">${product.NameWithoutBrand}</h2>
        <img class="divider" src="${product.Image}" alt="${product.NameWithoutBrand}"></img>
        <p class="product-card__price">$${product.FinalPrice}</p>
        <p class="product__color">${product.Colors[0].ColorName}</p>
        <p class="product__description">${product.DescriptionHTMLSimple}</p>
        <div class="product-detail__add">
            <button id="addProductToCart" data-id="${product.Id}">Add to Cart</button>
        </div>
    </section>`;
}


export default class ProductDetails {

    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    
    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
          // add listener to Add to Cart button
        document
            .getElementById("addProductToCart") //added 'Product' - addToCart original
            .addEventListener("click", addToCartHandler);
    }
    
    addProductToCart() {
        setLocalStorage("so-cart", this.product);
    }
    
    renderProductDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
            "afterBegin",
            productDetailsTemplate(this.product)
        );
    }
}

 // create a list/array for the cart
// function addProductToCart(product) {
//     let cart = getLocalStorage("so-cart");

//     if (!Array.isArray(cart)) {
//         cart = [];
//     }

    // Add product quantity and push product into cart array
//     product.Quantity = 1;

//     cart.push(product);

//     setLocalStorage("so-cart", cart);
// }
   // add to cart button event handler
//     async function addToCartHandler(e) {
//     const product = await dataSource.findProductById(e.target.dataset.id);
//     addProductToCart(product);
// }

