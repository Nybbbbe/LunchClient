import axios from 'axios';

const url = 'http://localhost:5000/api/';

axios.interceptors.request.use(
    config => {
        // if (config.url) {
        //     const { origin } = new URL(config.url);
        // }
        const allowedOrigins = [url];
        const token = localStorage.getItem('token');
        if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

class RequestService {

    static getUrl() {
        return url;
    }

    static login = async (username, password) => {
        return new Promise ((resolve) => {
            axios.post(url + "login", {
                username: username,
                password: password
            })
            .then (response => {
                axios.defaults.headers.Authorization = response.data.token;
                console.log(response);
                resolve(true);
            })
            .catch (error => {
                console.log(error.response.data);
                console.log(error);
                resolve(false);
            });
        });
    }

    static getRequest(endPoint) {
        return new Promise ((resolve,reject) => {
            axios.get(url + endPoint).then((res) => {
                const data = res.data;
                resolve(data);
            })
            .catch((err)=> {
                reject(err);
            });
        });
    }

    static sendRequest(endPoint, text) {
        return axios.post(url + endPoint, {
            text
        });
    }

    static getDataRequest(endPoint) {
        return new Promise ((resolve,reject) => {
            axios.get(url + endPoint).then((res) => {
                const data = res.data;
                // console.log(data);
                resolve(data);
            })
            .catch((err)=> {
                reject(err);
            });
        });
    }

    static sendDataRequest(endPoint, json) {
        return axios({
            method: 'post',
            url: url + endPoint,
            data: json,
            headers: {'Content-Type': 'multipart/form-data' }
        });
        // .then(function (response) {
        //     // handle success
        //     console.log(response);
        // })
        // .catch(function (response) {
        //     // handle error
        //     console.log(response);
        // });
    }

    static deleteRequest(endPoint, id) {
        return axios.delete(`${url}${endPoint}/${id}`);
    }
}

export default RequestService;