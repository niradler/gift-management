import axios from 'axios';

const host_url = "http://localhost:8080";

const _send = (method, route, data) => {
    const opts = {
        method: method,
        url: host_url + route,
    };

    if(method.toUpperCase() === 'POST') {
        opts.data = data;
    }

    return axios(opts);
}

const getShippingAddress = () =>{

    return _send("GET", "/admin/shipping");
}

const addShipping = (data) =>{

    return _send("POST", "/user/shipping", data);
}

export default {
    getShippingAddress,
    addShipping
}