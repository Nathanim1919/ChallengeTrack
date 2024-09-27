import React from "react";
import ChallengeList from "./ChallengeList";
import GlobalLeaderBoard from "./GlobalLeaderBoard";
import ChallengeSpecificLeaderBoard from "./ChallengeSpecificLeaderBoard";

const Leaderboard = () => {
    return (
        <div>
            <main className="grid grid-cols-[_.4fr_.6fr]">
                <ChallengeList />
                <ChallengeSpecificLeaderBoard />
                {/* <GlobalLeaderBoard /> */}
            </main>
        </div>
    );
};

export default Leaderboard;