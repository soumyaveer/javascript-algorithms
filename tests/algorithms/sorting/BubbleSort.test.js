const BubbleSort = require('../../../src/algorithms/sorting/BubbleSort');

describe('sort', () => {
  test('sorts the elements in ascending order', () => {
    let elements = [0, 2, 5, 3, 1, 4];
    let bubble = new BubbleSort(elements);

    expect(bubble.sort()).toMatchObject([0, 1, 2, 3, 4, 5]);
  })
});