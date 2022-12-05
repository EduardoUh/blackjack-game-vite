/* Se importan las funciones de underscore (se instalo usando npm)
y se nombre como '_'(underscore) */
//import _ from 'underscore';
//_.shuffle;

/* Importación de ambos en una misma línea
import createNewDeck, { miNombre } from './usecases/create-deck';
*/
// de esta manera se da un alias o renombra una importación individual
//import { miNombre as importacionDeMiNombre } from './usecases/create-deck';
// importación de lo que se definió como exportación por defecto
//import createNewDeck from './usecases/create-deck';
/* Todas las importaciones fueron movidas a un "archivo de barril"
para que todas estas se concentren en un solo punto y no estén abultadas
aquí.
import { crearDeck as createNewDeck } from './usecases/create-deck';
import { pedirCarta } from './usecases/pop-card';
import { valorCarta } from './usecases/valor-carta'; 
*/
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
// console.log(importacionDeMiNombre);
//console.log(miNombre);
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHtml } from './usecases';
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');



deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = crearCartaHtml(carta);
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);

    } else if (puntosJugador === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});