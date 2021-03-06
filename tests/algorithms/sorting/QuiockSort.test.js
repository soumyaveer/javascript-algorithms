const QuickSort = require('../../../src/algorithms/sorting/QuickSort');

describe('sort', () => {
  test('sorts the elements in ascending order when all numbers are positive', () => {
    let elements = [0, 2, 5, 3, 1, 4];
    let quick = new QuickSort();

    expect(quick.sort(elements)).toMatchObject([0, 1, 2, 3, 4, 5]);
  });

  test('sorts the elements in ascending order when all numbers are not positive', () => {
    let elements = [0, 2, -5, 3, -1, 4];
    let quick = new QuickSort();

    expect(quick.sort(elements)).toMatchObject([-5, -1, 0, 2, 3, 4]);
  });

  test('sorts the elements in ascending order when all numbers are negative', () => {
    let elements = [-2, -5, -3, -1, -4];
    let quick = new QuickSort();

    expect(quick.sort(elements)).toMatchObject([-5, -4, -3, -2, -1]);
  });

  test('sorts the elements in ascending order when one number is infinity', () => {
    let elements = [-2, Infinity, -3, -1, -4];
    let quick = new QuickSort();

    expect(quick.sort(elements)).toMatchObject([-4, -3, -2, -1, Infinity]);
  });
});