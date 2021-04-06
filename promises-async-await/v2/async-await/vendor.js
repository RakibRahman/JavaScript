// const { resolve } = require("node:path");

function promiseDelay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const createVendorAPI = (delay, value, shouldFail) => {
  return {
    async makeAPIRequest() {
      await promiseDelay(delay);
      if (shouldFail) {
        throw new Error();
      }
      return value;
    },
  };
};
const creditValidAPI = createVendorAPI(
  1000,
  { valid: true, token: 7966 },
  false
);
const placeOrderAPI = createVendorAPI(1500, { orderConfirmed: true }, false);
// const placeOrderAPI = createVendorAPI(1500, { orderConfirmed: true }, true);
const contactSupplierAPI = createVendorAPI(2000, { contacted: true }, false);

// window.contactSupplierAPI = createVendorAPI(2000, { contacted: true }, false);
