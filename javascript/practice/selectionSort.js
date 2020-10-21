function selectionSort(a){
  let minIndex = 99999;
  let n = a.length;
  for(let i = 0; i < n - 1; i++){
    minIndex = i;
    //find index of minimum value from remaining array (select min value in each loop)
    for(let j = i + 1; j < n; j++){
      if(a[j] < a[minIndex]){
        minIndex = j;
      }
    }
    //swap min index value with ith value
    let t = a[i];
    a[i] = a[minIndex];
    a[minIndex] = t;
  }
  return a;
}

console.log(JSON.stringify(selectionSort([3,2,1,4,6,5])));
