const fname=["hima","nikhil","yagya"]
const lname=["rana","kotiyal","kulora"]

// fname.push(lname)
// console.log(fname);
// pushes the array as an element in fname

const name=fname.concat(lname)
//console.log(name);
// concat pushes all elements as different element in array

const names2=[...fname,...lname]
//console.log(names2);

const mixture=[1,2,3,[5,6,[1,9,[0]]],34,56,90,[100]]
const flatArray=mixture.flat(Infinity)
console.log(flatArray);

// isArray
console.log(Array.isArray("hima"));  // false  checks if it is an array
console.log(Array.from("himanshi"));  // makes an array ['h','i','m','a']
//console.log(Array.from({name:"hima"}));  we have to tell key or value

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); // makes an array