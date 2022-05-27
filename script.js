/**
 * o match permite buscar conteudos especificos sobre uma massa de dados 
 * sem sabermos muito sobre sua estrutura ou saber se aquela informacao estara la
 *  */ 

const cpf = "Meu cpf é 123.432.123-22";

// para isso criamos uma regex para fazer o match dos dados
const cpfRegex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');4
const extractedCPF = cpf.match(cpfRegex);

console.log(`O CPF do cliente é: ${extractedCPF}`);

/**
 * Com dados padronizados que estao difusos na nossa massa
 * é possivel criar regexes e utilizar o match para extrai-los
 * 
 * Desafio: melhorar o validador de CPF
 */