const Sinon = require('sinon');
const Submission = require('../logger');

describe('logger()', () => {
    test('debería exportar una función', () => {
        const actual = typeof Submission;
        const expected = 'function';

        expect(actual).toEqual(expected);
    });

    test('debería combinar namespace + 1 string', () => {
        const info = Submission('INFO:');
        const actual = info('this is an info message');
        const expected = 'INFO: this is an info message';

        expect(actual).toEqual(expected);
    });

  test('debería combinar namespace + 2 strings', () => {
    const warn = Submission('WARN:');
    const actual = warn('this is a warning message', 'with more info')
    const expected = 'WARN: this is a warning message with more info'

    expect(actual).toEqual(expected);
  });

  test('no debería usar Function.prototype.bind', () => {
    const spy = Sinon.spy(Function.prototype, 'bind');
    Submission('ERROR:')('foo');
    expect(spy.callCount).toEqual(0);

    spy.restore();
  });
})