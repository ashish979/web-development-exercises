function decimalToBinary(n){
  let bin = '';
  while(n > 0){
    bin = (n % 2) + bin;
    n = Math.floor(n / 2);
  }
  return bin;
}

console.log(decimalToBinary(125));