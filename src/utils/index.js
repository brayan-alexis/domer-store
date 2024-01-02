/**
 *
 * @param {Array} products cardProducts: Array of products
 * @returns {Number} total: Total price of all products with discount
 */
export const totalPrice = (products) => {
  return products.reduce(
    (total, product) => {
      const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
      return total + discountedPrice * product.quantity;
    },
    0
  );
};

/**
 * This function obtains current date and time
 * @returns {number} dateTime: Current date and time
 */
export const getCurrentDateTime = () => {
  let today = new Date();
  let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  return dateTime;
};