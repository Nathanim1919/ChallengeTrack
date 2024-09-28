import React from "react";
import PopularCategories from "./PopularCategories";
import LatestChalleges from "./LatestChallenges";
import { CiSearch } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";




const AuthChallengesPage: React.FC = () => {
    return (
        <div className="w-[95%] my-3 mx-auto h-[90%] overflow-y-auto px-3">
            <div className="sticky top-0 z-50 bg-white flex justify-between items-center gap-5">
                <div className="flex justify-between">
                    <div className="filterByCategories relative">
                        <div className="flex justify-center gap-3 items-center">
                        <h2>Filter by Categories</h2>
                        <button className="p-2 border border-gray-300">Self-Improvement</button>
                        </div>
                        <div className="flex flex-col absolute z-50 bg-white opacity-0 justify-start items-start text-[14px] border border-gray-200 rounded-md shadow-lg">
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">All</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Fitness</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Nutrition</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Mindfulness</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Productivity</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Finance</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Hobbies</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Relationships</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Self-Improvement</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Career</button>
                            <button className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300">Education</button>
                        </div>
                    </div>
                </div>
                <form className="flex-1 flex items-center justify-between bg-white border border-gray-200">
                    <input type="text" placeholder="Search challenges" className="border-0 outline-none p-2 w-[90%]"/>
                    <button className=" p-2 font-bold text-2xl"><CiSearch/></button>
                </form>
              
                    <Link to={'/in/create-new'} className="bg-black text-white px-3 py-1 mr-3 border-0 outline-none hover:bg-gray-700 flex items-center gap-1"><IoCreateOutline/>Create</Link>
               
            </div>
            <LatestChalleges/>
            <PopularCategories/>
        </div>
    )
};


export default AuthChallengesPage;