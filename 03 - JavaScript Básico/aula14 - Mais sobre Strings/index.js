/*
*   let s1 = "Um \"texto\""; // log = Um "texto"
*   let s2 = "Exibindo \\ barra invertida" //log = Exibindo \ barra invertida
*/

let umaString = "Um texto";
console.log(umaString[4]); // = "e"
console.log(umaString.charAt(4)); // = "e"
console.log(umaString.replace("Um", "Outro")); // = Outro texto
console.log(umaString.length); // = tamanho da string
console.log(umaString.slice(2, 6)); // = tex
console.log(umaString.split(' ')); // = [ 'Um', 'texto' ]
console.log(umaString.toUpperCase()); // tudo maiusculo 
console.log(umaString.toLowerCase()); // tudo minusculo