const url = 'https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=%3CREQUIRED%3E&departure_date=%3CREQUIRED%3E&guest_qty=1&dest_ids=-3712125&room_qty=1&search_type=city&children_qty=2&children_age=5%2C7&search_id=none&price_filter_currencycode=USD&order_by=popularity&languagecode=en-us&travel_purpose=leisure';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '890f4882bfmsh18633a955f39a84p14f735jsn520f5e28e1d0',
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
    }
};

async function printer() {


    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}


document.querySelector('.get-bt').addEventListener('click', printer)