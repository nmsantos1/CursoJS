try{
    // é executada quando não há erros
}catch(e){
    // é executada quando há erros
} finally{
    // sempre
}

function hora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    console.log(hora(data));
} catch(e){
    // tratar erro
} finally{
    console.log('Tenha um Bom Dia');
}
