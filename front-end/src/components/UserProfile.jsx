import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const UserProfile = () => {

  const data = useSelector((i) => i.auth.user);

  console.log("data", data)
  return (
    <div className='bg-gray-500 flex justify-between p-4'>
      <h1>
        <Link to="/">User Profile</Link>
         </h1>
       <h1>{data.name}</h1>
    </div >
  )
}

export default UserProfile
