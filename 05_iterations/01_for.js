for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5)
    {
       // console.log("number is 5")
    }
   // console.log(element)
}
for (let i = 0; i < 3; i++) {
    const element = i
    for (let j = 0; j < 3; j++) {
        //console.log(i*j)
        
    }
}

const myArray=["hima","yagya","nikhil"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
    
}

//break and continue keywords

for (let index = 1; index <= 20; index++) {
    if(index==5)
    {
        console.log("detected 5")
        break;
    }
    console.log(`value of i is ${index}`)
    
}
for (let index = 1; index <= 20; index++) {
    if(index==5)
    {
        console.log("detected 5")
        continue;
    }
    console.log(`value of i is ${index}`)
    
}