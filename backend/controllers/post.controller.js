import Profile from "../models/profile.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const activeCheck=async(req,res)=>{
    return res.status(200).json({message:"running"});
}
const register=async(req,res)=>{
    try{
        const{name,email,password,username}=req.body;
        if(!name || !email || !password || !username){
            return res.status(400).json({message:"All fields are required"})
            const user=await User.findOne({
                email
            });
             if(user){
                return res.status(400).json({message:"user already exists"})
             }
             const hashedPassword=await bcrypt.hash(password,12);
             const newUser=new User({
                name,email,password:hashedPassword,username
             });
             await newUser.save();
             const Profile=new Profile({
                userId:newUser._id
             });
             return res.status(200).json({message:"user created"});
        }
    }catch(error){
      return res.status(500).json({message:error.message})
    }
}