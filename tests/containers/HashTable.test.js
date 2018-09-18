let HashTable = require("../../src/containers/HashTable");

describe('set', () => {
  test('adds a new item to the hash table', () => {
    let hash = new HashTable();

    hash.set('Gandalf', 'gandalf@email.com');
    hash.set('Legolas', 'legolas@elf.com');
    hash.set('Aragorn', 'strider@gondor.com');
    hash.set('Frodo', 'frodo_baggins@shire.com');

    expect(hash.get('Gandalf')).toBe('gandalf@email.com');
    expect(hash.get('Frodo')).toBe('frodo_baggins@shire.com');
  });
});

describe('get', () => {
  test('returns the value from the hash table using key', () => {
    let hash = new HashTable();

    hash.set('Gandalf', 'gandalf@email.com');
    hash.set('Legolas', 'legolas@elf.com');
    hash.set('Aragorn', 'strider@gondor.com');
    hash.set('Frodo', 'frodo_baggins@shire.com');

    expect(hash.get('Gandalf')).toBe('gandalf@email.com');
    expect(hash.get('Frodo')).toBe('frodo_baggins@shire.com');
  });
});