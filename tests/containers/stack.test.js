const Stack = require('../../src/containers/stack');

let stack = new Stack();

test('push adds element at the top of the stack', () => {
  expect(stack.push(1)).toBe([1]);
});