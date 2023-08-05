function relogio(){
    function getTimeFromSec(secs){
        const data = new Date(secs * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
            });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function(event){
            segundos++;
            relogio.innerHTML = getTimeFromSec(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function(event){
        const elemento = event.target;
        if (elemento.classList.contains('iniciar')){
            clearInterval(timer);
            relogio.classList.remove('pausado');
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if (elemento.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
}
relogio();