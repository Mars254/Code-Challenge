






const inputBox = document.getElementById("input-box");
const shoppingList = document.getElementById("shopping-list");

function addTask() {
    if (inputBox.value === '') {
        alert("Write your item")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        shoppingList.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
}


shoppingList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);



const secondList = document.getElementById("second-list");

function addItem() {
    if (inputBox.value === '') {
        alert("Write your item")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        secondList.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
}


secondList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);










































