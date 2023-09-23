import React, { useEffect } from 'react'
import { useState } from 'react'

const User = () => {
    const [userName, setuserName] = useState("")
    const [userId, setuserId] = useState("")
    const [userText, setuserText] = useState("")
    const [alluser, setalluser] = useState([])
    const [EditUsername, setEditUsername] = useState("")
    const [editForm, seteditForm] = useState(false)
    const [userIndex, setuserIndex] = useState("")
    // const [userInfo, setuserInfo] = useState([])
    // state lifting
    useEffect(() => {
          const stored = JSON.parse(localStorage.getItem('userData')) || [];
          if (stored){
            setalluser(stored);
          }
        
    },[])
    
    const addUser =(ev)=>{
        ev.preventDefault()
      let mede= {
        firstName : userName,
        lasttName : userId,
        name : userText,
      };
       const osas = [...alluser,mede]
       setalluser(osas)
        // console.log(osas);
        localStorage.setItem('userData', JSON.stringify(osas));

        setuserName('');
        setuserId('');
        setuserText('');
    }
    const delUser =(i) =>{
        const osas = [...alluser];
        osas.splice(i,1)
        setalluser(osas)
        localStorage.setItem('userData', JSON.stringify(osas));
    }
    const showEditForm =(i)=>{
        seteditForm(true)
        setuserIndex(i)
    }
    const editUser =()=>{
        const osas = [...alluser];
        osas[userIndex] = EditUsername;
        setalluser(osas);
        localStorage.setItem('userData', JSON.stringify(osas));
        seteditForm(false);
        setEditUsername('');
        setuserIndex('');
    }
   
  return (
    <>
    <form action="">
        <input onChange={(e)=>setuserName(e.target.value)} type="text" /><br /><br />
        {/* <h1>{userName}</h1> */}
        <input onChange={(e)=>setuserId(e.target.value)} type="text" /><br /><br />
        <input onChange={(e)=>setuserText(e.target.value)} type="text" /><br /><br />
        <button onClick={addUser}>Add User</button>
      { editForm&&
      <form action=''>
        <input onChange={(e)=>setEditUsername(e.target.value)} type="text" /><br /><br />
        
        <button onClick={editUser}>Edit User</button>
        </form>
      }
    </form>
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    S/N
                </th>
                <th scope="col" class="px-6 py-3">
                    First Name
                </th>
                <th scope="col" class="px-6 py-3">
                   Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {alluser.map((el,i) =>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i+1}
                </th>
                <td class="px-6 py-4">
                    {el.firstName}
                </td>
                <td class="px-6 py-4">
                    {el.lasttName}
                </td>
                <td class="px-6 py-4">
                    {el.name}
                </td>
                <td class="px-6 py-4">
                    <button onClick={()=>delUser(`${i}`)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">D</button>
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ED</button>
                </td>
                <td class="px-6 py-4">
                    {/* <button onClick={()=>delUser(`${i}`)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">D</button> */}
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={showEditForm}>ED</button>
                </td>
            </tr>

            )} 
        </tbody>
    </table>
   
</div>

    </>
  )
}

export default User