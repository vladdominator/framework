import { BasePage } from './BasePage.js';
import {logger} from "../logger";

class ProductPage extends BasePage {
  constructor(size) {
    super();
    this.size = size;
  }

  getProductOptions() {
    logger.info("Checking the production option.");
    return $(`//*[@id='product-options-wrapper']`);
  }

  getSizeOptions() {
    logger.info("Checking the size option.");
    return $(`//*[@class='swatch-attribute-options clearfix']/div[text()='${this.size}']`);
  }

  getBasketButton() {
    logger.info("Clicking the add basket button.");
    return $(`//*[@id='product-addtocart-button']`);
  }

  getSuccessMessage() {
    logger.info("Checking the manage success message.");
    return $('.message-success');
  }

  getUpdateCountIcon() {
    logger.info("Checking the update count to 1 in basket.");
    return $(`//*[@class='minicart-wrapper']//*[@class='counter-number' and text()='1']`);
  }

  getName() {
    logger.info("Checking the name option.");
    return $(`//*[@class='page-title']/span`);
  }
}

export { ProductPage };
