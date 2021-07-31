export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // Can Delete Products, but could be in cart
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
