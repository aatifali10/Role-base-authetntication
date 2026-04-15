import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <h1>Home page</h1>

      <button className='bg-blue-500 py-2 px-4 rounded-lg text-white'>
        <Link to="/login">Register</Link>
      </button>
    </div>
  )
}

export default Home
