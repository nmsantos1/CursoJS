// Declaração de função (function hoisting)
function falaOi(){
    console.log('Oi');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado');
}

souUmDado();

// Arrow function

const funcArrow = () =>{
    console.log('Arrow Function');
};
funcArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando');
    }
}

obj.falar();