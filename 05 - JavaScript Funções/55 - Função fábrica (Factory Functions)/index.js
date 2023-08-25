function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`;
        },
        altura: altura,
        peso: peso,
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        }
    };
}

const p1 = criaPessoa('Natanael', 'Marconato', 1,85, 81);
const p2 = criaPessoa('Mario', 'Gomez', 1,77, 79);

console.log(p1);
console.log(p1.fala('JS'));
console.log(p1.imc);
console.log(p1.nomeCompleto);

console.log(p2);
console.log(p2.fala('JS'));
console.log(p2.imc);
console.log(p2.nomeCompleto);
