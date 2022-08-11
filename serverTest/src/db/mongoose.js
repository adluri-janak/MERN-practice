const mongoose = require('mongoose');

//in below url test is DB name
//{useUnifiedTopology:true,useNewUrlParser:true} is to avoid warnings 
mongoose.connect('mongodb://localhost:27017/test',
{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log("error",err)
})