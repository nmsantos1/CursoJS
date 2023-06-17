// Array ==> Object
//               0           1       2
const alunos = ['Natanael', 'Luiz', 'João'];
console.log(alunos);
console.log(alunos[0]); // Natanael
console.log(alunos[1]); // Luiz
console.log(alunos[2]); // João

alunos[2] = 'Otávio'; // alterando o valor de um elemento
alunos[3] = 'Gabriel'; // Adicionando um novo elemento
alunos[alunos.length] = 'Fabio'; // Adicionando um novo elemento, dessa forma sempre no final
alunos.push('Lucas'); // Adiciona ao final (melhor forma)

alunos.unshift('Matheus'); // Adiciona no começo (move os outros)

alunos.pop(); // Remove o ultimo
const removido = alunos.pop(); // Salva o que foi removido

alunos.shift(); // Remove o primeiro

delete alunos[1]; // Deleta o valor de um elemento, e deixa ele vazio

console.log(alunos.slice(0, 3)); // Exibe os tres primeiros elementos
console.log(alunos.slice(0, -1)); // Exibe os elementos menos o ultimo ((0, -2) menos os dois ultimos...)

console.log(alunos instanceof Array); // Retorna se 'alunos' é um Array (true or false)