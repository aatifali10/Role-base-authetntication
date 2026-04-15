import mongoose, { Schema } from "mongoose";

const authModel= new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["admin","attende","exhibitor"],
        default:"attende"
    },
},{timestamps:true})

const Auth = mongoose.model("auths",authModel);

export default Auth