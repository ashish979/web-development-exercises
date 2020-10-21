function median(a, i, j) {
  let arr = a.slice(i, j + i + 1);
  arr.sort(function (a, b) {
    return a - b;
  });
  let n = j - i;
  if (n % 2 === 0) {
    return (arr[Math.ceil(n / 2) + i] + arr[Math.floor(n/2) + i]) / 2
  }
  else {
    return arr[(n / 2) + i];
  }
}

function medianOptimized(arr, i, j){
  let n = j - i;
  if (n % 2 === 0) {
    return (arr[Math.ceil(n / 2) + i] + arr[Math.floor(n/2) + i]) / 2
  }
  else {
    return ;
  }
}

// Complete the activityNotifications function below.
function activityNotifications(arr, d) {
  let n = arr.length;
  let notif = 0;
  let countArr = [];
  for(let i = 0; i < n; i++){
    countArr[arr[i]] = countArr[arr[i]] ? ++countArr[arr[i]] : 1;
  }
  //prefix sum
  for(let i = 1; i < countArr.length; i++){
    countArr[i] = (countArr[i] || 0) + (countArr[i - 1] || 0);
  }
  for (let i = 0; i < n - d; i++){
    let m = median(arr, i, i + d - 1);
    if (arr[i + 1] >= m) {
      notif++;
    }
  }
  return notif;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 9));