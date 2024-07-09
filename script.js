const inputBox = document.getElementById("input-box");
const shoppingList = document.getElementById("shopping-list");
const secondList = document.getElementById("second-list");

function addTask() {
    if (inputBox.value === '') {
        alert("Write your item");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        shoppingList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

shoppingList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("unchecked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function addItem() {
    if (inputBox.value === '') {
        alert("Write your item");
    } else {
        let li = document.createElement("li");
        li.className = "second";
        li.innerHTML = inputBox.value;
        secondList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

secondList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        if (e.target.classList.contains("on")) {
            e.target.classList.remove("on");
            e.target.classList.add("second");
        } else if (e.target.classList.contains("second")) {
            e.target.classList.remove("second");
            e.target.classList.add("on");
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function btn() {
    shoppingList.innerHTML = '';
    secondList.innerHTML = '';
}



























