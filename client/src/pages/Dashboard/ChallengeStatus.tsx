import React from "react";
import { FaRegWindowMaximize } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import AvatorImage from '../../assets/heroImages/avator.jpg'
import { PiRankingLight } from "react-icons/pi";



// Define the type for a challenge
interface Challenge {
  name: string;
  points: number;
  rank: string;
  status: string;
}

// Sample data for the challenges
const challenges: Challenge[] = [
  {
    name: "30-Day No Procrastination",
    points: 150,
    rank: "3rd",
    status: "Ongoing",
  },
  {
    name: "Weekly Fitness Challenge",
    points: 200,
    rank: "1st",
    status: "Completed",
  },
  {
    name: "Code Every Day for a Month",
    points: 120,
    rank: "5th",
    status: "Ongoing",
  },
  {
    name: "Code Every Day for a Month",
    points: 120,
    rank: "5th",
    status: "Ongoing",
  },
  {
    name: "Code Every Day for a Month",
    points: 120,
    rank: "5th",
    status: "Ongoing",
  },
  {
    name: "Code Every Day for a Month",
    points: 120,
    rank: "5th",
    status: "Ongoing",
  },
];

// Component to display the current points and rank table
const ChallengeStats: React.FC = () => {
  return (
    <div className="grid h-[300px] overflow-y-auto overflow-x-hidden">
        {
            challenges.map((challenge) => {
                return ( 
                    <div className="flex border-b border-gray-300 border-t border-t-transparent py-3 px-3 hover:border hover:border-gray-200 hover:bg-gray-100 cursor-pointer items-center gap-8" key={challenge.name}>
                        <div className="flex flex-col">
                            <h3 className="font-bold m-0 items-center gap-1 flex text-[14px] text-gray-600"><FaRegWindowMaximize/>{(challenge.name).slice(0,10)}..</h3>
                            <div className="flex m-0 items-center gap-1">
                                <div className="w-5 h-5 rounded-full bg-slate-400">
                                    <img src={AvatorImage} alt="avator image" className="w-full h-full rounded-full"/>
                                </div>
                                <p>nathanim</p>
                            </div>
                        </div>
                        <p className="flex items-center font-bold text-orange-500"><GiTwoCoins/>{challenge.points}</p>
                        <p className="flex items-center"><PiRankingLight/>{challenge.rank}</p>
                        <p className="bg-orange-200 py-1 px-2 rounded-full text-[12px]">{challenge.status}</p>
                    </div>
                );
            })
        }
    </div>
  );
};

export default ChallengeStats;
