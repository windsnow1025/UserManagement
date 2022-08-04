const express = require('express')
const mysql = require("mysql");

const app = express();
const router = express.Router();

// MySQL Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "windsnow"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("MySQL Connected!");
});


// MySQL Functions

function Show(callback){
    connection.query("SELECT * FROM Users", function (err, result, fields) {
        if (err) throw err;
        return callback(result);
    });
}

function Store(NewData){
    var username = NewData.username;
    var passwd = NewData.passwd;
    let sql = `INSERT INTO Users (username, passwd) VALUES (?,?)`;
    let sqldata = [username, passwd];
    connection.query(sql, sqldata, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

function Delete(id){
    var sql = "DELETE FROM Users WHERE id = ?";
    var sqldata = id;
    connection.query(sql,sqldata, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
}


// Data Processing

router.get('/', (req, res, next) => {
    //Show Data
    Show(function(result) {
        var data = result;
        console.log(data);
        // Response, Next
        res.send(data);
        next();
    });
})

router.post('/', (req, res, next) => {
    // Get Data
    let NewData = req.body.NewData;
    // Store Data
    Store(NewData);
    // Response, Next
    res.send('POST Success!');
    next();
})

router.delete('/:id', (req, res, next) => {
    // Get Data
    let id = req.params.id;
    // Delete Data
    Delete(id);
    // Response, Next
    res.send('DELETE Success!');
    next();
})


module.exports = router