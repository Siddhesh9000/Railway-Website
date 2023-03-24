const express = require("express");
const router = express.Router();


const mysql = require("mysql");

const port2 = process.env.serverport;

const host1 = process.env.host;
const user1 = process.env.username;
const password1 = process.env.password;
const database1 = process.env.database;
const port1 = process.env.port;

const db = mysql.createPool({
    host: host1,
    user: user1,
    password: password1,
    database: database1,
    port: port1,
  });
// const square = require('/square.js')
// router.use('/square', square)



router.post("/login",(req, res) => {
    console.log("req recieved");
    console.log(req);
    const user = req.body.username;
    const pwrd = req.body.password;
  
    console.log(user, pwrd)

    const query = "SELECT * FROM user WHERE username = ?";
    searchquery = mysql.format(query, [user]);
  
    db.getConnection(async (err, connection) => {
      if (err) throw err;
      console.log("db was found at port " + port1);
  
      await connection.query(searchquery, async (err, result) => {
        connection.release();
  

        if (err) throw err;
        if (result.length == 0) {
          console.log("user not exist");
        } else {
          console.log(result);
            if (await(pwrd, result[0])) {   
              console.log("correct");
          } else {
            console.log("wrong password");
          }
        }
      });
    })
})



router.post("/register", (req,res) => {
    console.log("Request Received")
    console.log(req)
    
    const firstn = req.body.firstname;
    const lastn  =req.body.lastname;
    const emailid=req.body.email;
    const user   =req.body.username;
    const pass   =req.body.passwd;
    const phoneno  =req.body.phone;
  

    console.log(firstn,lastn,emailid,user,pass,phoneno);
  
    const query = "SELECT * FROM user WHERE username = ?";
    searchquery = mysql.format(query, [user]);
  
    db.getConnection(async (err, connection) => {
      if (err) throw err;
      console.log("db was found at port " + port1);
  
      await connection.query(searchquery, async (err, result) => {
        if (err) throw (err);
  
        await connection.query(searchquery, async (err, result) => {
          if (err) throw err;
          else {
            if (result.length == 0) {
              let insertquery = "INSERT INTO user (firstname,lastname,email,username,passwd,phone) VALUES (?,?,?,?,?,?)";
              insertquery = mysql.format(insertquery, [firstn,lastn,emailid,user,pass,phoneno]);
  
              await connection.query(insertquery, async (err, result) => {
                connection.release();
                if (err) throw (err);
                else {
                  console.log("successfully added");
                }
              })}
  
            }});
  
          });
        })})


module.exports = router;
   