/*
&& -> false && true -> false "o valor mesmo"
FALSY
*false
0
'' "" ``
null / undefined]
NaN
*/
console.log('joao' && 0 && 'maria');// -> 0
console.log('joao' && true && 'maria');// -> maria

function falaOi(){
    return 'Oi';
}
const vaiExecutar = true; // true or false
console.log(vaiExecutar && falaOi());

/*
|| -> true && false -> "o valor verdadeiro"

*/
console.log(0 || false || 'Natanael' || true);// -> Natanael

const corUser = null;
const corPad = corUser || 'preto'
console.log(corPad);// -> (cor dentro do corUser ou 'preto')

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);// -> 'false'