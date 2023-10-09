//adding the json data to the second page hotels list

const FILE_PATH = {
    BERLIN: "/assets/jsonData/Berlin.json",
    LONDON: "/assets/jsonData/London.json",
    MADRID: "/assets/jsonData/Madrid.json",
    PARIS: "/assets/jsonData/Paris.json",
    ROME: "/assets/jsonData/Rome.json"
}

const trimName = (hotelName) => {
    let s = "";
    hotelName.trim();
    if (hotelName.length > 21) {
        return hotelName.slice(0, 18) + "...";
    }
    return hotelName;
}

const createHotelListCard = (hotelName, hotelImg, hotelSubtitle, hotelPrice, hotelRating) => {
    const hotelCardDiv = document.createElement("div");
    hotelCardDiv.classList.add("hotel-list-card")

    const hotelImgDiv = document.createElement("div");
    hotelImgDiv.classList.add("bg-img");

    const hotelImgElem = document.createElement("img");
    hotelImgElem.setAttribute("loading", "lazy");
    hotelImgElem.setAttribute("src", hotelImg);
    hotelImgDiv.setAttribute("alt", "hotel image");

    const hotelCardTextDiv = document.createElement("div");
    hotelCardTextDiv.classList.add("card-text")

    const hotelCardTitle = document.createElement("div");
    hotelCardTitle.classList.add("card-title");
    hotelCardTitle.innerText = trimName(hotelName);

    const hotelCardSubTitle = document.createElement("div");
    hotelCardSubTitle.classList.add("card-subtitle");
    hotelCardSubTitle.innerText = hotelSubtitle;

    const hotelCardPrice = document.createElement("div");
    hotelCardPrice.classList.add("card-price");
    hotelCardPrice.innerText = `From $${hotelPrice} per night`;

    hotelCardTextDiv.append(hotelCardSubTitle, hotelCardPrice, hotelCardTitle);

    hotelImgDiv.append(hotelImgElem, hotelCardTextDiv);
    hotelCardDiv.appendChild(hotelImgDiv);

    //on clicking the div we will show the details for that hotel
    hotelCardDiv.addEventListener("click", () => {
        window.location.assign(`../hotel-details/hotel-details.html?name=${hotelName}&price=${hotelPrice}&rating=${hotelRating}&subtitle=${hotelSubtitle}&image=${hotelImg}`);
    })

    return hotelCardDiv;
}

const decideCountryName = (file) => {
    switch (file) {
        case FILE_PATH.BERLIN:
            return "Berlin";
        case FILE_PATH.PARIS:
            return "Paris";
        case FILE_PATH.MADRID:
            return "Madrid";
        case FILE_PATH.LONDON:
            return "London";
        case FILE_PATH.ROME:
            return "Rome";
    }
}

const decideFileByCountryName = (name) => {
    switch (name) {
        case "Paris":
            return FILE_PATH.PARIS;
        case "London":
            return FILE_PATH.LONDON;
        case "Madrid":
            return FILE_PATH.MADRID;
        case "Rome":
            return FILE_PATH.ROME;
        case "Berlin":
            return FILE_PATH.BERLIN;
    }
}

//counter for next button
let counter = 1;

const generateHotelList = async () => {
    const citySelection = document.getElementById("city-selection");
    citySelection.addEventListener("change", () => {
        generateHotelList()
    });

    const file = decideFileByCountryName(citySelection.value);

    //set the file name according to the file we are reading from
    document.querySelector(".mid-text").innerText = decideCountryName(file);

    //fetch the data(read the file)
    const data = await fetch(file);
    const res = await data.json();

    const hotelsList = res.airbnbHotels;

    //for now we will only show numbers of hotels
    let noOfHotels = 12 * counter;

    //query the grid div and append noOfHotels card to it
    const hotelGridDiv = document.querySelector(".centerProp");
    hotelGridDiv.innerHTML = null;

    for (let i = 0; i < noOfHotels; i++) {
        const currentHotel = hotelsList[i];
        hotelGridDiv.appendChild(createHotelListCard(
            currentHotel.title,
            currentHotel.thumbnail,
            currentHotel.subtitles[1],
            currentHotel.price.value,
            currentHotel.rating
        ));
    }
}

generateHotelList();

document.querySelector(".next-hotel-btn").addEventListener("click", () => {
    counter++;
    generateHotelList()
})