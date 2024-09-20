import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/",
    withCredentials: true,
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

export default api;
