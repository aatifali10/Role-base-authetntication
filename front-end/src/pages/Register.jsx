import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { register } from '../redux/slice/authSlice'

const Register = () => {
    const [formData,setFormData] =useState({
        name:"",
        email:"",
        password:"",
        role:"attende"
    })
    const dispatch= useDispatch()
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(register(formData))
        navigate("/login")
    }

  return (
      <div className='bg-blue-600  lg:w-[60%] mx-auto p-4'>
      <h1 className='text-center text-[30px]'>Register User </h1>

      <form className='my-4' onSubmit={handleSubmit}>
        <div className="flex items-center gap-4  my-2">
            <label className='text-[20px] w-[20%]'>Name: </label>
            <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Enter your name' className='w-[85%] py-2 px-4 rounded-lg '/>
        </div>
        <div className="flex items-center gap-4 ">
            <label className='text-[20px] w-[20%]'>Email: </label>
            <input type="text" name='email'onChange={handleChange} value={formData.email} placeholder='Enter your name' className='w-[85%] py-2 px-4 rounded-lg my-2 '/>
        </div>
        <div className="flex items-center gap-4 ">
            <label className='text-[20px] w-[20%]'>Password: </label>
            <input type="text" name='password' value={formData.password}  onChange={handleChange} placeholder='Enter your name' className='w-[85%] py-2 px-4 rounded-lg my-2 '/>
        </div>
        <div className="flex items-center gap-4">
            <label className='text-[20px] w-[20%]'>Role: </label>
            <select className='w-[85%] py-2 px-4 rounded-lg my-2 bg-black text-white'
            onChange={(e)=>setFormData({...formData,role:e.target.value})} >
                <option value="attende">
                    Attende
                </option>
                <option value="exhibitor">
                    Exhibitor
                </option>
            </select>
        </div>
        
        <h5>
            <Link to="/login">Already have an account</Link>
        </h5>

        <button className='bg-orange-500 py-2 px-4 rounded-lg'>Register</button>
      </form>
    </div>
  )
}

export default Register
