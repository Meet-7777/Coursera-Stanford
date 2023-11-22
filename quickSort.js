// We should choose a random pivot it helps being close to 0(n log n)
function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    const pivot= arr[Math.floor(arr.length/2)]
    const left=[]
    const right=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else if(arr[i]>pivot){
            right.push(arr[i])
        }
    }
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
  
    return [...sortedLeft, pivot, ...sortedRight];
}
let a = quickSort([20,13,5,6])
console.log(a)
