// Type annotations
const helloWorld = (str: string) => {
  console.log('Hello' + str);
};

helloWorld('Ashish');

// Interface
interface Item {
  name: string;
  color: string;
  type: string;
  id: number;
}

const printItem = (item: Item) => {
  return `Item name: ${item.name}, color: ${item.color}, type: ${item.type}, id: ${item.id}`;
};

let item = {
  name: 'iPhone X',
  color: 'Red',
  type: 'Phone',
  id: 1
};

console.log(printItem(item));

// Classes

// data types
let fullName: string = 'Ashish';
let isValid: boolean = true;
let age: number = 22;
let numList: number[] = [1, 2, 3, 4];
let numList2: Array<number> = [1, 2, 3, 4,];
let mixList: [number, string] = [1, 'hello']; // Tuple
enum Color { Red, Green, Blue}
let c: Color = Color.Blue;
let notSure: any = 4;

