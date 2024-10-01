const logoCentro = document.getElementById('logo-centro');
let grados = 0;

setInterval(() => {
    grados += 45; // Incrementa los grados de rotación
    logoCentro.style.transform = `rotate(${grados}deg)`;
}, 1000);