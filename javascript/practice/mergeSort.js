// function mergeSort(a, i , j){
//   if(i < j){
//     let mid = Math.floor((i + j) / 2);
//     mergeSort(a, i, mid);
//     mergeSort(a, mid + 1, j);
//     merge(a, i, mid, j);
//   }
// }
//
// function merge(a, start, mid, end){
//   let r = [];
//   let i = 0;
//   let j = mid + 1;
//   let k = 0;
//   while(i <= mid && j <= end){
//     if(a[i] <= a[j]){
//       r[k] = a[i];
//       k++;
//       i++;
//     }
//     else{
//       r[k] = a[j];
//       k++;
//       j++;
//     }
//   }
//   while(i <= mid){
//     r[k] = a[i];
//     k++;
//     i++;
//   }
//   while(j <= end){
//     r[k] = a[j];
//     k++;
//     j++;
//   }
//   for(let i = start; i < end; i++){
//     a[i] = r[i - start];
//   }
//   return a;
// }

function mergeSort(a) {
  let n = a.length;
  if (n < 2) {
    return a;
  }
  else {
    let mid = Math.floor(n / 2);
    let leftArr   = a.slice(0, mid);
    let rightArr  = a.slice(mid, n);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

function merge(a, b){
  let r = [];
  let n = a.length;
  let m = b.length;
  let i = 0;
  let j = 0;
  let k = 0;
  while(i < n && j < m){
    if(a[i] <= b[j]){
      r[k] = a[i];
      k++;
      i++;
    }
    else{
      r[k] = b[j];
      k++;
      j++;
    }
  }
  while(i < n){
    r[k] = a[i];
    k++;
    i++;
  }
  while(j < m){
    r[k] = b[j];
    k++;
    j++;
  }
  return r;
}

console.log(mergeSort([1,2,4,6,3,5,7,8]));
