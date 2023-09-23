import axios from "axios";

let token = localStorage.getItem("AppToken")

export const UserRequest = axios.create({
    baseURL: "http://localhost:1234",
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
})