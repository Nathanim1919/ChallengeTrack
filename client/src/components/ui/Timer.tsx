import React, { useEffect, useState } from "react";

interface TimeProps {
  startDate?: Date;
}

const Timer: React.FC<TimeProps> = ({ startDate }) => {
  if (!startDate) return null;

  const calculateTimeDiff = () => {
    const currentDate = new Date();
    const targetDate = new Date(startDate);
    const diffTime = targetDate.getTime() - currentDate.getTime();

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const weeks = Math.floor((diffDays % 30) / 7);
    const days = diffDays % 7;
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { months, weeks, days, hours};
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeDiff());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeDiff());
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const { months, weeks, days, hours } = timeLeft;

  return (
    <div className="timecounter flex items-center justify-center gap-2 bg-white border border-gray-200 p-1">
      {months > 0 && (
        <div className="grid place-items-center timecounter__item">
          <h1 className="font-bold text-3xl">{months > 0 && months < 10?"0"+ months:months}</h1>
          <p className="text-gray-600">Months</p>
        </div>
      )}
     {
        months > 0 && (
           <div className="text-3xl font-bold self-start">: </div>
        )
     }
      {weeks > 0 && (
        <div className="grid place-items-center timecounter__item">
          <h1 className="font-bold text-3xl">{weeks > 0 && weeks < 10?"0"+ weeks:weeks}</h1>
          <p className="text-gray-600">Weeks</p>
        </div>
      )}
       {
        weeks > 0 && (
           <div className="text-3xl font-bold self-start">: </div>
        )
     }
      {days > 0 && (
        <div className="grid place-items-center timecounter__item">
          <h1 className="font-bold text-3xl">{days > 0 && days < 10?"0"+ days:days}</h1>
          <p className="text-gray-600">Days</p>
        </div>
      )}
      {
        days > 0 && (
           <div className="text-3xl font-bold self-start">: </div>
        )
     }
      {hours > 0 && (
        <div className="grid place-items-center timecounter__item">
          <h1 className="font-bold text-3xl">{hours > 0 && hours < 10?"0"+ hours:hours}</h1>
          <p className="text-gray-600">Hours</p>
        </div>
      )}
    </div>
  );
};

export default Timer;
