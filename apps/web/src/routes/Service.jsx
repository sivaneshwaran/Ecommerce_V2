import React, { useState } from 'react'
import { useEffect } from 'react';

const Service = () => {
  let url = "https://plus.unsplash.com/premium_photo-1778438304247-4b4f847d8a13?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [imgUrl, setImgUrl] = useState("");

  async function fetchData() {
    try {
      const data = await fetch(url);
      const img = await data.blob();
      setImgUrl(URL.createObjectURL(img));
      console.log("complete")
    }catch(error){
      console.log(error);
    }

  }

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className="hero conatiner-fluid  d-flex flex-4 flex-column">
        <h1 className='bg-warning w-100 d-flex flex-5'>Service</h1>
        <img className='' width="500px" height="500px" src={imgUrl} alt="Achievement" />
        <p>{imgUrl}</p>

    </div>
  )
}

export default Service