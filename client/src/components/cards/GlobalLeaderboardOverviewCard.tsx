import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IUser } from "../../interfaces/IUser";


interface GlobalLeaderboardOverviewCardProps {
    leaderBoard: {
        userId: IUser,
        rank: number,
        totalPoints: number
    }
}

const GlobalLeaderboardOverviewCard: React.FC<GlobalLeaderboardOverviewCardProps> = ({leaderBoard}) => {
    const {user}  = useAppSelector(state => state.auth);
    return (
        <div className={`border border-gray-300 rounded-lg flex items-center gap-5 p-2 ${user?._id === leaderBoard?.userId?._id ? 'bg-gray-800 text-white transform scale-120 p-1 mx-1 rounded-md border-gray-600 shadow-md' : 'mx-4'}`}>
        <div className="w-8 h-8 bg-blue-400 rounded-lg text-white grid text-3xl items-center justify-center">
            <p className="font-bold">{leaderBoard.rank}</p>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-300">
                {/* <img src={user.image} alt="avator" className="w-full h-full rounded-lg"/> */}
            </div>
            <div className="flex flex-col">
                <h3 className="m-0 text-[14px]">{leaderBoard?.userId?.username}</h3>
                <p className="m-0 text-[12px] flex items-center gap-1 text-orange-400"><GiTwoCoins/>{leaderBoard?.totalPoints} XP</p>
            </div>
        </div>
        {user?._id === leaderBoard?.userId?._id && <p className="text-green-500 font-bold ml-auto text-right">You</p>}
        </div>
    );
}


export default GlobalLeaderboardOverviewCard;