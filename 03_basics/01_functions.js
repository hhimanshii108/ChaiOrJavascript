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
//console.log(loginUserMessage("hima"));
// if no value passed then it returns undefined

// shopping cart situation , if user adds n items , then total

function calculateCartPrice(val1,val2,...num1)// these operators are called rest here
{
    return num1
}
console.log(calculateCartPrice(200,400,500))

//passing objects in functions

const user={
    username:"hima",
    price:20
}

function handleObject(obj)
{
    console.log(`Username is ${obj.username} and price is ${user.price}`)
}
handleObject(user)
handleObject({
    username:"nk",
    price:990
})

// passing arrays in functions

const dummyArray=[100,200,300,400]

function returnSecondVal(getArray)
{
    return getArray[1]
}
console.log(returnSecondVal(dummyArray))
console.log(returnSecondVal([1,2,3,4,5]))