const sum = require('./sum.js');

test('sums 4 plust 5', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('sums zero plus zero', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('sums zero plus zero', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('check if throws an error if any of the parameters isnt a number', () => {
  expect(() => {sum() }).toThrow();
});

test('check if the error message is "parameters must be numbers"', () => {
  expect(() => { sum() }).toThrowError(new Error('parameters must be numbersq'));
});
