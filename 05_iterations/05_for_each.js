const coding=["js","ruby","java","python","cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })
// for each (callback function)

// coding.forEach((item)=>{
// console.log(item)
//})
// using arrow function


// function printMe(item)
// {
//     console.log(item)
// }
// coding.forEach(printMe)
// using function

// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr)
// })


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((myObj)=>{
    for(const val in myObj)
    {
        //console.log(val,myObj[val])
    }
})


const values=coding.forEach((item)=>{
    return item
})
//console.log(values);
// for each does not return any value 
