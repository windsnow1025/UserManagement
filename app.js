const express = require('express');
const http = require("http");
const bodyParser = require('body-parser');

const app = express();

const UserData = require('./UserData')


// HTTP
const port = 80;
http.createServer(app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
}));


// Serve Static Files
app.use(express.static('public'));


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));


// Router
app.use('/UserData', UserData);
