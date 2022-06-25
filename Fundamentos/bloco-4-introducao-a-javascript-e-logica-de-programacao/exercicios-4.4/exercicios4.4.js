let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//EX 1
console.log('Bem-vinda,' + ' ' + info.personagem)

//EX2
info['recorrente'] = 'sim';
console.log(info)

//EX3
for (let key in info ) {
    console.log(key)
};

//EX4
for (let key in info) {
    console.log(info[key])
};

//EX5
let info2 = {
    personagem: 'Tio Patinha',
    origem: "'Christmas on Bear Mountain Dell's Four Color Comics #178'",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};

for (let key in info) {
    if(info[key] === info2[key]) {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + ' e ' + info2[key])
    }
};

console.log('---------------------------');

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
    ]
  };

//EX6
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '"')

//EX7

leitor.livrosFavoritos.push (
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
)

console.log(leitor.livrosFavoritos[1])

//EX8
console.log(leitor.nome + ' tem 2 livros favoritos: ' + leitor.livrosFavoritos[0].titulo + ' e ' + leitor.livrosFavoritos[1].titulo)