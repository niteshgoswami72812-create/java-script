// function nitesh() {

//     let nitesh= document.querySelector('.nitesh')

//     nitesh.innerHTML= "this <i> is </i> bhopal"

//     nitesh.style.color="green"

// }

function hidetext() {

    let nitesh = document.querySelector('.nitesh')

    nitesh.style.display = 'none'

}

function showtext() {

    let nitesh = document.querySelector('.nitesh')

    nitesh.style.display = 'block'
    nitesh.style.color = "red"
    nitesh.style.backgroundColor = "pink"
    // nitesh.style.fontWeight= "bold"
    nitesh.style.fontSize= "50px"
    //  nitesh.style.position="absolute"
    //   nitesh.style.top="50px"
    //    nitesh.style.left="100px"
    nitesh.style.textAlign = "center"
    nitesh.style.fontFamily = "cursive"

}



// start counter program 
let count = 0;
function increment() {
    count++;
    document.getElementById("count").innerText = count;
    
}

function decrement() {
    count--;
    document.getElementById("count").innerText = count;
}


// end counter program


// homework
// hide show karna hai complete
// counter Program banan haui jiske button
// increment
// decrement ye dono rahegi