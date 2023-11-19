// if

if(2!=="2")
{
console.log("execute");
}
else{
    comsole.log("not executed")
}

// >,<,>=,<=,==,!=,===,!==

const isUserLoggedIn=true;
const email=""
if(isUserLoggedIn && email)
{
    console.log("you are logged in")
}
else if(!isUserLoggedIn)
{
    console.log("you cant log in")
}
else
{
    console.log("enter email")
}