const pessoa = {
    nome: 'Natanael',
    sobrenome: 'Marconato',
    idade: '20',
    endereco: {
        rua: 'Guido',
        numero: 1920
    }
};

const {nome: user, sobrenome = '', endereco: {rua, numero:num}} = pessoa;
console.log(user, sobrenome, rua, num);

const {nome, sobrenome: sobrNome, ...resto} = pessoa;
console.log(resto);