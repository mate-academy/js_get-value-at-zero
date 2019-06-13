'use strict';

/**
 * Implement getValueAtZero function:
 *
 * it takes another function 'initialFunction' and returns it's value with 0 as
 * argument
 *
 * const initialFunction = function(x) {
 *     return x + 5
 * };
 * getValueAtZero(initialFunction) === 5;
 *
 * @param {function} initialFunction
 *
 * @return {function}
 */
function getValueAtZero(initialFunction) {
  const value = initialFunction(0);
  return value;
}

module.exports = getValueAtZero;
