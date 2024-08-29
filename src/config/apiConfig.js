import axios from "axios"

export const API_BASE_URL = "https://buy-it-backend.onrender.com"

const jwt = localStorage.getItem("jwt");

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`bearer ${jwt}`,
        "Content-Type":"application/json" 
    }
})