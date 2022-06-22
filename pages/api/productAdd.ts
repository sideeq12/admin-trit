import { NextApiRequest, NextApiResponse } from "next";
import main from "./connection/connection";
import Product from "./connection/models/productSchema";

export default function addProduct(req : NextApiRequest, res : NextApiResponse ){
    main().catch(err => console.log(err))
    const NewProduct = new Product({
        product_name : "latest shex",
        categories : "Clothes Blouse",
        Description : "this is the latest product updated"
    })
    NewProduct.save().then(()=> res.status(200).json({ status : "success", data : NewProduct}))
}