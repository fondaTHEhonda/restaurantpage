import {loadHeader} from "./header";

let cookies = [
    {Type: "Sugar", Description: "A classic cookie that reminds you of home", Price: "$1.99"},
    {Type: "Chocolate Chip", Description: "A warm, soft delight like grandmeow used to make", Price: "$1.99"},
    {Type: "Snickerdoodle", Description: "Cinnamon bliss perfect for any time of day", Price: "$2.49"},
    {Type: "Chocolate Crinkle", Description: "For the chocolate lovers sprinkled with sugar", Price: "$2.99"},
    {Type: "Oatmeal Raisin", Description: "Brown sugar, cinnamon, and raisins. A simple but delicious cookie", Price: "$1.99"},
    {Type: "Cookie's Special", Description: "A cat friendly treat infused with catnip", Price: "$2.49"}
];

let menuTable = document.createElement("table");
let data = Object.keys(cookies[0]);

function createTableHead(table, data) {

    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data) {
        let th = document.createElement("th");
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
    return document.getElementById('content').appendChild(menuTable);
}

const menuContent = function() {
    loadHeader();

    //createTable(menuTable, cookies);
    //createTableHead(menuTable, data);
    
    let specials = document.createElement("div");
    let info = document.createElement("h3");
    let specialInfo = document.createElement('ul');
    info.textContent = "See our specials!"

    let dailyDeal = document.createElement('li');
    let occupationDeal = document.createElement('li')
    let bogo = document.createElement('li');

    dailyDeal.textContent = "25% off on all Chungus packs on Wednesdays!"
    occupationDeal.textContent = "Veterans, teachers, first responders, and nurses get 10% off every cookie!"
    bogo.textContent = "Buy any 2 cookies, get 1 free on Mondays!"

    specials.appendChild(info);

    specialInfo.appendChild(dailyDeal);
    specialInfo.appendChild(occupationDeal);
    specialInfo.appendChild(bogo);

    specials.appendChild(specialInfo);

    return document.getElementById("content").appendChild(specials);

    
}

export {menuContent}