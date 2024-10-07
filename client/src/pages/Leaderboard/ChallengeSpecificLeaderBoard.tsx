import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AvatorImage from "../../assets/heroImages/avator.jpg";
import { IChallenge } from "../../interfaces/IChallenge";



const ChallengeSpecificLeaderBoard:React.FC<{challenge: IChallenge | null}> = ({challenge}) => {
    const users =  [
        {
            name: 'John Doe',
            rank: "1st",
        },
        {
            name: 'Jane Doe',
            rank: "2nd",
        },
        {
            name: 'Alice',
            rank: "3rd",
        },
        {
            name: 'Bob',
            rank: "4th",
        },
        {
            name: 'Charlie',
            rank: "5th",
        },
        {
            name: 'David',
            rank: "6th",
        },
        {
            name: 'Eve',
            rank: "7th",
        },
        {
            name: 'Frank',
            rank: "8th",
        },
        {
            name: 'Grace',
            rank: "9th",
        },
        {
            name: 'Helen',
            rank: "10th",
        },
        {
            name: 'Ivy',
            rank: "11th",
        },
        {
            name: 'Jack',
            rank: "12th",
        },
        {
            name: 'Kevin',
            rank: "13th",
        }
    ]
    return (
        <div className="leaderboard">
            <div className="leaderboard-header bg-black text-white grid p-5 gap-3">
                <div>
                    <h1 className="text-3xl font-bold">{challenge?.title}</h1>
                    <p className="challengeDescription">
                       {challenge?.description}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-white">
                    <div className="w-10 h-10 rounded-full bg-gray-300">
                        <img src={AvatorImage} alt="avator" className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold m-0">Nathanim Tadele</h2>
                        <p className="flex items-center gap-1 m-0">Rank: <MdOutlineLeaderboard/>1st</p>
                    </div>
                </div>
            </div>
            <div className="leaderboard-list">
                <div className="leaderboard-list-body h-[75vh] overflow-y-auto">
                    {
                        users.map((user, index) => (
                            <div key={index} className="leaderboard-list-item p-3 grid grid-cols-4 gap-3 cursor-pointer border-b border-gray-200">
                                <div className="flex items-center gap-5">
                                    <div className="w-8 h-8 bg-black font-bold rounded-md grid items-center justify-center text-white">
                                        <h3 className="m-0">{index + 1}</h3>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-200">
                                                <img src={AvatorImage} alt="avator" className="w-full h-full object-cover rounded-full"/>
                                            </div>
                                            <h2 className="m-0 font-bold">{user.name}</h2>
                                        </div>
                                      
                                        <p className="m-0 flex items-center gap-1">Rank: <MdOutlineLeaderboard/>{user.rank}</p>
                                    </div>
                                </div>
                               
                                <div className="flex items-center gap-1 text-orange-500 font-bold">
                                    <GiTwoCoins/>
                                    <p className="m-0">100</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <div className="w-24 h-2 relative bg-gray-300">
                                        <div className="absolute h-full bg-black w-[60%]"></div>
                                    </div>
                                    <p className="m-0">60%</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaRegCheckCircle/>
                                    <p className="m-0">5/13</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};


export default ChallengeSpecificLeaderBoard;