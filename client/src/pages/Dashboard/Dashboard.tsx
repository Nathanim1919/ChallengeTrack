import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Overview from "./Overview";
import ChallengeOverview from "./ChallengeOverview";
import RecommandedChallenges from "./RecommandedChallenges";
import NotificationOverview from "./NotificationOverview";
import GlobalLeaderboardOverview from "./GlobalLeaderboardOverview";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import PopularChallengeCard from "../../components/cards/PopularChallengeCard";
import ChallengeStats from "./ChallengeStatus";
import AchievementOverview from "./AchievementOverview";


const Dashboard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[_.75fr_.25fr] gap-2 m-2 h-[100%] overflow-hidden">
            <div className=" grid grid-rows-[.2fr_.6fr_.1fr_.1fr] gap-2 h-[78%] overflow-y-auto">
                <div className="grid grid-cols-[_.6fr_.4fr] bg-gradient-to-tr  text-white p-2 bg-[#333] sticky top-0 z-10">
                    <Overview />
                    <div className="px-3 grid gap-3">
                        <h1>Quote of The day</h1>
                        <div className="flex flex-col">
                            <FaQuoteLeft className="text-blue-400"/>
                                <p className="text-[13px] ml-5">Success is the sum of small efforts, repeated day in and day out.</p>
                            <FaQuoteRight className="text-blue-400"/>
                            <p className="justify-self-end ml-auto">— Robert Collier</p>
                        </div>
                    </div>
                </div>
               
                <div className="grid grid-cols-[_.5fr_.5fr] gap-2">
                    <ChallengeOverview />
                    <RecommandedChallenges />
                </div>
                <div className=" text-black p-3 grid grid-cols-[_.4fr_.61fr] gap-3">
                    <div className="row-span-2 grid">
                        <h1 className="font-bold m-3">Challenge Specific Rank</h1>
                        <ChallengeStats/>
                    </div>
                    <div>
                        <div className="grid gap-2">
                            <PopularChallengeCard/>
                        </div>
                        <div className="grid gap-2">
                            <h1 className="m-3">  Overall Achievements</h1>
                            <AchievementOverview/>
                        </div>
                    </div>               
                </div>
               
            </div>
            <div className=" grid grid-rows-[_.2fr_.8fr] h-[80%]">
                <NotificationOverview/>
                <GlobalLeaderboardOverview/>
            </div>
          
        </div>
    );
};


export default Dashboard;