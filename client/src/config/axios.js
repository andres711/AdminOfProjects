import axios from "axios";

const clientAxios = axios.create({
    baseURL: "adminofprojects-production.up.railway.app",
});

export default clientAxios;
