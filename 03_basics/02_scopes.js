// let a=10
// const b =20
// var c=30
// console.log(a);  // no problem occurs in these three
// console.log(b);
// console.log(c);

//{} it is calles scope

// but the problem occurs when
var c=50;
const b=10;
if(true)
{
let a=10
const b =20
var c=30
console.log(b);  // b gives 10 here
}
//console.log(a);   // it gives error a is not defined
console.log(b);   //output is 10 , correct
console.log(c);      // no error it gives 30

// var causes inconsistency in codes. It changes value of c