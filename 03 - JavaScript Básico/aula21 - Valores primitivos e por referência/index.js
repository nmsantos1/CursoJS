/*
  Primitivos (imutáveis) - string, number, boolean, undefined, null (biginit, symbol)
#####################################################################################
    let nome = 'Natanael';
    nome = 'Marcos';
    console.log(nome);
###############################################
    let nome = 'Natanael';
    nome[0] = 'R'; ==> Não funciona na String
    console.log(nome[0]);
###############################################
    let a = 'A'
    let b = a // Cópia
    console.log(a, b); // ==> "A A"

    a = 'C'
    console.log(a, b); // ==> "C A"
###############################################
*/

/*
    Referêmcia (mutável) - array, object, function
##################################################
    let a = [1, 2, 3];
    let b = a; // Aponta para o "a"
    let c = [...a]; // Copia o valor de "a"
    console.log(a, b); //==> "[ 1, 2, 3 ] [ 1, 2, 3 ]"

    a.push(4);
    console.log(a, b); //==> "[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]"

    b.pop();
    console.log(a, b); //==> "[ 1, 2, 3 ] [ 1, 2, 3 ]"
############################################################
    const a = {
    nome: 'Natanael',
    sobrenome: 'Marconato'
    };
    const b = a;
    a.nome = 'Natan'
    console.log(a);
    console.log(b);
############################################################

*/