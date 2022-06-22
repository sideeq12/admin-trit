
import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const Admin = mongoose.model("Admins") || mongoose.model("Admins", AdminSchema);
console.log("the admin model is", Admin , " and the type is ", typeof(Admin))
export default Admin