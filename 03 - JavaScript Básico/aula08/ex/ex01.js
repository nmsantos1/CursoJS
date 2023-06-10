const nome = 'Natanael'
const sobrenome = 'Marconato'
const idade = 20
const peso = 81
const altura = 1.85
let imc = peso / (altura * altura)
const anoAtt = 2023
const anoNasc = anoAtt - 20

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg, tem', altura + 'm de altura e seu IMC é de', imc);
// console.log(nome, sobrenome, 'nasceu em', anoNasc);


//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${altura}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}`);