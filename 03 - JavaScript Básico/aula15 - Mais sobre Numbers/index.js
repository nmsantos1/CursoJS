let num1 = 1;
let num2 = 2.5643;
console.log(num1.toString + num2.toString); //não altera a variável para string, apenas exibe como uma
//num1 = num1.toString; #para transformar a variável em string
console.log(num2.toFixed(2)); //define a qtd de casas decimais e arredonda
console.log(Number.isInteger(num1)); // retorna se o numero é int | True or False
console.log(Number.isNaN(num2)); // retorna se não é um Number | True or False
/*
*   let num1 = 0.7;
*   let num2 = 0.1;
*   
*   num1 += num2; ==> 0.8
*   num1 += num2; ==> 0.9
*   num1 += num2; ==> 1.0
*
*   console.log(num1); ==> 0.999999999
*   console.log(Number.isInteger(num1)); // false
*   
*   num1 = Number(num1.toFixed(2));
*   console.log(num1); ==> 1.0
*   console.log(Number.isInteger(num1)); // true
*/

/*
*   let num1 = 0.7;
*   let num2 = 0.1;
*
*   num1 = ((num1 * 100) + (num2 * 100)) / 100; ==> 0.8
*   num1 = ((num1 * 100) + (num2 * 100)) / 100; ==> 0.9
*   num1 = ((num1 * 100) + (num2 * 100)) / 100; ==> 1.0
*
*   console.log(num1); ==> 1.0
*   console.log(Number.isInteger(num1)); // true
*/