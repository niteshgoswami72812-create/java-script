function nitesh (){
    
    let Fruits = ["mango", "banana", "orange", "grapes"]
    // console.log(Fruits[3]);
    // console.log(Fruits.length);

    //pop(), push(), shift(), unshift()
    
    // Fruits.pop() isme kuch nahi likhna hai
    
    // Fruits.push("Nitesh") isme piche ek add hoga

    // Fruits.shift()   isme bhi kuch nahi likhna hai automatic hata dega aage ki value
   
    // Fruits.unshift("nitesh","khushi")

    // slice(), splice()
    
    // console.log(Fruits.slice(1,3));

    // Fruits.splice(4, 0, "hbad","bhopal")
    // console.log(Fruits);

    // let num = [2,5,9,1,6]

    // console.log(num.sort());
    // console.log(num.reverse());
    // console.log(num.sort().reverse());


    let bhopal = "cybrom";
    let reverse = "";

    for (let i = bhopal.length - 1; i >= 0; i--)
        reverse += bhopal[i];

    console.log(reverse);
    
}

nitesh ()
 

// hw 

// let bhopal = "cybrom"
// isko reverse print karke aana H

// array poora padhna hai 
//  join('')=> cobert array to String.