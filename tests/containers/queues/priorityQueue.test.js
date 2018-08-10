const PriorityQueue = require('../../../src/containers/queues/priorityQueue');

test('QueueElement creates queue element and priority', () => {
  let priorityQueue = new PriorityQueue();

  priorityQueue.enqueue("John", 2);
  priorityQueue.enqueue("Jack", 1);
  priorityQueue.enqueue("Camilia", 1);

  expect(priorityQueue.isEmpty()).toBe(false);

  expect(priorityQueue.front()).toEqual({"element": "Jack", "priority": 1})
});

test('clear removes all elements from the queue', () => {
  let priorityQueue = new PriorityQueue();

  priorityQueue.enqueue("John", 2);
  priorityQueue.enqueue("Jack", 1);

  expect(priorityQueue.isEmpty()).toBe(false);

  priorityQueue.clear();

  expect(priorityQueue.isEmpty()).toBe(true);
});

test('dequeue removes first item from the queue', () =>{
  let priorityQueue = new PriorityQueue();

  priorityQueue.enqueue("John", 2);
  priorityQueue.enqueue("Jack", 1);

  expect(priorityQueue.size()).toBe(2);
  expect(priorityQueue.dequeue()).toEqual({"element": "Jack", "priority": 1});
  expect(priorityQueue.size()).toBe(1);
});

test('front returns the first element from the queue', () => {
  let priorityQueue = new PriorityQueue();

  priorityQueue.enqueue("John", 2);
  priorityQueue.enqueue("Jack", 1);

  expect(priorityQueue.front()).toEqual({"element": "Jack", "priority": 1});
});

