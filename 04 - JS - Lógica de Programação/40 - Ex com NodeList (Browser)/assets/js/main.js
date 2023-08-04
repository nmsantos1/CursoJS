const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// const estiloBody = getComputedStyle(document.body);
// const bgBody = estiloBody.backgroundColor;
// console.log(bgBody);
//rgb(17, 86, 102)

for (let p of ps){
    p.style.backgroundColor = 'rgb(17, 86, 102)';
    p.style.color = 'rgb(255, 255, 255)';
}