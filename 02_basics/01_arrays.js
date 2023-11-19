// arrays are resisable in js, they dont have a fixed size
// arrays can store element of different data types
// array indexing starts from 0
const myArr=[1,2,3,4,5,6,7]
const heroes=["hima","nikhil"]
const arr2=new Array(1,2,3);

// array methods
// console.log(myArr[0]);
// myArr.push(8);
// myArr.push(9);
// myArr.pop()
// myArr.unshift(-1)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(5));

const newArr = myArr.join();
// console.log(typeof newArr);

// slice and splice methods

const eg1=[1,2,3,4,5,6,7,8,9]
console.log("A " , eg1);
const eg2=eg1.slice(2,5)
console.log("A " , eg1);
console.log("Slice ",eg2);
const eg3=eg1.splice(2,5)
console.log("A " , eg1);
console.log("splice ",eg3);

// in slice , it takes starting index and ending index and it takes element from starting index till ending index-1
// slice does not manipulate the original array
// splice method takes arguments , the starting index and number of elements
// splice method manipulates the array and the array is left with elements not taken by splice
