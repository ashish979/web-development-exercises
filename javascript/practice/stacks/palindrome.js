// palindrome using stacks

palindrome = function(str){
  let stack = [];
  let lenStr = str.length;
  let i = 0;
  for(i = 0; i < parseInt(lenStr/2); i++){
    stack.push(str[i]);
  }
  if(lenStr % 2 !== 0){
    i++;
  }
  for(i; i < lenStr; i++){
    if(stack.pop() !== str[i]){
      return false;
    }
  }
  return true;
};

console.log(palindrome('aassaa'));
console.log(palindrome('aaasaaa'));
console.log(palindrome('aasaada'));
console.log(palindrome('aaaassssdddd'));
console.log(palindrome('ababababXbabababa'));
