import React from 'react'

const Contact = () => {
  const arr = [1, 2];

  console.log(1 in arr ? "true":"false");

  return (
    <div className="hero conatiner-fluid  d-flex flex-2">
        <h1 className='bg-warning w-100 d-flex flex-5'>Contact</h1>
    </div>
  )
}

export default Contact