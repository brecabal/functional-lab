const serializeUser = require('../serializeUser')

describe('serializeUser()', () => {
  test('debería retornar un string con el objeto serializado como JSON', () => {
    const grace = {
    	userId: 'xxx',
    	name: 'Grace Hopper',
    	country: 'us',
    	date: new Date()
    }
    const dateStr = grace.date.toJSON()

    const expected = `{"userId":"xxx","name":"Grace H...","country":"us","date":"${dateStr}"}`
    expect(serializeUser(grace)).toBe(expected)
  })

  test('no debería mutar el objeto que recibe como argumento', () => {
    const grace = {
      userId: 'xxx',
      name: 'Grace Hopper',
      country: 'us',
      date: new Date()
    }

    expect(grace.name).toBe('Grace Hopper')
    expect(grace.date).toBeInstanceOf(Date)
  })
})
