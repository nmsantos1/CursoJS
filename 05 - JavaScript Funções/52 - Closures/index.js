function retornaFunc(nome){
    //const nome = 'Natanael';
    return function(){
        return nome;
    }
}

const funcao = retornaFunc('Natanael');
const funcao2 = retornaFunc('Luiz');
console.log(funcao());
console.log(funcao2());