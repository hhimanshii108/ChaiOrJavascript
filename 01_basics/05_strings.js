let projects=20
let subjects=3
let name="hima"

console.log(`Hello my name is ${name} and I have made ${projects} projects and I study ${subjects} subjects`);

let str1="hima"
const gameName= new String("pubg")
// it is an object stored as key value pair
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newStr=gameName.substring(0,2)
console.log(newStr);

const str3=gameName.slice(0,3)
console.log(str3);

const tstr="      him    aa   "
console.log(tstr.trim());

const url="https://hima.com/hima%20rana"
console.log(url.replace('%20','-'));

console.log(url.includes('him'));
console.log(url.split('/'));
