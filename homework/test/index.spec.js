const solution = require('../index')

describe('Homework', () => {
    test('Ejercicios 1: factorial de 5 es 120', () => {
        const actual = solution.factorial(5)
        const expected = 120

        expect(actual).toEqual(expected)
    })
    test('Ejercicios 2: fibonacci de 10 debe ser 89', () => {
        const actual = solution.fibonacci(10)
        const expected = 89

        expect(actual).toEqual(expected)
    })
    test('Ejercicios 3: 30 dividido 6 debe ser 5', () => {
        const actual = solution.divide(30, 6)
        const expected = 5

        expect(actual).toEqual(expected)
    })
    test('Ejercicios 4: inverso de 123 debe ser 321', () => {
        const actual = solution.invert(123)
        const expected = 321

        expect(actual).toEqual(expected)
    })
    test('Ejercicios 5: suma de 123 debe ser 6', () => {
        const actual = solution.suma(123)
        const expected = 6

        expect(actual).toEqual(expected)
    })
    test('Ejercicios 6: multiplación de 27 por 82 debe ser 78', () => {
        const actual = solution.multi(27, 82)
        const expected = 2214

        expect(actual).toEqual(expected)
    })
    test('Ejercicios 7: suma de [6,4,2,7,8,1] debe ser 28', () => {
        const actual = solution.sumArr([6,4,2,7,8,1])
        const expected = 28

        expect(actual).toEqual(expected)
    })
})