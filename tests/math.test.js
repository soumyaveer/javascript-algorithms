const { sum, subtract } = require('../src/math');

test('adds properly', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts properly', () => {
  expect(subtract(3, 2)).toBe(1);
});