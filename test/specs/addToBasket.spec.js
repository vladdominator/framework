import {DEFAULT_BASKET_PAGE_URL} from "../../constants/contstants";
import {ProductPage} from "../pages/ProductPage";
import {BasketPage} from "../pages/BasketPage";
import {waitAndClick, waitElement} from "../utilities/helper";
import {DataReaderService} from "../services/services.js";
import {expect} from "chai";
import {logger} from "../logger";

describe('Add to Basket.', function () {
  let productPage;
  let basketPage;
  const obj = {};


  beforeEach(function () {
    const props = DataReaderService.getTestData('addToBasket.properties');
    for (const key in props) {
      obj[key] = props[key];
    }
    productPage = new ProductPage(obj.DEFAULT_PRODUCT_SIZE);
    basketPage = new BasketPage(obj.DEFAULT_PRODUCT_SIZE);
  })

  it('Should be correct size in the basket page.', () => {
    productPage.openPage(obj.DEFAULT_PRODUCT_PAGE_URL);
    waitElement(productPage.getProductOptions())
    waitAndClick(productPage.getSizeOptions());
    waitAndClick(productPage.getBasketButton());
    waitElement(productPage.getSuccessMessage());
    waitElement(productPage.getUpdateCountIcon());
    basketPage.openPage(DEFAULT_BASKET_PAGE_URL);
    expect(waitElement(basketPage.getSize()).getText()).to.be.equal(obj.DEFAULT_PRODUCT_SIZE);
  })

  it('Should be correct name in the basket page.', () => {
    productPage.openPage(obj.DEFAULT_PRODUCT_PAGE_URL);
    waitElement(productPage.getProductOptions())
    const text = waitElement(productPage.getName()).getText();
    waitAndClick(productPage.getSizeOptions());
    waitAndClick(productPage.getBasketButton());
    waitElement(productPage.getSuccessMessage());
    waitElement(productPage.getUpdateCountIcon());
    basketPage.openPage(DEFAULT_BASKET_PAGE_URL);
    expect(waitElement(basketPage.getName()).getText()).to.be.equal(text);
  })
});
