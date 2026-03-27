
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


    // First Name
    if (fname.value.trim() == "") {
        fname.value = ""
        fname.placeholder = "Enter First Name!"
        fname.style.border = "2px solid red"
        return false
    }

    // Middle Name
    if (mname.value.trim() == "") {
        mname.value = ""
        mname.placeholder = "Middle Name!"
        mname.style.border = "2px solid red"
        return false
    }


    // Last Name
    if (lname.value.trim() == "") {
        lname.value = ""
        lname.placeholder = "Last Name!"
        lname.style.border = "2px solid red"
        return false
    }

    // Number
    if (number.value.trim().length != 10) {
        number.value = ""
        number.placeholder = "Enter 10 Valid digit Number!"
        number.style.border = "2px solid red"
        return false
    }

    // Email
    if (email.value.trim().includes("@") === false || email.value.trim().includes(".com") === false) {
        email.placeholder = "Enter Valid Email!"
        email.style.border = "2px solid red"
        return false
    }

    // Password 
    if (pass.value.trim().length < 8) {
        pass.placeholder = "Password Must be at least 8 characters long!"
        pass.style.border = "2px solid red"
        return false
    }

    // ConfirmPassword 
    if (cpass.value.trim() != pass.value) {
        cpass.innerHTML = "Please Enter Same Password!"
        cpass.style.border = "2px solid red"
        return false
    }




    return true


}
