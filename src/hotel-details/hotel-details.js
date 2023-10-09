//displaying the info
const extractDetails = (queryParameter) => {
    const params = queryParameter.slice(1, queryParameter.length).split("&");

    const name = params[0].split("=")[1];
    const price = params[1].split("=")[1];
    const rating = params[2].split("=")[1];
    const subtitle = params[3].split("=")[1];
    const image = params[4].substring(6, params[4].length);

    return {name, price, rating, subtitle, image};
}

const trimWebSpaces = (string) => {
    return decodeURI(string);
}

(() => {
    const details = extractDetails(window.location.search);

    const hotelContainer = document.querySelector(".hotel-container");

    const hotelImage = document.createElement("img");
    hotelImage.setAttribute("src", details.image);
    hotelContainer.appendChild(hotelImage);

    const hotelDetailsContainer = document.createElement("div");
    hotelDetailsContainer.classList.add("hotel-details");
    hotelContainer.appendChild(hotelDetailsContainer);

    const hotelHeading = document.createElement("div");
    hotelHeading.classList.add("hotel-heading");
    hotelHeading.innerText = trimWebSpaces(details.name);
    hotelDetailsContainer.appendChild(hotelHeading);

    const hotelRatingContainer = document.createElement("div");
    hotelRatingContainer.classList.add("hotel-rating");
    hotelRatingContainer.innerHTML = "<svg width=\"22\" height=\"20\" viewBox=\"0 0 22 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <g clip-path=\"url(#clip0_132_172)\">\n                        <path d=\"M12.1038 0.689063C11.9014 0.267969 11.4736 0 11.0038 0C10.534 0 10.11 0.267969 9.90379 0.689063L7.44789 5.75367L1.96316 6.56524C1.50483 6.63414 1.12289 6.95571 0.981567 7.39594C0.840247 7.83617 0.95483 8.32235 1.2833 8.64774L5.26316 12.5945L4.32358 18.1721C4.24719 18.6315 4.43816 19.0985 4.81629 19.3703C5.19441 19.6421 5.69476 19.6766 6.10726 19.4584L11.0076 16.8361L15.908 19.4584C16.3205 19.6766 16.8208 19.6459 17.1989 19.3703C17.5771 19.0947 17.768 18.6315 17.6916 18.1721L16.7482 12.5945L20.7281 8.64774C21.0566 8.32235 21.175 7.83617 21.0298 7.39594C20.8847 6.95571 20.5066 6.63414 20.0482 6.56524L14.5597 5.75367L12.1038 0.689063Z\" fill=\"#858282\"/>\n                    </g>\n                    <defs>\n                        <clipPath id=\"clip0_132_172\">\n                            <rect width=\"22\" height=\"19.6\" fill=\"white\"/>\n                        </clipPath>\n                    </defs>\n                </svg>"

    const hotelRatingText = document.createElement("div");
    hotelRatingText.innerText = trimWebSpaces(details.rating);
    hotelRatingContainer.appendChild(hotelRatingText);
    hotelDetailsContainer.appendChild(hotelRatingContainer);

    const hotelPrice = document.createElement("div");
    hotelPrice.classList.add("hotel-price");
    hotelPrice.innerText = `$${details.price} per night`;
    hotelDetailsContainer.appendChild(hotelPrice);

    //adding the feature and button
    hotelDetailsContainer.innerHTML += "<div class=\"hotel-features\">\n                <div class=\"hotel-features-heading\">Features</div>\n                <ul class=\"hotel-features-list\">\n                    <li class=\"hotel-features-list-item\">Tiny</li>\n                    <li class=\"hotel-features-list-item\">individual Room with private Bathroom</li>\n                </ul>\n            </div>\n            <div class=\"hotel-book\">\n                <div class=\"search-item-box\">\n                    <div class=\"search-text\"><label for=\"guests\">Guests</label></div>\n                    <div class=\"search-option-text\"><input type=\"number\" name=\"\" id=\"guests\" placeholder=\"1\"></div>\n                </div>\n                <a>\n                    <div class=\"nav-text active\">Book Now</div>\n                </a>\n                <div class=\"hotel-book-button\"></div>\n            </div>"
    const hotelFeaturesList = document.querySelector(".hotel-features-list");
    const hotelFeature = document.createElement("li");
    hotelFeature.classList.add("hotel-features-list-item");
    hotelFeature.innerText = trimWebSpaces(details.subtitle);
    hotelFeaturesList.appendChild(hotelFeature);
})()