import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { loginUser } from "../features/auth/authActions";

const LoginPage:React.FC = () => {
    const [credentials, setCredentials] = React.useState({identifier: '', password: ''});
    const dispatch = useDispatch<AppDispatch>();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser(credentials));
    }

    return (
        <div className={'grid grid-cols-2 h-screen w-screen shadow-lg'}>
            <div className={"invalid:border-red-500 absolute border border-gray-400 top-1/2 left-1/2 transform  rounded-md -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col items-center justify-center p-5"}>
                <h1 className={"text-3xl font-bold"}>Welcome Back</h1>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-2"}>
                    <label htmlFor="identifier" className={"font-bold mt-3"}>Email</label>
                    <input onChange={(e) => setCredentials({...credentials, identifier:e.target.value})} name="identifier" id="identifier" className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} placeholder="Username or Email"/>
                    <label htmlFor="password"  className={"font-bold mt-3"}>Password</label>
                    <input onChange={(e) => setCredentials({...credentials, password: e.target.value})} name="password" id="password" className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} type="password" placeholder="Password"/>
                    <button className={"mt-3 font-Montserrat p-2 bg-sky-400 text-teal-50"}>Login</button>
                </form>
                <p>Don&apos;t have an account? <Link className={'text-blue-600'} to={"/register"}>Register</Link></p>
            </div>
            <div className={"bg-sky-400"}></div>
            <div className={"bg-white"}></div>
        </div>
    );
};
export default LoginPage;
