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
const initialFunction = x => x + 5;

function getValueAtZero(callbackX) {
  // write code here

  return callbackX(0);
}

getValueAtZero(initialFunction);
module.exports = getValueAtZero;
