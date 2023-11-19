// reduce

const array=[1,2,3]

const total=array.reduce((acc,cur)=>{
 return acc+cur
},0)
console.log(total)

const shoppingCart=[
    {
      itemName:"js course",
      price:999
    },
    {
        itemName:"cpp",
        price:500
      },
      {
        itemName:"python",
        price:300
      },
      {
        itemName:"html",
        price:200
      }
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay)