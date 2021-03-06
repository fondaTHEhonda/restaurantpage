const loadHeader =  function() {
    let header = document.createElement("header");
    let restName = document.createElement("h1");
    restName.textContent = "Cookie's Cookies"
    let navBar = document.createElement("ul");
    navBar.id = "nav";
    let home = document.createElement("li");
    home.id = "home";
    let menu = document.createElement("li");
    menu.id = "menu";
    let about = document.createElement("li");
    about.id = "about";
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