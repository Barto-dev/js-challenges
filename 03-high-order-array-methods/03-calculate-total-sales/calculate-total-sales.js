/**
 * Calculates and returns the total sales amount including tax from the input array of products and tax rate.
 * @param {Object[]} products - The array of product objects.
 * @param {string} products[].name - The name of the product.
 * @param {number} products[].price - The price of the product.
 * @param {number} products[].quantity - The quantity sold of the product.
 * @param {number} taxRate - The tax rate as a percentage.
 * @returns {number} - The total sales amount including tax.
 */
function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products
    .reduce((total, product) => product.price * product.quantity + total, 0);
  const tax = totalSales / 100 * taxRate;
  return tax + totalSales;
}

module.exports = calculateTotalSalesWithTax;
