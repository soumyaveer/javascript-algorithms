const Dictionary = require('../../src/containers/Dictionary');

describe('isEmpty', () => {
  test('returns true if dictionary is empty', () => {
    let dictionary = new Dictionary();

    expect(dictionary.isEmpty()).toBe(true);
  });

  test('returns false if dictionary is not empty', () => {
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");

    expect(dictionary.isEmpty()).toBe(false);
  });
});

describe('set', () => {
  test('adds a new item to the dictionary, when dictionary is empty', () => {
    let dictionary = new Dictionary();

    expect(dictionary.isEmpty()).toBe(true);

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    expect(dictionary.size()).toBe(1);
    expect(dictionary.keys()).toMatchObject(["Gandalf"]);

    expect(dictionary.values()).toMatchObject(["gandalf_the_grey@wizard.com"]);
  });

  test('adds a new item to the dictionary, when it is not empty', () => {
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size()).toBe(4);
    expect(dictionary.keys()).toMatchObject(["Gandalf", "Legolas", "Aragorn", "Frodo"]);

    expect(dictionary.values()).toMatchObject(
      ["gandalf_the_grey@wizard.com",
        "legolas@elf.com",
        "strider@gondor.com",
        "frodo_baggins@shire.com"
      ]
    );
  });
});

describe('delete', () => {
  test('removes the value from the dictionary using the key', () =>{
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size()).toBe(4);
    dictionary.delete("Legolas");

    expect(dictionary.size()).toBe(3);
    expect(dictionary.keys()).toMatchObject(["Gandalf", "Aragorn", "Frodo"]);
    expect(dictionary.values()).toMatchObject(
      ["gandalf_the_grey@wizard.com",
        "strider@gondor.com",
        "frodo_baggins@shire.com"
      ]
    );
  });

  test('removes the first value from the dictionary using the key', () =>{
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size()).toBe(4);
    dictionary.delete("Gandalf");

    expect(dictionary.size()).toBe(3);
    expect(dictionary.keys()).toMatchObject(["Legolas", "Aragorn", "Frodo"]);
    expect(dictionary.values()).toMatchObject(
      ["legolas@elf.com",
        "strider@gondor.com",
        "frodo_baggins@shire.com"
      ]
    );
  });

  test('removes the last value from the dictionary using the key', () =>{
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size()).toBe(4);
    dictionary.delete("Frodo");

    expect(dictionary.size()).toBe(3);
    expect(dictionary.keys()).toMatchObject(["Legolas", "Aragorn"]);
    expect(dictionary.values()).toMatchObject(
      ["gandalf_the_grey@wizard.com",
        "legolas@elf.com",
        "strider@gondor.com"
      ]
    );
  });
});

describe('has', () =>{
  test('returns true if the key exists in the dictionary', () => {
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size()).toBe(4);
    expect(dictionary.has("Aragorn")).toBe(true);
  });

  test('returns false if the key exists in the dictionary', () => {
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size()).toBe(4);
    expect(dictionary.has("Sauron")).toBe(false);
  });
});

describe('get', () => {
  test('returns the specific value searched by the key', () => {
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size()).toBe(4);
    expect(dictionary.get('Legolas')).toBe("legolas@elf.com");
  });
});

describe('clear' , () => {
  test('removes all items from the dictionary', () => {
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");

    expect(dictionary.size()).toBe(2);
    expect(dictionary.isEmpty()).toBe(false);

    dictionary.clear();

    expect(dictionary.isEmpty()).toBe(true);
  });
});

describe('size', () => {
  test('returns number iof elements in the dictionary', () => {
    let dictionary = new Dictionary();

    expect(dictionary.size()).toBe(0);

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");

    expect(dictionary.size()).toBe(2);
  });
});

describe('keys', () => {
  test('returns an array with all the keys of the dictionary', () =>{
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.keys()).toMatchObject(["Gandalf", "Legolas", "Aragorn", "Frodo"]);
  });
});

describe('values', () => {
  test('returns an array of all values of the dictionary', () => {
    let dictionary = new Dictionary();

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.values()).toMatchObject(
      ["gandalf_the_grey@wizard.com",
        "legolas@elf.com",
        "strider@gondor.com",
        "frodo_baggins@shire.com"
      ]
    );
  });
});