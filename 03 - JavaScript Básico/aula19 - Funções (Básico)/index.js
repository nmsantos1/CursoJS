function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

saudacao('Natanael');

//=====================================
function soma(num1, num2){
    const resultadoSoma =  num1 + num2;
    return resultadoSoma
}

console.log(soma(2, 3));

//=====================================
const raiz = function(num) {
    return num ** 0.5;
};

console.log(raiz(9));

//=====================================
const dobro = n => n * 2;

console.log(dobro(10));