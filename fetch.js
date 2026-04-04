

let GetData = async () => {
    let api = 'https://jsonplaceholder.typicode.com/posts';
    let res = await fetch(api);
    let data = await res.json();
    
  
    console.log(data);

   

let showData = document.querySelector("#show");

 let display =data.slice(0,100).map((e) => {
    return`
         <div class="card">
            <h1>user ID: ${e.userId}</h1>
            <p>ID: ${e.id}</p>
            <p>title: ${e.title}</p>
            <p>body: ${e.body}</p>
        </div>
        `;
    }).join('');

    showData.innerHTML = display; }

    GetData()



    
