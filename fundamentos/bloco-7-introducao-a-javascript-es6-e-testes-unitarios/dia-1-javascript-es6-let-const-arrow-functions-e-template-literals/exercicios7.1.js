// PARTE 1
// exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);

testingScope(true);
}

// exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${sortOddsAndEvens} se encontram ordenados de forma crescente!`);

// PARTE 2
// exercicio 1

const factorial = (number) => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }
  
  return result;
}

const ternaryFactorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(ternaryFactorial(5));

// exercicio 2

const longestWordFinder = (string) => {
  const stringSplit = string.split(' ');
  let longestWord = ' ';

  for(let index = 0; index < stringSplit.length; index += 1) {
    if(stringSplit[index].length > longestWord.length) {
      longestWord = stringSplit[index];
    }
  }

  return longestWord;
}
console.log(longestWordFinder("o paparelepipedo e uma palavra muito grande"));

//exercicio 3
const counter = document.getElementById('counter');
let clickCount = 0;

const button = document.querySelector('#btn');

button.addEventListener('click', () => {
  counter.innerHTML = clickCount += 1;
});

// exercicio 4
let replacingX = 'Tryber x aqui! :rainbow:'.replace('x', 'Pepa');
const arrayOfSkills = ['Dançar', 'Codar', 'Receptividade', 'Empatia', 'Catalisador']
const sorterArrayOfSkills = arrayOfSkills.sort((a, b) => a - b);

console.log(`${replacingX}
Tudo bem?

Minhas cinco principais habilidades são:
- ${sorterArrayOfSkills[0]}
- ${sorterArrayOfSkills[1]}
- ${sorterArrayOfSkills[2]}
- ${sorterArrayOfSkills[3]}
- ${sorterArrayOfSkills[4]}

#goTrybe`);
