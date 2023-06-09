const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("mi primer api")
});

app.listen(8000, ()=>{
    console.log("el server esta activo")
});