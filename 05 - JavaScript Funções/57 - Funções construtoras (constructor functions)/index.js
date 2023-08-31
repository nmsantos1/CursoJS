// retorna => objetos
// construtora => Pessoa (new)

function Pessoa(nome, sobrenome){
    //atributos/metodos privados
    const id = 123; 
    const metodoInterno = () =>{

    };

    //atributos/metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () =>{
        console.log(this.nome + ' Sou um método');
    };
}

const p1 = new Pessoa('Natanael', 'Marconato');
const p2 = new Pessoa('Luiz', 'Otavio');
p1.metodo();