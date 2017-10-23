const repeat = require('../repeat')

describe('repeat()', () => {

  test('Si repeat recibe num = 3, funcion deberia ejecutar 3 veces', () => {

    // contador de iteraciones
    let iter = 0

    const num = 3
    const iter_num = 3

    const fn = () => {
      iter = iter + 1
    }

    repeat(fn, num)
    expect(iter).toBe(iter_num)
  })

})
