import React from 'react'
import "../component_css/layout.css"
import {useSelector} from "react-redux"

const User = () => {
  const users = useSelector((state) => state.usersInfo.users);
  console.log(users)
  return (
    <div className="hero conatiner-fluid  d-flex flex-2">
        <h1 className='bg-warning w-100 d-flex flex-5'>User</h1>
    </div>
  )
}

export default User;