// exercicio 1
function palindromeCheck (string) {
  var re = /[\W_]/g;
  var lowRegString = string.toLowerCase().replace(re, '');
  var reverseString = lowRegString.split('').reverse().join('');
  return lowRegString === reverseString;
}

// exercicio 2
function higherIndex(numbers) {
  let highIndex = 0;
  for(let index in numbers){
    if(numbers[highIndex] < numbers[index]) {
      highIndex = index;
    }
  }
  return highIndex;
}

// exercicio 3
function smallestIndex(numbers) {
  let smallIndex = 0;
  for(let index in numbers){
    if(numbers[smallIndex] > numbers[index]) {
      smallIndex = index;
    }
  }
  return smallIndex;
}


// exercicio 4
function nameHighestLength(words) {
  let highLength = words[0];
  for (let index in words) {
    if (highLength.length < words[index].length)
    highLength = words[index];
  }
  return highLength;
}

// exercicio 5
function numberRepeat(repeat) {
  let countRepeat = 0;
  let countNumber = 0;
  let indexRepeatNumber = 0;
  for (let index in repeat) {
    let compare = repeat[index];
    for (let index2 in repeat) {
      if (compare === repeat[index2]) {
        countRepeat += 1;
      }
    }
    if (countNumber > countRepeat) {
      countRepeat = countNumber;
      indexRepeatNumber = index;
    }
    countNumber = 0;
  }
  return repeat[indexRepeatNumber];
}

// exercicio 6
function numberUntilCount(count) {
  let sum = 0;
  if (count > 0 && (Math.floor(count) === count) && count !== Infinity) {
    for (let index = count; index > 0; index -= 1) {
      sum = sum + index;
    }
  } else {
    console.log('this number isnt a natural number, this function only works for natural numbers, use one!')
  }
  return sum;  
}

// exercicio 7
function compareStringLength(word, ending){
  word = word.split('');
  ending = ending.split('');
  control = true;
  if (ending.length < word.length) {
    for (let index = 0; index < ending.length; index += 1) {
      if (word[word.length - ending.length + index] != ending[index]) {
        control = false;
      }
    }
  } else {
    console.log('Primeira string tem que ser maior que a segunda')
  }
  return control;
}