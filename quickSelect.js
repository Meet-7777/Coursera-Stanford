function quickSelect(arr,k){
  if(arr.length<=1){
    return arr[0]
  }
  const pivotIndex=Math.floor(Math.random()*arr.length)
  const pivot=arr[pivotIndex]
  const smaller=[]
  const larger=[]
  for(let i=0;i<arr.length;i++){
    if(pivot<=arr[i]){
      larger.push(arr[i])
    }else{
      smaller.push(arr[i])
    }
  }
  if(k<=smaller.length){
    return quickSelect(smaller,k)
  }else{
    return quickSelect(larger,k-smaller.length)
  }
}
const numbers=[9,4,2,7,5,1,8,3,6]
const k=3
const kthSmallest=quickSelect(numbers,k)
console.log(kthSmallest)