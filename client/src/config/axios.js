import axios from "axios";

const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_API,
});

export default clientAxios;
