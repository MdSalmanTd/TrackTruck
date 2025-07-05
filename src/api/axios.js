import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // Your backend URL
  withCredentials: true, // For cookies (JWT)
});

export default API;   