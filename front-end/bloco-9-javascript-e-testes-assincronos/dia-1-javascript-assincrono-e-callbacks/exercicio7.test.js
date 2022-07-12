const uppercase = require('./exercicio7');

describe('a função uppercase', () => {
  
  it('uppercase() functions correctly making the string all in uppercase', () => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});