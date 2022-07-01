
const newEmail = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com`}
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};


console.log(newEmployees(newEmail));

//

const numberChecker = (myNumber, number) => myNumber === number;

const prizeDraw = (myNumber, callback) => {
  const generate = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, generate) ? "Congrats! You've won" : 'Try again!';
};

console.log(prizeDraw(5, numberChecker));

//
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const points = (correctAwnsers, studentAwnsers) => {
  if (correctAwnsers === studentAwnsers) {
    return 1;
  } if (studentAwnsers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const examPoints = (correctAwnser, studentAwnsers, comparation) => {
  let counter = 0;
  for (let index = 0; index < correctAwnser.length; index += 1) {
    const comparationCheck = comparation(correctAwnser[index], studentAwnsers[index]);
    counter += comparationCheck;
  }
  return `Score: ${counter} points`;
}

console.log(examPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, points));