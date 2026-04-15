import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";

const authRouter= express.Router();

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser);

authRouter.get("/admin",authMiddleware,roleMiddleware("admin"),(req,res)=>{
    res.json({message:"Admin Dashboard"})
})

authRouter.get("/attende",authMiddleware,roleMiddleware("attende"),(req,res)=>{
    res.json({message:"attende Dashboard"})
})

authRouter.get("/exhibitor",authMiddleware,roleMiddleware("exhibitor"),(req,res)=>{
    res.json({message:"exhibitor Dashboard"})
})

export default authRouter;