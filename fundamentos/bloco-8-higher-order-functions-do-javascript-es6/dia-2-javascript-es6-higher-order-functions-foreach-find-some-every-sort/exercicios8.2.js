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

function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());


function smallerName() {
  let nameBook;

  books.forEach((bookNames) => {
    if (!nameBook || bookNames.name.length < nameBook.length) {
      nameBook = bookNames.name;
    } 
  });
  return nameBook;
}
console.log(smallerName());


function getNamedBook() {
  return books.find((characters) => characters.name.length === 26);
}
console.log(getNamedBook());

function booksOrderedByReleaseYearDesc() {
  books.sort((a, b) => b.releaseYear - a.releaseYear);
}

function everyoneWasBornOnSecXX(books, min, max) {
  return books.every((year) => year.author.birthYear >= min && year.author.birthYear < max);
}
console.log(everyoneWasBornOnSecXX(books, 1900, 2000));


function someBookWasReleaseOnThe80s() {
  return books.some((eighties) => eighties.releaseYear >= 1980 && eighties.releaseYear < 1990);
}
console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  return books.every((uniqueBirthyear) => uniqueBirthyear.author.birthYear !== uniqueBirthyear.author.birthYear);
}

console.log(authorUnique());