/* import { pedirCarta } from "./pop-card";
import { valorCarta } from "./valor-carta";
import { crearCartaHtml } from "./create-html-cart";
import { selectWinner } from "./select-winner";  */
import { pedirCarta, valorCarta, crearCartaHtml, selectWinner } from './';
/**
 * turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para empatar o ganar
 * @param {HTMLElement} puntosHTML Elemento donde se colocara la puntuación
 * @param {HTMLElement} divCartasComputadora Elemento donde se colocara la imagen de la carta
 * @param {Array<String>} deck maso de cartas previamente creado
 */
/* El deck se define por defecto así porque en caso de que no tenga nada
el error ya está manejado en pedirCarta y no es necesario repetirlo */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if ((!puntosMinimos))
        throw new Error('puntosMinimos es obligatorio como un Number');
    if ((!puntosHTML))
        throw new Error('puntosHTML es obligatorio');
    if ((!divCartasComputadora))
        throw new Error('divCartasComputadora es obligatorio');
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    selectWinner(puntosComputadora, puntosMinimos);
}