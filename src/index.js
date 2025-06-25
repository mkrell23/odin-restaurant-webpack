import "./styles.css";
import firstContent from "./initialPage";
import menu from "./menu";

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const hoursButton = document.getElementById("hoursButton");

const content = document.getElementById("content");

function setPage(div){
    content.innerHTML = "";
    content.appendChild(div);
}

homeButton.addEventListener('click', function(){
    setPage(firstContent);
});

menuButton.addEventListener('click', function(){
    setPage(menu);
});


content.appendChild(firstContent);