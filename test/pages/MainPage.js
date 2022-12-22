import {BasePage} from "./BasePage.js";
import {logger} from "../logger";

class MainPage extends BasePage {
  constructor() {
    super();
  }

  getSearchInput() {
    logger.info("Getting search input in main page.");
    return $(`//*[@id='search']`);
  }

  getEmptyResult() {
    logger.info("Getting empty result page.");
    return $(`//*[@class='message notice']/div`);
  }

  getEmptyResultValue() {
    logger.info("Getting empty result page value.");
    return $(`//*[@class='page-title']/span`);
  }
}

export {MainPage};
