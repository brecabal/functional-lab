const lowercaser = require('../lowercaser.js')

test('lowercaser debería retornar un string en lowercaser', ()=>{
	const actual = 'LOREM IPSUM'
	const expected = 'lorem ipsum'

	expect(lowercaser(actual)).toBe(expected)
})

test('debería fallar cuando se ingresa un número',() =>{
	const actual = 1

	expect(() => {
		lowercaser(actual)
	}).toThrow()
})