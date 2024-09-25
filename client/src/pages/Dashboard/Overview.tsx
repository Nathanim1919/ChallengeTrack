import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


const Overview = () => {
    const {user} = useSelector((state: RootState) => state.auth);
    return (
        <div className="bg-blue-200">
          <h1>Welcome back, {user?.username}</h1>
          <p>Create challenge and invite a friend to compute with.</p>
        </div>
    );
};


export default Overview;