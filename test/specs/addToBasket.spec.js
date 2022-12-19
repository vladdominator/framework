import {DEFAULT_BASKET_PAGE_URL} from "../../constants/contstants";
import {ProductPage} from "../pages/ProductPage";
import {BasketPage} from "../pages/BasketPage";
import {waitAndClick, waitElement} from "../utilities/helper";
import {expect} from "chai";
import {DataReaderService} from "../services/services.js";
import {logger} from "../logger";

describe('Add to Basket.', function ()  {
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

  it('Should open Product page.', () => {
    productPage.openPage(obj.DEFAULT_PRODUCT_PAGE_URL);
  });

  it('Should check exists size.', () => {
    waitElement(productPage.getProductOptions())
  })

  it('Should choose size.', () => {
    waitAndClick(productPage.getSizeOptions());
  })

  it('Should add to basket', () => {
    waitAndClick(productPage.getBasketButton());
  })

  it('Should appear success message.', () => {
    waitElement(productPage.getSuccessMessage());
  })

  it('Should be update count icon', () => {
    waitElement(productPage.getUpdateCountIcon());
  })

  it('Should open Basket Page', () => {
    basketPage.openPage(DEFAULT_BASKET_PAGE_URL);
  })

  it('Should be correct size in the basket page.', () => {
    waitElement(basketPage.getSize());
  })
});
