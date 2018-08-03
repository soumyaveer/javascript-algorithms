const Stack = require('../../src/containers/stack');


test('push adds element at the top of the stack', () => {
  let stack = new Stack();

  stack.push(1);
  expect(stack.peek()).toBe(1);
});

test('pop removes element from the top of the stack', () =>{
  let stack = new Stack();

  stack.push(1);
  stack.push(2);

  expect(stack.size()).toBe(2);
  expect(stack.pop()).toBe(2);
  expect(stack.size()).toBe(1);
});
