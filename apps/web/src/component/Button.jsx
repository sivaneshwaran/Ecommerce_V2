import React from 'react'
import { replace, useNavigate } from 'react-router-dom'
import "../component_css/Navbar.css"

function Button(props) {
    var path = props.path;
    var name = props.name;
    const navigate = useNavigate();
    const handle = ()=>{
        navigate(path, {replace: true});
    }
  return (
    // <a href={path} className="nav-btn ">{name}</a>
    <button onClick={handle} className="navBtn">{name}</button>
  )
}

function NavBtn(props){
  const path = props.path;
  const name = props.name;
  const navigate = useNavigate();
  const currentUrl = window.location.pathname;
  const style = (path == currentUrl) ? "navBtn active-navBtn": "navBtn"; 
  function handle(e){
    e.preventDefault();
    navigate(path);
  }

  return(
    <a className={style} href={path} onClick={handle}>{name}</a>
  )
}

export default Button
export {NavBtn}