// Sieve of eratosthenes

function primeSum(n){
  let i = 2;
  let j = 2;
  let primeArr = [];
  let arr = [];
  let count = 0;
  for(let x = 1; x <= n; x++){
    primeArr[x] = true;
  }
  while(i < n){
    count++;
    for(j = i + i; j <= n; j += i){
      primeArr[j] = false;
    }
    i++;
    while(primeArr[i] == false){
      i++;
    }
  }
  console.log(count)
  for(let x = 1; x <= n; x++){
    if(primeArr[x] == true){
      arr.push(x);
    }
  }
  let sum = arr.reduce((x, y) => x + y);
  return sum;
}

primeSum(125);
