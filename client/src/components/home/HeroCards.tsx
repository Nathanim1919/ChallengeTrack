import React from "react";


interface HeroCardProps {
    title: string;
    bgColor: string;
    customClasses: string;
    childClasses?: string;
    textStyle?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, bgColor, customClasses, textStyle }) => (
  <div
    className={`flex flex-col border-4 border-white border-b-0 items-center h-[370px] relative ${customClasses} overflow-hidden
    before:absolute before:w-full before:h-full before:${bgColor}
    `}
  >
    <div className={`relative w-full h-full bg-white/10 backdrop-blur-3xl
    `}>
      <div className="flex flex-col items-center relative w-full
      before:absolute before:w-full before:h-full p-[1px] overflow-hidden
      ">
        <div className={`relative bg-black/20 backdrop-blur-3xl w-full p-3 ${textStyle} flex flex-col`}>
            <h3 className="m-0 text-white font-bold text-2xl">{title}</h3>
            <h3>Challenges</h3>
        </div>
      </div>
    </div>
  </div>
);

export default HeroCard;
