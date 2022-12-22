import {DEFAULT_PAGE_URL} from "../../constants/contstants";
import {waitElement, waitElementAndClickPress} from "../utilities/helper";
import {DataReaderService} from "../services/services.js";
import {MainPage} from "../pages/MainPage";
import {expect} from "chai";

describe('Search any product.', function () {
  let mainPage;
  const obj = {};


  beforeEach(function () {
    const props = DataReaderService.getTestData('search.properties');
    for (const key in props) {
      obj[key] = props[key];
    }
    mainPage = new MainPage();
  })

  it('Should be empty result.', () => {
    mainPage.openPage(DEFAULT_PAGE_URL);
    waitElementAndClickPress(mainPage.getSearchInput(), obj.DEFAULT_SEARCH_EMPTY);
    waitElement(mainPage.getEmptyResult());
    // expect(waitElement(mainPage.getEmptyResultValue()).getText()).to.be.contains(obj.DEFAULT_SEARCH_EMPTY);
  })
});
