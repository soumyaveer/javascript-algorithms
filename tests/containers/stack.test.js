const Stack = require('../../src/containers/stack');


test('push adds element at the top of the stack', () => {
  let stack = new Stack();

  stack.push(1);
  expect(stack.peek()).toBe(1);
});

