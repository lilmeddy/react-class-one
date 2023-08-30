import React, { useEffect } from 'react'
import { useState } from 'react'
const Fetch = () => {
    const [pix, setpix] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        setisLoading(true)
      fetch("https://jsonplaceholder.typicode.com/posts")
      
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        
        setpix(data)
        setisLoading(false)
      })
    
      
    }, [])
    
  return (
   <>
   <main>
    <h1>
        {isLoading &&
         <p>Loading</p>
}
</h1>
   {pix &&
       pix.map((el,i)=>(
        <div key={i}>
            <h3>{el.title}</h3>
            {/* <img src ={el.url} alt=''/> */}
        </div>
       ))
    }
   </main>
   
   </>
  )
}

export default Fetch