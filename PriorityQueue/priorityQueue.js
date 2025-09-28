function comparator(a,b) {return a - b}

class PriorityQueue {
  constructor() {
    this.heap = [7,8,9,10]   // for testing; ideally start with []
    this.comparator = comparator
  }

  getParentElement(index) {return Math.floor((index - 1)/2)}
  getLeftChild(index) {return index * 2 + 1}
  getRightChild(index) {return index * 2 + 2}
  size() {return this.heap.length;}
  isEmpty() {return this.size() === 0;}
  peek() {return this.heap[0];}
  swap(i,j){ [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]] }

  enqueue(value) {
    this.heap.push(value)
    this.heapifyUp()
  }

  dequeue() {
    if (this.isEmpty()) return;
    this.swap(0, this.size() - 1)
    const value = this.heap.pop()
    this.heapifyDown()
    return value
  }

  heapifyDown() {
    let index = 0
    const length = this.size()

    while (this.getLeftChild(index) < length) {
      let smallerChild = this.getLeftChild(index)
      let rightChildIndex = this.getRightChild(index)

      if (
        rightChildIndex < length &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallerChild]) < 0
      ) {
        smallerChild = rightChildIndex
      }

      if (this.comparator(this.heap[smallerChild], this.heap[index]) < 0) {
        this.swap(smallerChild, index)
        index = smallerChild
      } else break
    }
  }

  heapifyUp() {
    let index = this.size() - 1
    while (index > 0) {
      let parentIndex = this.getParentElement(index)
      if (this.comparator(this.heap[index], this.heap[parentIndex]) < 0) {
        this.swap(index,parentIndex)
        index = parentIndex
      } else break
    }
  }
}

// Task Schedular 
class PQ {
  constructor() {
    this.heap = [];
    this.comparator = comparator;
  }
  getParentElementIndex(i) {return Math.floor((i - 1) / 2);}
  getLeftElementIndex(i) {return i * 2 + 1;}
  getRightElementIndex(i) {return i * 2 + 2;}

  size() {return this.heap.length;}
  isEmpty() {return this.size() === 0;}
  swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      let parentIndex = this.getParentElementIndex(index);
      if (this.comparator(this.heap[index], this.heap[parentIndex]) > 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else break;
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    this.swap(0, this.size() - 1);
    const value = this.heap.pop();
    this.heapifyDown();
    return value;
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();
    while (this.getLeftElementIndex(index) < length) {
      let largeChildIndex = this.getLeftElementIndex(index);
      let rightChildIndex = this.getRightElementIndex(index);
      if (
        rightChildIndex < length &&
        this.comparator(this.heap[rightChildIndex], this.heap[largeChildIndex]) > 0
      ) {
        largeChildIndex = rightChildIndex;
      }
      if (this.comparator(this.heap[largeChildIndex], this.heap[index]) > 0) {
        this.swap(largeChildIndex, index);
        index = largeChildIndex;
      } else break;
    }
  }
}

class Q {
  constructor() {
    this.items = [];
  }
  size() {return this.items.length;}
  enqueue(item) {this.items.push(item);}
  dequeue() {return this.items.shift();}
  peek() {return this.items[0];}
  isEmpty() {return this.items.length === 0;}
}

var leastInterval = function(tasks, n) {
  // build frequency map
  const freqMap = {};
  for (let t of tasks) {
    if (!freqMap[t]) freqMap[t] = {freq: 0, task: t, exTime: 0};
    freqMap[t].freq++;
  }

  const maxHeap = new PQ();
  const q = new Q();

  // fill heap
  for (let key in freqMap) {
    maxHeap.enqueue({...freqMap[key]});
  }

  let time = 0;

  while (!q.isEmpty() || !maxHeap.isEmpty()) {
    time++;
    // run next task
    if (!maxHeap.isEmpty()) {
      let task = maxHeap.dequeue();
      task.freq--;
      if (task.freq > 0) {
        task.exTime = time + n; // available after cooldown
        q.enqueue(task);
      }
    }
    // if tasks in cooldown are ready, put them back into heap
    if (!q.isEmpty() && q.peek().exTime === time) {
      maxHeap.enqueue(q.dequeue());
    }
  }

  return time;
};

