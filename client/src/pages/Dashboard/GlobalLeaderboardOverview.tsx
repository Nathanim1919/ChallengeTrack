import React from "react";
import avatorImage from '../../assets/heroImages/avator.jpg';
import GlobalLeaderboardOverviewCard from "../../components/cards/GlobalLeaderboardOverviewCard";


const GlobalLeaderboardOverview = () => {
    const GlobalLeaderboard = [
        {
            username: "bereket",
            score: 100,
            you: false,
            image: avatorImage,
    
        },
        {
            username: "nathanim",
            score: 90,
            you: false,
            image: avatorImage
        },
        {
            username: "yohhanes",
            score: 80,
            you: true,
            image: avatorImage
        },
        {
            username: "yohhanes",
            score: 80,
            you: false,
            image: avatorImage
        },
       
    ]
    return (
        <div className="grid items-center">
        <h1 className="grid items-center font-bold px-5">Global Leaderboard</h1>
        <div className="flex flex-col gap-1 overflow-x-auto h-[300px] px-2">

        {
            GlobalLeaderboard.map((user, index) => (
                <GlobalLeaderboardOverviewCard key={index} user={user} />
            ))
        }
        </div>
        </div>
    );
};


export default GlobalLeaderboardOverview;