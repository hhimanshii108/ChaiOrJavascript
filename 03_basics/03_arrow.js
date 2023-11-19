const user={
    username:"hima",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome`);
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

//console.log(this);  // it is an empty object but in bwroser this refers to window object

function chai1()
{
    let username="hitesh"
    console.log(this.username); // it gives undef cause , this only works with objects not with functions
}
//chai1()

const chai2= function()
{
    let username="hitesh"
    console.log(this.username); // it gives undef cause , this only works with objects not with functions
}
//chai2()


//++++++++++++++++++++++++++++++++++declaring arrow functions+++++++++++++++++++++++
// es6 2015

const chai=() =>{
    let username="hitesh"
    console.log(this.username); // gives undef but only this gives {}
}
//chai()

// types of declaring arrow functions

const addOne=(num1,num2) => {  // using return keuword , explicit declaration
return num1+num2
}
//console.log(addOne(3,4));
const addTwo=(num1,num2) => num1+num2 // implicit
console.log(addTwo(3,4));

const addThree=(num1,num2) => (num1+num2) // implicit, without using return
console.log(addThree(3,4));

const addObj=()=>({username:"hima"}) // objects
console.log(addObj());


//The diff is between arrow function and normal function is hoisting .As arrow function is a kind of function that is stored in a variable .. so it can't be access before intialization