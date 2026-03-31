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
 const mydetail={names:"nitesh", age:25,city:"indore"};
 console.log(mydetail);

 const{names,age,city}=mydetail
 console.log(names);
 console.log(age);
 console.log(city);

 //spread operator
 const detail1={naam:"nitesh", umar:25};
 const detail2={seher:"hbad",grade:"A"};

 const combineddetail={...detail1,...detail2}
 console.log(combineddetail);
 
 



 // access

// mydetails.address="Narmadapuram" // insert new value

// mydetails.age="29" // update old value to new value

// // delete mydetails.city // delete old value

// console.log(mydetails);

