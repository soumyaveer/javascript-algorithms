const PriorityQueue = require('../../../src/containers/queues/priorityQueue');

test('QueueElement creates queue element and priority', () => {
  let priorityQueue = new PriorityQueue();

  priorityQueue.enqueue("John", 2);
  priorityQueue.enqueue("Jack", 1);
  priorityQueue.enqueue("Camilia", 1);


  expect(priorityQueue.isEmpty()).toBe(false);

  expect(priorityQueue.front().element).toBe("Jack")
});

test('clear removes all elements from the queue', () => {
  let priorityQueue = new PriorityQueue();

  priorityQueue.enqueue("John", 2);
  priorityQueue.enqueue("Jack", 1);

  expect(priorityQueue.isEmpty()).toBe(false);

  priorityQueue.clear();

  expect(priorityQueue.isEmpty()).toBe(true);
});

