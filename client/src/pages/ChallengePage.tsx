import React from "react";
import ChallengeCard from "../components/cards/ChallengeCard.tsx";
import Abstract from "../assets/heroImages/hero3.png"

const ChallengePage: React.FC = () => {
    const challenges = [
        {
            title: "30-Day Fitness Challenge",
            description: "Commit to 30 days of daily workouts to improve your strength and endurance.",
            startDate: "2023-10-01",
            endDate: "2023-10-30",
            participants: ["1", "23", "45"],
            status: 'ONGOING', // Challenge is currently active
            visibility: "public",
        },
        {
            title: "Read 5 Books in a Month",
            description: "Challenge yourself to read 5 books by the end of the month. Share your progress with others.",
            startDate: "2023-10-05",
            endDate: "2023-10-31",
            participants: ["2", "4", "19"],
            status: 'PENDING', // Challenge hasn't started yet
            visibility: "public",
        },
        {
            title: "100 Days of Code",
            description: "Code for at least an hour every day for 100 days. Improve your programming skills.",
            startDate: "2023-09-01",
            endDate: "2023-12-10",
            participants: ["10", "50", "67"],
            status: 'ONGOING',
            visibility: "public",
        },
        {
            title: "Healthy Eating Challenge",
            description: "Adopt a healthy eating plan for 21 days. Share your recipes and tips with the community.",
            startDate: "2023-10-10",
            endDate: "2023-10-31",
            participants: ["3", "17", "58"],
            status: 'PENDING',
            visibility: "public",
        },
        {
            title: "Learn a New Language",
            description: "Spend at least 15 minutes a day learning a new language. Complete the challenge in 60 days.",
            startDate: "2023-11-01",
            endDate: "2023-12-31",
            participants: ["5", "33", "101"],
            status: 'PENDING',
            visibility: "public",
        },
        {
            title: "Complete a Personal Project",
            description: "Finish a side project you've been putting off within 30 days. Share your progress with others.",
            startDate: "2023-09-15",
            endDate: "2023-10-15",
            participants: ["20", "75", "99"],
            status: 'COMPLETED',
            visibility: "private",
        },
        {
            title: "Meditation Challenge",
            description: "Practice mindfulness meditation for 10 minutes a day for 21 days.",
            startDate: "2023-09-10",
            endDate: "2023-09-30",
            participants: ["8", "22", "47"],
            status: 'ONGOING',
            visibility: "public",
        },
        {
            title: "Volunteer for a Cause",
            description: "Donate your time to a local cause for at least 5 hours in the next month.",
            startDate: "2023-11-05",
            endDate: "2023-12-05",
            participants: ["9", "32", "77"],
            status: 'PENDING',
            visibility: "private",
        },
        {
            title: "Save $1000 in 60 Days",
            description: "Create a savings plan and save at least $1000 within 60 days.",
            startDate: "2023-10-01",
            endDate: "2023-11-30",
            participants: ["15", "65", "89"],
            status: 'PENDING',
            visibility: "public",
        },
        {
            title: "Digital Detox Challenge",
            description: "Reduce screen time and go offline for at least 1 hour per day for 14 days.",
            startDate: "2023-09-20",
            endDate: "2023-10-04",
            participants: ["18", "43", "60"],
            status: 'PENDING',
            visibility: "public",
        },
    ];

    return (
        <div className={'relative z-10 grid items-center justify-center gap-5 py-10 m-auto  w-[90%]'}>
            <h1 className={"self-center font-bold text-4xl grid items-center justify-center py-3"}>Latest Challenges</h1>
            <div className={"flex justify-center  gap-8 flex-wrap "}>
                {challenges.map(challenge => {
                    return (
                        <ChallengeCard challenge={challenge}/>
                    )
                })}
                <img src={Abstract as string} alt="Abstract" className="absolute w-[50vw] transform rotate-180 -bottom-16 left-0 opacity-80 object-cover"/>
            </div>
        </div>
    )
};


export default ChallengePage;
