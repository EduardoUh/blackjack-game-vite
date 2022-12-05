/**
 * Esta función permite saber el valor de la carta que se le ha dado al jugador
 * @param {String} carta Recibe la carta que se le ha dado al jugador
 * @returns {Number} Retorna el valor de la carta recibida
 */
export const valorCarta = (carta) => {
    if ((!carta || carta.length === 0))
        throw new Error('carta es obligatorio como un string');
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}