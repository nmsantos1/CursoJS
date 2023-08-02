/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const num = [b, c, a];
[a, b, c] = num;

console.log(a, b, c);
*/

// ... -> rest, spread
//               0  1  2  3  4  5  6  7  8        
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNum, segundoNum, ...resto] = numeros;
console.log(primeiroNum, segundoNum); // -> 1, 2
console.log(resto); // -> [3, 4, 5, 6, 7, 8, 9]
*/
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNum, , terceiroNum] = numeros;
console.log(primeiroNum, terceiroNum); // -> 1, 3
*/

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros =[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(numeros[1][2]); // -> 6

const [,[,,seis]] = numeros;
console.log(seis); // -> 6

const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]); // -> 6