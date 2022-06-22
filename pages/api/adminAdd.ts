
import main from "./connection/connection";
import Admin from "./connection/models/adminSchema";
import bcrypt from "bcryptjs"
import { NextApiRequest, NextApiResponse } from "next";

export default function creatAdmin(req :NextApiRequest, res : NextApiResponse){
    let params = req.body;
    main().catch(error => console.log(error));
    const Addadmin = new Admin({
        username : params.adminName,
        email : params.adminMail,
        password : params.adminPassword
    })
    Addadmin.save().then(()=> res.status(200).json({Response : "Admin added successfully", data : Addadmin}))
    // res.status(200).json({result : "it workd"})
}

