
function countingSort(arr){
  let n = arr.length;
  let countArr = [];
  let sortedArr = [];
  for(let i = 0; i < n; i++){
    countArr[arr[i]] = countArr[arr[i]] ? ++countArr[arr[i]] : 1;
  }
  console.log(countArr);
  //prefix sum
  for(let i = 1; i < countArr.length; i++){
    countArr[i] = (countArr[i] || 0) + (countArr[i - 1] || 0);
  }
  console.log(arr);
  console.log(countArr);
  for(let i = 0; i < n; i++){
    sortedArr[countArr[arr[i]]] = arr[i];
    countArr[arr[i]]--;
  }
  return sortedArr;
}

console.log(countingSort([1, 4, 3, 2, 6, 2, 7, 1, 5]));