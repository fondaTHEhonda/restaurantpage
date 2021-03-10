import {loadHeader} from "./header";
import {footer} from "./footer";

const pageContent = function() {
    loadHeader();
    let pageDiv = document.createElement('div');
    pageDiv.id = "home-page"

    let storeInfoContainer = document.createElement('div');
    storeInfoContainer.classList.add("info-container");
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
    review.textContent = "This place has the best cookies! The staff is very welcoming and if you're lucky, they'll give you a cookie infused with nip. - Gus K."
    review.style.fontStyle = "italic";

    let imageContainer = document.createElement('div');
    imageContainer.id = "images";

    let sugarImg = document.createElement('img');
    sugarImg.src = "https://www.dominosugar.com/emshare/views/modules/asset/downloads/originals/2019/11/69028/Domino18_Description_600x400.jpg/Domino18_Description_600x400.jpg";
    sugarImg.alt = "Sugar Cookie";
    sugarImg.classList.add("cookie-images");
    let chocoImg = document.createElement('img');
    chocoImg.src = "https://www.fifteenspatulas.com/wp-content/uploads/2010/12/Chocolate-Chip-Cookie-Recipe-Fifteen-Spatulas-2.jpg";
    chocoImg.alt = "Chocolate Chip Cookie";
    chocoImg.classList.add("cookie-images");
    let snickerImg = document.createElement('img');
    snickerImg.src = "https://www.jessicagavin.com/wp-content/uploads/2019/12/snickerdoodle-cookies-10-1200.jpg";
    snickerImg.alt = "Snickerdoodle";
    snickerImg.classList.add("cookie-images");
    let crinkleImg = document.createElement('img');
    crinkleImg.src = "https://natashaskitchen.com/wp-content/uploads/2020/11/Chocolate-Crinkle-Cookies-5-728x1092.jpg";
    crinkleImg.alt = "Chocolate Crinkle";
    crinkleImg.classList.add("cookie-images");
    let oatmealImg = document.createElement('img');
    oatmealImg.src = "https://www.inspiredtaste.net/wp-content/uploads/2016/12/Soft-and-Chewy-Oatmeal-Raisin-Cookies-Recipe-1200.jpg";
    oatmealImg.alt = "Oatmeal Raisin Cookie";
    oatmealImg.classList.add("cookie-images");
    let cookieImg = document.createElement('img');
    cookieImg.src = "https://i.pinimg.com/236x/dd/25/f1/dd25f1072081d7bd0c173ad3b907b68b--cookie-blog-cookie-ideas.jpg";
    cookieImg.alt = "Cookie's Special Cookie";
    cookieImg.classList.add("cookie-images");

    imageContainer.appendChild(sugarImg);
    imageContainer.appendChild(chocoImg);
    imageContainer.appendChild(snickerImg);
    imageContainer.appendChild(crinkleImg);
    imageContainer.appendChild(oatmealImg);
    imageContainer.appendChild(cookieImg);

    pageDiv.appendChild(review);
    pageDiv.appendChild(imageContainer);
    pageDiv.appendChild(storeInfoContainer);
    

    return document.getElementById("content").appendChild(pageDiv);
}



export {pageContent}