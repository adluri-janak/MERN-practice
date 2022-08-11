require("./src/db/mongoose")
const express = require("express")
const app = express()
app.listen(3000,(req,res)=>{
    console.log("listening on 3000")
})

app.get("/",(req,res)=>{
    res.send("home")
})
