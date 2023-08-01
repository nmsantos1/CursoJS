const data = new Date();
const diaSemana = data.getDay();
const diaSemanaNome = getDiaSemanaNome(diaSemana);


function getDiaSemanaNome(diaSemana) {
    let diaSemanaNome;
    switch (diaSemana){
        case 0:
            diaSemanaNome = 'Domingo';
            return diaSemanaNome;
        case 1:
            diaSemanaNome = 'Segunda';
            return diaSemanaNome;
        case 2:
            diaSemanaNome = 'Terça';
            return diaSemanaNome;
        case 3:
            diaSemanaNome = 'Quarta';
            return diaSemanaNome;
        case 4:
            diaSemanaNome = 'Quinta';
            return diaSemanaNome;
        case 5:
            diaSemanaNome = 'Sexta';
            return diaSemanaNome;
        case 6:
            diaSemanaNome = 'Sábado';
            return diaSemanaNome;
        default:
            diaSemanaNome = '';
            return diaSemanaNome;
    }
}

/*
let diaSemanaNome;
if (diaSemana === 0) diaSemanaNome = 'Domingo';
else if (diaSemana === 1) diaSemanaNome = 'Segunda';
else if (diaSemana === 2) diaSemanaNome = 'Terça';
else if (diaSemana === 3) diaSemanaNome = 'Quarta';
else if (diaSemana === 4) diaSemanaNome = 'Quinta';
else if (diaSemana === 5) diaSemanaNome = 'Sexta';
else if (diaSemana === 6) diaSemanaNome = 'Sábado';
else diaSemanaNome = '';
*/

/*
let diaSemanaNome;
switch (diaSemana){
    case 0:
        diaSemanaNome = 'Domingo';
        break;
    case 1:
        diaSemanaNome = 'Segunda';
        break;
    case 2:
        diaSemanaNome = 'Terça';
        break;
    case 3:
        diaSemanaNome = 'Quarta';
        break;
    case 4:
        diaSemanaNome = 'Quinta';
        break;
    case 5:
        diaSemanaNome = 'Sexta';
        break;
    case 6:
        diaSemanaNome = 'Sábado';
        break;
    default:
        diaSemanaNome = '';
}
*/

console.log(diaSemana, diaSemanaNome);