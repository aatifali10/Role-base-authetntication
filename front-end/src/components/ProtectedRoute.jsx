import { Navigate } from "react-router-dom";

export const ProtectedRoute= ({children,role})=>{

    const access = localStorage.getItem("role");
    
    if(!access){
        return <Navigate to="/login"/>
    }

    if(access && access !==role ){
        return <Navigate to="/login"/>
    }
    return children
}