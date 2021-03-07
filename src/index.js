import {contactContent} from "./about"
import {menuContent} from "./menuPage"
import {pageContent} from "./homePage"

pageContent();

const displayPage = function(e) {
    if(e.target.id === "home") {
        document.getElementById('content').innerHTML = "";
        pageContent();
    } else if(e.target.id === "menu") {
        document.getElementById('content').innerHTML = "";
        menuContent();
    } else if(e.target.id === "about") {
        document.getElementById('content').innerHTML = "";
        contactContent();
    }
}

window.addEventListener('click', displayPage);
