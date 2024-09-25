import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import AvatarImage from "../../assets/heroImages/avator.jpg";
import { GiTwoCoins } from "react-icons/gi";

const AuthHeader: React.FC = () => {
    const {user} = useSelector((state: RootState) => state.auth);
    return (
        <header className="bg-gray-100 border-b border-gray-300 px-4 flex justify-end items-center">
            <div className="points px-2 border-r border-gray-500">
                <p className="flex justify-center items-center gap-3 text-orange-400 font-bold"><GiTwoCoins/>{user?.points} points</p>
            </div>
           <div className="profile flex items-center justify-end gap-2 px-2">
                <div className="w-8 h-8 rounded-full bg-white">
                    <img className="w-full h-full rounded-full" src={AvatarImage} alt="avatar"/>
                </div>
                <div>
                    <h2 className="text-black text-sm">{user?.username}</h2>
                </div>
           </div>
        </header>
    );
};

export default AuthHeader;