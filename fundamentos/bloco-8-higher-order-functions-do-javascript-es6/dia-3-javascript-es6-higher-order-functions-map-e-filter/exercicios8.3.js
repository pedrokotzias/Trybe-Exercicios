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

function formatedBookNames() {
  const bookshelf = books.map((books) => `${books.name} - ${books.genre} - ${books.author.name}`);
  return bookshelf;
}
console.log(formatedBookNames());

function nameAndAge() {
  const authorInfos = books.map(authorInfo => ({
    author: authorInfo.author.name,
    age: (authorInfo.releaseYear - authorInfo.author.birthYear),
  }));
  authorInfos.sort((a, b) => a.age - b.age);
  return authorInfos;
}
console.log(nameAndAge());

function fantasyOrScienceFiction() {
  const fantasyOrSciFi = books.filter((genre) => genre.genre === 'Ficção Científica' || genre.genre === 'Fantasia');
  return fantasyOrSciFi;
}
console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  const currentYear = new Date().getFullYear();
  const oldBooks = books.filter((bookAge) => (currentYear - bookAge.releaseYear) > 60);
  oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
  return oldBooks;
}
console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  const authorNamesByGenre = books.filter((genre) => genre.genre === 'Ficção Científica' || genre.genre === 'Fantasia')
  .map((names) => names.author.name).sort();
  return authorNamesByGenre;
}
console.log(fantasyOrScienceFictionAuthors());

function oldBooks() {
  const currentYear = new Date().getFullYear();
  const oldBooksNames = books.filter((bookAge) => (currentYear - bookAge.releaseYear) > 60)
  .map((books) => books.name);
  return oldBooksNames;
}
console.log(oldBooks());

function authorWith3DotsOnName() {
  const authorWithInitials = books.find((book) => (book.author.name.split(' ')
    .filter((word) => word.endsWith('.')).length === 3)).name;
  return authorWithInitials;
}
console.log(authorWith3DotsOnName());
