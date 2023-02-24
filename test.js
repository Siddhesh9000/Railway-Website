const express = require("express");
const app = express();

const mysql = require("mysql");
// const nodemon = require("nodemon");

require("dotenv").config({ path: "./data.env" });

const port2 = process.env.serverport;

app.use(express.json());
app.use(express.urlencoded());

app.listen(port2, () => console.log("server is at" + port2));

const host1 = process.env.host;
const user1 = process.env.username;
const password1 = process.env.password;
const database1 = process.env.database;
const port1 = process.env.port;
// const  train1 = process.env.train

const db = mysql.createPool({
  host: host1,
  user: user1,
  password: password1,
  database: database1,
  port: port1,
});

// db.getConnection((err, connection)=> {
//     if(err) throw (err)
//     console.log('db was found at port ' + port1)
// })

app.post("/login", (req, res) => {
  console.log("req recieved");
  console.log(req);
  const user = req.body.username;
  const pwrd = req.body.password;
  console.log(user, pwrd);

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
        if (result[0].password == pwrd) {
          alert("logged in succesffuly");
        } else {
          alert("wrong password");
        }
      }
    });
  });
});

// app.post("/Register", (req,res) => {
//     console.log("Request Received")
//     // console.log(req)
//     const train7= req.body.train
//     console.log(train7)

//     const insquery = "insert into dummy (train) values (?)"
//     insertquery =mysql.format(insquery, [train7])

//     db.getConnection(async (err,connection) => {
//         if (err) throw(err)
//         console.log("Databse  was found at port" + port1)

//         await connection.query(insertquery, async (err, result) => {
//             connection.release()

//             if(err) throw(err)
//             else{
//                 console.log("success")
//             }
//         })
//     })
// })

app.post("/Register", (req, res) => {
  console.log("Request Received");
  // console.log(req)
  const train7 = req.body.train;
  console.log(train7);

  const delquery = "DELETE  FROM dummy  where train= ? ";
  insertquery = mysql.format(delquery, [train7]);

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    console.log("Databse  was found at port" + port1);

    await connection.query(deletequery, async (err, result) => {
      connection.release();

      if (err) throw err;
      else {
        console.log("successfully deleted");
      }
    });
  });
});

app.post("/Register23", (req, res) => {
  console.log("Request Received");
  console.log(req);
  const train79 = req.body.train;
  console.log(train79);

  const selquery = "SELECT * FROM dummy WHERE train = ?";
  selectquery = mysql.format(selquery, [train79]);

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    console.log("Databse  was found at port" + port1);

    await connection.query(selectquery, async (err, result) => {
      connection.release();

      if (err) throw err;
      if (result[0].train == train79) {
        console.log("user already exists");
      } else {
        console.log(result);

        if (result.length == 0) {
          console.log("add to database");
        } else {
          console.log("success");
        }
      }
    });
  });
});

app.post("/Register23", (req, res) => {
  console.log("Request Received");
  console.log(req);
  const train99 = req.body.train;
  const train89 = req.body.train;
  console.log(train99);

  const selquery = "SELECT * FROM dummy WHERE train = ?,?";
  selectquery = mysql.format(selquery, [train99, train89]);

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    console.log("Databse  was found at port" + port1);

    await connection.query(selectquery, async (err, result) => {
      connection.release();

      if (err) throw err;
      if ((result[0].train == train79) & (result[0].train == train89)) {
        console.log("user already exists");
      } else {
        console.log(result);

        if (result.length == 0) {
          console.log("add to database");
        } else {
          console.log("success");
        }
      }
    });
  });
});

app.post("/Register233", (req, res) => {
  console.log("Request Received");
  console.log(req);
  const train7 = req.body.train;
  console.log(train7);

  const query = "SELECT * FROM dummy WHERE train = ?";
  searchquery = mysql.format(query, [train7]);

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    console.log("Databse  was found at port" + port1);

    await connection.query(searchquery, async (err, result) => {
      if (err) throw err;
      else {
        if (result.length == 0) {
          let insertquery = "insert into dummy (train) values (?)";
          insertquery = mysql.format(insertquery, [train7]);

          await connection.query(insertquery, async (err, result) => {
            connection.release();
            if (err) throw err;
            else {
              console.log("Added to database");
            }
          });
        } else {
          console.log("Already exists");
          connection.release();
        }
      }
    });
  });
});

app.post("/Register588", (req, res) => {
  console.log("Request Received");
  console.log(req);
  const train7 = req.body.train;
  console.log(train7);

  const countQuery = "SELECT COUNT(*) as count FROM dummy WHERE train = ?";
  const insertQuery = "INSERT INTO dummy (train) VALUES (?)";

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    console.log("Database was found at port " + port1);

    await connection.query(countQuery, [train7], async (err, result) => {
      if (err) console.log("err here");

      let count = result[0].count;

      if (count <= 1) {
        await connection.query(insertQuery, [train7], async (err, result) => {
          connection.release();

          if (err) throw err;
          else {
            console.log("Inserted new entry");
          }
        });
      } else {
        console.log("User already has 2 entries");
        connection.release();
      }
    });
  });
});



app.post("/Register108", (req, res) => {
  console.log("Request Received");
  console.log(req);
  const firstn = req.body.firstname;
  const lastn  =req.body.lastname;
  const emailid=req.body.email;
  const user   =req.body.username;
  const pass   =req.body.password;
  const phoneno  =req.body.phone;

  console.log(firstn,lastn,emailid,user,pass,phoneno);
  
  const query = "SELECT * FROM irctc_train WHERE firstname = ?";
  searchquery = mysql.format(query, [firstn]);

  db.getConnection(async (err, connection) => {
    if (err) throw err;
    console.log("db was found at port " + port1);

    await connection.query(searchquery, async (err, result) => {
      if (err) throw (err);

      await connection.query(searchquery, async (err, result) => {
        if (err) throw err;
        else {
          if (result.length == 0) {
            let insertquery = "INSERT INTO irctc_train (firstname) VALUES (?)";
            insertquery = mysql.format(insertquery, [firstn]);

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