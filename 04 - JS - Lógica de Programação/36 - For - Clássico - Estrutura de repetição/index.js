for (let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`);
}
console.log('');
for (let i = 10; i <= 50; i += 10) {
    console.log(`Linha ${i}`);
}
console.log('');
for (let i = 50; i >= 10; i -= 10) {
    console.log(`Linha ${i}`);
}
console.log('');
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}
console.log('');
const frutas = ['maça', 'pera', 'uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`ìndice ${i}:`, frutas[i]);    
}