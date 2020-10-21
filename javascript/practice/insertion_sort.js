function insertSort(a){
  let n = a.length;
  for(let i = 1; i < n; i++){
    let v = a[i];
    let j = i;
    while(a[j - 1] > v && j > 0){
      a[j] = a[j - 1];
      j--;
    }
    a[j] = v;
  }
  return a;
}

console.log(JSON.stringify(insertSort([3,2,1,4,6,5])));