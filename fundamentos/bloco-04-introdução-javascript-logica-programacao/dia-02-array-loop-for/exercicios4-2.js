let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// exercicio 2
let sum = 0;
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
  sum += numbers[index2];
}
console.log(sum);

// exercicio 3 e 4
let sum3 = 0;
let average = 0;
for (let index3 = 0; index3 < numbers.length; index3 += 1) {
  sum3 += numbers[index3];
  average += 1;

}
if (sum3/average > 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}
console.log(sum3/average);

// exercicio 5
let highestNumber = numbers[0];

for (let index5 = 1; index5 < numbers.length; index5 += 1) {
  if (numbers[index5] > highestNumber) {
    highestNumber = numbers[index5];
  }
}
console.log(highestNumber);

// exercicio 6
let odds = [];

for (let index6 = 0; index6 < numbers.length; index6 += 1) {
  if (numbers[index6]%2 != 0) {
    odds.push(numbers[index6]);
  } 
}

if (odds.length === 0){
  console.log("nenhum valor impar encontrado");
} else {
  console.log("existem", odds.length, "numeros impares que são:", odds);
}

// exercicio 7
let lowestNumber = numbers[0];

for (let index5 = 1; index5 < numbers.length; index5 += 1) {
  if (numbers[index5] < lowestNumber) {
    lowestNumber = numbers[index5];
  }
}
console.log(lowestNumber);

// exercicio 8
let array = [];

for (let index8 = 1; index8 < 26; index8 += 1) {
  array.push(index8);
}
console.log(array);