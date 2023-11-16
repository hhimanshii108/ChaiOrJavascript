 /*
1 - We can declare constants using const keyword in js. Its value can't change.
2 - For declaring variables we have two methods 1) var  2) let
3 - Prefer not to use var because of issue in block scope and functional scope
4 - If we dont declare any variable let or var, we can still assign values to it and access it.
5 - If we declare a variable but we dont initialize it with any value then by default the value stored is undefined
*/
 
 
 
 
 const accoundId=123456
 let accountEmail="hima@gmail.com"
 var accountPassword="nikhil"
 accountCity="Dehradun"
 let accountState;
//  accoundId=2
// console.log(accoundId);
// not allowed

accountEmail="n@gmail.com"
accountPassword="123123"
accountCity="nainital"
console.table([accoundId,accountEmail,accountPassword,accountCity,accountState])
