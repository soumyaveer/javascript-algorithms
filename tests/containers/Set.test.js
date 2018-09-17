const Set = require("../../src/containers/Set");

describe('add', () => {
  test('adds a new item to the set, when set is empty', () => {
    let set = new Set();

    expect(set.size()).toBe(0);

    set.add(1);

    expect(set.size()).toBe(1);
    expect(set.has(1)).toBe(true);
  });

  test('adds a new item to the set, when set is not empty', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject(["1", "2", "3"]);
  });
});

describe('delete', () => {
  test('removes the value from the beginning of the set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject(['1', '2', '3']);

    set.remove(1);

    expect(set.size()).toBe(2);
    expect(set.values()).toMatchObject(['2', '3']);
  });

  test('removes the value from the middle of the set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject(['1', '2', '3']);

    set.remove(2);

    expect(set.size()).toBe(2);
    expect(set.values()).toMatchObject(['1', '3']);
  });


  test('removes the value from the last position of the set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject(['1', '2', '3']);

    set.remove(3);

    expect(set.size()).toBe(2);
    expect(set.values()).toMatchObject(['1', '2']);
  });
});


describe('has', () => {
  test('returns true if the value exists in the Set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject(['1', '2', '3']);
    expect(set.has(2)).toBe(true);
  });

  test('returns false if the value does not exist in the Set', () => {
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);

    expect(set.size()).toBe(3);
    expect(set.values()).toMatchObject(['1', '2', '3']);
    expect(set.has(5)).toBe(false);
  });

  test('returns false if the Set is a null set', () => {
    let set = new Set();

    expect(set.size()).toBe(0);
    expect(set.has(1)).toBe(false);
  });
});
