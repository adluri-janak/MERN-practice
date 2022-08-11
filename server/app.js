const express = require("express")
const mongoose = require("mongoose")
const User = require("./model/user")
const Product = require("./model/product")
const cors = require("cors")

require("dotenv/config")
const app = express()

app.use(express.json())
app.use(cors())

//routes

//home page
app.get('/',(req,res)=>{
    res.send("home page")
})

//user routes
app.post("/user", async (req,res)=>{
    //method-1
    const user = await User.create(req.body)
    res.status(201).json({data:user})

    //method-2
    // try{
    //     const user = await User.create(req.body)
    //     await user.save()
    //     res.send(user)
    // }catch(err){
    //     res.send({message:err})
    //     console.log(err)
    // }
})
app.get("/user",async (req,res)=>{
    const users = await User.find({}).lean().exec()
    res.status(200).json({data:users})
})
app.get("/user/:id", async (req,res)=>{
    const id = req.params.id
    const user = await User.findById(id).lean().exec()
    res.status(200).json({data:user})
})
app.delete("/user/:id", async (req,res)=>{
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    res.status(200).json({data:user})
})
app.patch("/user/:id", async (req,res)=>{
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id, req.body, {new:true}).lean().exec()
    res.status(200).json({data:user})
})

//product routes
app.get("/product",async (req,res)=>{
    const products = await Product.find({}).lean().exec()
    res.status(200).json({data:products})
})
app.post("/product", async (req,res)=>{
    const product = await Product.create(req.body)
    res.status(201).json({data:product})
})
app.get("/product/:id", async (req,res)=>{
    const id = req.params.id
    const product = await Product.findById(id).lean().exec()
    res.status(200).json({data:product})
})
app.delete("/product/:id", async (req,res)=>{
    const id = req.params.id
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json({data:product})
})
app.patch("/product/:id", async (req,res)=>{
    const id = req.params.id
    const product = await Product.findByIdAndUpdate(id, req.body, {new:true}).lean().exec()
    res.status(200).json({data:product})
})

//connect
const URI = "mongodb+srv://janak:Bittu123@cluster0.mtghmp8.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(
    URI,
    {useUnifiedTopology:true,useNewUrlParser:true},
    (req,res)=>{
    console.log("connected to DB")
})


//listen to server
app.listen(3000,()=>{
    console.log("listening on 3000")
})
