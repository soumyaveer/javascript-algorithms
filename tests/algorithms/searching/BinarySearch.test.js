const BinarySearch = require("../../../src/algorithms/searching/BinarySearch");

describe('search', () => {
  test('returns true if searched item is present in the array', () => {
    let elements = [0, 1, 2, 3, 4, 5];
    let searchKey = 3;
    let binary = new BinarySearch(elements);

    expect(binary.search(searchKey)).toBe(true);
  });

  test('returns false if searched item is not present in the array', () => {
    let elements = [0, 1, 2, 3, 4, 5];
    let searchKey = 8;
    let binary = new BinarySearch(elements);

    expect(binary.search(searchKey)).toBe(false);
  });

  test('returns false if array is empty', () => {
    let elements = [];
    let searchKey = 8;
    let binary = new BinarySearch(elements);

    expect(binary.search(searchKey)).toBe(false);
  });
});