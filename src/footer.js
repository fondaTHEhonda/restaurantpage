const footer = function() {
    let footerDiv = document.createElement('div');
    let footer = document.createElement('footer');
    footer.id = "footer";
    let footerP = document.createElement('p');
    footerP.textContent = 'Created by Fonda for The Odin Project';
    footerP.classList.add("footer-text");
    let copyright = document.createElement('p');
    copyright.textContent = "&copy 2021";
    copyright.classList.add("footer-text");

    footer.appendChild(footerP);
    footer.appendChild(copyright);
    footerDiv.appendChild(footer);

    return document.getElementById('content').appendChild(footerDiv);
}

export {footer}