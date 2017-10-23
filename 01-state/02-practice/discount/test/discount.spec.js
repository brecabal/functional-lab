const discount = require('../discount')

describe('applyDiscount()', () => {
  test('debería devolver un nuevo array', () => {
    const cart = [];
    const result = discount(cart, .2);

    expect(result).toEqual(cart);
  })

  test('debería devolver un array con mismo length que input', () => {
    [
      [],
      [{ price: 1 }],
      [{ price: 1 }, { price: 7 }, { price: 19 }]
    ].forEach(cart => expect(cart.length).toBe(discount(cart, .2).length))
  })

  test('no debería mutar array de entrada', () => {
    const item1 = { price: 1 }
    const item2 = { price: 2 }
    const item3 = { price: 3 }
    const cart = [item1, item2, item3]
    const cartWithDiscount = discount(cart, .3)
    expect(cart.length).toBe(3)
    expect(cart[0]).toEqual(item1)
    expect(cart[1]).toEqual(item2)
    expect(cart[2]).toEqual(item3)
    expect(cart[0]).toEqual({ price: 1 })
    expect(cart[1]).toEqual({ price: 2 })
    expect(cart[2]).toEqual({ price: 3 })
  })

  test('no debería mutar objetos', () => {
    const item1 = { price: 1 }
    const item2 = { price: 2 }
    const item3 = { price: 3 }
    const cart = [item1, item2, item3]
    const cartWithDiscount = discount(cart, .3)
    expect(cart.length).toBe(3)
    expect(cart[0].price).toBe(1)
    expect(cart[1].price).toBe(2)
    expect(cart[2].price).toBe(3)
  })

  test('debería retornar objetos con descuento indicado', () => {
    const item1 = { price: 1 }
    const item2 = { price: 2 }
    const item3 = { price: 3 }
    const cart = [item1, item2, item3]
    const cartWithDiscount = discount(cart, .3)
    expect(cartWithDiscount[0].price).toBe(1 * (1 - .3))
    expect(cartWithDiscount[1].price).toBe(2 * (1 - .3))
    expect(cartWithDiscount[2].price).toBe(3 * (1 - .3))
  })
})
