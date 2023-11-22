this.remove = function() {
    let smallest = heap[1];
    if (heap.length > 2) {
        heap[1] = heap[heap.length - 1];
        heap.splice(heap.length - 1);
        if (heap.length == 3) {
            if (heap[1] < heap[2]) {
                [heap[1], heap[2]] = [heap[2], heap[1]];
            };
            return smallest;
        };
        let i = 1;
        let left = 2 * i;
        let right = 2 * i + 1;
        while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
            if (heap[left] > heap[right]) {
                [heap[i], heap[left]] = [heap[left], heap[i]];
                i = 2 * i
            } else {
                [heap[i], heap[right]] = [heap[right], heap[i]];
                i = 2 * i + 1;
            };
            left = 2 * i;
            right = 2 * i + 1;
            if (heap[left] == undefined || heap[right] == undefined) {
                break;
            };
        };
    } else if (heap.length == 2) {
        heap.splice(1, 1);
    } else {
        return null;
    };
    return smallest;
};
