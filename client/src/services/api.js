import axios from 'axios';

const host_url = "https://snappy-api-v2.herokuapp.com";

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

const verifyAddress = (data) =>{

    return _send("POST", "/user/verifyAddress", data);
}

export default {
    getShippingAddress,
    addShipping,
    verifyAddress
}