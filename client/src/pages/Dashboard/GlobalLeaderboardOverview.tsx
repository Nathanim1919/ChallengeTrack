import React, { useEffect } from "react";
import avatorImage from '../../assets/heroImages/avator.jpg';
import GlobalLeaderboardOverviewCard from "../../components/cards/GlobalLeaderboardOverviewCard";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getGlobalLeaderboard } from "../../features/leaderboard/leaderboardAction";


const GlobalLeaderboardOverview = () => {
  
    const dispatch = useAppDispatch();
    const {globalLeaderboard} = useAppSelector((state) => state.leaderboard);

    useEffect(() => {
        dispatch(getGlobalLeaderboard());
    }, [dispatch]);

    console.log("the global leader board: ",globalLeaderboard);
    return (
        <div className="grid items-center">
        <h1 className="grid items-center font-bold px-5">Global Leaderboard</h1>
        <div className="flex flex-col gap-1 overflow-x-auto h-[300px] px-2">

        {
            globalLeaderboard.map((leaderBoard, index) => (
                <GlobalLeaderboardOverviewCard key={index} leaderBoard={leaderBoard} />
            ))
        }
        </div>
        </div>
    );
};


export default GlobalLeaderboardOverview;