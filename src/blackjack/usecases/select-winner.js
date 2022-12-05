/**
 * 
 * @param {Number} puntosComputadora Puntos obtenidos por la computadora
 * @param {Number} puntosMinimos Puntos obtenidos por el jugador
 */
export const selectWinner = (puntosComputadora, puntosMinimos) => {
    if ((!puntosComputadora || !puntosMinimos))
        throw new Error('puntosComputadora y puntosMinimos son necesarios');
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 300);
}