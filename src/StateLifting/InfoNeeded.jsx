import { useState } from 'react'
import React from 'react'
import AddUser  from './AddUser'
import DisplUser from './DisplUser'
const InfoNeeded = () => {
    const [userName, setuserName] = useState("")
    // const [userId, setuserId] = useState("")
    // const [userText, setuserText] = useState("")
    const [alluser, setalluser] = useState([])
    const [EditUsername, setEditUsername] = useState("")
    const [editForm, seteditForm] = useState(false)
    const [userIndex, setuserIndex] = useState("")
    // const [userInfo, setuserInfo] = useState([])
    // state lifting
    const addUser =(ev)=>{
        ev.preventDefault()
      let mede= {
        firstName : userName,
        // lasttName : userId,
        // name : userText,
      }
        setalluser([...alluser,mede])
        console.log(alluser);
    }
    const delUser =(i) =>{
        alluser.splice(i,1)
        setalluser([...alluser])
    }
    const showEditForm =(i)=>{
        seteditForm(true)
        setuserIndex(i)
    }
    const editUser =()=>{
        alluser.splice(userIndex,1,EditUsername)
        setalluser([...alluser])
    }
  return (
    <>
    <AddUser
    editForm ={editForm}
    editUser ={editUser}
    setuserName = {setuserName}
    setEditUsername ={setEditUsername}
    addUser ={addUser}
    />
    <DisplUser
    alluser ={alluser}
    delUser ={delUser}
    showEditForm ={showEditForm}
    />
    </>
  )
}

export default InfoNeeded