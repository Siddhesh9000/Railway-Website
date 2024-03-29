const express = require("express");
const app = express();
//const bcrypt = require("bcrypt");

const mysql = require("mysql");
 //const nodemon = require("nodemon");

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

const userReq = require('./Railway Website/routes/user')
app.use('/user', userReq )


//app.use('/trains', train)

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
          if (await bcrypt.compare(pwrd, result[0].passwd)) {   //result[0].passwd,pwrd)
            console.log("correct")
          // app.post('/Railway Website/html/Homepage.html')
        } else {
          console.log("wrong password");
        }
      }
    });
  });
});

app.post("/Register", (req,res) => {
    console.log("Request Received")
    // console.log(req)
    const train7= req.body.train
    console.log(train7)

    const insquery = "insert into dummy (train) values (?)"
    insertquery =mysql.format(insquery, [train7])

    db.getConnection(async (err,connection) => {
        if (err) throw(err)
        console.log("Databse  was found at port" + port1)

        await connection.query(insertquery, async (err, result) => {
            connection.release()

            if(err) throw(err)
            else{
                console.log("success")
            }
        })
    })
})

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


app.post("/registerUser", (req, res) => {
  console.log("Request Received");
  console.log(req);
  const firstn = req.body.firstname;
  const lastn  =req.body.lastname;
  const emailid=req.body.email;
  const user   =req.body.username;
  const pass   =req.body.password;
  const phoneno  =req.body.phone;

  console.log(firstn,lastn,emailid,user,pass,phoneno);
  
  const query = "SELECT * FROM irctc_train WHERE username = ?";
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
            let insertquery = "INSERT INTO irctc_train (firstname,lastname,email,username,passwd,phone) VALUES (?,?,?,?,?,?)";
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



      
app.post("/registerIrctc", (req, res) => {
  console.log("Request Received");
  console.log(req);
  const firstn = req.body.firstname;
  const lastn  =req.body.lastname;
  const emailid=req.body.email;
  const user   =req.body.username;
  const pass   =req.body.password;
  const phoneno  =req.body.phone;

  console.log(firstn,lastn,emailid,user,pass,phoneno);
  
  const query = "SELECT * FROM newtrainTable WHERE username = ?";
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
            let insertquery = "INSERT INTO newtrainTable (firstname,lastname,email,username,passwd,phone) VALUES (?,?,?,?,?,?)";
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


      app.post("/loginnewtable", (req, res) => {
        console.log("Request Received");
        console.log(req);
        const user   =req.body.username;
        const pass   =req.body.password;
        console.log(user,pass);
        
        const query = "SELECT * FROM newtrainTable WHERE username = ?";
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
                  let insertquery = "INSERT INTO newtrainTable (username,passwd) VALUES (?,?)";
                  insertquery = mysql.format(insertquery, [user,pass]);
      
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
      


            app.post("/RegisterFinal", (req, res) => {
              console.log("Request Received");
              console.log(req);
              const firstn1 = req.body.firstname;
              const lastn1  =req.body.lastname;
              const emailid1=req.body.email;
              const user1   =req.body.username;
              const pass1   =req.body.password;
              const phoneno1  =req.body.phone;

              console.log("pass");
            
              const query = "SELECT * FROM user WHERE username = ?";
              searchquery = mysql.format(query, [user1]);

            
              db.getConnection(async (err, connection) => {
                if (err) throw err;
                console.log("Databse  was found at port" + port1);
            
                await connection.query(searchquery, async (err, result) => {
                  if (err) throw err;
                  else {
                    if (result.length == 0) {

                      hashedpass = await bcrypt.hash(pass1,10);
                      console.log(hashedpass)
                      let insertquery1 = "INSERT INTO user (firstname,lastname,email,username,passwd,phone) VALUES (?,?,?,?,?,?)";
                        insertquery1 = mysql.format(insertquery1, [firstn1,lastn1,emailid1,user1,hashedpass,phoneno1]);
            
                      await connection.query(insertquery1, async (err, result) => {
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




            