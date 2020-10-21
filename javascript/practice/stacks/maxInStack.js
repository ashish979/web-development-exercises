var maxStack = [];

pushInStack = function(stack, element){
  stack.push(element);
  if(maxStack.length === 0 || element > maxStack[maxStack.length - 1]) {
    maxStack.push(element);
  }
};

popFromStack = function(stack){
  let element = stack.pop()
  if(maxStack[maxStack.length - 1] === element){
    maxStack.pop()
  }
  return element;
};

getMax = function(stack){
  return maxStack[maxStack.length - 1];
};

let stack = [];
pushInStack(stack, 10);
pushInStack(stack, 20);
console.log(getMax(stack));
pushInStack(stack, 150);
pushInStack(stack, 30);
pushInStack(stack, 60);
console.log(getMax(stack));
popFromStack(stack);
console.log(stack);

