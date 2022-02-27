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
let loginBtns = document.querySelectorAll(".login-btn");
let emailInput = document.querySelector("#email");

function add(x){
    for (user of x) {
        let userElement = document.createElement("DIV");
        userElement.classList.add("user-item");
        userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>Country: ${user.country}</p>
        `;
        userBox.appendChild(userElement);
    }
}

add(users);


emailInput.addEventListener("keyup", function(){
    let emailMsg = document.querySelector("#email-msg");

    if (emailInput.value.includes("@")){
        emailMsg.innerHTML="OK";
        emailMsg.style.color = "white";
    }else{
        emailMsg.innerHTML = "INVALID!";
        emailMsg.style.color = "red";
    }
});
//LOGIN
for(btn of loginBtns){
    btn.addEventListener("click", openHideLogin);
}

function openHideLogin(){
    let loginBox=document.querySelector("#login-box");
    if(loginBox.style.display===''||loginBox.style.display==='none'){
        loginBox.style.display = 'block';
    } else {
        loginBox.style.display = 'none';
    }
}
//LOGIN

// Filter update
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
    add(filteredUsers);
});

filtersNav.addEventListener("click", function(){
    let filterBox = document.querySelector("#filters");

    if (filterBox.style.display === '' || filterBox.style.display==='none'){
        filterBox.style.display='block';
    }else{
        filterBox.style.display='none';
    }

});
// Filter update

//Search btn
searchBtn.addEventListener("click",function(){
    let filteredUsers = users.filter(function(user){
        return user.name.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase());
    });

    userBox.innerHTML="";

    add(filteredUsers);

});






