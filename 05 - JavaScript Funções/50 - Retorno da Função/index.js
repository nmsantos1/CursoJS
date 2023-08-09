// return
// retorna um valor
// termina a função

/*
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(3, 2));
*/

/*
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Natanael', 'Marconato');
const p2 = {
    nome: 'Kauan',
    sobrenome: 'Ramos'
}
console.log(p1);
console.log(p2);
*/

/*
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo'));
*/

function criaMult(multi){
    // multiplicador
    return function (n){
        return n * multi;
    };
}

const duplica = criaMult(2);
const triplica = criaMult(3);
const quadriplica = criaMult(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));