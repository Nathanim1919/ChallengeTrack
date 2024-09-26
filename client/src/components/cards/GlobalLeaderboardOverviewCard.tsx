import React from "react";
import { GiTwoCoins } from "react-icons/gi";


interface GlobalLeaderboardOverviewCardProps {
    user: {
        username: string;
        score: number;
        image: string;
        you: boolean;
    }
}

const GlobalLeaderboardOverviewCard: React.FC<GlobalLeaderboardOverviewCardProps> = ({user}) => {
    return (
        <div className={`border border-gray-300 rounded-lg flex items-center gap-5 p-2 ${user.you ? 'bg-orange-100 font-bold' : ''}`}>
        <div className="w-10 h-10 bg-blue-400 rounded-lg text-white grid text-4xl items-center justify-center">
            <p className="font-bold">1</p>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300">
                <img src={user.image} alt="avator" className="w-full h-full rounded-lg"/>
            </div>
            <div className="flex flex-col">
                <h3 className="m-0 text-[14px]">{user.username}</h3>
                <p className="m-0 text-[12px] flex items-center gap-1 text-orange-400"><GiTwoCoins/>{user.score} XP</p>
            </div>
        </div>
        {user?.you && <p className="text-green-500 font-bold ml-auto text-right">You</p>}
        </div>
    );
}


export default GlobalLeaderboardOverviewCard;