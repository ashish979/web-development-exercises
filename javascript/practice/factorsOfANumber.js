function factors(n){
  let a = [1, n];
  for(let i = 2; i <= n/2; i++){
    if(n % i == 0){
      a.push(i);
    }
  }
  return a;
}

console.log(factors(10));
console.log(factors(12));
console.log(factors(36));

function factorsImproved(n){
  let a = [1, n];
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      a.push(i);
      if(i !== n/i){
        a.push(n/i);
      }

    }
  }
  a = a.sort(function(x, y){ return x - y });
  return a;
}

console.log(factorsImproved(10));
console.log(factorsImproved(12));
console.log(factorsImproved(36));