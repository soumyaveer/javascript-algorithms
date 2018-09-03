const Dictionary = require('../../src/containers/Dictionary');

describe('set()', () => {
  test('adds a new item to the dictionary, when dictionary is empty', () => {
    let dictionary = new Dictionary();
    expect(dictionary.isEmpty).toBe(true);

    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    expect(dictionary.size).toBe(1);
    expect(dictionary.keys).toMatchObject(["Gandalf"]);

    expect(dictionary.values).toMatchObject(["gandalf_the_grey@wizard.com"]);
  });

  test('adds a new item to the dictionary, when it is not empty', () => {
    let dictionary = new Dictionary();
    dictionary.set("Gandalf", "gandalf_the_grey@wizard.com");
    dictionary.set("Legolas", "legolas@elf.com");
    dictionary.set("Aragorn", "strider@gondor.com");
    dictionary.set("Frodo", "frodo_baggins@shire.com");

    expect(dictionary.size).toBe(4);
    expect(dictionary.keys).toMatchObject(["Gandalf", "Legolas", "Aragorn", "Frodo"]);

    expect(dictionary.values).toMatchObject(
      ["gandalf_the_grey@wizard.com",
        "legolas@elf.com",
        "strider@gondor.com",
        "frodo_baggins@shire.com"
      ]
    );
  });
});