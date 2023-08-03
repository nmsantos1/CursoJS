const frutas = ['pera', 'maçã', 'uva'];

for (let i in frutas){
    console.log(i, frutas[i]);
}

console.log('');

const pessoa = {
    nome: 'Natanael',
    sobrenome: 'Marconato',
    idade: 20
};

for (let i in pessoa){
    console.log(i, pessoa[i]);
}