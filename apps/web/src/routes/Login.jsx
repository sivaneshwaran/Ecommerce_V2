import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logIn } from '../slice/UserSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const users = useSelector((state)=>state.usersInfo.users);
  const navigate = useNavigate();
  const isLogged = useSelector((state)=>state.usersInfo.loggedIn);

  useEffect(()=>{
    if(isLogged == true){
      navigate("/");
    }
  }, [isLogged, users])

  const handleInput = (e) =>{
    const {name, value} = e.target;
    setFormData((curIn) =>{
      return {
        ...curIn,
        [name]:value,
      }
    });
  }

  const display = ()=>{
    console.log(formData);
  }

  const display1 = ()=>{
    console.log(users);
    console.log(isLogged);
  }


  const handleClick = async (e)=>{
    e.preventDefault();
    console.log(formData);  
    const response = await fetch("http://localhost:3000/apps/api/auth.php",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
      credentials: 'include'
    })

    console.log(response);
    const status = response.status;
    console.log(status);
    const data = await response.json();

    // console.log(data);

    if(data.success){
      alert("Login Success");
      dispatch(logIn(formData));

      setTimeout(()=>{
        setFormData({
          email: "",
          password: "",
        })
        navigate("/");
      }, 1000);
    }else{
      alert("Login Failed")
    }
  }

  const reset = (e)=>{
    e.preventDefault();
    setFormData({
      email: "",
      password: "",
    });
  }
  
  return (
    <div className="hero conatiner-fluid  d-flex flex-4 flex-column">
        <h1 className='d-flex flex-5 fw-bold fst-italic'>Login Form</h1>
        <form action="" className='loginForm d-flex flex-4 flex-column' >

          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="email" className='fw-bold my-2'>Email</label>
            <input type="text" name='email' id='email' value={formData.email} onChange={handleInput}/>
          </div>
  
          <div className="name d-flex flex-column p-0 w-100 ">
            <label htmlFor="password" className='fw-bold my-2'>Enter Password</label>
            <input type="password" name='password' id='password' value={formData.password} onChange={handleInput}/>
          </div>

          <div className='d-flex justify-content-evenly align-items-center m-3 p-1 w-100'>
            <button onClick={reset} className='btn btn-danger py-1 px-3'>Reset</button>
            <button onClick={handleClick} className='btn btn-success py-1 px-3'>login</button>
          </div>

        </form>

        <div className="display w-50 bg-warning p-5 mt-5 d-flex flex-5">
          <button className='btn btn-primary ' onClick={display}>display in console</button>
          <button className='btn btn-primary ' onClick={display1}>display Users data in console</button>
        </div>
    </div>
  )
}

export default Login