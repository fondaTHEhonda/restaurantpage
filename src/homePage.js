import {loadHeader} from "./header"

loadHeader();

const pageContent = function() {
    let pageDiv = document.createElement('div');
    pageDiv.id = "home-page"

    let storeInfoContainer = document.createElement('div');
    let location = document.createElement('p');
    location.textContent = "9041 Snowden Square Dr" +  "\n" + "Columbia, MD 21045";
    let phone = document.createElement('p');
    phone.textContent = "(555) 555-5555"
    let hours = document.createElement('ul');
    let weekdays = document.createElement('li');
    weekdays.textContent = "Sun - Thu: 10:00am - 9:00pm";
    let weekends = document.createElement('li');
    weekends.textContent = "Fri - Sat: 9:00am - 11:00pm";
    hours.appendChild(weekdays);
    hours.appendChild(weekends);

    storeInfoContainer.appendChild(location);
    storeInfoContainer.appendChild(phone);
    storeInfoContainer.appendChild(hours);

    let review = document.createElement("p");
    review.textContent = "This place has the best cookies! The staff is very welcoming and if you're lucky, they'll give you a cookie infused with nip."

    pageDiv.style.backgroundImage = "url('https://handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg')"

    pageDiv.appendChild(review);
    pageDiv.appendChild(storeInfoContainer);

    return document.getElementById("content").appendChild(pageDiv);
}



export {pageContent}