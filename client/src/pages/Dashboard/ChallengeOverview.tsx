import React from "react";
import ChallengeOverviewCard from "../../components/cards/ChallengeOverviewCard";

const ChallengeOverview = () => {

    const challenges = [
        {
            title: "Challenge 1",
            description: "This is a challenge",
            status:"ONGOING",
            creator: "User 1",
        },
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "User 2",
        },
        {
            title: "Challenge 3",
            description: "This is a challenge",
            status:"COMPLETED",
            creator: "User 3",
        },
        {
            title: "Challenge 1",
            description: "This is a challenge",
            status:"ONGOING",
            creator: "User 1",
        },
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "User 2",
        },
       
    ]
    return (
        <div className="bg-green-300">
        <h1>Challenge Overview</h1>
        <div className="flex flex-col gap-2 px-5">

        {
            challenges.map((challenge, index) => (
                <ChallengeOverviewCard key={index} challenge={challenge} />
            ))
        }
</div>
        </div>
    );
};


export default ChallengeOverview;