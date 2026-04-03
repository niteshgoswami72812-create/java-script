

let GetData = async () => {
    let api = 'https://jsonplaceholder.typicode.com/photos';
    let res = await fetch(api);
    let data = await res.json();
    
  
    console.log(data);

   

let showData = document.querySelector("#show");

 let display =data.slice(0,100).map((e) => {
    return`
         <div class="card">
            <h1>Album ID: ${e.albumId}</h1>
            <p>ID: ${e.id}</p>
            <p>Thumbnail URL: ${e.thumbnailUrl}</p>
            <p>Title: ${e.title}</p>
            <img src="${e.url}" width="100px" />
        </div>
        `;
    }).join('');

    showData.innerHTML = display; }

    GetData()



    
