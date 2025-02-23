import axios from 'axios';
const apiUrl = 'http://127.0.0.1:8000/api/'
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });

export default {
    getHeader() {
        let token = window.localStorage.getItem("token_admin");
        if(token == null) {
            return {};
        }
        return {
            Authorization : 'Bearer ' +  token
        }
    },
    get(url) {
        return axios.get(apiUrl + url, { headers : this.getHeader() })
                    .catch((res) => {
                        var result = Object.entries(res.response.data.errors);
                        result.forEach((v, k) => {
                            toaster.error(v[1][0]);
                        });
                    });
    },
    post(url, data) {
        return axios.post(apiUrl + url, data, { headers : this.getHeader() })
                    .catch((res) => {
                        var result = Object.entries(res.response.data.errors);
                        result.forEach((v, k) => {
                            toaster.error(v[1][0]);
                        });
                    });
    },
    delete(url) {
        return axios.delete(apiUrl + url, { headers : this.getHeader() })
                    .catch((res) => {
                        var result = Object.entries(res.response.data.errors);
                        result.forEach((v, k) => {
                            toaster.error(v[1][0]);
                        });
                    });
    },
    put(url, data) {
        return axios.put(apiUrl + url, data, { headers : this.getHeader() })
                    .catch((res) => {
                        var result = Object.entries(res.response.data.errors);
                        result.forEach((v, k) => {
                            toaster.error(v[1][0]);
                        });
                    });
    }
}