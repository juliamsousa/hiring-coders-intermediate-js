const pessoa = {
  nome: "Julia",
  sobrenome: "Miranda",
  dataNascimento: "27/10/1999",
  curso: "Ciencia da Computacao",
  idade: 22,
  universidade: "Universidade Federal de Ouro Preto"
}

// podemos acessar os atributos da seguinte maneira:
const nome = pessoa.nome;
const sobrenome = pessoa.sobrenome;
const dataNascimento = pessoa.dataNascimento;
const curso = pessoa.curso;
const idade = pessoa.idade;
const universidade = pessoa.universidade;
// porem dessa maneira temos muita repeticao de codigo e fica extremamente verboso

function deconstruct(pessoa) {
  /**
   * o motor do javascript reconhece os atributos de mesmo nome nas variaveis
   * com isso os valores sao atribuitos de acordo com os proprios 
   * nomes dos atributos do objeto 
   *  */ 

  // esse processo é chamado de desconstrução
  let {nome, sobrenome, dataNascimento, curso, idade, universidade} = pessoa;

  console.log(
`Meu nome é ${nome} ${sobrenome}, nasci em ${dataNascimento} e tenho ${idade} anos.
Atualmente faço ${curso} na ${universidade}`
);
}

deconstruct(pessoa);