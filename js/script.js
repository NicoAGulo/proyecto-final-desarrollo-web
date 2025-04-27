const logoCentroIndex = document.getElementById('logo-centro');
let escala = 1;

setInterval(() => {
    escala = escala === 1 ? 1.5 : 3; // Alterna entre 1 y 1.1
    logoCentroIndex.style.transform = `scale(${escala})`;
}, 100); // Cada 1000 milisegundos (1 segundo)




const logoEcoIndex1 = document.getElementById('eco-1');
const logoEcoIndex2 = document.getElementById('eco-2');

setInterval(() => {

    escala = escala === 1 ? 1.1 : 2; // Alterna entre 1 y 1.1
    logoEcoIndex1.style.transform = `scale(${escala})`;
    logoEcoIndex2.style.transform = `scale(${escala})`;
}, 1000); // Cada 1000 milisegundos (1 segundo)