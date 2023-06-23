/*
const pessoa1 ={
    nome: 'Natanael',
    sobrenome: 'Marconato',
    idade: 20
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

/*
function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Natanael', 'Marconato', 20);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

const pessoa1 = {
    nome: 'Natanael',
    sobrenome: 'Marconato',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} ${this.idade} está falando Oi...`);
    },

    incrementaIdade(){
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();