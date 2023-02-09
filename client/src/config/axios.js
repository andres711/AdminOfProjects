import axios from "axios";

const clientAxios = axios.create({
    // baseURL: process.env.REACT_APP_API || "http://localhost:3001",
    baseURL: "https://adminofprojects-production.up.railway.app"
});

export default clientAxios;
