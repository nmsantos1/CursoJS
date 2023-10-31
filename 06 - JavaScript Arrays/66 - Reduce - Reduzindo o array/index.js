const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//some todos os numeros
const somaNum = numeros.reduce(((acumulador, valor) => acumulador+=valor), 0);
console.log(somaNum);

//retorne um array com os pares (filter)
const parNum = numeros.reduce((acumulador, valor) =>{
    if(valor%2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(parNum);

//retorne um array com o dobro dos valores (Map)
const dobroNum = numeros.reduce(((acumulador, valor) => {
    acumulador.push(valor*2);
    return acumulador;
}), []);
console.log(dobroNum);


const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 72},
    {nome: 'Wallace', idade: 47},
];

//Retorne a pessoa mais velha
const idadeMaiorPessoa = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(idadeMaiorPessoa);