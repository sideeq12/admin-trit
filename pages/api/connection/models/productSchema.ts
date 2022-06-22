import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    product_name : String,
    Description : String,
    price : String,
    prevPrice : String, 
    reviewPoint : String,
    reviewCount : String,
    categories : String,
    size : String,
    color : String,
    productCount : String,
    reviews : [
        {
            id : Number,
            message : String,
            sender : String
        }
    ]
})

const Product = mongoose.model("Products") || mongoose.model("Products", productSchema)

export default Product;