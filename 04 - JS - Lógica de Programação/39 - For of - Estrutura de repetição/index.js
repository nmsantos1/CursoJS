// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (String, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = 'Natanael Marconato';

/*
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}
*/
/*
for (let i in nome){
    console.log(nome[i]);
}
*/

for (let valor of nome){
    console.log(valor);
}

console.log('');

const li = ['zero', 'um', 'dois'];

li.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});