const express = require("express")
const app = express()

const mysql = require("mysql");
// const nodemon = require("nodemon");

require("dotenv").config({path: "./data.env"})

const port2 = process.env.serverport

app.use(express.json())
app.use(express.urlencoded());


app.listen(port2, ()=> console.log('server is at' + port2 ));

const host1 = process.env.host
const user1 =process.env.username
const password1= process.env.password
const database1= process.env.database
const port1= process.env.port
// const  train1 = process.env.train


const db = mysql.createPool(({
    host: host1,
    user: user1,
    password: password1,
    database: database1,
    port: port1
}))

// db.getConnection((err, connection)=> {
//     if(err) throw (err)
//     console.log('db was found at port ' + port1)
// })

app.post("/login", (req,res) => {
    console.log("req recieved")
    console.log(req)
    const user = req.body.username
    const pwrd = req.body.password
    console.log(user, pwrd)

    const query = "SELECT * FROM user WHERE username = ?"
    searchquery = mysql.format(query, [user])
    
    db.getConnection(async (err, connection)=> {
        if(err) throw (err)
        console.log('db was found at port ' + port1)

        await connection.query(searchquery, async (err, result) => {
            connection.release()

            if(err) throw(err)
            if(result.length == 0){ console.log("user not exist")}
            else{
                console.log(result)
                if(result[0].password == pwrd)
                {                    alert("logged in succesffuly")                }
                else{                    alert("wrong password")                }
            }
        })
    })
})


app.post("/Register", (req,res) => {
    console.log("Request Received")
    console.log(req)
    const train7= req.body.train
    console.log(train7)
    console.log("traiin8997")

    const query = "insert into dummy (train) values (?)"
    insertquery =mysql.format(query, [train7])

    db.getConnection(async (err,connection) => {
        if (err) throw(err)
            console.log("Databse  was found at port" + port1)

            await connection.query(insertquery, async (err, result) => {
                connection.release()

                if(err) throw(err)
                else{
                    console.log("1253214156")
                }

        })
    })
})
