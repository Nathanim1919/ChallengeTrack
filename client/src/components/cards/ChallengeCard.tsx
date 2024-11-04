import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import AvatorImage from "../../assets/heroImages/avator.jpg";
import { ChallengeSpecificHelper } from "../../utils/helper";
import { ChallengeStatus } from "../../utils/constants";
import { IChallenge } from "../../interfaces/IChallenge";

interface ChallengeCardProps {
  challenge: IChallenge
  key: number;
}



const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, key }) => {
  const challengeStatus = ChallengeSpecificHelper.getChallengeStatus(
    challenge.startDate,
    challenge.duration
  );
  return (
    <div
      key={key}
      className="max-w-[300px] relative z-10 py-3 h-[400px] bg-sky-500 grid grid-rows-1 justify-between rounded-2xl shadow-lg hover:shadow-md cursor-pointer hover:bg-blue-500"
    >
      <div
        className={
          "bg-white px-3 border-sky-500 grid grid-rows-3 justify-between shadow-lg"
        }
      >
        <div className={"flex justify-between px-3 py-1 items-center gap-3.5"}>
          <span
            className={"text-green-400 text-[16px] flex items-center gap-1"}
          >
            <CiCalendarDate />
            {new Date(challenge.startDate).toISOString().split("T")[0]}
          </span>
          <span className={"text-sky-500 text-[16px]"}>{challenge.status}</span>
        </div>
        <div className={"flex flex-col items-center justify-center"}>
          <h3 className={"font-bold text-2xl text-center"}>
            {challenge.title}
          </h3>
          <div className={"flex items-center p-3 gap-2"}>
            <div className={"h-[30px] w-[30px] bg-sky-400 rounded-full"}>
              <img
                src={AvatorImage as string}
                alt="Avator"
                className={"w-full h-full rounded-full"}
              />
            </div>
            <p>Nathan Tadele</p>
          </div>
          <p className={"text-center text-teal-700"}>{challenge.description}</p>
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
          {(challengeStatus === ChallengeStatus.UPCOMING ||
            challengeStatus === ChallengeStatus.ABOUT_TO_START) && (
            <button
              className={
                "border-2 border-green-200 px-4 text-green-400 rounded-md hover:border-sky-500 hover:text-sky-500"
              }
            >
              Join
            </button>
          )}
          {challengeStatus === ChallengeStatus.ENDED && (
            <button
              className={
                "border-2 border-red-200 px-4 text-red-400 rounded-md hover:border-sky-500 hover:text-sky-500"
              }
            >
              Ended
            </button>
          )}
          {challengeStatus === ChallengeStatus.ONGOING && (
            <button
              className={
                "border-2 border-blue-200 px-4 text-blue-400 rounded-md hover:border-sky-500 hover:text-sky-500"
              }
            >
              Ongoing
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
