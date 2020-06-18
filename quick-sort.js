console.log('javascript here')

//console.log quicksort function success
let arr = [1,2,3,14,6,18,5]
quickSort(arr, 0, arr.length-1)
console.log(arr)

function quickSort(arr, start, end){
  console.log('check')
  if (start >= end){
    return;
  }
  let index = partition(arr, start, end);
  quickSort(arr, start, index-1);
  quickSort(arr, index+1, end);
}

function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++){
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  console.log(pivotIndex)
  return pivotIndex
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}