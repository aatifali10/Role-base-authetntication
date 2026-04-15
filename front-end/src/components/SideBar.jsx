import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserProfile from './UserProfile'

const SideBar = () => {
  return (
    <div className="flex">
    <div className='bg-black text-white w-[20%] h-[100vh]'>
        <ul>
        <li><Link to="user">User</Link></li>
        <li><Link to="staff">Staff</Link></li>
        <li><Link to="user">User</Link></li>
        <li><Link to="user">User</Link></li>
        <li><Link to="user">User</Link></li>
        <li><Link to="user">User</Link></li>
        <li><Link to="user">User</Link></li>
        <li><Link to="user">User</Link></li>
        <li><Link to="user">User</Link></li>
      </ul>
      </div>
      <div className='w-[80%]'>
        <UserProfile/>
        <Outlet/>
      </div>
    </div>
  )
}

export default SideBar
