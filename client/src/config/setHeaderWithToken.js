import clientAxios from './axios.js';

const setHeader = (token) => {
    if(token) clientAxios.defaults.headers.common['x-token']= token
    else delete clientAxios.defaults.headers.common['x-token'];
}

export default setHeader;