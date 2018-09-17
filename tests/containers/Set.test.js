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
