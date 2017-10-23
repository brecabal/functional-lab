// Broken: returns new array but mutates same object references.
const applyDiscount = (cart, discount) => {
  if (!cart.length) {
    return [];
  }

  const [head, ...tail] = cart
  const current = Object.assign({}, head);
  current.price *= (1 - discount);

  return [current].concat(applyDiscount(tail, discount));
};

const applyDiscount2 = (cart, discount) => {
  return cart.map((c) => {
    const obj = Object.assign({}, c, {
      price: c.price * (1 - discount),
    })
    return obj
  })
}

const applyDiscount3 = (cart, discount) =>
  cart.map((c) =>
    Object.assign({}, c, {price: c.price * (1 - discount) })

module.exports = applyDiscount
