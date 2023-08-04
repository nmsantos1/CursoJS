// Continue - pula para a próxima iteração do laço
// Break - sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if (numero === 2){
        console.log('pulou o 2');
        continue;
    }

    if (numero === 7){
        console.log('achou o 7, fim');
        break;
    }

    console.log(numero);
}