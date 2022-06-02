// objetos
// exercicio 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log('Bem-vinda, ' + info.personagem);

// exercicio 2
info.recorrente = 'Sim';

console.log(info);

// exercicio 3
for (index in info ) {
  console.log(index);
}

// exercicio 4
for (index in info ) {
  console.log(info[index]);
}

// exercicio 5

/*console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log('Ambos ' + index[3]); */

for (let index in info) {
  if (
    index === 'recorrente' &&
    info[index] === 'Sim' &&
    info2[index] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[index] + ' e ' + info2[index]);
  }
}

// exercicio 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '".');

// exercicio 7
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)

// exercicio 8
  if (leitor.livrosFavoritos.length > 1) {
    console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')
  } else {
    console.log(leitor.nome + ' tem apenas ' + leitor.livrosFavoritos.length + ' livro favorito.')
  }

