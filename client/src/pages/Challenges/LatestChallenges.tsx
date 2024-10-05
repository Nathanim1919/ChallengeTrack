import React from 'react'
import AvatorImage from '../../assets/heroImages/avator.jpg'
import { MdJoinFull } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { TbProgressBolt } from "react-icons/tb";
import AuthChallengeCard from '../../components/cards/AuthChallengeCard';





const LatestChalleges = () => {
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
    ];

    return (
        <div className="popular-categories grid">
            <h2 className='font-bold m-4'>Latest Challenges</h2>
            <div className="categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {
                     challenges.map((challenge, index) => (
                        <AuthChallengeCard key={index} challenge={challenge}/>
                     ))
               }
            </div>
            <div className='w-full grid items-center justify-center my-5'>
                <button className='py-1 px-3 bg-black text-white rounded-sm hover:bg-gray-600 cursor-pointer'>See More</button>
               </div>      
        </div>
    );
};


export default LatestChalleges;
