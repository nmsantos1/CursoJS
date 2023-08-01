/*
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaNome(diaSemana) {
    let diaSemanaNome;
    switch (diaSemana){
        case 0:
            diaSemanaNome = 'domingo';
            return diaSemanaNome;
        case 1:
            diaSemanaNome = 'segunda-feira';
            return diaSemanaNome;
        case 2:
            diaSemanaNome = 'terça-feira';
            return diaSemanaNome;
        case 3:
            diaSemanaNome = 'quarta-feira';
            return diaSemanaNome;
        case 4:
            diaSemanaNome = 'quinta-feira';
            return diaSemanaNome;
        case 5:
            diaSemanaNome = 'sexta-feira';
            return diaSemanaNome;
        case 6:
            diaSemanaNome = 'sábado';
            return diaSemanaNome;
        default:
            diaSemanaNome = '';
            return diaSemanaNome;
    }
}

function getNomeMes(mes) {
    let nomeMes;
    switch (mes){
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'março';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
        default:
            nomeMes = '';
            return nomeMes;
    }
}

function zeroEsq(num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaNome(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()}, de ${nomeMes} ` +
    `de ${data.getFullYear()} ${zeroEsq(data.getHours())}:${zeroEsq(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);
*/

const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaNome(diaSemana) {
    let diaSemanaNome = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return diaSemanaNome[diaSemana]
}

function getNomeMes(mes) {
    let nomeMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return nomeMes[mes];
}

function zeroEsq(num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaNome(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()}, de ${nomeMes} ` +
    `de ${data.getFullYear()} ${zeroEsq(data.getHours())}:${zeroEsq(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);

/*
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-br', { dateStyle: 'full' });
*/