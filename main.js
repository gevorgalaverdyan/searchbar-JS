let users=[
    {
        name: "Gevorg",
        age:21,
        country:"Armenia"
    },
    {
        name: "Levon",
        age: 20,
        country: "Armenia"
    },
    {
        name: "Mario",
        age: 19,
        country: "Syria"
    },
];

let searchBtn = document.querySelector("#search-btn");
let userBox = document.querySelector("#container");
let searchText = document.querySelector("#search-input");

searchBtn.addEventListener("click",function(){
    let filteredUsers = users.filter(function(user){
        return user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase());
    });

    userBox.innerHTML="";

    for(user of filteredUsers){
        let userElement = document.createElement("DIV");
        userElement.classList.add("user-item");
        userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>Country: ${user.country}</p>
        `;
        userBox.appendChild(userElement);
    }

});

for(user of users){
    let userElement = document.createElement("DIV");
    userElement.classList.add("user-item");
    userElement.innerHTML=`
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
    <p>Country: ${user.country}</p>
    `;
    userBox.appendChild(userElement);
}


