const Queue = require('../../../src/containers/queues/queue');

test('enqueue adds a new item at the back of the queue', () => {
  let queue = new Queue();

  queue.enqueue(1);
  expect(queue.front()).toBe(1);
});


test('dequeue removes first item from the queue', () =>{
  let queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.size()).toBe(2);
  expect(queue.dequeue()).toBe(1);
  expect(queue.size()).toBe(1);
});

test('front returns the first element from the queue', () => {
  let queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.front()).toBe(1);
});

test('isEmpty returns true if queue has no elements', () => {
  let queue = new Queue();

  expect(queue.isEmpty()).toBe(true)
});

test('isEmpty returns false if queue has elements', () => {
  let queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.isEmpty()).toBe(false);
});

test('clear removes all elements from the queue', () => {
  let queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.isEmpty()).toBe(false);

  queue.clear();

  expect(queue.isEmpty()).toBe(true);
});

test('size returns number of elements in the queue', () => {
  let queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);

  expect(queue.size()).toBe(2);

  queue.enqueue(3);

  expect(queue.size()).toBe(3);
});