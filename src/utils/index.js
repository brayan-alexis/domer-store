/**
 *
 * @param {Array} products cardProducts: Array of products
 * @returns {Number} total: Total price of all products
 */
export const totalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};
