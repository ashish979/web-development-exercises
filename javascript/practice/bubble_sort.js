function swap(a, b){
  let t = a;
  a = b;
  b = t;
  return [a, b]
}

function bubbleSort(a){
  for(let i = 0; i < a.length - 1; i++){
    for(let j = i + 1; j < a.length; j++){
      if(a[i] > a[j]){
        [a[i], a[j]] = swap(a[i], a[j]);
      }
    }
  }
  return a;
}

console.log(JSON.stringify(bubbleSort([3,2,1,4,6,5])));
