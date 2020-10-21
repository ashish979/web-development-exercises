// Type annotations
var helloWorld = function (str) {
    console.log('Hello' + str);
};
helloWorld('Ashish');
var printItem = function (item) {
    return "Item name: " + item.name + ", color: " + item.color + ", type: " + item.type + ", id: " + item.id;
};
var item = {
    name: 'iPhone X',
    color: 'Red',
    type: 'Phone',
    id: 1
};
console.log(printItem(item));
// Classes
