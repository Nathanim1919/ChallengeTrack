import React from "react";



const AchievementOverview = () => {
    return (
        <div className="flex justify-between gap-1">
            <div className="flex flex-1 flex-col items-center px-3 py-5 bg-[#eee]">
                <h1 className="text-4xl font-bold">+234</h1>
                <p className="text-gray-500">Challenges Joined</p>
            </div>
            <div className="flex flex-1 flex-col items-center px-3 py-5 bg-[#eee]">
                <h1 className="text-4xl font-bold">+35</h1>
                <p className="text-gray-500">Challenges Completes</p>
            </div>
            <div className="flex flex-1 flex-col items-center px-3 py-5 bg-[#eee]">
                <h1 className="text-4xl font-bold">+10</h1>
                <p className="text-gray-500">Challenges Won</p>
            </div>
        </div>
    )
}


export default AchievementOverview;