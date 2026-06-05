import React from 'react'
import "../component_css/layout.css"
import {useSelector} from "react-redux"

const User = () => {
  const users = useSelector((state) => state.usersInfo.users);
  const log = useSelector((state) => state.usersInfo.loggedIn);

  return (
    <div className="hero conatiner-fluid  d-flex flex-4 flex-column">
        <h1 className='bg-warning w-100 d-flex flex-5 '>User</h1>
          <div className="w-50 m-2 p-2">
            {
              users.map((user, index)=>{
                return(
                  <>
                    <div className="dispaly">Name:             <b>{user.name}</b></div>
                    <div className="dispaly">Email:            <b>{user.email}</b></div>
                    <div className="dispaly">Phone:            <b>{user.phone}</b></div>
                    <div className="dispaly">Age:              <b>{user.age}</b></div>
                    <div className="dispaly">Password:         <b>{user.password}</b></div>
                    <div className="dispaly">Confirm Password: <b>{user.cpassword}</b></div>
                    <div className="dispaly">Logged status: <b>{log}</b></div>

                  {index != users.length-1 && <hr />}
                  
                  </>                    
                )
              })
            }
          </div>


    </div>
  )
}

export default User;