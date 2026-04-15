import { API } from "../../api/authApi"

export const registerUser=async(data)=>{
    const res =await API.post("/register",data);
    return res.data
}

export const loginUser=async(data)=>{
    const res =await API.post("/login",data);
    return res.data
}