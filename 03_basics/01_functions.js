function myfunc() {
    console.log("hello user");
}
// myfunc()
// when function defination is made then values passed in function are called parameters
function add (num1,num2)
{
 //console.log(num1+num2);
}
//const res=add(3,5)
//console.log(res);
//res contains undef cause we have only done console log, not passed anything
// when function is called then values passed are called arguments

function add2 (num1,num2)
{
//  const x=num1+num2
//  return x;
return num1+num2
}
const res2=add2(3,5)
//console.log(res2);

function loginUserMessage(username="nk")// can also give default values
{
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hima"));
// if no value passed then it returns undefined