//const tinderUser=new Object()// singleton user
const tinderUser={};

//console.log(tinderUser2); 
tinderUser.id="123tbh"
tinderUser.name="nk"
tinderUser.iSLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"xyz@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hima",
            lastname:"rana"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

//combining objects

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
//assigns copies all properties of objects into another
// {}  acts as target and rest as soruce, optioanl , good to give

const obj4={...obj1,...obj2}
// console.log(obj4);

// console.log(Object.keys(tinderUser)); // returns all keys in array
// console.log(Object.values(tinderUser)); // returns all values in array
// console.log(Object.entries(tinderUser)); // returns all keys and values in array inside array
// console.log(tinderUser.hasOwnProperty("name")); // checks if object has a certain property or not

//*****************DESTRUCTURING OBJECTS**********************************************/

const course={
    coursename:"javascript",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseInstructor:instructor}=course
console.log(instructor);