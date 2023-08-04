/*
let i = 0;

while (i <= 10){
    console.log(i);
    i++;
}
console.log('');
const nome = 'Natanael';
let j = 0;
while (j < nome.length){
    console.log(nome[j]);
    j++;
}
*/

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

//let rand = random(min, max);
let rand = 10;

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
console.log('########');
do{
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10)