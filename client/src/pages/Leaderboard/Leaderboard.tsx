import React from "react";
import ChallengeList from "./ChallengeList";
import GlobalLeaderBoard from "./GlobalLeaderBoard";

const Leaderboard = () => {
    return (
        <div>
            <main className="grid grid-cols-[_.4fr_.6fr]">
                <ChallengeList />
                <GlobalLeaderBoard />
            </main>
        </div>
    );
};

export default Leaderboard;