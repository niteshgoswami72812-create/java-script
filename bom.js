
//  function nitesh(){

//      var myname = "Nitesh"
    
//      console.log(myname)
//  }

//  nitesh()

//  function Anurag(){

//      console.log("Anurag")
//  }

//  Anurag()

//  function rahul(){

//      console.log(11*5)
//  }

//  rahul()

// function rohit(){

//      console.log(99-11)
//  }

//  rohit()

//  function rahulrohit () {

//      var a = 9
//      var b = 10
//      console.log(a+b)
//  }

//  rahulrohit ()

//  function number (){

//      //type coercion
//      //first priority
//      // second priority numbers
//      // true value 1, false value 0
//      var a = 5
//      var b = null
//      console.log(a+b);
//  }
//  number()

//  function bom(){
//       alert()
//      var a = 4
//       alert(a)
//   }
//     bom()

//  function bom(){

//      prompt()
//     var myname = prompt("Enter your name")
//     alert("welcome" + myname)
    
//  }
//  bom()

//  function bom() {
//      var num1 = prompt("Enter first number");
//      var num2 = prompt("Enter second number");

//      var sum = Number(num1) + Number(num2);

//      alert(sum);
//      alert("welcome");
//  }

//  bom();

//  function bom(){
//      var num1 = prompt("Enter first number");
//      var num2 = prompt("Enter second number");

//      var sum = Number(num1) + Number(num2);

//      alert(sum);
//      alert("welocme");
//  }

//  bom()

//  function bom(){

//   var age = prompt("Enter your age")
 
//   if( age >= 21 ){

//      alert("welcome")
//   }
//   else{
//      alert("you cant")
//   }

//  }
//  bom()

//  function bom(){

//   var num = prompt("Enter Number");
 
//   if( num % 2 == 0 ){

//      alert("even number");
//   }
//   else{
//      alert("odd number");
//   }

//  }
//  bom()

//  function bom(){
//  var num = prompt("Enter a number");

//  if (num > 0) {
//      alert("Number is Positive");
//  } 
//  else if (num < 0) {
//      alert("Number is Negative");
//  } 
//  }
//  bom() 

//  if else 
//     forloop
// homework

// 0-33 d
// 33-60 b
// 60-100 a
// 0 se kam hai to enter a correct number
// 100 se jayda hai to enter  correct number
// for loop ka use karke 1 se 30 tak number print karne hai loop chala kar

// function bom(){
//     var num = prompt("Enter Number")

//     if(num >=0 && num <=33){
//         alert("D")
//     }

//     else if(num >=33 && num <=60) {
//         alert("B")
//     }
//     else if(num >60 && num <=100) {
//         alert("A")
//     }
//     else if(num <0 ){
//         alert("Enter correct Number")
//     }
//     else if(num >100 ){
//         alert("Enter correct Number")
//     }
// }
// bom()


// function bom (){

//     var num = prompt("Enter a number")
//     for(var i=1; i <= 30; i++)
//         alert(i);
// }
// bom()


// for(let i =30; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 2; i <= 10; i = i + 2){
//     console.log(i);
// }

// for(let i = 1; i <= 10; i = i + 2){
//     console.log(i);
// }

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(5 * i);
// }

//  ============var scope==================

//   function bom(){
//      var a = 20;
//      console.log(a);
//   }
//   bom()

//  ==============varscope error=============
//   function bom(){
//      var a = 22;
//   }
//   console.log(a);   
//   bom()
 
// =================let scope==================
// =================block{}====================
//  {let a =99;
//      console.log(a);
//  }

// =================error======================
//  {
//      let a=99;
//  }
// console.log(a);

// ==============const scope===================
// {const a = 90;
//     console.log(a);
// }

// ==============error======================
// {const a = 90;
// }
//  console.log(a);


// =====================HOISTING======================//
// =======================var========================//

// var a;
// console.log(a);
// a = 5;

// console.log(a);
// var a =5; 

// =====================let=========================

// console.log(a);
// let a =5;   isko bnd kiya h taki upr ki res show how 

// ===================const==========================
// console.log(a);
//  let a =5;   isko bnd kiya h taki upr ki res show how 


// ==================redeclaration=======================
// ================var==================
// var a = 18;
// var a = 19;
// var a = 21;
// console.log(a);

// =============let=====================
// let a = 97;
// let a = 27;

// =============const==============
// const a = 88;
// const a = 91;

// ======reassignment======

// ===var===

// var a = 44;
//     a = 45;

// console.log(a);

// ===let===//
// let a = 55;
//     a = 56;
// console.log(a);  isko run arne ke liye pehle wali comand band krni hogi

// ===const===//
// const a = 999;
//       a = 987; error


// let A = "javascript"
// console.log(A.toUpperCase());
 


// | Feature    | var      | let   | const |
// | ---------- | -------- | ----- | ----- |   
// | Scope      | Function | Block | Block |
// | Hoisting   | Yes      | No    | No    |
// | Re-declare | Yes      | No    | No    |
// | Re-assign  | Yes      | Yes   | No    |