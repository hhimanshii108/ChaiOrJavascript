// console.log("2">1);
// console.log("02">1);

// console.log(null<0)
// console.log(null==0)
// console.log(null>=0)
let x=null<0
let y=null==0
let z=null>=0

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// the reason is that equality check == and comparisons > < >= <= works differently
// comparisons convert null to 0 

console.log(undefined==0);
console.log(undefined < 0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);
