const num = Number(prompt("Digite um número: "));
const numTitle = document.getElementById('num');
const texto = document.getElementById('texto');

numTitle.innerHTML = num;
texto.innerHTML = `<p>Raiz quadrada de ${num} é: ${num ** 0.5}.</p>`;
texto.innerHTML += `<p>${num} é int: ${Number.isInteger(num)}.</p>`;
texto.innerHTML += `<p>${num} é NaN: ${Number.isNaN(num)}.</p>`;
texto.innerHTML += `<p>${num} arredondado para baixo: ${Math.floor(num)}.</p>`;
texto.innerHTML += `<p>${num} arredondado para cima: ${Math.ceil(num)}.</p>`;
texto.innerHTML += `<p>${num} com duas casas decimais: ${num.toFixed(2)}.</p>`;