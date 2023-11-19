const myNums=[1,2,3,4,5,6,7,8,9]

const ans=myNums.filter((val)=>{
    return 10+val
})
//console.log(ans)
const ans2=[]
myNums.forEach((val)=>{
     return ans2.push(val+10)
})
//console.log(ans2)
// to add 10 to all the elements we use map

// const newNums=myNums.map((num)=>{
//     return num+10
// })

// chaining

const newNums=myNums
              .map((num)=> num*10)
              .map((num)=>num+1)
              .filter((num)=> num>=40)
console.log(newNums)

