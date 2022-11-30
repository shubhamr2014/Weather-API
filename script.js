function initAPiCall() {
    var token = document.getElementById("accesstoken1").value;
    var location = document.getElementById("location1").value;

    if (location == undefined || location.trim() == "") {
        alert("please enter valid access location");
        return
    }
    if (token == undefined || token.trim() == "") {
        alert("please enter valid access token");
        return
    }

    var apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${token}&contentType=json`;
    fetch(apiUrl)
        .then((data) => {
            return data.json();
        })
        .then((post) => {
            updateUi(post);
        });
}

function updateUi(data) {
    if (data.hasOwnProperty("success")) {
        alert(data.error.info);
        return;
    }

    var paragraph = document.getElementById("location2");
    document.getElementById('location2').innerHTML = '';
    var text = document.createTextNode("Location: " + data.resolvedAddress);
    paragraph.appendChild(text);

    paragraph = document.getElementById("lat");
    document.getElementById('lat').innerHTML = '';
    var text = document.createTextNode("Lat: " + data.latitude);
    paragraph.appendChild(text);


    var paragraph = document.getElementById("long");
    document.getElementById('long').innerHTML = '';
    var text = document.createTextNode("Long: " + data.longitude);
    paragraph.appendChild(text);

    var paragraph = document.getElementById("time-zone");
    document.getElementById('time-zone').innerHTML = '';
    var text = document.createTextNode("TimeZone: " + data.timezone);
    paragraph.appendChild(text);

    var paragraph = document.getElementById("wind-speed");
    document.getElementById('wind-speed').innerHTML = '';
    var text = document.createTextNode("Wind Speed: " + data.days[0].windspeed);
    paragraph.appendChild(text);

    var paragraph = document.getElementById("pressure");
    document.getElementById('pressure').innerHTML = '';
    var text = document.createTextNode("Pressure: " + data.days[0].pressure);
    paragraph.appendChild(text);

    var paragraph = document.getElementById("humidity");
    document.getElementById('humidity').innerHTML = '';
    var text = document.createTextNode("Humidity: " + data.days[0].humidity);
    paragraph.appendChild(text);

    var paragraph = document.getElementById("wind-direction");
    document.getElementById('wind-direction').innerHTML = '';
    var text = document.createTextNode("Wind Direction: " + data.days[0].winddir);
    paragraph.appendChild(text);

    var paragraph = document.getElementById("uv-index");
    document.getElementById('uv-index').innerHTML = '';
    var text = document.createTextNode("UV Index: " + data.days[0].uvindex);
    paragraph.appendChild(text);

    var paragraph = document.getElementById("feels-like");
    document.getElementById('feels-like').innerHTML = '';
    var text = document.createTextNode("Feels Like: " + data.days[0].feelslike);
    paragraph.appendChild(text);
}