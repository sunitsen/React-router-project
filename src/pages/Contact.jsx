import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
const  navigate = useNavigate()
  const handelGoToHome = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>Hello i am contact</h1>
      <button onClick={handelGoToHome}>Go to Home page</button>
    </div>
  )
}

export default Contact
