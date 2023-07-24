const num = 10;

if (num){ //se num é true
    console.log('LITERAL');
}
if (num >= 0 && num <=5){
    console.log('Numero está entre 0 e 5');
} else if (num >= 6 && num <= 8){
    console.log('Numero está entre 6 e 8');
} else if (num >= 9 && num <= 11){
    console.log('Numero está entre 9 e 11');
} else{
    console.log('Numero NÃO esta entre 0 e 11');
}