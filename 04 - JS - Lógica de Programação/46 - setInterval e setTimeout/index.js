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

const timer = setInterval(function (){
    console.log(hora());
}, 1000);

setTimeout(function (){
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log('Ola Mundo');
}, 6000)