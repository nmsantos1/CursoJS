//Filter -> retorna um array <= arrayOriginal (tamanho)
// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);






//retorne as pessoas que tem o nome com 5 letrar ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com A
const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const filterNome = pessoas.filter(valor => valor.nome.length >= 5);
console.log(filterNome);
const filterIdade = pessoas.filter(valor => valor.idade > 50);
console.log(filterIdade);
const filterFimNomeA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(filterFimNomeA);