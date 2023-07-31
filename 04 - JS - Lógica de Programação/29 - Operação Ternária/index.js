// (condição) ? 'valor para true' : 'valor para false'
const pontosUser = 999;
const nivelUser = pontosUser >= 1000 ? 'VIP' : 'Comum';
console.log(nivelUser);

/*
if (pontosUser >= 1000){
    console.log('VIP');
} else {
    console.log('Comum');
}
*/

const corUser = 'Azul';
const corPad = corUser || 'Preto';

console.log(corPad);