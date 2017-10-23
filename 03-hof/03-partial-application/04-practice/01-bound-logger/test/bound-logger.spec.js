const Sinon = require('sinon');
const Submission = require('../bound-logger');

describe('with bind', () => {
  test('debería exportar log() y logger()', () => {
    const actualLog = typeof Submission.log;
    const actualLogger = typeof Submission.logger;
    const expected = 'function';

    expect(actualLog).toEqual(expected);
    expect(actualLogger).toEqual(expected);
  });

  describe('log()', () => {
    [
      [['foo'], 'foo'],
      [['foo', 'foo'], 'foo foo'],
      [['foo', 'bar', 'baz'], 'foo bar baz'],
      [['foo', 'bar', 'baz', 1, 2, 3], 'foo bar baz 1 2 3'],
    ].forEach(pair => {
        test(`debería retornar "${pair[1]}" para [${pair[0]}]`, () => {
            const actual = Submission.log.apply(null, pair[0])
            expect(actual).toEqual(pair[1]);
        });
    });
  });

  describe('logger()', () => {
    test('debería combinar namespace + 1 string', () => {
      const info = Submission.logger('INFO:');
      const actual = info('this is an info message');
      const expected = 'INFO: this is an info message';
      expect(actual).toEqual(expected);
    });

    test('debería combinar namespace + 2 strings', () => {
      const warn = Submission.logger('WARN:');
      const actual = warn('this is a warning message', 'with more info');
      const expected = 'WARN: this is a warning message with more info';
      expect(actual).toEqual(expected);
    });

    test('debería usar Function.prototype.bind', () => {
      const spy = Sinon.spy(Function.prototype, 'bind');
      Submission.logger('ERROR:')('foo');

      expect(spy.callCount).toEqual(1);
      expect(spy.args[0][0]).toEqual(null);
      expect(spy.args[0][1]).toEqual('ERROR:');

      spy.restore();
    });

  });

})