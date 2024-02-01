function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio () {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

// mostrando localização dos clicks no console
document.addEventListener('click', function(e) {
    console.log(e.target);
});

// iniciando o timer
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado'); 
    clearInterval(timer);
    iniciaRelogio();
});

// pausando o timer
pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});

// zerando o timer
zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
