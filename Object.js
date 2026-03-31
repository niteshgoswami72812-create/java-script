let str= "xyz"
let details= ["Anurag", 26, "Bhopal", 9753856359]

let mydetails= {
      myname: "Anuarg",
    age: 26,
    city: "Bhopal",
    number:9753856359
}
console.log(mydetails)



 let btn =()=> {
    let nitesh =document.querySelector("#text").value.trim()

let mydetails= {
    myname: nitesh,
    age: 26,
    city: "Bhopal",
    number:9753856359
}
console.log(mydetails.myname) 
 }

 //destructuring of object 
 let {myname, age, city, number} = mydetails

console.log(age);
console.log(city);
console.log(myname);
console.log(number);



 //spread operator
 
 



 // access

// mydetails.address="Narmadapuram" // insert new value

// mydetails.age="29" // update old value to new value

// // delete mydetails.city // delete old value

// console.log(mydetails);

