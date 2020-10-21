balancedExpression = function(expr){
  let stack = [];
  for(let i = 0; i < expr.length; i++){
    switch(expr[i]){
      case '(':
      case '{':
      case '[':
        stack.push(expr[i]);
        break;
      case ']':
        if(stack[stack.length - 1] === '['){
          stack.pop();
        }
        else{
          return false;
        }
        break;
      case '}':
        if(stack[stack.length - 1] === '{'){
          stack.pop();
        }
        else{
          return false;
        }
        break;
      case ')':
        if(stack[stack.length - 1] === '('){
          stack.pop();
        }
        else{
          return false;
        }
        break;
    }
  }
  return stack.length === 0;
};

console.log(balancedExpression('(A+B)'));
console.log(balancedExpression('[{{{{(((())))}}}}]'));
console.log(balancedExpression('[][][][][][][]'));
console.log(balancedExpression('[}[}[}[}[}'));
console.log(balancedExpression('({[)]}'));
