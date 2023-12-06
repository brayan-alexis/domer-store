/**
 *
 * @param {Array} products cardProducts: Array of products
 * @returns {Number} total: Total price of all products with discount
 */
export const totalPrice = (products) => {
  return products.reduce(
    (total, product) => {
      const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
      return total + discountedPrice * product.quantity.toFixed(2);
    },
    0
  );
};
