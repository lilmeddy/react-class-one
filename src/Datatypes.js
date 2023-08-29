import React,{useState} from 'react'
import Button from './Button'

const Datatypes = () => {
    const [myName, setmyName] = useState("mede")
    const [btnname, setbtnname] = useState("change Name")
    const [showName, setshowName] = useState(true)
  
    
    let userInfo =[
        {name:"Osamede", class:"4", gender:"F", validated:true},
        {name:"Priscilla", class:"5", gender:"undefined", validated:false},
        {name:"Priscilla", class:"5", gender:"M", validated:true},
        {name:"Priscilla", class:"5", gender:"f", validated:false},
        {name:"Priscilla", class:"5", gender:"hehe", validated:true}
    ]
    const [allUser, setallUser] = useState(userInfo)
    // const [school, setschool] = useState(userInfo)
    // assignment allusers validated and not validated
    // Hooks(use state
    //Virtual Dom what react works with
    // let name = "Mede"
    const changeName = ()=>{
        setmyName("osas")
        setbtnname("changed")
        setshowName(!showName)
    }
const allStudent  =()=>{
    setallUser(allUser)
}
const  validatedUser =()=>{
    // setallUser(allUser)
    const validated = ()=> allUser.filter((el)=>el.validated)
    setallUser(validated)
}
const  notValidated =()=>{
    const notvalidated = ()=> allUser.filter((el)=>!el.validated)
    setallUser(notvalidated)
}
  return (
    <div>
        <Button/>
       
        {showName &&
          <h1>{myName}</h1>
        }
    <div className='flex mb-5 ml-9'>
<button onClick={allStudent} className='bg-green-600 rounded p-2 mr-3'>All</button>
<button onClick={validatedUser} className='bg-green-600 rounded p-2 mr-3'>Validated</button>
<button onClick={notValidated} className='bg-green-600 rounded p-2 mr-3'>Not Validated</button>
    </div>
      <input type={showName? "password": "text"} />
        <button onClick={changeName}>{btnname}</button>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Class
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Validate
                </th>
            </tr>
        </thead>
       <tbody>
           {allUser.map((el,i)=>
           
            <tr key={i} class="border-b border-gray-200 dark:border-gray-700">
                <td>{i+1}</td>
                <td>{el.name}</td>
                <td>{el.class}</td>
                <td>{el.gender}</td>
                <td>{el.validated}</td>
            </tr>
           )} 
           
        </tbody>
     
    </table>
</div>

    </div>
  )
}

export default Datatypes