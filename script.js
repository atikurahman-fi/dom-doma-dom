const title = document.querySelector("#title");
title.textContent = "Atikur Learning JavaScript DOM Manipulation";

title.style.color = "blue";
title.style.fontSize = "24px";
title.style.backgroundColor = "lightgray";
title.style.padding = "25px";



title.classList.toggle("darkMode")

const button = document.querySelector("#btn");
button.textContent = "Oohh yeah button";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "red";
button.style.color = "white";

const list = document.querySelector("#list");
const items = document.createElement("li");
items.textContent = "Item 1";
list.appendChild(items);


button.addEventListener("click", function() {
    button.style.backgroundColor ="green";
console.log("button was clicked by artikur");})

const newButt=document.querySelector("#newBtn");
newButt.addEventListener("click", function(){
    const backk=document.querySelector("body");
    backk.style.backgroundColor="yellow";
})

const thirdButt=document.querySelector("#thirdButt");
thirdButt.addEventListener("click", (event)=>{
    console.log("Third button was clicked",event);
})





