// declarar variaveis como let || const
let nome = "Julia"
let sobrenome = "Miranda"
let dataNascimento = "27/10/1999"
let curso = "Ciencia da Computacao"
let idade = 22;
let universidade = "Universidade Federal de Ouro Preto"

const pessoa = {
  nome: "Julia",
  sobrenome: "Miranda",
  dataNascimento: "27/10/1999",
  curso: "Ciencia da Computacao",
  idade: 22,
  universidade: "Universidade Federal de Ouro Preto"
}

console.log(
`Let - Meu nome é ${nome} ${sobrenome}, nasci em ${dataNascimento} e tenho ${idade} anos.
Atualmente faço ${curso} na ${universidade}`
);

console.log(
`Object - Meu nome é ${pessoa.nome} ${pessoa.sobrenome}, nasci em ${pessoa.dataNascimento} e tenho ${pessoa.idade} anos.
Atualmente faço ${pessoa.curso} na ${pessoa.universidade}`
  );