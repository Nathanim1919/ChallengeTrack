import axios from "axios";
import { store } from "../app/store";
import { refreshToken } from "../features/auth/authActions";

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true, // if you are using sessions, this will make axios send cookies with the request
});


api.interceptors.response.use(
    (response) => response, // this is for all successful responses
    async (error) => {
        const originalRequest = error.config; // the failed request, in this case the one that failed due to the expired token

        if (error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;

            try{
                const resultAction = await store.dispatch(refreshToken());

                if (refreshToken.fulfilled.match(resultAction)) {
                    return api(originalRequest)
                }
            }catch(refreshError){
                window.location.href = "/login";
                return Promise.reject(refreshError);
            }
        } else {
            window.location.href = "/login";
            return Promise.reject(error);
        }
    }
)

export default api;
