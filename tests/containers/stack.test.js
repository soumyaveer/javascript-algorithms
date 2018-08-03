const Stack = require('../../src/containers/stack');

test('push adds element at the top of the stack', () => {
  expect(Stack.push(1)).toBe([1]);
});