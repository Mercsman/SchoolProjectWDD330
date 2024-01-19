import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
// import { setLocalStorage, getLocalStorage } from "./utils.mjs"; // call getLocalStorage as well


const productId = getParam('product');
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();

// console.log(dataSource.findProductById(productId));