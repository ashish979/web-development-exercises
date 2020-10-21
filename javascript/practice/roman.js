function toRoman(num) {
    // console.log(num)
  var mapping = {
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I'
  }
  var numbers = Object.keys(mapping).sort((a, b) => b - a);
  let str = '';
  if(mapping[num] != undefined){
      return mapping[num];
  }
  for(let i = 0; i < numbers.length - 1; i++){
      for(let j = i+1; j < numbers.length; j++){
          if((numbers[i] - numbers[j]) == num){
              return str = mapping[numbers[j]] + mapping[numbers[i]];
          }
      }
  }
  while(num != 0){
      for(let i = 0; i < numbers.length; i++){   
        if(num >= numbers[i]){
            num -= numbers[i];
            str += mapping[numbers[i]];
            break;
        }
      }
  }
  console.log(str);
  return str;
}

function convertToRoman(num){
    let str = '';
    let arr = [];
    let i = 10;
    while(num > 0){
        
        let x = num % i;
        arr.push(toRoman(x));
        num -= (num % i);
        i *= 10;
    }
    console.log(arr)
    return arr.reverse().join('');
}

let x = convertToRoman(5);
console.log(x);

