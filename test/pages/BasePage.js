import {logger} from "../logger";

export class BasePage {
  openPage (path) {
    logger.info(`Opening the page: ${path}.`);
    browser.url(path);
  }
}
