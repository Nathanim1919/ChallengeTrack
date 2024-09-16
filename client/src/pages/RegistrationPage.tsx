import React from "react";
import {Link} from "react-router-dom";

const RegistrationPage:React.FC = () => {
    return (
        <div className={'grid grid-cols-2 h-screen w-screen shadow-lg'}>
            <div className={"invalid:border-red-500 absolute border border-gray-400 top-1/2 left-1/2 transform  rounded-md -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col items-center justify-center p-5"}>
                <h1 className={"text-3xl font-bold"}>Create Account For Free</h1>
                <form className={"flex flex-col gap-2"}>
                    <label className={"font-bold mt-3"}>Email</label>
                    <input className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} placeholder="Username or Email"/>
                    <label className={"font-bold mt-3"}>Username</label>
                    <input className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} placeholder="Username"/>
                    <label className={"font-bold mt-3"}>Password</label>
                    <input className={"py-1 bg-gray-100 outline-0 focus:bg-white px-2 border border-gray-400 font-Montserrat"} type="password" placeholder="Password"/>
                    <button className={"mt-3 font-Montserrat p-2 bg-sky-400 text-teal-50"}>Login</button>
                </form>
                {/*<p className={""}>Don't have an account? <Link className={'text-blue-600'} to={"/register"}>Register</Link></p>*/}
                <p>
                    Already have an account? <Link to={"/login"} className={"text-blue-600"}>Login</Link>
                </p>
            </div>
            <div className={"bg-sky-400"}></div>
            <div className={"bg-white"}></div>
        </div>
    );
};
export default RegistrationPage;
