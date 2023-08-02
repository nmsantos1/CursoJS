const v = true;
/*
let -> escopo de bloco {... bloco}
var -> apenas escopo de funcção
*/
let nome1 = 'Natanael'; // criando
var nome2 = 'Kauan';

if (v) {
    let nome1 = 'Rafa'; // criando dentro do bloco
    var nome2 = 'Gabriel'; // redeclarando
    if (v) {
        let nome1 = 'Otavio' // criando dentro do bloco
        var nome2 = 'Luiz' // redeclarando
        console.log(nome1, nome2); // -> 'Otavio', 'Luiz'
    }
}

console.log(nome1, nome2); // -> 'Natanael', 'Luiz'

function falaOi() {
    var nome3 = 'Rodrigo';
    //console.log(nome3);
}

//console.log(nome3); ERRO
falaOi();

console.log(sobrenome); // -> undefined
var sobrenome = 'Marconato';

//console.log(sobrenome); // ERRO
//let sobrenome = 'Marconato';