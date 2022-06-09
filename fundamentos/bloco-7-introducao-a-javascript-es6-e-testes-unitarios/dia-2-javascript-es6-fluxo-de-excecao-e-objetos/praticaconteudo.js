const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

//pratica parte 1

// const newUsr = (object, keyName, value) => {
//   const object = {};
//   const keyName = object[keyName] = value;

//   return object[keyName];
// }

// connsole.log(newUsr(customer, lastName, lastName.value));

//pratica parte 2
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo'
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom'
};

const stud1 = Object.keys(student1);
const enumerateObj = (object) => {
  const skills = Object.keys(object);
  const level = Object.values(object);

  for (const index in skills) {
    console.log(`${skills[index]}, Nível: ${level[index]}`);
  }
}

console.log(`Object.keys aqui ${stud1}`)
enumerateObj(student1);
enumerateObj(student2);

//pratica parte 4
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};


const person = {
  name:'Roberto',
};

const lastName1 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName1);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);