
function getBaseLog(x, y) {
  let num =  Math.log(y) / Math.log(x);
  return  Math.round(num * 100) / 100;
}

function countTriplets(arr, r) {
  let map = {};
  let map2 = {};
  let count = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    map[arr[i]] = 0;
    map2[arr[i]] = 0;
  }
  for (let i = 0; i < n; i++) {
    map[arr[i]] += 1;
  }
  for (let i = 0; i < n; i++) {
    map[arr[i]] -= 1;
    if (arr[i] % r === 0) {
      count += (map2[arr[i] / r] || 0) * (map[arr[i] * r] || 0);
    }
    map2[arr[i]] += 1;
  }
  return count;
}
  // for (let i = 0; i < arr.length; i++){
  //   let logX = getBaseLog(r, arr[i]);
  //   if (Number.isInteger(logX)) {
  //     map.push([arr[i]]);
  //     newArr.push(arr[i]);
  //   }
  // }
  // arr = newArr.slice(0);
  // let map2 = [];
  // for (let i = 0; i < arr.length; i++) {
  //
  //
  // }

  //   while(map[j] !== undefined){
  //     var n = map[j].length;
  //     var currentArr = map[j];
  //     if (n > 1 && n <= 3 && currentArr[n - 1] === arr[i]) {
  //       tempMap.push(map[j]);
  //       flag = false;
  //     }
  //      else if(n < 3 && arr[i]/currentArr[n - 1] === r){
  //       map[j].push(arr[i]);
  //     }
  //      j++;
  //   }
  //   if(flag){
  //     for(let j = 0; j < tempMap.length; j++){
  //       let n = tempMap[j].length;
  //       let currentArr = tempMap[j];
  //       if (n > 1 && n < 3 && currentArr[n - 1] === arr[i]) {
  //         map.push(tempMap[j]);
  //       }
  //       else if(n < 3 && arr[i]/currentArr[n - 1] === r){
  //         tempMap[j].push(arr[i]);
  //       }
  //     }
  //   }
  //   // console.log(arr[i]);
  //   // console.log('map:', map);
  //   // console.log('tempMap:', tempMap);
  // }
  // map = map.concat(tempMap);
  // let count = 0;
  // for (let i = 0; i < map.length; i++){
  //   if (map[i].length === 3) {
  //     count++;
  //   }
  // }


console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
console.log(countTriplets([1, 2, 2, 4], 2));
console.log(countTriplets([1, 5, 5, 25, 125], 5));