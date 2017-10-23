const parseItems = require('../parse-items')

describe('parseItems()', () => {
  test('debería retornar un nuevo arreglo', () => {
    const original = ['6', '3', '5', '2', '4']
    const parsed = parseItems(original)

    expect(original).not.toBe(parsed)
    expect(original).not.toEqual(parsed)
  })

  test('debería retornar un arreglo de números', () => {
    parseItems(['6', '3', '5', '2', '4']).forEach(i => expect(Number.isInteger(i)).toBeTruthy())
  });

  test('debería retornar un arreglo ordenado', () => {
    expect(parseItems(['6', '3', '5', '2', '4'])).toEqual([2, 3, 4, 5, 6])
  });

  test('no debería mutar arreglo de entrada', () => {
    const original = ['6', '3', '5', '2', '4'];
    const parsed = parseItems(original);
    expect(original).toEqual(['6', '3', '5', '2', '4'])
  });

})
