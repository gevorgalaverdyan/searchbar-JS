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
let filtersNav = document.querySelector("#filters-nav");
let updateBtn = document.querySelector("#update-filters");

updateBtn.addEventListener("click", function () {
    let currentAge = document.querySelector("#age-filter").value.toString();
    let currentCountry = document.querySelector("#country-filter").value.toLocaleLowerCase();
  

    let filteredUsers = users.filter(function(user){
      
        return (
            user.country.toLocaleLowerCase().includes(currentCountry)&& 
            user.age.toString().includes(currentAge)&&
            user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())
        );
    });

    userBox.innerHTML = "";
    for (user of filteredUsers) {
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

filtersNav.addEventListener("click", function(){
    let filterBox = document.querySelector("#filters");

    if (filterBox.style.display === '' || filterBox.style.display==='none'){
        filterBox.style.display='block';
    }else{
        filterBox.style.display='none';
    }

});

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


