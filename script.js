const result = document.querySelector(".user-list");
const input = document.querySelector(".input-filter");
const userList = [];

getData();

input.addEventListener("input", function(e){ //e je event
    console.log(e.target.value);
});

async function getData(){ //async - asynchronní JS

};
