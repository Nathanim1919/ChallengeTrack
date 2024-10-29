import React from "react";
import AvatarImage from "../../assets/heroImages/avator.jpg";
import { GiTwoCoins } from "react-icons/gi";
import { useAppSelector } from "../../hooks/useAppSelector";

const AuthHeader: React.FC = () => {
    const points = useAppSelector((state) => state.auth.user?.points);
    const username = useAppSelector((state) => state.auth.user?.username);

    return (
        <header className="bg-gray-100 h-[60px] border-b border-gray-300 px-4 flex justify-end items-center">
            <div className="points px-2 border-r border-gray-500">
                <p className="flex justify-center items-center gap-3 text-orange-400 font-bold"><GiTwoCoins/>{points} XP</p>
            </div>
           <div className="profile flex items-center justify-end gap-2 px-2">
                <div className="w-8 h-8 rounded-full bg-white">
                    <img className="w-full h-full rounded-full" src={AvatarImage as string} alt="avatar"/>
                </div>
                <div>
                    <h2 className="text-black text-sm">{username}</h2>
                </div>
           </div>
        </header>
    );
};

export default AuthHeader;
