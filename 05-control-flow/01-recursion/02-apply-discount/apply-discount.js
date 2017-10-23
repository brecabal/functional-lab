const applyDiscount = (cart, discount) => {
  if (!cart.length) {
    return [];
  }
  return [{
      price: cart[0].price * (1 - discount)
    }]
    .concat(applyDiscount(cart.slice(1), discount));
};

module.exports = applyDiscount