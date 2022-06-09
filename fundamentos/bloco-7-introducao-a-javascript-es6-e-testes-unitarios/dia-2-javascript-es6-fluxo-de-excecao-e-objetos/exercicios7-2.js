// parte 2
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (orderInfo) => {
  const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá ${deliveryPerson} entrega para: ${Object.values(order)[0]}, telefone: ${Object.values(order)[1]},
  endereço: ${street}, nª: ${number}, ap: ${apartment}`);
};

customerInfo(order);

const orderModifier = (order) => {
  const newCustomer = {
    name: 'Luiz Silva',
    total: 50
  }
  Object.assign(order, newCustomer);
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const total = order.payment.total = '50';

  console.log(`Olá ${Object.values(order)[0]}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é de R$ ${total}`);
};

orderModifier(order);

// parte 3
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercicio 1
const nightClass = (object, key, value) => {
  object[key] = value;
};

nightClass(lesson2, 'turno', 'noite');
console.log(lesson2);

// exercicio 2
const listingKeys = (object) => Object.keys(object);

console.log(listingKeys(lesson2));


// exercicio 3
const objectLength = (object) => Object.keys(object).length;


console.log(objectLength(lesson1));

// exercicio 4
const objectValues = (object) => Object.values(object);

console.log(objectValues(lesson3));

// exercicio 5
const allLesson = {};

Object.assign(allLesson, { lesson1, lesson2, lesson3 });

console.log(allLesson);

// exercicio 6
const totalStudents = (object) => {
  let total = 0;
  const array = Object.keys(object);
  for (index in array) {
    total += object[array[index]].numeroEstudantes;
  }
  return total;
}

console.log(`O total de estudantes é: ${totalStudents(allLesson)}`);

// exercicio 7
const getValueByNumber = (object, number) => Object.values(object)[number];
console.log(getValueByNumber(lesson1, 3));

// exercicio 8
const verifyPair = (object, key, value) => {
  const array = Object.entries(object);
  let isEqual = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) {
      isEqual = true;
    }
    return isEqual;
  }
};

console.log(verifyPair(lesson1, 'materia', 'Matemática'));

// bonus 1