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

test('peek returns the top element from the stack', () => {
  let stack = new Stack();

  stack.push(1);
  stack.push(2);

  expect(stack.peek()).toBe(2);
});

test('isEmpty returns true if stack has no elements', () => {
  let stack = new Stack();

  expect(stack.isEmpty()).toBe(true)
});

test('isEmpty returns false if stack has elements', () => {
  let stack = new Stack();

  stack.push(1);
  stack.push(2);

  expect(stack.isEmpty()).toBe(false)
});

test('clear removes all elements from the stach', () => {
  let stack = new Stack();

  stack.push(1);
  stack.push(2);

  expect(stack.isEmpty()).toBe(false);

  stack.clear();

  expect(stack.isEmpty()).toBe(true);
});