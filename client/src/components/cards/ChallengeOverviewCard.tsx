import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { IChallenge } from "../../interfaces/IChallenge";
import avatorImage from '../../assets/heroImages/avator.jpg';
import { Link } from "react-router-dom";




interface ChallengeOverviewCardProps {
    challenge:IChallenge;
}


const ChallengeOverviewCard: React.FC<ChallengeOverviewCardProps> = ({challenge}) => {
    return (
        <Link to={`/in/challenges/${challenge._id}`} className="bg-white grid grid-cols-[_.5fr_.3fr_.2fr] items-center px-2 py-1 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-300"></div>
            <div className="flex flex-col">
                <h3 className="m-0 text-[14px]">{challenge.title.slice(0, 20)}...</h3>
                <div className="m-0 flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-gray-300">
                        <img src={avatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <p className="text-gray-500 text-[12px]">{challenge.createdBy.name}</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="flex relative">
              <div className="w-6 h-6 rounded-full bg-gray-200">
                <img src={avatorImage as string} alt="running" className="w-full h-full rounded-full border-2 border-white"/>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-200 relative right-3">
                <img src={avatorImage as string} alt="running" className="w-full h-full rounded-full border-2 border-white"/>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-200 relative right-6">
                <img src={avatorImage as string} alt="running" className="w-full h-full rounded-full border-2 border-white"/>
              </div>
            </div>
            <p className="font-bold relative right-6">+{challenge?.participants?.length}</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-[12px] font-bold"><FaRegDotCircle/>{challenge.status}</p>
          </div>
        </Link>
    );
}


export default ChallengeOverviewCard;