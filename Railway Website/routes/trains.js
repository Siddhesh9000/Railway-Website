const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
const square = require('/square.js')
app.use('/square', square)



app.post("/login"){
   cont number =  req.params.trainno

}

app.post("/register"){
   cont number =  req.params.trainno

}