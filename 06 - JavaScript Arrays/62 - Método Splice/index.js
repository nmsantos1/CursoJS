const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);


// const removidos1 = nomes.splice(4, 1);
// console.log(nomes, removidos1); // = [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ]
// const removidos2 = nomes.splice(-1, 1);
// console.log(nomes, removidos2); // = [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] [ 'Júlia' ]
//const removidos3 = nomes.splice(-2, 1);
//console.log(nomes);

// nomes.splice(3, 0, 'Luiz'); //add luiz no idicie 3
// console.log(nomes);// = [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Gabriel', 'Júlia' ]
//nomes.splice(3, 1, 'Luiz'); //add luiz no lugar do 'Gabriel' (idicie 3)
//console.log(nomes);// = [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Júlia' ]

const pop = nomes.splice(-1, 1); //remove o ultimo elemento
const shift = nomes.splice(0, 1); //remove o primeiro elemento
nomes.splice(nomes.length, 0, 'luiz') //push -> adiciona no fim
nomes.splice(0, 0, 'Ana')// adiciona no começo