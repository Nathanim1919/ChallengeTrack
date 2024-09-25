import React from "react";
import { FaRegDotCircle } from "react-icons/fa";



interface ChallengeOverviewCardProps {
    challenge: {
        title: string;
        description: string;
        status: string;
        creator: string;
        image: string;
    };
}


const ChallengeOverviewCard: React.FC<ChallengeOverviewCardProps> = ({challenge}) => {
    return (
        <div className="bg-white grid grid-cols-[_.5fr_.3fr_.2fr] items-center px-2 py-1 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-300"></div>
            <div className="flex flex-col">
                <h3 className="m-0 text-[14px]">{challenge.title}</h3>
                <div className="m-0 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300">
                        <img src={challenge.image} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <p className="text-gray-500 text-[12px]">{challenge.creator}</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex relative">
              <div className="w-6 h-6 rounded-full bg-gray-200">
                <img src={challenge.image} alt="running" className="w-full h-full rounded-full border-2 border-white"/>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-200 relative right-3">
                <img src={challenge.image} alt="running" className="w-full h-full rounded-full border-2 border-white"/>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-200 relative right-6">
                <img src={challenge.image} alt="running" className="w-full h-full rounded-full border-2 border-white"/>
              </div>
            </div>
            <p className="font-bold relative right-6">+120</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-[12px] font-bold"><FaRegDotCircle/>{challenge.status}</p>
          </div>
        </div>
    );
}


export default ChallengeOverviewCard;