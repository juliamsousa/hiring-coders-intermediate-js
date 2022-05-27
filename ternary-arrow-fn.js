function ternaryOperator (x, operator, y) {
  let result;
  operator == '+' ? (result =  x + y) : (result = x - y);

  return result;
}

function main() {
  let resultado = ternaryOperator(10, '+', 1231);
  console.log(`O resultado é ${resultado}`);

  resultado = ternaryOperator(10, '/', 1231);
  console.log(`O resultado é ${resultado}`);

  const mult = (x, y)=> {
    return x*y;
  }

  const div = (x, y)=> {
    return x/y;
  }

  resultado = mult(10, 1231);
  console.log(`O resultado é ${resultado}`);

  resultado = div(1231, 10);
  console.log(`O resultado é ${resultado}`);

  // arrow function que retorna um objeto
  // nao é muito utilizado mas é algo que a linguagem
  ()=> ({
    nome: "Julia",
    sobrenome: "Miranda",
    dataNascimento: "27/10/1999",
    curso: "Ciencia da Computacao",
    idade: 22,
    universidade: "Universidade Federal de Ouro Preto"
  });
}

main();