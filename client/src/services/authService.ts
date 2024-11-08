import authApi from "../apis/authApi.ts";
import { IUser } from "../interfaces/IUser.ts";




const registerUser = async (userData: Partial<IUser>) => {
    return await authApi.registerUser(userData);
};

const loginUser = async (userData: {identifier: string, password: string}) => {
    return await authApi.loginUser(userData);
};

const logoutUser = async () => {
    return await authApi.logoutUser();
};

const getCurrentUser = async () => {
    return await authApi.getCurrentUser();
};


const refreshToken = async () => {
    return await authApi.refreshToken();
};


export { registerUser, loginUser, logoutUser, getCurrentUser,refreshToken };

