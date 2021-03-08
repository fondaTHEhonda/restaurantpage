import {contactContent} from "./about"
import {menuContent} from "./menuPage"
import {pageContent} from "./homePage"
import {footer} from "./footer";

pageContent();
footer();


const displayPage = function(e) {
    if(e.target.id === "home") {
        document.getElementById('content').innerHTML = "";
        pageContent();
        footer();
    } else if(e.target.id === "menu") {
        document.getElementById('content').innerHTML = "";
        menuContent();
        footer();
    } else if(e.target.id === "about") {
        document.getElementById('content').innerHTML = "";
        contactContent();
        footer();
    }
}

window.addEventListener('click', displayPage);
