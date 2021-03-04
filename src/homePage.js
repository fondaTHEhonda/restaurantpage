const loadHeader =  function() {
    let header = document.createElement("h1");
    header.textContent = "Cookie's Cookies";

    return document.getElementById("content").appendChild(header);

}

const loadReview = function() {
    let review = document.createElement("p");
    review.textContent = "This place has the best cookies! The staff is very welcoming and if you're lucky, they'll give you a cookie infused with nip."

    return document.getElementById("content").appendChild(review);
}

const loadImage = function() {
    let image = document.createElement("img");
    image.src = "https://static.onecms.io/wp-content/uploads/sites/24/2019/11/2615601_thegi_sprinkle_sandwich_cookies_270_0.jpg"

    return document.getElementById("content").appendChild(image);
}

export {loadHeader, loadReview, loadImage}