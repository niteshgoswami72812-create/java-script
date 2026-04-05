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
    nitesh.style.fontFamily = "cursive"

}    



// start counter program 
let count = 0;
function increment() {
    count++;
  let tag=  document.querySelector('#count')
    tag.innerText = count;
    tag.style.color="Green"
    
     
}
  
// function decrement() {
//     count--;
//     let tag= document.querySelector('#count')
//    tag.innerText = count;
//    tag.style.color="red"
// }


function decrement() {
    let tag = document.querySelector('#count');
    if (count > 0) {
        count--;
        tag.innerText = count;
        tag.style.color = "red";
    } 
}

// end counter program

function showImage(){

    let box = document.querySelector('#box');
    box.innerHTML = '<img src="docotr.PNG" style="width:100%; height:100%;">';
}

// homework
// hide show karna hai complete
// counter Program banan haui jiske button
// increment
// decrement ye dono rahegi
 

// style in JS 

//  nitesh.style.position="absolute"
    //   nitesh.style.top="50px"
    //    nitesh.style.left="100px"
      // nitesh.style.fontWeight= "bold"


      
    
      // monday test
    //   array string  methods 
    //   if else
    //     promot alert 
    //   bom dom