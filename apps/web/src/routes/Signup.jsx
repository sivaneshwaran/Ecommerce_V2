import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from "../slice/UserSlice";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state)=>state.usersInfo.loggedIn);
  if(isLogged){
    navigate("/");
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    cpassword: ""
  });  


  const handleInput = (e) =>{
    const {name, value} = e.target;
    setFormData((curIn) =>{
      return {
        ...curIn,
        [name]:value,
      }
    });
    // console.log(formData);
  }

  const display = ()=>{
    console.log(formData);
  }

  const userAdd = (e)=>{
    e.preventDefault();
    dispatch(addUser(formData));
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      cpassword: ""
    })    
  }

  const reset = (e)=>{
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      cpassword: ""
    })
  }
  
  return (
    <div className="hero conatiner-fluid  d-flex flex-4 flex-column p-0">
        <h1 className='d-flex flex-5 fw-bold fst-italic'>Sign Up</h1>
        <form  className='signup d-flex flex-4 flex-column' >

          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="name" className='fw-bold my-2'>Name</label>
            <input type="text" name='name' id='name' value={formData.name} onChange={handleInput} />
          </div>

          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="email" className='fw-bold my-2'>Email</label>
            <input type="text" name='email' id='email' value={formData.email} onChange={handleInput}/>
          </div>
  
          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="phone" className='fw-bold my-2'>Phone Number</label>
            <input type="text" name='phone' id='phone' value={formData.phone} onChange={handleInput}/>
          </div>
  
          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="age" className='fw-bold my-2'>Age </label>
            <input type="number" name='age' id='age' value={formData.age} onChange={handleInput}/>
          </div>
  
          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="password" className='fw-bold my-2'>Password</label>
            <input type="password" name='password' id='password' value={formData.password} onChange={handleInput}/>
          </div>
  
          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="cpassword" className='fw-bold my-2'>Confirm password</label>
            <input type="password" name='cpassword' id='cpassword' value={formData.cpassword} onChange={handleInput}/>
          </div>                              

          <div className='d-flex justify-content-evenly align-items-center m-3 p-1 w-100'>
            <button onClick={reset} className='btn btn-danger py-1 px-3' >Reset</button>
            <button onClick={userAdd} className='btn btn-success py-1 px-3'>Submit</button>
          </div>


        </form>

        <div className="display w-50 bg-warning p-2 m-5 d-flex flex-5 flex-column">
          <button className='btn btn-primary m-2' onClick={display}>display in Console</button>
          <div className="w-100 border m-2 border-success p-2">
            <div className="dispaly">Name: <b>{formData.name}</b></div>
            <div className="dispaly">Email: <b>{formData.email}</b></div>
            <div className="dispaly">Phone: <b>{formData.phone}</b></div>
            <div className="dispaly">Age: <b>{formData.age}</b></div>
            <div className="dispaly">Password: <b>{formData.password}</b></div>
            <div className="dispaly">Confirm Password: <b>{formData.cpassword}</b></div>
          </div>

        </div>
    </div>
  )
}

export default Signup