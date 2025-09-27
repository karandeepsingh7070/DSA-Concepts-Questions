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
