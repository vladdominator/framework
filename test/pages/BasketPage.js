import {BasePage} from "./BasePage.js";
import {logger} from "../logger";

class BasketPage extends BasePage {
  constructor(size) {
    super();
    this.size = size;
  }

  getSize() {
    logger.info("Getting size option in basket page.");
    return $(`(//*[@class='cart-item']//*[@class='item-options']/dd[text()='${this.size}'])[2]`);
  }

  getName() {
    logger.info("Getting name option in basket page.");
    return $(`(//*[@class='product-item-name'])[2]`);
  }
}

export {BasketPage};
