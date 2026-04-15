export const roleMiddleware=(...role)=>{
    return (req,res,next)=>{
        if(!role.includes(req.user.role)){
            return res.status(401).json({message:"Invalid credential"})
        }

        next();
    }
}