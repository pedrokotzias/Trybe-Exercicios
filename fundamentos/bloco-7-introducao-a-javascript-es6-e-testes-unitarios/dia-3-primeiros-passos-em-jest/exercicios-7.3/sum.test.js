const sum = require('./sum.js');

describe('testing sum function', () => {
  it('return sum result', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('check if throws an error if any of the parameters isnt a number and shows error message', () => {
    expect(() => {sum(4, '5') }).toThrow();
    expect(() => { sum(4, '5') }).toThrowError('parameters must be numbers');
  });
});
