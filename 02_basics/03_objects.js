// singleton objects - made from constructore
// object literals - not made from contructors

// Objects.create - constructor
let mySym=Symbol("key123")
const sym2=Symbol("symbol2")
const JUser={
    name:"hima",
    "fullname":"hima rana",
    age:20,
    mySym:sym2,
    email:"hima@gmail.com",
    islOggedIn:false,
    lastLoginDays:["monday","tuesday"]
}
// console.log(JUser.email);
// // we can also access using square brackets
// console.log(JUser["email"]);
// // full name can only be accessed through ["fullname"]
// console.log(JUser["fullname"]);
// we want to use symbol inside objects and access its value
// console.log(JUser.mySym);
// console.log(typeof JUser.mySym);

// console.log(JUser[mySym]);
// console.log(typeof JUser[mySym]);
// we can access symbols both the ways like this
// mySym just like this in object is a string but [mySym] like this is a symbol

// we can freeze the values of objects so that no one can change the values

JUser.age=30;
//Object.freeze(JUser)
JUser.email="nkkkk"
// console.log(JUser);

JUser.greeting = function(){
    console.log("hello")
}
JUser.greetingTwo= function(){
    console.log(`hello js user,${this.name}`)
}
console.log(JUser.greeting())
console.log(JUser.greetingTwo());