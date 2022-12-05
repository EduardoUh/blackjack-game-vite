/* Este es el archivo de barril, hace las exportaciones de todas
las funcionalidades que se necesiten, y debido a esto las importaciones
en otros scripts pueden hacerce en menos líneas
ejemplo: supongamos que estamos en el index.js de blackjack
import {crearDeck, valorCarta, crearCartaHtml} from './usecases' 
como se puede observar al estar las funcionalidades acumuladas en un mismo
archivo le permite a los otros hacer las importaciones en una misma linea */
export { crearDeck } from './create-deck';
export { pedirCarta } from './pop-card';
export { valorCarta } from './valor-carta';
export { turnoComputadora } from './turno-computadora';
export { crearCartaHtml } from './create-html-cart';
export { selectWinner } from './select-winner';