import {loadHeader} from "./header";

const contactContent = function() {
    loadHeader();
    let contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";

    let ownerDiv = document.createElement('div');
    ownerDiv.id = "owner-display";

    let cookieImg = document.createElement('img');
    cookieImg.src = "https://www.thesprucepets.com/thmb/_w_4qXWKki2VZ_ie-MzVpv9B8YQ=/1964x1473/smart/filters:no_upscale()/GettyImages-584178259-5a721010119fa80037ed3cce.jpg";
    cookieImg.classList.add("owner-image");

    let tuxImg = document.createElement('img');
    tuxImg.src = "https://cattime.com/assets/uploads/2017/10/tuxedo-cat-2-e1569622438857-1280x720.jpg";
    tuxImg.classList.add("owner-image");

    let cookieName = document.createElement('h3');
    let cookieDesc = document.createElement('p');
    let tuxName = document.createElement('h3');
    let tuxDesc = document.createElement('p');

    cookieDesc.textContent = "Cookie was raised by her two parents in Reisterstown. She found her love for cookies after her parents came home after a night of drinking with a gourmet pack of cookies from the city."
    tuxDesc.textContent = "Tuxedo loves food and will do anything to be around it. His passion for cookies knows no bounds."
    cookieName.textContent = "Cookie";
    tuxName.textContent = "Tuxedo";

    ownerDiv.appendChild(cookieName);
    ownerDiv.appendChild(cookieImg);
    ownerDiv.appendChild(cookieDesc);
    ownerDiv.appendChild(tuxName);
    ownerDiv.appendChild(tuxImg);
    ownerDiv.appendChild(tuxDesc);

    contactContainer.appendChild(ownerDiv);

    let infoDiv = document.createElement('div');
    infoDiv.classList.add('info-container');

    let infoList = document.createElement('ul');
    let location = document.createElement('p');
    let phone = document.createElement('p');
    let hours = document.createElement('li');

    location.innerHTML = "9041 Snowden Square Dr" +  "\n" + "Columbia, MD 21045"
    phone.textContent = "(555) 555-5555";
    hours.textContent = "Sun - Thu: 10:00am - 9:00pm"

    
    infoDiv.appendChild(location);
    infoDiv.appendChild(phone);

    infoList.appendChild(hours);

    infoDiv.appendChild(infoList);
    contactContainer.appendChild(infoDiv);

    let formDiv = document.createElement('div');
    formDiv.id = "form-container";

    let nameLabel = document.createElement('label');
    nameLabel.textContent = "First Name: ";
    nameLabel.classList.add("form-content");

    let nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.classList.add("form-content");
    
    let emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: ";
    emailLabel.classList.add("form-content");

    let emailInput = document.createElement('input');
    emailInput.type = "text";
    emailInput.classList.add("form-content");

    let commentLabel = document.createElement("label");
    commentLabel.textContent = "Leave a review or ask a question!";
    commentLabel.classList.add("form-content");

    let commentInput = document.createElement('textarea');
    commentInput.classList.add("form-content");
    

    let submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";

    formDiv.appendChild(nameLabel);
    formDiv.appendChild(nameInput);
    formDiv.appendChild(emailLabel);
    formDiv.appendChild(emailInput);
    formDiv.appendChild(commentLabel);
    formDiv.appendChild(commentInput);
    formDiv.appendChild(submitBtn);

    let bottomContainer = document.createElement('div');
    bottomContainer.id = "bottom-container";
    bottomContainer.appendChild(infoDiv);
    bottomContainer.appendChild(formDiv);

    contactContainer.appendChild(bottomContainer);

    return document.getElementById('content').appendChild(contactContainer);
}

export {contactContent}