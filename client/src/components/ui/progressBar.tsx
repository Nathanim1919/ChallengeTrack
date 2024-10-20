import React from "react";

interface ProgressBarProps {
  total: number;
  current: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
  return (
    <div className="p-4 my-2 relative">
      <h1>Your Progress</h1>
      <div className="flex items-center gap-2 flex-wrap">
      {Array.from({ length: total }).slice(0,12).map((_, index) => {
        return (
          <OneDayProgressStep
            key={index}
            day={index + 1}
            isCompleted={index < current}
          />
        );
      })} 
      <div className="flex items-center bg-white p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
        <div className="w-6 h-6 border-2 border-white rounded-full bg-gray-300 relative"></div>
        <div className="w-6 h-6 border-2 border-white rounded-full bg-gray-300 relative -left-4"></div>
        <div className="w-6 h-6 border-2 border-white rounded-full bg-gray-300 relative -left-8"></div>
        <h2 className="relative -left-8">{total}+</h2>
      </div>
      </div>
    </div>
  );
};

interface OneDayProgressStepProps {
  day: number;
  isCompleted: boolean;
}

const OneDayProgressStep: React.FC<OneDayProgressStepProps> = ({
  day,
  isCompleted,
}) => {
  return (
    <div className={`one-day-progress-step w-6 h-6 rounded-full grid place-items-center ${isCompleted?"bg-green-300":"bg-gray-200"}`}>
      <div
        className={`one-day-progress-step__circle ${isCompleted ? "one-day-progress-step__circle--completed" : ""}`}
      >
        {isCompleted ? "✓" : day}
      </div>
      <div className="one-day-progress-step__line" />
    </div>
  );
};
