import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const {username} = useParams();
  return (
    <div className="hero conatiner-fluid  d-flex flex-2">
        <h1 className='bg-warning w-100 d-flex flex-5'>Welcome {username}</h1>
    </div>
  )
}

export default Users