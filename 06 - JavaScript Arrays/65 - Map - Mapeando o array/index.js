//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numDobro = numeros.map(valor => valor*2);
console.log(numDobro);

//para cada elemento
const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//retorne apenas uma string com o nome da pessoa
const nomePessoa = pessoas.map(valor => valor.nome);
console.log(nomePessoa);

//remova apenas a chave "nome" do objeto
const semNomePessoa = pessoas.map(valor => ({idade: valor.idade}));
console.log(semNomePessoa);

//adicione uma chave de id em cada objt
const idPessoa = pessoas.map((valor, indicie) => (obj = {...valor}, obj.id = (indicie+1), obj));
console.log(idPessoa);