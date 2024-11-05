import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import AvatorImage from "../../assets/heroImages/avator.jpg";
import { ChallengeSpecificHelper } from "../../utils/helper";
import { ChallengeStatus } from "../../utils/constants";
import { IChallenge } from "../../interfaces/IChallenge";
import { categoryConfig } from "../../utils/categorieConfig";
import { Link } from "react-router-dom";

interface ChallengeCardProps {
  challenge: IChallenge
  key: number;
}





const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, key }) => {
 

  const category = categoryConfig[challenge?.categorie||""] || {
    bgColor: "bg-gray-300", // Default color
    icon: () => <span>?</span>, // Default icon
  };


  return (
    <div
      key={key}
      className={`${category.bgColor} hover:bg-white group transition-colors duration-400 hover:text-gray-900 text-white relative grid grid-rows-1 justify-between rounded-2xl flex-1 w-full
      hover:${category.bgColor} hover:text-white cursor-pointer
      `}
    >
      <div
        className={
          "grid grid-rows-3 justify-between"
        }
      >
        <div className={"flex justify-between px-3 py-1 items-center gap-3.5"}>
          <span
            className={"text-gray-200 group-hover:text-gray-900 text-[13px] flex items-center gap-1"}
          >
            <CiCalendarDate />
            {new Date(challenge.startDate).toISOString().split("T")[0]}
          </span>
          <span className={`text-white text-[14px] flex items-center gap-1 px-2 rounded-full ${category.bgColor}`}><category.icon/>{challenge.categorie}</span>
        </div>
        <div className={"flex flex-col p-4"}>
          <h3 className={"font-bold text-center"}>
            {
              challenge.title.length > 25? challenge.title.slice(0,25)+"...": challenge.title
            }
          </h3>
          <div className={"flex items-center gap-1"}>
            <div className={"h-[30px] w-[30px] bg-sky-400 rounded-full"}>
              <img
                src={AvatorImage as string}
                alt="Avator"
                className={"w-full h-full rounded-full"}
              />
            </div>
            <div className="flex flex-col">
               <h3 className="m-0 font-bold text-[14px]">{challenge.createdBy?.name}</h3>
               <p className="m-0 text-[12px]">{challenge.createdBy?.createdChallenges.length}<sup>+</sup> challenges</p>
            </div>
          </div>
        </div>
        <div className={"flex relative px-3 justify-between items-center"}>
          <div className={"relative flex justify-between items-center"}>
            <div className={"relative flex items-center justify-center"}>
              <div
                className={
                  "w-[30px] relative border-2 border-white h-[30px] bg-blue-500 rounded-full"
                }
              >
                <img
                  src={AvatorImage as string}
                  alt="Avator"
                  className={"w-full h-full rounded-full"}
                />
              </div>
              <div
                className={
                  "w-[30px] right-4 h-[30px] border-2 border-white relative bg-blue-500 rounded-full"
                }
              >
                <img
                  src={AvatorImage as string}
                  alt="Avator"
                  className={"w-full h-full rounded-full"}
                />
              </div>
              <div
                className={
                  "w-[30px] right-8 h-[30px] border-2 border-white relative bg-blue-500 rounded-full"
                }
              >
                <img
                  src={AvatorImage as string}
                  alt="Avator"
                  className={"w-full h-full rounded-full"}
                />
              </div>
            </div>
            <h3 className={"-ml-8"}>{challenge.participants.length}+</h3>
          </div>
          <Link to={`/in/challenges/${challenge._id}`}
          className="bg-gray-800 text-[14px] text-white px-4 py-1 hover:bg-gray-600 font-bold flex items-center gap-1 rounded-full"
          >
              Join
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
