// arry of object 

let fruits =["mango", "fruits", "banana"]
console.log(fruits);


let fruit =[{

    name: "Nitesh",
    age: 25,
    city: "Narmadapuram",
    phone: 9753856359

}, {

    name: "Dilip",
    age: 48,
    city: "Narmadapuram",
    phone: 9098208864

}, {

    name: " Khushi",
    age: 24,
    city: "Narmadapuram",
    phone: 8450050779

}, {

    name: "Ritu",
    age: 23,
    city: "Narmadapuram",
    phone: 8815170776
}
]

fruit.pop()
console.log(fruit[2].name); // Output: "Narmadapuram"


let num = [8,40,66,88,100]

let newarr= num.map( (e)=>{

    return e*2
})

console.log(newarr);

let newfilter= num.filter( (e)=>{

    return e%2==0
})

console.log(newfilter);
