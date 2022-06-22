import { NextApiRequest, NextApiResponse } from "next";

export default function addProduct(req : NextApiRequest, res : NextApiResponse ){
    res.status(200).json({ status : "success"})
}