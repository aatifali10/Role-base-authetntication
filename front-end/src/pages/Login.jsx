import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/slice/authSlice'

const Login = () => {
      const [formData,setFormData] =useState({
        email:"",
        password:""
    })
    const dispatch =useDispatch()
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmitLogin=async(e)=>{
        e.preventDefault();
      const resData=await dispatch(login(formData));
   
      const roleData= resData.payload.userExists.role;
      
      if(roleData==="admin"){
       navigate("/admin") 
      }else if(roleData==="exhibitor"){
        navigate("/exhibitor")
      }else if(roleData === "attende"){
        navigate("/attende")
      }

    }

  return (
    <div className='bg-blue-600  lg:w-[60%] mx-auto p-4'>
      <h1 className='text-center text-[30px]'>Login Form </h1>

      <form className='my-4' onSubmit={onSubmitLogin}>
        <div className="flex items-center gap-4 my-2">
            <label className='text-[20px]'>Email: </label>
            <input type="text" placeholder='Enter your name' name='email' value={formData.email}  onChange={handleChange} className='w-full py-2 px-4 rounded-lg'/>
        </div>
        <div className="flex items-center gap-4">
            <label className='text-[20px]'>Password: </label>
            <input type="password" placeholder='Enter your name' name='password' value={formData.password} onChange={handleChange} className='w-full py-2 px-4 rounded-lg my-2'/>
        </div>
        
        <h5>
            <Link to="/register">Create new account</Link>
        </h5>

        <button className='bg-orange-500 py-2 px-4 rounded-lg'>Login</button>
      </form>
    </div>
  )
}

export default Login
