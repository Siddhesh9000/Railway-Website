const express = require("express")
const app = express()

const mysql = require("mysql");
const nodemon = require("nodemon");

require("dotenv").config({path: "./data.env"})

// const port = process.env.PORT 
port = 3000
app.listen(port, ()=> console.log('server is at' + port ));

const host1 = process.env.host
const user1 =process.env.username
const password1= process.env.password
const database1= process.env.database
const port1= process.env.port


const db = mysql.createPool(({
    host: host1,
    user: user1,
    password: password1,
    database: database1,
    port: port1
}))

db.getConnection((err, connection)=> {
    if(err) throw (err)
    console.log('db was found at port ' + port1)
})
