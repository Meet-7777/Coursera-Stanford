class MedianMaintenance {
  constructor() {
    this.lowerHalf = new MaxHeap();  // Max Heap for lower half of numbers
    this.upperHalf = new MinHeap();  // Min Heap for upper half of numbers
    this.medianSum = 0;  // Running sum of medians
  }

  // Function to insert a number and update the medians
  insertNumber(number) {
    if (this.lowerHalf.isEmpty() || number < this.lowerHalf.getMax()) {
      this.lowerHalf.insert(number);
    } else {
      this.upperHalf.insert(number);
    }

    // Balance the heaps if they are unevenly sized
    if (this.lowerHalf.size() - this.upperHalf.size() > 1) {
      this.upperHalf.insert(this.lowerHalf.extractMax());
    } else if (this.upperHalf.size() - this.lowerHalf.size() > 1) {
      this.lowerHalf.insert(this.upperHalf.extractMin());
    }

    // Calculate the current median
    let median;
    if (this.lowerHalf.size() >= this.upperHalf.size()) {
      median = this.lowerHalf.getMax();
    } else {
      median = this.upperHalf.getMin();
    }

    // Add the median to the running sum
    this.medianSum += median;
  }

  // Function to compute the sum of medians
  getMedianSum() {
    return this.medianSum;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(num) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMax() {
    const max = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.sinkDown(0);
    }

    return max;
  }

  bubbleUp(index) {
    const num = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (num <= parent) break;
      this.heap[parentIndex] = num;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    const num = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length && this.heap[leftChildIndex] > num) {
        swapIndex = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] > num && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = num;
      index = swapIndex;
    }
  }

  getMax() {
    return this.heap[0];
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(num) {
    this.heap.push(num);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.sinkDown(0);
    }

    return min;
  }

  bubbleUp(index) {
    const num = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (num >= parent) break;
      this.heap[parentIndex] = num;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    const num = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < length && this.heap[leftChildIndex] < num) {
        swapIndex = leftChildIndex;
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] < num && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = num;
      index = swapIndex;
    }
  }

  getMin() {
    return this.heap[0];
  }
}

// Test the algorithm with a sample input
const fs = require('fs');

// Read the file contents
const fileContents = fs.readFileSync('median.txt', 'utf8');

// Convert the file contents to an array of integers
const numbers = fileContents.trim().split('\n').map(Number);

// Create an instance of MedianMaintenance
const medianMaintenance = new MedianMaintenance();

// Process each number from the file
for (let i = 0; i < numbers.length; i++) {
  medianMaintenance.insertNumber(numbers[i]);
}

// Get the sum of medians
const medianSum = medianMaintenance.getMedianSum();
console.log(`Sum of Medians: ${medianSum}`);
