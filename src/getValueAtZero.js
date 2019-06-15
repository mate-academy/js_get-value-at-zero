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
  // write code here
  const x = 0;

  return initialFunction(x);
}

module.exports = getValueAtZero;
