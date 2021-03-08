const loadHeader =  function() {
    let header = document.createElement("header");
    let restName = document.createElement("h1");
    restName.id = "rest-title"
    restName.textContent = "Cookie's Cookies"
    let navBar = document.createElement("ul");
    navBar.id = "nav";
    let home = document.createElement("li");
    home.id = "home";
    home.classList.add("navigation");
    let menu = document.createElement("li");
    menu.id = "menu";
    menu.classList.add("navigation");
    let about = document.createElement("li");
    about.id = "about";
    about.classList.add("navigation");
    home.textContent = "Home";
    menu.textContent = "Menu";
    about.textContent = "About";
    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(about);
    header.appendChild(restName);
    header.appendChild(navBar);

    return document.getElementById("content").appendChild(header);

}

export {loadHeader};