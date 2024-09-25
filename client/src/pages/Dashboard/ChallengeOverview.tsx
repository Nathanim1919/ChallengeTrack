import React from "react";
import ChallengeOverviewCard from "../../components/cards/ChallengeOverviewCard";
import avatorImage from '../../assets/heroImages/avator.jpg';

const ChallengeOverview = () => {

    const challenges = [
        {
            title: "Challenge 1",
            description: "This is a challenge",
            status:"ONGOING",
            creator: "bereket",
            image: avatorImage
        },
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "nathanim",
            image: avatorImage
        },
        {
            title: "Challenge 3",
            description: "This is a challenge",
            status:"PENDING",
            creator: "yohhanes",
            image: avatorImage
        },
        {
            title: "Challenge 1",
            description: "This is a challenge",
            status:"ONGOING",
            creator: "abreham",
            image: avatorImage
        },
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "muse",
            image: avatorImage
        },
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "muse",
            image: avatorImage
        },   
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "muse",
            image: avatorImage
        },   
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "muse",
            image: avatorImage
        },   
        {
            title: "Challenge 2",
            description: "This is a challenge",
            status:"PENDING",
            creator: "muse",
            image: avatorImage
        },   
    ]
    return (
        <div className=" grid items-center">
        <h1 className="grid items-center font-bold px-3">My Challenges</h1>
        <div className="flex flex-col gap-1 overflow-x-auto h-[300px] px-2">

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