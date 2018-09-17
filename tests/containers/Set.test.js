const Set = require("../../src/containers/Set");

describe('add', () => {
  test('adds a new item to the set, when set is empty', () => {
    let set = new Set();

    expect(set.size()).toBe(0);

    expect(set.add(1)).toBe(true);

    expect(set.size()).toBe(1);
    expect(set.has(1)).toBe(true);
  });

  test('adds a new item to the set, when set is not empty', () => {
    let set = new Set();

    expect(set.add(1)).toBe(true);
    expect(set.add(2)).toBe(true);
    expect(set.add(3)).toBe(true);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject([1, 2, 3]);
  });

  test('does not add a new item to the set, when set already has that item', () => {
    let set = new Set();

    expect(set.add(1)).toBe(true);
    expect(set.add(2)).toBe(true);
    expect(set.add(2)).toBe(false);

    expect(set.size()).toBe(2);
    expect(set.values()).toMatchObject([1, 2]);
  });
});

describe('delete', () => {
  test('removes the value from the beginning of the set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject([1, 2, 3]);

    set.delete(1);

    expect(set.size()).toBe(2);
    expect(set.values()).toMatchObject([2, 3]);
  });

  test('removes the value from the middle of the set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject([1, 2, 3]);

    set.delete(2);

    expect(set.size()).toBe(2);
    expect(set.values()).toMatchObject([1, 3]);
  });


  test('removes the value from the last position of the set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject([1, 2, 3]);

    set.delete(3);

    expect(set.size()).toBe(2);
    expect(set.values()).toMatchObject([1, 2]);
  });
});


describe('has', () => {
  test('returns true if the value exists in the Set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject([1, 2, 3]);
    expect(set.has(2)).toBe(true);
  });

  test('returns false if the value does not exist in the Set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject([1, 2, 3]);
    expect(set.has(5)).toBe(false);
  });

  test('returns false if the Set is a null set', () => {
    let set = new Set();

    expect(set.size()).toBe(0);
    expect(set.has(1)).toBe(false);
  });
});

describe('clear', () => {
  test('removes all the elements from the set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject([1, 2, 3]);

    set.clear();

    expect(set.size()).toBe(0);
    expect(set.values()).toMatchObject([]);
  });
});

describe('size', () => {
  test('returns the length of set, when it is an empty set', () =>{
    let set = new Set();

    expect(set.size()).toBe(0);
  });

  test('returns the length of set, when set has elements', () =>{
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
  });
});

describe('values', () => {
  test('returns array of all set values', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.values()).toMatchObject([1, 2, 3]);
  });

  test('returns empty array if set is empty', () => {
    let set = new Set();

    expect(set.values()).toMatchObject([]);
  });
});

describe('union', () => {
  test('returns a new set with the elements of both given sets', () => {
    let setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    let setB = new Set();
    setB.add(4);
    setB.add(5);
    setB.add(6);

    let unionAB = setA.union(setB);
    expect(unionAB.values()).toMatchObject([1, 2, 3, 4, 5, 6]);
  });

  test('returns a new set with the elements of both given sets, when one set in empty', () => {
    let setA = new Set();

    let setB = new Set();
    setB.add(4);
    setB.add(5);
    setB.add(6);

    let unionAB = setA.union(setB);
    expect(unionAB.values()).toMatchObject([4, 5, 6]);
  });
});

describe('intersection', () =>{
  test('returns the common elements between two sets', () => {
    let setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    let setB = new Set();
    setB.add(2);
    setB.add(3);
    setB.add(4);

    let intersectionAB = setA.intersection(setB);
    expect(intersectionAB.values()).toMatchObject([2, 3]);
  });

  test('returns a null set if no elements are common between two sets', () => {
    let setA = new Set();
    setA.add(1);
    setA.add(2);
    setA.add(3);

    let setB = new Set();
    setB.add(4);
    setB.add(5);
    setB.add(6);

    let intersectionAB = setA.intersection(setB);
    expect(intersectionAB.values()).toMatchObject([]);
  });
});
