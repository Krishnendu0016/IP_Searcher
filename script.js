const ipAddress = document.getElementById('ip-address');

function getIP(json) {
    ipAddress.innerHTML = `Device IP address is ${json.ip}`;
}


const ipData = document.getElementById('ip-data');
const url = 'http://ip-api.com/json/';


const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
const submit = document.getElementById('submit');
const result = document.getElementById('searched-ip');

function formHandler(event) {
    event.preventDefault();
}

searchForm.addEventListener('submit', formHandler);

function getIPData() {
    let addr = searchBar.value;
    let newURL = `http://ip-api.com/json/${addr}`;
    fetch(newURL)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `Location: ${data.city},${data.regionName},${data.country}`;
        })
        .catch(error => {
            result.innerHTML = `Error retrieving location data for the IP address.`;
        });
}
submit.addEventListener('click', getIPData);
