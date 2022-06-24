const myFizzBuzz = require('./myFizzBuzz.js');

describe('testing myFizzBuzz function', () => {
  it('checks if result is accordlingy to the receive parameter', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz'); 
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7); 
    expect(myFizzBuzz('7')).toBe(false); 
  });
});