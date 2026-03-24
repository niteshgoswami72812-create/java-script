let Add= ()=>{

    let Num1= document.querySelector('#num1').value
    let Num2= document.querySelector('#num2').value

    document.querySelector('#show').innerHTML= Number(Num1) + Number(Num2)

}


let Multi= ()=>{

    let Num1= document.querySelector('#num1').value
    let Num2= document.querySelector('#num2').value

    document.querySelector('#show').innerHTML= Number(Num1) * Number(Num2)

}


let Sub= ()=>{

    let Num1= document.querySelector('#num1').value
    let Num2= document.querySelector('#num2').value

    document.querySelector('#show').innerHTML= Number(Num1) - Number(Num2)

}


let Div= ()=>{

    let Num1= document.querySelector('#num1').value
    let Num2= document.querySelector('#num2').value

    document.querySelector('#show').innerHTML= Number(Num1) / Number(Num2)

}