import React,{useEffect, useState} from 'react'
// import { Link } from 'react-router-dom'


const About = () => {
  const [myName, setmyName] = useState("")
  useEffect(()=>{
    alert("landed")
  },[myName])
  const setName =()=>{
    setmyName("mede")
  }
  return (
  <>
  <h1>Hello {myName}</h1>
  <button onClick={setName}>SetName</button>
  </>
  )
}

export default About