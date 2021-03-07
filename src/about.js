import {loadHeader} from "./header";

const contactContent = function() {
    loadHeader();
    let contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";

    let ownerDiv = document.createElement('div');
    ownerDiv.id = "owner-display";

    let cookieImg = document.createElement('img');
    cookieImg.src = "";

    let tuxImg = document.createElement('img');
    tuxImg.src = "";

    let cookieDesc = document.createElement('p');
    let tuxDesc = document.createElement('p');

    cookieDesc.textContent = "Cookie was raised by her two parents in Reisterstown. She found her love for cookies after her parents came home after a night of drinking with a gourmet pack of cookies from the city."
    tuxDesc.textContent = "Tuxedo loves food and will do anything to be around it. His passion for cookies knows no bounds."

    ownerDiv.appendChild(cookieImg);
    ownerDiv.appendChild(tuxImg);
    ownerDiv.appendChild(cookieDesc);
    ownerDiv.appendChild(tuxDesc);

    contactContainer.appendChild(ownerDiv);

    let infoDiv = document.createElement('div');
    infoDiv.id = "info";

    let infoList = document.createElement('ul');
    let location = document.createElement('li');
    let phone = document.createElement('li');
    let hours = document.createElement('li');

    location.textContent = "9041 Snowden Square Dr" +  "\n" + "Columbia, MD 21045"
    phone.textContent = "(555) 555-5555";
    hours.textContent = "Sun - Thu: 10:00am - 9:00pm"

    infoList.appendChild(location);
    infoList.appendChild(phone);
    infoList.appendChild(hours);

    infoDiv.appendChild(infoList);
    contactContainer.appendChild(infoDiv);

    let formDiv = document.createElement('div');
    formDiv.id = "form-container";

    let nameLabel = document.createElement('label');
    nameLabel.textContent = "First Name: ";

    let nameInput = document.createElement('input');
    nameInput.type = "text";
    
    let emailLabel = document.createElement("label");
    emailLabel.textContent = "Email: ";

    let emailInput = document.createElement('input');
    emailInput.type = "text";

    let commentLabel = document.createElement("label");
    commentLabel.textContent = "Leave a review or ask a question!"

    let commentInput = document.createElement('textarea');
    

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

    contactContainer.appendChild(formDiv);

    return document.getElementById('content').appendChild(contactContainer);
}

export {contactContent}