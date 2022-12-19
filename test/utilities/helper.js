export const waitForTextChange = (el, text, timeout) => {
  browser.waitUntil(
    function () {
      return el.getText() === text;
    },
    {timeout: 9000}
  );
};

export const waitAndClick = (el, timeout) => {
  el.waitForDisplayed({timeout: 9000});
  el.click();
};

export const waitElement = (el, timeout) => {
  el.waitUntil(function () {
      return !!el;
    }, {timeout: 9000}
  )
  el.waitForDisplayed()
}
