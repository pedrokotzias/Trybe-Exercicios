const { encode, decode } = require('./encodeDecode.js');

describe('testing decode and encode functions', () => {
  //encode
  it('encode function is defined', () => {
    expect(encode).toBeDefined();
  });
  it('encode is a function', () => {
    expect(typeof encode).toEqual('function');
  });
  it('encode function a to 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('encode function e to 2', () => {
    expect(encode('exe')).toEqual('2x2');
  });
  it('encode function i to 3', () => {
    expect(encode('isis')).toEqual('3s3s');
  });
  it('encode function o to 4', () => {
    expect(encode('ossos')).toEqual('4ss4s');
  });
  it('encode function u to 5', () => {
    expect(encode('uwu')).toEqual('5w5');
  });

//decode
  it('decode function is defined', () => {
    expect(decode).toBeDefined();
  });
  it('decode is a function', () => {
    expect(typeof decode).toEqual('function');
  });
  it('decode function 1 to a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('decode function e to 2', () => {
    expect(decode('2x2')).toEqual('exe');
  });
  it('decode function i to 3', () => {
    expect(decode('3s3s')).toEqual('isis');
  });
  it('decode function o to 4', () => {
    expect(decode('4ss4s')).toEqual('ossos');
  });
  it('decode function u to 5', () => {
    expect(decode('5w5')).toEqual('uwu');
  });

 //encode and decode
  it('check if the fuction returns the same length of characters', () => {
    expect(encode('trybe').length).toEqual(5);
    expect(decode('trybe').length).toEqual(5);
  })
});
