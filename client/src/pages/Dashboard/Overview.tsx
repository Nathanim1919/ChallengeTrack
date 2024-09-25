import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const Overview = () => {
    const {user} = useSelector((state: RootState) => state.auth);
    return (
        <div className="p-4">
          <h1 className="font-bold text-4xl">Welcome back, {user?.username}</h1>
          <p>Create challenge and invite a friend to compute with.</p>
        </div>
    );
};


export default Overview;