let MinHeap = function() {
	let heap = [null];
  
	this.insert = function(num) {
	  heap.push(num);
	  let idx = heap.length - 1;
  
	  while (idx > 1 && heap[idx] < heap[Math.floor(idx / 2)]) {
		[heap[idx], heap[Math.floor(idx / 2)]] = [heap[Math.floor(idx / 2)], heap[idx]];
		idx = Math.floor(idx / 2);
	  }
	};
  
	this.remove = function() {
	  if (heap.length <= 1) {
		return null;
	  }
  
	  let smallest = heap[1];
	  heap[1] = heap.pop();
	  let idx = 1;
  
	  while (true) {
		let left = idx * 2;
		let right = idx * 2 + 1;
		let smallestIdx = idx;
  
		if (left < heap.length && heap[left] < heap[smallestIdx]) {
		  smallestIdx = left;
		}
		if (right < heap.length && heap[right] < heap[smallestIdx]) {
		  smallestIdx = right;
		}
  
		if (smallestIdx === idx) {
		  break;
		}
  
		[heap[idx], heap[smallestIdx]] = [heap[smallestIdx], heap[idx]];
		idx = smallestIdx;
	  }
  
	  return smallest;
	};
  
	this.sort = function() {
	  let sorted = [];
  
	  while (heap.length > 1) {
		sorted.push(this.remove());
	  }
  
	  return sorted;
	};
  };
  