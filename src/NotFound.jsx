import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate();
    const goHome =()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>Abi you miss road? <br />The page you request for does not exist, go back 
        <button onClick={goHome}>&nbsp; home</button> </h1>
    </div>
  )
}

export default NotFound