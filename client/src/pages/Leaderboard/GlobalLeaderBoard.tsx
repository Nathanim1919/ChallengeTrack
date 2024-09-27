import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import AvatorImage from "../../assets/heroImages/avator.jpg";



const GlobalLeaderBoard = () => {
    const users = [
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
        },
        {
            name: 'Lily',
            rank: "14th",
        },
        {
            name: 'Mary',
            rank: "15th",
        },
        {
            name: 'Nancy',
            rank: "16th",
        },
        {
            name: 'Oliver',
            rank: "17th",
        },
        {
            name: 'Peter',
            rank: "18th",
        },
        {
            name: 'Quinn',
            rank: "19th",
        },
        {
            name: 'Rose',
            rank: "20th",
        }
    ];
    return (
        <div className="">
            <div className="bg-black sticky top-0 p-5 text-white grid items-center justify-center text-2xl overflow-hidden">
                <h1>Global-LeaderBoard</h1>
                <div className="w-24 h-24 bg-gray-800 absolute -top-12 left-24 rounded-full"></div>
            </div>
            <div className="grid gap-2 h-[85vh] overflow-y-auto py-3">
                 <div className="p-3 grid grid-cols-[_.3fr_.2fr_.2fr_.2fr_.1fr] bg-orange-400 text-white sticky top-0 shadow-lg rounded-sm">
                    <div className="flex items-center gap-2">
                        <h3 className="w-8 h-8 bg-orange-400 text-white grid items-center justify-center font-bold ">123</h3>
                        <h2>Nathanim</h2>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-2 text-white"><GiTwoCoins/>3000</h3>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-1"><MdOutlineLeaderboard/>123th</h3>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-1 font-bold"><FaRegCheckCircle/>3400 completed</h3>
                    </div>
                    <div>
                        <h3 className="flex items-center gap-1 font-bold"><FaRegCheckCircle/>You</h3>
                    </div>
                </div>
                  
                {users.map((user, index) => (
                  
                        <div key={index} className="p-3 grid grid-cols-[_.3fr_.2fr_.2fr_.3fr] cursor-pointer border-b border-gray-200">
                            <div className="flex items-center gap-5">
                                <h3 className="w-8 h-8 bg-gray-400 text-white grid items-center justify-center font-bold ">{index}</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full">
                                        <img src={AvatorImage} alt="avator" className="w-full h-full object-cover rounded-full"/>
                                    </div>
                                    <h2>{user.name}</h2>
                                </div>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 text-orange-500"><GiTwoCoins/>3000</h3>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-1"><MdOutlineLeaderboard/>{user.rank}</h3>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-1 text-black font-bold text-[13px]"><FaRegCheckCircle/>3400 completed</h3>
                            </div>
                        </div>
                  
                ))}
            </div>
        </div>
    );
};


export default GlobalLeaderBoard;