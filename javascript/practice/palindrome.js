palindrome = function(str){
  for(let i = 0, j = str.length - 1; i < j; i++, j--){
    if(str[i] !== str[j]){
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
