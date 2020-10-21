function quickSort(a, start, end){
  if(start < end){
    let partitionIndex = partition(a, start, end);
    return quickSort(a, start, partitionIndex - 1);
    return quickSort(a, partitionIndex + 1, end);
  }
}

function partition(a, start, end){
  let pivot = a[end];
  let pIndex = start;
  for(let i = 0; i < end; i++){
    if(a[i] <= pivot){
      let t = a[i];
      a[i] = a[pIndex];
      a[pIndex] = t;
      pIndex++;
    }
  }
  let t = a[end];
  a[end] = a[pIndex];
  a[pIndex] = t;
  return pIndex;
}

a = [1,2,4,6,3,5,7,8];
quickSort(a, 0, 7);
console.log(a);
