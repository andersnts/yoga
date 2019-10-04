/**
 * @module fontweight
 * @desc Font Weights tokens module.
 *
 * @memberof @gympass/tokens
 */

/**
 * A font Weight
 * @typedef FontWeight
 *
 * @type {Object}
 * @property {number} light font weight 300
 * @property {number} regular font weight 400
 * @property {number} bold font weight 700
 */

/**
 * @type {FontWeight}
 * @default
 */
const fontWeights = [300, 400, 700];

[fontWeights.light, fontWeights.regular, fontWeights.bold] = fontWeights;

export default fontWeights;
