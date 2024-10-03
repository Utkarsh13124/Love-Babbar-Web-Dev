//server insantiate
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
//& used to parse req.body in express -> put or post
app.use(bodyParser.json());
//json data ko parse krna hi , & it to the request.body objjected


//& activate the server in localhost 3000
app.listen(port, () => {
    console.log('Server is running on port 3000');
});

//& routes
app.get('/', (request, response) => {
    response.send('Hello World!');
});
// '/' is route me aayege to , ye behaviour jo as callback function likha hua hi wo chalega

//& testing a post request
// humne iss server ke upar ek route defined kr diya, jab hum uss route pr jayenge to humara , function wala code run hoga.
app.post('/api/cars', (request, response) => {
    const {name ,brand} = request.body;// as request consist of some day to be posted.
    console.log(name);
    console.log(brand);
response.send("Car submitted successfully.");
})


//& connecting with mongoDb with help of mongoose with these two lines
const mongoose = require('mongoose');// exporting mongoose
mongoose.connect('mongodb://localhost:27017/myDatabase' , {
    useNewurlParser: true,
    useUnifiedTopology: true
}).then( ()=>{console.log("Connection established")})
.catch( (error) => {console.log("Error connecting")} );
// coonecting mongo with db , first parameter is configuration , 2nd thing is configration mandatory to write
// this whole above thing is promise. 

