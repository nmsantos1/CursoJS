/*
Operadores de Comparação
> - Maior que
>= - Maior que ou igual a
< - Menor que
<= - Menor que ou igual a
== - igualdade (valor)
=== - igualdade estrita (valor e tipo)
!= - diferente (valor)
!== - diferente estrito (valor e tipo)
*/
console.log(10 > 5); //true
console.log(10 >= 5);//true
console.log(10 < 5); //false
console.log(10 <= 5);//false

let n1 = 10;//number
let n2 = '10';//String
comp = n1 == n2;
console.log(comp);//true

let n3 = 10;//number
let n4 = '10';//String
comp1 = n3 === n4;
console.log(comp1);//false