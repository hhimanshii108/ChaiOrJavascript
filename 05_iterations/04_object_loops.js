const myObj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift apple"
}

for(const key in myObj)
{
    //console.log(`${key} for shortcut is for ${myObj[key]}`)
}

const arr=[1,2,3,4,5,6]
for(const index in arr)
{
    //console.log(index,arr[index])
}

const mp=new Map()
mp.set('ab',1)
mp.set("bc",2)
mp.set("cd",3)

for(const key in mp)
{
    console.log(key)
}
// we cant iterate map using for in 
