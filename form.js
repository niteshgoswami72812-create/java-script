
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

    let fnameErr = document.querySelector("#Fnameerr")
    let mnameErr = document.querySelector("#Mnameerr")
    let lnameErr = document.querySelector("#Lnameerr")
    let numErr = document.querySelector("#Enumerr")
    let emailErr = document.querySelector("#Eemailerr")

    // First Name
    if (fname.value == "") {
        fnameErr.innerHTML = "Enter First Name"
        return false
    } else {
        fnameErr.innerHTML = ""
    }

    // Middle Name
    if (mname.value == "") {
        mnameErr.innerHTML = "Enter Middle Name"
        return false
    } else {
        mnameErr.innerHTML = ""
    }

    // Last Name
    if (lname.value == "") {
        lnameErr.innerHTML = "Enter Last Name"
        return false
    } else {
        lnameErr.innerHTML = ""
    }

    // Number
    if (number.value == "") {
        numErr.innerHTML = "Enter Number"
        return false
    } else {
        numErr.innerHTML = ""
    }

    // Email
    if (email.value == "") {
        emailErr.innerHTML = "Enter Email"
        return false
    } else {
        emailErr.innerHTML = ""
    }

    return true
}
