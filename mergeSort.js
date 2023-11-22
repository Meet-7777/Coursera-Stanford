function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const leftSideArray=arr.slice(0,mid)
    const rightSideArray=arr.slice(mid)
    return sortingViaMerge(mergeSort(leftSideArray) ,mergeSort(rightSideArray))
}

function sortingViaMerge(leftSideArray,rightSideArray){
    const sortedArray=[]
    while(leftSideArray.length&&rightSideArray.length){
        if(leftSideArray[0]<rightSideArray[0]){
            sortedArray.push(leftSideArray[0])
            leftSideArray.shift()
        }else{
            sortedArray.push(rightSideArray[0])
            rightSideArray.shift()
        }
    }
    return sortedArray.concat(leftSideArray, rightSideArray)
}

console.log(mergeSort([8,20,-2,4,-6]))  // Output: [-6, -2, 4, 8, 20]
// Guiding Principle
//  Worst case: 6nlogn +6n
// Big o notation 
// claim: if tn = aknk
// little o means the relationship is lower than other
