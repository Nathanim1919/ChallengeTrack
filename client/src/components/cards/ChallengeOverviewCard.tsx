import React from "react";


interface ChallengeOverviewCardProps {
    challenge: {
        title: string;
        description: string;
        status: string;
        creator: string;
    };
}


const ChallengeOverviewCard: React.FC<ChallengeOverviewCardProps> = ({challenge}) => {
    return (
        <div className="bg-white flex justify-between p-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-400"></div>
            <div className="flex flex-col">
                <h3 className="m-0">{challenge.title}</h3>
                <div className="m-0 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <p>{challenge.creator}</p>
                </div>
            </div>
          </div>
          <div>
            <p>participants</p>
          </div>
          <div>
            <p>status</p>
          </div>
        </div>
    );
}


export default ChallengeOverviewCard;