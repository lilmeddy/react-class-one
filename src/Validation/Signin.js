import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { UserRequest } from '../services/http'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const [allUser, setallUser] = useState([])
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, 
        validationSchema: yup.object({
            email: yup.string().required("Email is required").email("Must be a valid email"),
            password: yup.string().required("Password field cannot be empty").min(6, "Password must be at least 6 characters").max(8, "Password must not be more than 8 characters"),
        })
        ,onSubmit(values){
            console.log(values);
            let found = allUser.find((el)=> el.email === values.email && el.password === values.password)
            console.log(found);
            if(found === "undefined"){
                alert("User not found")
            }else{
                axios.post("http://localhost:1234/create", values).then((res)=>{
                    console.log(res.data.token);
                    localStorage.setItem("AppToken", res.data.token)
                    alert("Registration Successfull")
                    navigate("/dashboard")
                }).catch((err)=>{
                    console.log(err);
                })
            }
            // UserRequest.post("/endpoint", data).then(())
        }
    })
    useEffect(() => {
        axios.get("http://localhost:1234/create").then((res)=>{
            console.log(res.data);
            setallUser(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='w-3/6 border-2 border-blue-400 mx-auto rounded-md p-5'>
                <h2 className='text-blue-400 text-2xl font-semibold'>Sign In</h2>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.email}
                     type="email"
                     name="email" 
                     id="floating_email" 
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    {formik.errors.email?
                        <small className='text-red-500 font-semibold'>{formik.errors.email}</small>: null
                    }
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                     onBlur={formik.handleBlur}
                     onChange={formik.handleChange}
                     value={formik.values.password}
                     type="password" 
                     name="password" 
                     id="floating_password" 
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    {formik.errors.password?
                        <small className='text-red-500 font-semibold'>{formik.errors.password}</small>: null
                    }
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
    </div>
  )
}

export default Signin