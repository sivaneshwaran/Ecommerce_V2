import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const isLogged = useSelector((state)=>state.usersInfo.loggedIn);

    if(!isLogged){
        return <Navigate to={"/login"}/>
    }
  return <Outlet/>    

}

// function ProtectedRoute({children}){
//   const token = document.cookie.split(";")
//   .find((row)=>row.startsWith("accToken="))
//   ?.split("=")[1];
  
//   return children;
// }

export default ProtectedRoute