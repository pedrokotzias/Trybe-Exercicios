function encode(coding) {
  let str = coding.replaceAll('a', '1');
  str = str.replaceAll('e', '2');
  str = str.replaceAll('i', '3');
  str = str.replaceAll('o', '4');
  str = str.replaceAll('u', '5');

  return str;
}
function decode(uncoding) {
  let str = uncoding.replaceAll('1', 'a');
  str = str.replaceAll('2', 'e');
  str = str.replaceAll('3', 'i');
  str = str.replaceAll('4', 'o');
  str = str.replaceAll('5', 'u');

  return str;
}

const functions = { encode, decode };
module.exports = functions;
