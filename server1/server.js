const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())


const connect =()=>{
    return mongoose.connect("mongodb://localhost:27017/test",
    {   useUnifiedTopology:true,
        useNewUrlParser:true
    })
}

const userSchema = mongoose.Schema({
    fullName:String,
    email:String,
    gender:String,
    age:Number,
    location:String,
    company:String
})

const User = mongoose.model("user",userSchema)

app.post("/",async (req,res)=>{
    const user = await User.create(req.body)
    res.status(201).json({data:user})
})

app.get("/",async (req,res)=>{
    const users = await User.find({}).lean().exec()
    res.status(200).send({data:users})
})

async function start(){
    await connect()
    app.listen(1234,()=>{
        console.log("listening on 1234")
    })
} 

start()