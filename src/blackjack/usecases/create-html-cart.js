/**
 * 
 * @param {String} carta carta que se ha sacado del maso
 * @returns {HTMLImageElement} retorna la carta creada en memoria
 */
export const crearCartaHtml = (carta) => {
    // <img class="carta" src="assets/cartas/2C.png">
    if ((!carta))
        throw new Error('La carta es obligatoria');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
};