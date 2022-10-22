
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=db48dd68f7e4f85dd2138db054a0b006&mood=b668bd82762d2ed3f000fe0eac1f3667";
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            console.log(description);
        });
    

    })

    
    res.send("Server is up & running");
});




app.listen(3000, function() {
    console.log("Server has started at 3000");
});