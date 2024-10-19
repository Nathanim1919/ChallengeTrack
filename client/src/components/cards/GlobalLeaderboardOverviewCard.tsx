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
        <div className={`border border-gray-300 rounded-lg flex items-center gap-5 p-2 ${user?._id === leaderBoard?.userId?._id ? 'bg-orange-100 font-bold' : ''}`}>
        <div className="w-10 h-10 bg-blue-400 rounded-lg text-white grid text-4xl items-center justify-center">
            <p className="font-bold">{leaderBoard.rank}</p>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300">
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