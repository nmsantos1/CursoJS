/*
    Escreva uma função que recebe um número e retorne:
    Num divisível por 3 = Fizz
    Num divisível por 5 = Buzz
    Num divisível por 3 e 5 = FizzBuzz
    Num não é divisível por 3 e 5 = Num
    Checar se o Num é realmente um número
    Use a função com números de 0 a 100
*/

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 0;
const max = 100;
const num = random(min, max);

function checkNum(num){
    if (typeof num === 'number'){
        if ((num % 3 === 0) && (num % 5 === 0))
            return 'FizzBuzz';
        if (num % 3 === 0)
            return 'Fizz';
        if (num % 5 === 0)
            return 'Buzz';
        return num;
    } else{
        return 'Não é um número' 
    }
}

console.log(checkNum(num));