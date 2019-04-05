'use strict';

const getValueAtZero = require('./getValueAtZero');

test('(x) => x + 5', () => {
  expect(getValueAtZero(x => x + 5))
    .toBe(5);
});

test('(x) => x * 5', () => {
  expect(getValueAtZero(x => x * 5))
    .toBe(0);
});

test('(x) => x / 5', () => {
  expect(getValueAtZero(x => x / 5))
    .toBe(0);
});
