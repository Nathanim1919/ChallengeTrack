import { IUser } from "../interfaces/IUser.ts";
import apiConfig from "./apiConfig.ts";


// Define an api for registering a new user
const registerUser = async (userData: Partial<IUser>) => {
    const response = await apiConfig.post("/register", userData);
    return response.data;
}


// Define an api for logging in a user
const loginUser = async (userData:Partial<IUser>) => {
    const response = await apiConfig.post("/auth/login", userData);
    return response.data;
}


// Define an api for logging out a user
const logoutUser = async () => {
    const response = await apiConfig.post("/auth/logout");
    return response.data;
}


// Define an api for getting the current user
const getCurrentUser = async () => {

    const response = await apiConfig.get("/auth/current_user");
    return response.data;
}


// Export the apis
export default { registerUser, loginUser, logoutUser, getCurrentUser };
