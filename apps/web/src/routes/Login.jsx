import React, { useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInput = (e) =>{
    const {name, value} = e.target;
    setFormData((curIn) =>{
      return {
        ...curIn,
        [name]:value,
      }
    });
    console.log(formData);
  }

  const display = ()=>{
    console.log(formData);
  }
  
  return (
    <div className="hero conatiner-fluid  d-flex flex-4 flex-column">
        <h1 className='d-flex flex-5 fw-bold fst-italic'>Login Form</h1>
        <form action="" className='loginForm d-flex flex-4 flex-column' >

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

          <div className='d-flex justify-content-evenly align-items-center m-3 p-1 w-100'>
            <button type='reset' className='btn btn-danger py-1 px-3'>Reset</button>
            <button type='submit' className='btn btn-success py-1 px-3'>Submit</button>
          </div>

        </form>

        <div className="display w-50 bg-warning p-5 mt-5 d-flex flex-5">
          Form data will be displayed here <br />
          <button className='btn btn-primary ' onClick={display}>display</button>
        </div>
    </div>
  )
}

export default Login