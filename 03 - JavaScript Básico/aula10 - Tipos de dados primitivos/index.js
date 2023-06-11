const nome = 'Natanael'; //String
const nome1 = "Natanael"; //String
const nome2 = `Natanael`; //String
const num1 = 10;
const num = 10.52;
let nomeAluno; //undefined ==> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; //Nulo ==> não aponta pra local nenhuma na memória
const aprovado = true; //Boolean ==> true e false (lógico)

let a = 2;
let b = a;

console.log(a, b); // 2, 2

a = 3;

console.log(a, b); // 3, 2