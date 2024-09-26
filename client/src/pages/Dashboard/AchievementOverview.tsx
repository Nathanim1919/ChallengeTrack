import React from "react";
import WonImage from "../../assets/achievement/won.png";
import CompletedImage from "../../assets/achievement/complete.png";
import JoinedImage from "../../assets/achievement/join.png";




const AchievementOverview = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-1">
            <div className="flex rounded-lg flex-1 flex-col items-center px-3 py-5 bg-[#333] text-white">
                <div className="flex items-center gap-2">
                    <img src={JoinedImage} alt="won" className="w-10 h-10"/>
                    <h1 className="text-4xl font-bold">+100</h1>
                </div>
                <p className="text-2ray-500 font-bold mt-2">Challenges Joined</p>
            </div>
            <div className="flex rounded-lg flex-1 flex-col items-center px-3 py-5 bg-blue-500 text-white">
            <div className="flex items-center gap-2">
                    <img src={CompletedImage} alt="won" className="w-10 h-10"/>
                    <h1 className="text-4xl font-bold">+60</h1>
                </div>
                <p className="text-gray-200 font-bold mt-2">Challenges Completed</p>
            </div>
            <div className="flex rounded-lg flex-1 flex-col items-center px-3 py-5 bg-green-500 text-white">
            <div className="flex items-center gap-2">
                    <img src={WonImage} alt="won" className="w-10 h-10"/>
                    <h1 className="text-4xl font-bold">+10</h1>
                </div>
                <p className="text-gray-200 font-bold mt-2">Challenges Won</p>
            </div>
        </div>
    )
}


export default AchievementOverview;