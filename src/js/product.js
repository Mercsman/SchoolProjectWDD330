import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";
// import { setLocalStorage, getLocalStorage } from "./utils.mjs"; // call getLocalStorage as well

loadHeaderFooter();

const dataSource = new ExternalServices("tents");
const productId = getParam('product');

const product = new ProductDetails(productId, dataSource);
product.init();

// console.log(dataSource.findProductById(productId));