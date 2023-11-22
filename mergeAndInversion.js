function mergeSort(arr) {
    if (arr.length <= 1) {
      return { sorted: arr, inversions: 0 };
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    const { sorted: sortedLeft, inversions: inversionsLeft } = mergeSort(left);
    const { sorted: sortedRight, inversions: inversionsRight } = mergeSort(right);
    
    const { merged, inversions } = merge(sortedLeft, sortedRight);
    
    return { sorted: merged, inversions: inversionsLeft + inversionsRight + inversions };
  }
  
  function merge(left, right) {
    let merged = [];
    let inversions = 0;
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
        inversions += left.length - i;
      }
    }
    
    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }
    
    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }
    
    return { merged, inversions };
  }
  
  const arr = [3,5,2,7,8,9]
  const { sorted, inversions } = mergeSort(arr);
  console.log('Sorted Array:', sorted);
  console.log('Inversions:', inversions);
  