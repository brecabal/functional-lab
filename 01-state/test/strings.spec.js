test('no debería cambiar el contenido de la variable', ()=>{
	const str = 'inmutabilidad'

	expect(str.toUpperCase()).toBe('INMUTABILIDAD')
	expect(str).toBe('inmutabilidad')
})