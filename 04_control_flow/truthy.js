const userEmail=[]
if(userEmail)
{
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

// falsy values

//false,0, -0, BigInt 0n , "" , null , undefined, NaN

// Truthy values

// "0", 'false', " ",[],{}, function(){},

const emptyObjects={}

if(Object.keys(emptyObjects).length===0)
{
    console.log("empty object")
}
else{
    console.log("not empty object")
}


//////// Nullish Coalescing operator (??): null undefined
let val1;
//val1=5??10  //5
//val1=null??10  //10
//val1= undefined??15  //15
//val1=null??10??20 //10
//console.log(val1);



//ternary operator

//condition?true:false

const a=2
a>5?console.log("greater than 5"):console.log("less than 5");