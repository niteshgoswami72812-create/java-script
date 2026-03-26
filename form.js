
// let formvalidate = () => {

//     let first = document.querySelector("#namef") 
//     let firstt = document.querySelector("#Fname")

//     if (first.value == "") {
//         firstt.innerHTML = "Please Enter First Name"
//         return false
//     }
// }


let formvalidate = () => {

    let fname = document.querySelector("#namef")
    let mname = document.querySelector("#namem")
    let lname = document.querySelector("#namel")
    let number = document.querySelector("#nume")
    let email = document.querySelector("#emaile")
    let pass = document.querySelector("#passd")
    let cpass = document.querySelector("#cpassd")

    let fnameErr = document.querySelector("#Fnameerr")
    let mnameErr = document.querySelector("#Mnameerr")
    let lnameErr = document.querySelector("#Lnameerr")
    let numErr = document.querySelector("#Enumerr")
    let emailErr = document.querySelector("#Eemailerr")
    let passerr = document.querySelector("#passerr")
    let cpasserr = document.querySelector("#cpasserr")

    // First Name
    if (fname.value.trim() == "") {
        fnameErr.innerHTML = "Enter First Name"
        return false
  
     }

    // Middle Name
    if (mname.value.trim() == "") {
        mnameErr.innerHTML = "Enter Middle Name"
        return false
    } 
    

    // Last Name
    if (lname.value.trim() == "") {
        lnameErr.innerHTML = "Enter Last Name"
        return false
    }

    // Number
    if (number.value.trim().length!=10) {
        numErr.innerHTML = "Enter 10 digit Number"
        return false
    }

    // Email
    if (email.value.trim().includes("@") === false || email.value.trim().includes(".com") === false) {
        emailErr.innerHTML = "Enter Valid Email"
        return false
    } 

     // Password 
    if (pass.value.trim().length<8) {
        passerr.innerHTML = "Password Must be at least 8 characters long"
        return false
    }

     // ConfirmPassword 
    if (cpass.value.trim() != pass.value) {
        cpasserr.innerHTML = "Please Enter Same Password "
        return false
    }


     

    return true

    
}
