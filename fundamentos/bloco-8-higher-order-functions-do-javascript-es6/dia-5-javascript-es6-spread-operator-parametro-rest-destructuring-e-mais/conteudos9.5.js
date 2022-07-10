// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'abacaxi', 'laranja', 'lichia', 'uva verde'];
// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'chocolate derretido', 'leite de coco'];
const fruitSalad = (fruit, additional) => [...fruit, ...additional];


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};
const { workDays, weekend } = daysOfWeek;
const weekdays = [...workDays, ...weekend];


const user = {
  firstName: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};
const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userJobInfo = {...user, ...jobInfos};
const { firstName, age, nationality, profession, squad, squadInitials } = userJobInfo;
console.log(`Hi, my name is ${firstName}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`);


const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [hi, hiFunction] = saudacoes;


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, animal];


let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

  const multiply = (number, value = 1) => {
    return number * value;
  };
  
  console.log(multiply(8));