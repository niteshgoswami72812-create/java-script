    let nitesh = async () => {
    let myTable = document.querySelector("#myTable");

    myTable.style.display = "table";

    let api = 'https://jsonplaceholder.typicode.com/posts';

    try { 
        let response = await fetch(api);
        let data = await response.json();
        
        console.log(data);

        let Show = document.querySelector("#card");
        Show.innerHTML = "";

        data.map((e) => {
            Show.innerHTML += `
            <tr>
                <td>${e.userId}</td>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.body}</td>
            </tr>
            `;
        });
    } catch (error) {
        console.error("Data fetch karne me error hai:", error);
    }
}
