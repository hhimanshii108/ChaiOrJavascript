// for of

const arr=[1,2,3,4,5,6,7,8]

for (const val of arr) {
    //console.log(`value is ${val}`)
}

const greetings="hello world!"

//for(char of greetings)
//console.log(`each char is ${char}`)

// map
// no duplicate values
// store in order, key value pair

const map = new Map()
map.set('in',"india")
map.set('usa',"united-states")
map.set('fr',"france")

//console.log(map)

for(const [key,val] of map)
{
    console.log(key)
}

const myObj={
    'game1':'nfs',
    'game2':'pubg'
}

// for(const [key,val] of myObj) // not iteratable
// {
//     c onsole.log(key)
// }
// we cant use for of loop in objects