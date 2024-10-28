import React from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { BsQuestionLg } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { ILog } from "../../interfaces/ILogs";


interface ProgressBarProps {
  total: number;
  logs: ILog[];
  current?: number;
  showAllLogDays?: boolean;
  setShowAllLogDays?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  // logs,
  setShowAllLogDays,
}) => {
  return (
    <div className="p-4 my-2 relative">
        <h1 className="font-bold py-5 flex items-center gap-2"><GiProgression/>Your Progress</h1>
        <div className="flex items-center gap-2 flex-wrap">
        {Array.from({ length: total }).slice(0,7).map((_, index) => {
          return (
            <OneDayProgressStep
              key={index}
              day={index + 1}
              // isNotCompleted={}
              isCompleted={true}
            />
          );
        }
        )}
        <div
          onClick={() => setShowAllLogDays && setShowAllLogDays(true)}
          className="flex bg-white p-1 rounded-lg hover:bg-gray-200 cursor-pointer justify-end items-end border border-gray-200"
        >
          <div className="w-6 h-6 border-2 border-white rounded-full bg-gray-300 relative"></div>
          <div className="w-6 h-6 border-2 border-white rounded-full bg-gray-300 relative -left-4"></div>
          <div className="w-6 h-6 border-2 border-white rounded-full bg-gray-300 relative -left-8"></div>
          <h2 className="relative -left-6 font-bold">
            {total}
            <sup>+</sup>
          </h2>
        </div>
      </div>
    </div>
  );
};

interface OneDayProgressStepProps {
  day?: number;
  isCompleted?: boolean;
  noLogForThisDay?: boolean;
}

const OneDayProgressStep: React.FC<OneDayProgressStepProps> = ({
  day,
  isCompleted,
  noLogForThisDay,
}) => {
  return (
    <div
      className={`relative one-day-progress-step group cursor-pointer w-6 h-6 border border-gray-300 rounded-full grid place-items-center ${isCompleted ? "bg-gray-100 text-orange-400" : "bg-gray-200"}`}
    >
      <span className="absolute -top-3 opacity-0 rounded-sm bg-white border border-gray-200 transition-all duration-100 text-[12px] font-bold p-[1px] px-[8px] group-hover:-top-6 group-hover:opacity-100">{`day-${day}`}</span>
      <div
        className={`one-day-progress-step__circle grid place-items-center ${isCompleted ? "one-day-progress-step__circle--completed" : "font-bold text-[12px]"}`}
      >
        {isCompleted ? (
          <>
            <FaFireFlameCurved />
          </>
        ) : (
          <BsQuestionLg className="text-[16px]"/>
        )}
      </div>
      <div className="one-day-progress-step__line" />
    </div>
  );
};




export const DetailedProgressBar: React.FC<ProgressBarProps> = ({
  total,
  logs,
  current,
  showAllLogDays,
  setShowAllLogDays,
}) => {
  return (
    <div
      className={`fixed transition-all z-100 duration-200 top-0 bottom-0 w-[25%] px-3 py-5 border-l border-gray-100 shadow-md ${showAllLogDays ? "right-0" : "right-[-25%]"} z-100 bg-white`}
    >
      <RiArrowRightDoubleFill
        onClick={() => setShowAllLogDays && setShowAllLogDays(false)}
        className="absolute top-0 left-0 m-2 text-3xl text-gray-900 hover:text-gray-400 cursor-pointer"
      />
      <div className="p-4 my-2 relative">
        <h1 className="font-bold py-5 flex items-center gap-2"><GiProgression/>Your Progress</h1>
        <div className="flex items-center gap-4 flex-wrap">
          {logs.map((log, index) => {
            return (
              <OneDayProgressStep
                key={index}
                day={index + 1}
                isCompleted={log.completed}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
