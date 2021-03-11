import {loadHeader} from "./header";

let cookies = [
    {Type: "Sugar", Description: "A classic cookie that reminds you of home", Price: "$1.99"},
    {Type: "Chocolate Chip", Description: "A warm, soft delight like grandmeow used to make", Price: "$1.99"},
    {Type: "Snickerdoodle", Description: "Cinnamon bliss perfect for any time of day", Price: "$2.49"},
    {Type: "Chocolate Crinkle", Description: "For the chocolate lovers sprinkled with sugar", Price: "$2.99"},
    {Type: "Oatmeal Raisin", Description: "Brown sugar, cinnamon, and raisins. A simple but delicious cookie", Price: "$1.99"},
    {Type: "Cookie's Special", Description: "A cat friendly treat infused with catnip", Price: "$2.49"}
];

let pageContainer = document.createElement('div');
pageContainer.id = "page-container";
let tableDiv = document.createElement("div");
tableDiv.id = "table-div";
let menuTable = document.createElement("table");
menuTable.id = "table-display";
let data = Object.keys(cookies[0]);

let menu = document.createElement('p');
menu.textContent = "Menu";
menu.id = "menu-p";
pageContainer.appendChild(menu);

function createTableHead(table, data) {

    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data) {
        let th = document.createElement("th");
        th.id = "table-head";
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function createTable(table, data) {

    for(let element of data) {
        let tRow = table.insertRow();
        for(let key in element) {
            let cell = tRow.insertCell();
            let cellText = document.createTextNode(element[key]);
            cell.appendChild(cellText);
        }
    }
    
    tableDiv.appendChild(menuTable);
    pageContainer.appendChild(tableDiv);
    return document.getElementById('content').appendChild(pageContainer);
}

const menuContent = function() {
    loadHeader();

    createTable(menuTable, cookies);
    createTableHead(menuTable, data);
    
    let specials = document.createElement("div");
    specials.id = "special-container";
    let info = document.createElement("p");
    info.id = "special-title";
    let specialInfo = document.createElement('ul');
    info.textContent = "See our specials!"

    let dailyDeal = document.createElement('li');
    dailyDeal.classList.add("special-list");
    let occupationDeal = document.createElement('li')
    occupationDeal.classList.add("special-list");
    let bogo = document.createElement('li');
    bogo.classList.add("special-list");

    dailyDeal.textContent = "25% off on all Chungus packs on Wednesdays!"
    occupationDeal.textContent = "Veterans, teachers, first responders, and nurses get 10% off every cookie!"
    bogo.textContent = "Buy any 2 cookies, get 1 free on Mondays!"

    specials.appendChild(info);

    specialInfo.appendChild(dailyDeal);
    specialInfo.appendChild(occupationDeal);
    specialInfo.appendChild(bogo);

    specials.appendChild(specialInfo);
    pageContainer.appendChild(specials);



    return document.getElementById("content").appendChild(pageContainer);

    
}

export {menuContent}