const fibo = require('../fibonacci')

describe('Fibonacci', () => {
    test('con n = 5 debería retornar 8', () => {
        const actual = fibo(5)
        const expected = 8
        expect(actual).toEqual(expected)
    })

    test('con n = 6 debería retornar 13', () => {
        const actual = fibo(6)
        const expected = 13
        expect(actual).toEqual(expected)
    })
})