// Escreva uma função que receba 2 numeros e retorne o maior deles:
function maiorNum(num1, num2){
    if (num1 > num2)
        return num1;
    return num2;
}

function maiorNum2(num1, num2){
    return num1 > num2 ? num1 : num2;
}

const maiorNum3 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(maiorNum(7, 1));
console.log(maiorNum2(7, 1));
console.log(maiorNum3(7, 1));