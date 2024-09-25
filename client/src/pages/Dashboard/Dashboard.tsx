import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Overview from "./Overview";
import ChallengeOverview from "./ChallengeOverview";
import RecommandedChallenges from "./RecommandedChallenges";
import NotificationOverview from "./NotificationOverview";
import GlobalLeaderboardOverview from "./GlobalLeaderboardOverview";

const Dashboard: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    console.log(user);
    return (
        <div className="grid grid-cols-1 md:grid-cols-[_.7fr_.3fr] gap-2 m-2">
            <div className=" grid grid-rows-[.2fr_.6fr_.2fr] gap-2">
                <Overview />
                <div className="grid grid-cols-[_.5fr_.5fr] gap-2">
                    <ChallengeOverview />
                    <RecommandedChallenges />
                </div>
                <div className="bg-red-600">
                    final
                </div>
            </div>
            <div className=" grid grid-rows-[_.5fr_.5fr] gap-2">
                <GlobalLeaderboardOverview/>
                <NotificationOverview/>
            </div>
          
        </div>
    );
};


export default Dashboard;