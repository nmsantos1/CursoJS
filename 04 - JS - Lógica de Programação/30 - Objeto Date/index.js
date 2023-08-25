const data01 = new Date();  // data atual
console.log('D1: ', data01.toString());

const data02 = new Date(0); // 01/01/1970 Timestamp unix
console.log('D2: ', data02.toString());

const data03 = new Date(2023, 3, 15, 15, 14, 27, 999); //contagem de mês começa em 0(jan), 1(fev), 2(mar), 3(abril)
console.log('D3: ', data03.toString());

const data04 = new Date('2023-04-20 15:20:59'); // nesse formato o mes funciona normalmente
console.log('D4: ', data04.toString());
console.log('D4: ', 'Dia', data04.getDate());
console.log('D4: ', 'Mês', data04.getMonth() + 1); // Mes começa no 0
console.log('D4: ', 'Ano', data04.getFullYear());
console.log('D4: ', 'Hora', data04.getHours());
console.log('D4: ', 'Min', data04.getMinutes());
console.log('D4: ', 'Seg', data04.getSeconds());
console.log('D4: ', 'ms', data04.getMilliseconds());
console.log('D4: ', 'Dia Semana', data04.getDay()); // 0-Domingo -> 6-Sabado

console.log('D5: ', Date.now());


const data06 = new Date();
const dataBr = formataData(data06);
console.log('D6: ', dataBr);

function zeroEsq(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data06){
    const dia = zeroEsq(data06.getDate());
    const mes = zeroEsq(data06.getMonth() + 1);
    const ano = zeroEsq(data06.getFullYear());
    const hora = zeroEsq(data06.getHours());
    const min = zeroEsq(data06.getMinutes());
    const seg = zeroEsq(data06.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}