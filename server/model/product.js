const mongoose = require("mongoose")

const Product = new mongoose.Schema({
    product_name:{type:String, required:true},
    product_description:{type:String, required:true},
    product_price:{type:Number, required:true},
    product_created_date:{type:String, required:true},
    product_image_url:{type:String, required:true}
},{versionKey:false})

module.exports = mongoose.model("product",Product)
