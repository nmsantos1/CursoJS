// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura, de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

function ePaisagem1(larg, altu){
    return larg > altu ? true : false;
}

function ePaisagem2(larg, altu){
    return larg > altu;
}

const ePaisagem3 = (larg, altu) => larg > altu;

console.log(ePaisagem1(1920, 1080));
console.log(ePaisagem2(1920, 1080));
console.log(ePaisagem3(1920, 1080));