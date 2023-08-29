import React from 'react'

const AddUser = ({setEditUsername,setuserName,addUser,editUser,editForm}) => {
  return (
    <>
    <form action="">
        <input onChange={(e)=>setuserName(e.target.value)} type="text" /><br /><br />
        {/* <h1>{userName}</h1> */}
        {/* <input onChange={(e)=>setuserId(e.target.value)} type="text" /><br /><br /> */}
        {/* <input onChange={(e)=>setuserText(e.target.value)} type="text" /><br /><br /> */}
        <button onClick={addUser}>Add User</button>
      { editForm&&
      <form action=''>
        <input onChange={(e)=>setEditUsername(e.target.value)} type="text" /><br /><br />
        
        <button onClick={editUser}>Edit User</button>
        </form>
      }
    </form>
    </>
  )
}

export default AddUser