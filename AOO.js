let fruit = [
    {
        names: "Nitesh",
        age: 25,
        city: "Narmadapuram",
        phone: 9753856359,
        photo: "docotr.PNG"
    },
    {
        names: "Dilip",
        age: 48,
        city: "Narmadapuram",
        phone: 9098208864,
        photo: "docotr.PNG"
    },
    {
        names: "Khushi",
        age: 24,
        city: "Narmadapuram",
        phone: 8450050779,
        photo: "docotr.PNG"
    },
    {
        names: "Ritu",
        age: 23,
        city: "Narmadapuram",
        phone: 8815170776,
        photo: "docotr.PNG"
    }
];



let showData = document.querySelector("#show");

fruit.map((e) => {
   
    showData.innerHTML += `
    <div class="card"> 
        <img src="${e.photo}" alt="${e.names}" width="100px">
        <h1>${e.names}</h1>
        <p>Age: ${e.age}</p>
        <p>City: ${e.city}</p>
        <p>Phone: ${e.phone}</p>
    </div>
    `;
});





let num = [8, 40, 66, 88, 100]

let newarr = num.map((e) => {

    return e * 2
})

console.log(newarr);




let newfilter = num.filter((e) => {

    return e % 2 == 0
})

console.log(newfilter);
