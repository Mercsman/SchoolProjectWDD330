import { getLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const services = new ExternalServices();
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}

export default class checkoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }
  
  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }
  
  calculateItemSummary() {
    // calculate and display the total amount of the items in the cart, and the number of items. 
  }
  
  calculateOrderTotal() {
    // calculate the shipping and tax amounts. Then use them along with the cart total to figure out the order total.
    
    // display the totals.
    this.displayOrderTotals();
  }
  
  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page.
  }
}