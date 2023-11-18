// primitive and non primitive(refrence)

// primitive
//  7 types call by value
   // String , Number, Boolean, null, undefined , Symbol, BigInt

   // Refrence types or Non Primitive

// Arrays , Objects, Functions

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


//Symbol
const id = Symbol('123')
const id2 = Symbol('123')

console.log(id===id2);

// BigInt

const BigNumber =343728292947563n;

// Array

const heroes=["Shaktiman","hima","doga"]

// object
let myObj={
    name: "hima",
    age:22,
}

//function

const myFunction= function(){
    console.log("hello world");
}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (primitive), Heap (Non primitive)

let var1="hima"
let var2=var1;
var2="nikhil"
console.log(var1);
console.log(var2);

let var3={
    email:"hima@123.com",
    number:1234
}
let var4=var3;
var4.email="nk@gmail.com"
console.log(var3.email);
console.log(var4.email);
