const result = document.querySelector(".user-list");
const input = document.querySelector(".input-filter");
const userList = [];

getData();

input.addEventListener("input", function(e){ //e je event
    dataFilter(e.target.value);
});

async function getData(){ //async - asynchronní JS - načítá na pozadí 
    const allUsers = await fetch("https://randomuser.me/api?results=50"); //fetch - stahuje, await - počkej než se to dokonči
    const data = await allUsers.json(); //převede data z JSON
    result.innerHTML = ""; //vymaže všechny li
    data.results.forEach(user => { //práce s daty - projede se to cyklem; uloží každého uživatele do user
        const li = document.createElement("li"); //vytvoření prázného li
        li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-information">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>`

        result.appendChild(li);

        userList.push(li);
    }); 
};

function dataFilter(inputText){
    userList.forEach(oneUser => {
        if (oneUser.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide");
        } else {
            oneUser.classList.add("hide");
        }
    })
}
