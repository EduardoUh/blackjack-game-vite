/**
 * Esta función permite sacar una carta del maso y retorna dicha carta
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} Retorna la carta que se ha sacado del maso
 */
export const pedirCarta = (deck) => {
    if ((!deck || deck.length === 0)) {
        throw new Error('deck es obligatorio como un arreglo de String');
    }
    const carta = deck.pop();
    return carta;
}