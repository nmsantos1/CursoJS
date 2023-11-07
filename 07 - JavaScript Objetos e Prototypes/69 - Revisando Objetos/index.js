const pessoa1 = {
    nome: 'Natanael',
    sobrenome: 'Marconato',
    idade: 20
};
console.log(pessoa1.nome);
console.log(pessoa1['sobrenome']);
const chave1 = 'idade';
console.log(pessoa1[chave1]);
//=========================================
const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otávio';
pessoa2.idade = 40;

//delete pessoa2.idade;
console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

pessoa2.falarNome = function() {
    return console.log(`${this.nome} está falando seu nome.`);
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
};

pessoa2.falarNome();
console.log(pessoa2.getDataNascimento());

for (let chave2 in pessoa2){
    console.log(chave2);
    console.log(pessoa2[chave2]);
}
//====================================================
// factory functions

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p3 = criaPessoa('Gustavo', 'Carvalho');
console.log(p3.nomeCompleto);
//====================================================
// Constructor functions

function Pessoa4(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this);
}
const p4 = new Pessoa4('Gabriel', 'Silva');
p4.sobrenome = 'Santos';
Object.freeze(p4);
p4.sobrenome = 'Marconato';
console.log(p4);