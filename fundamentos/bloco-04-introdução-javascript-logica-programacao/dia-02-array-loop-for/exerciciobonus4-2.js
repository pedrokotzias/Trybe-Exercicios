// exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers)

// exercicio 2
let numbersDecress = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbersDecress.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersDecress[index] > numbersDecress[secondIndex]) {
      let position = numbersDecress[secondIndex];
      numbersDecress[secondIndex] = numbersDecress[index];
      numbersDecress[index] = position;
    }
  }
}

console.log(numbersDecress);

// exercicio 3

let numbersMultiply = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for (index = 0; index < numbersMultiply.length; index += 1) {
  if (index < 9) {
    numbersMultiplied.push(numbersMultiply[index]*numbersMultiply[index+1]);
  } else {
    numbersMultiplied.push(numbersMultiply[9]*2);
  }
}

console.log(numbersMultiplied)