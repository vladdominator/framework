export const waitForTextChange = (el, text, timeout) => {
  browser.waitUntil(
    function () {
      return el.getText() === text;
    },
    { timeout: 20000 }
  );
};

export const waitAndClick = (el, timeout) => {
  el.waitForDisplayed({ timeout: 20000 });
  el.click();
};

export const waitElement = (el, timeout) => {
  el.waitUntil(
    function () {
      return !!el;
    },
    { timeout: 20000 }
  );
  el.waitForDisplayed();
};
