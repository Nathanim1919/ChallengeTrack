import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const Overview = () => {
    const {user} = useSelector((state: RootState) => state.auth);
    return (
        <div className="p-2">
          <h1 className="font-bold text-4xl">Welcome back, {user?.username}</h1>
          <p>Create challenge and invite a friend to compute with.</p>

          <button className="py-1 px-2 m-2 bg-white border border-white text-black rounded-sm text-[13px] hover:bg-transparent hover:text-white">Create Challenge</button>
        </div> 
    );
};


export default Overview;