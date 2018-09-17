const SequentialSearch = require('../../../src/algorithms/searching/SequentialSearch');

describe('search', () => {
  test('returns true if searched item is present in the array', () => {
    let elements = [0, 2, 5, 3, 1, 4];
    let searchKey = 3;
    let sequential = new SequentialSearch(elements);

    expect(sequential.search(searchKey)).toBe(true);
  });

  test('returns false if searched item is not present in the array', () => {
    let elements = [0, 2, 5, 3, 1, 4];
    let searchKey = 8;
    let sequential = new SequentialSearch(elements);

    expect(sequential.search(searchKey)).toBe(false);
  });

  test('returns false if array is empty', () => {
    let elements = [];
    let searchKey = 8;
    let sequential = new SequentialSearch(elements);

    expect(sequential.search(searchKey)).toBe(false);
  });
});