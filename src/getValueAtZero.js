'use strict';

/**
 * Implement getValueAtZero function:
 *
 * it takes another function 'initialFunction' and it's value with 0 as argument
 *
 * const initialFunction = function(x) {
 *     return x + 5
 * };
 * getValueAtZero(initialFunction) === 5;
 *
 * @param {function} callback
 *
 * @return {function}
 */
function getValueAtZero(callbackX) {
  // write code here

  return callbackX(0);
}
module.exports = getValueAtZero;
