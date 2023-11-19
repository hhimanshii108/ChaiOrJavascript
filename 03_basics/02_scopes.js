// let a=10
// const b =20
// var c=30
// console.log(a);  // no problem occurs in these three
// console.log(b);
// console.log(c);

//{} it is called scope
// but the problem occurs when we make block scope
var c=50;
const b=10;
if(true)
{
let a=10
const b =20
var c=30
//console.log(b);  // b gives 10 here
}
//console.log(a);   // it gives error a is not defined
//console.log(b);   //output is 10 , correct
//console.log(c);      // no error it gives 30

// var causes inconsistency in codes. It changes value of c


//nested scope

function one()
{
    const username="hima"
    function two()
    {
        const website="youtube"
        //console.log(username);
    }
   // console.log(website);
    two()
}
one()

// in a nested function , the child function can access the variables of parent function but parent 
// function cannot access the variables of child function  . it is also called closure


if(true)
{
    const username="hima"
    if(username=="hima")
    {
        const website=" youtube"
        //console.log(username+website);
    }
   // console.log(website);  not def.. out of scope
}
//console.log(username);  not def out of scope


//++++++++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++=
addOne(5) // no error output 6
function addOne(num)
{
    return num+1
}


addTwo(5) // gives error   also called hoisting
const addTwo=function(num)  // variable is holding a function
{
    return num+2
}