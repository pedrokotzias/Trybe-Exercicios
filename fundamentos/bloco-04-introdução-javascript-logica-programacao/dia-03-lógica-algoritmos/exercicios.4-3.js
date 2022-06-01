/* exercicio 1 - O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 */
let num = 10;
let factor = 1;

for(let i = num; i >= 1; i -= 1) {
  factor = factor * i;
}
console.log(factor);

/* exercicio 2 -  Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. */
let word = 'tryber';
let reverseWord = '';

for(let index = word.length - 1; index >= 0; index -= 1){
  reverseWord += word[index];
}
console.log(reverseWord);

/* exercicio 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for(let index = 0; index < array.length; index += 1){
  if (array[index].length > biggestWord.length){
    biggestWord = array[index];
  }
  if (array[index].length < smallestWord.length){
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

/* exercicio 4 - escreva um algoritmo que retorne o maior número primo entre 0 e 50. */
let biggestPrimeNumber = 0;

for(let index = 0; index <= 50; index += 1) {
  let isPrime = true;
  for(let numberDivisor = 2; numberDivisor < index; numberDivisor += 1) {
    if (index % numberDivisor === 0) {
      isPrime = false;
    }
  }
  if(isPrime) {
    biggestPrimeNumber = index;
  }
}

console.log(biggestPrimeNumber);

