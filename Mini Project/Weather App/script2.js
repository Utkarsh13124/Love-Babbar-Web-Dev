const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_KEY = "2eae51938341b642d6c24dd00e35394e";
currentTab.classList.add("current-tab");

// ek kaam aur pending hi

function switchTab(clickedTab){
    if(clickedTab != currentTab){// button ke UI me change kr diya
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        // tab ke UI me change krna
        if(!searchForm.classList.contains("active")) {
            //kya search form wala container is invisible, if yes then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } 
        else{
            // means pehle search tab pr tha , ab weather tab visible krna h
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getInfoSessionStorage(); // getting current location from current session if stored
        }
    }

}

userTab.addEventListener("click",()=>{
    // pass clickedtab as input parameter 
    switchTab(userTab);
});
searchTab.addEventListener("click",()=>{
    // pass clickedtab as input parameter 
    switchTab(searchTab);
});


// check if coordinates are already present in session storage 
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // agar local coordinates nhi mile
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);// coverts into json string
        fetchUserWeatherInfo();
    }
}

async function fetchUserWeatherInfo(){
    const {lat, lon} = coordinates;
    // make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    // make loader visible
    loadingScreen.classList.add("active");
}

// API call
try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2eae51938341b642d6c24dd00e35394e&units=metric`);
    const data = await response.json();// this line conerts into json object

    loadingScreen.classList.remove("remove");
    userInfoContainer.classList.add("active");
    renderWeatherInfo(data);
} catch (err) {
    //hw
    loadingScreen.classList.remove("active");
}

function renderWeatherInfo(weatherInfo){
    //fistly, we have to fethc the elements 

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // fetch values from weatherInfo object and put it UI elements
    // 1 hr 16min
    cityName.innerText = weatherIcon?.name;// as in database after connverting given response into json we see that it is direct child of object
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;// optional chaining humhe error nhi deta hi agar object nhi hi to ye return krta hi ek undefined
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.weather?.[0]?.icon}.png`;// optional chaining humhe error nhi deta hi agar object nhi hi to ye return krta hi ek undefined
    temp.innerText = weatherIcon?.main?.temp;
    windspeed.innerText = weatherIcon?.wind?.speed;
    humidity.innerText = weatherInfo?.main?.humidity;
    cloudiness.innerText = weatherInfo?.clouds?.all;

}   

function showPosition(position){
    const userCoordinates = {// storing position
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));    // storing user-coordinates
    fetchUserWeatherInfo(userCoordinates);
}

function getLocation(){
    if(navigator.geolocation){// geolocation is a api , which have method to take location of user, so we checkingthat navigator is supporting geolocation api in device or not.
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        // show alert 
        console.log("No geoLocation support");
    }
}



grantAccessButton.addEventListener('click',getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}