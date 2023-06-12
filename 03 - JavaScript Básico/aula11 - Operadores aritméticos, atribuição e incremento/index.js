/*
 * Aritméticos
 * + Adição 
 * + Concatenação
 * - Subtração
 * * Divisão
 * ** Potenciação
 * % Resto da divisão
 */
const num1 = 2;
const num2 = 10;

console.log(num1 + num2);
console.log(num1 + 'String' + 'String');
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num2 ** num1);
console.log(num1 % num2);

// ** ==> *, /, % ++> +, - (ordem)
console.log(num1 + num2 * num2); //102
console.log((num1 + num2) * num2); //120

let incremento = 1;
let decremento = 1;
incremento++; //dentro de um console.log exibiria sem calcular e depois faria o calculo
decremento--;
++incremento; //dentro de um console.log exibiria o valor já calculado
--decremento;


let contador = 0;
contador += 2; //contador = contador + 2
contador -= 2;
contador *= 2;
contador /= 2;
contador %= 2;
contador **= 2;

//NaN - Not a number
const n1 = 10;
const n2 = parseInt('5'); //convertendo a string '5' em int
const n3 = parseFloat('5.2'); //convertendo a string '5.2' em float
const n4 = Number('12.4'); //convertendo a string '12.4' em number, independe o tipo