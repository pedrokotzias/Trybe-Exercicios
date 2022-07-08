const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrays) {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(books) {
  const names = books.reduce((acc, curr, index, array) => {
    if (index === array.length -1) return `${acc} ${curr.author.name}.`;
    return `${acc} ${curr.author.name},`
  }, '');
  return names;
}

function averageAge() {
  const totalOfAuthors = books.length;
  const authorAges = books.reduce((acc, curr) => (
    acc + (curr.releaseYear - curr.author.birthYear)
  ), 0);
  return authorAges/totalOfAuthors;
}


function longestNamedBook() {
  const compareNameLength = books.reduce((longestBookName,currentBookName) => (
    currentBookName.name.length > longestBookName.name.length
      ? currentBookName : longestBookName
    ));
  return compareNameLength;
}

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const lowerNames = names.map((element) => element.toLowerCase());
  const repeatedAs = lowerNames.reduce((acc, curr) => 
    acc + curr.split('').reduce((accu, curre) => {
      if (curre === 'a') return accu + 1;
      return accu;
    }, 0), 0);
  return repeatedAs;
}

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const studentAverages = students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
  }));
  return studentAverages;
}