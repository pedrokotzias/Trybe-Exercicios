// exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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
let compare = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > compare) {
    compare = numbers[index];
  }
}
console.log(compare);