/*
function funcao(){
    let total = 0;
    //console.log(arguments);
    //console.log(arguments[5]);
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/
/*
function funcao(a, b=2, c=4, d){
    console.log(a + b + c + d);
}
funcao(1, undefined, 20, 10);
*/
/*
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
//funcao({nome: 'Natanael', sobrenome: 'Marconato', idade: '20'});
const obj = {nome: 'Natanael', sobrenome: 'Marconato', idade: '20'};
funcao(obj);
*/
/*
function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao(['Natanael', 'Marconato', 20]);
*/
const conta = function (op, acu, ...num){
    for(let numero of num){
        if (op === '+') acu += numero;
        if (op === '-') acu -= numero;
        if (op === '/') acu /= numero;
        if (op === '*') acu *= numero;
    }
    console.log(acu);
};

conta('+', 0, 20, 30, 40, 50);