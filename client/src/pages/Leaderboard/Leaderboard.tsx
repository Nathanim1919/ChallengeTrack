import React from "react";
import ChallengeList from "./ChallengeList";
import GlobalLeaderBoard from "./GlobalLeaderBoard";
import ChallengeSpecificLeaderBoard from "./ChallengeSpecificLeaderBoard";

const Leaderboard = () => {
    const [showGlobalLeaderBoard, setShowGlobalLeaderBoard] = React.useState(true);

    return (
        <div>
            <main className="grid grid-cols-[_.4fr_.6fr]">
                <ChallengeList setShowGlobalLeaderBoard={setShowGlobalLeaderBoard}/>
                {showGlobalLeaderBoard?
                <GlobalLeaderBoard />:
                <ChallengeSpecificLeaderBoard/>
                }
            </main>
        </div>
    );
};

export default Leaderboard;