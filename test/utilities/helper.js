export const waitForTextChange = (el, text) => {
  browser.waitUntil(
    function () {
      return el.getText() === text;
    },
    { timeout: 20000 }
  );
};

export const waitAndClick = (el) => {
  el.waitForDisplayed({ timeout: 20000 });
  el.click();
};

export const waitElement = (el) => {
  el.waitUntil(
    function () {
      return !!el;
    },
    { timeout: 20000 }
  );
  return el;
};

export const waitElementAndClickPress = (el, productToSearch) => {
  el.waitUntil(
    function () {
      return !!el;
    },
    { timeout: 20000 }
  );
  el.setValue(productToSearch);
}
