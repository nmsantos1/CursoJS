/*
Operadores Lógicos
&& -> and -> e
|| -> or -> ou
! -> not -> não
*/

console.log(true && true && true);//true
console.log(true && false && true);//false

console.log(true || true);//true
console.log(true || false);//true
console.log(false || false);//false

const user = 'Natanael';
const senha = '12345678';
const logar = (user === 'Natanael') && (senha === '12345678')
console.log(logar);

console.log(!true);//false
console.log(!false);//true
