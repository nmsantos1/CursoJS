// 'if' pode ser usado sozinho
// sempre que utilizo a palavra 'else', precisa ter uma condição 'if' antes
// posso ter varios 'else if' na checagem
// só é possivel ter 1 'else' na checagem


const hora = 20;

if (hora >= 0 && hora <= 11){
    console.log('Bom Dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite!');
} else {
    console.log('Horário Incorreto!');
}

const tenhoGrana = true;
if (tenhoGrana){
    console.log('Vou sair de casa');
} else{
    console.log('Não vou sair de casa');
}