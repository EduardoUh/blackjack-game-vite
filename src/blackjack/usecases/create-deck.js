import _ from 'underscore';
export const miNombre = 'Eduardo Iván';

/**
 * Esta función permite crear un nuevo maso de cartas
 * @param {Array<String>} tiposDeCarta Ej: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspecialesDeCarta Ej:['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo maso de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspecialesDeCarta) => {
    if ((!tiposDeCarta || tiposDeCarta.length === 0))
        throw new Error('tiposDeCarta es obligatorio como un arreglo de String');
    if ((!tiposEspecialesDeCarta || tiposEspecialesDeCarta.length === 0))
        throw new Error('tiposEspecialesDeCarta es obligatorio como un arreglo de String');
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspecialesDeCarta) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}
// se define lo que será exportado por defecto
// export default crearDeck;