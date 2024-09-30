import React from "react";

const SimilarChallenges = () => {
    const challenges = [
        {
            title: "30 days fitness challenge",
            category: "fitness",
            duration: "30 days",
            date: "Mon Sep 30 2024 - Mon Oct 30 2024",
            participants: 40,
            onTheRightTrack: 30,
            needToCatchUp: 10,
            leave: 2
        },
       {
          title:"Weight Loss Challenge",
          category:"fitness",
          duration:"30 days",
          date:"Mon Sep 30 2024 - Mon Oct 30 2024",
          participants:40,
          onTheRightTrack:30,
          needToCatchUp:10,
          leave:2
       },
       {
        title:"Learn React Challenge",
        category:"programming",
        duration:"30 days",
        date:"Mon Sep 30 2024 - Mon Oct 30 2024",
        participants:40,
       },
       {
        title:"Learn Node Challenge",
        category:"programming",
        duration:"30 days",
        date:"Mon Sep 30 2024 - Mon Oct 30 2024",
        participants:40,
       }
    ];
    return ( 
        <div className="p-3 bg-[#eee]">
          <h1 className="font-bold">You may also like</h1>
          <div className="grid gap-1">
            {
              challenges.map((challenge, index) => (
                <div key={index} className="flex justify-between items-center p-2  cursor-pointer border border-gray-200 bg-white">
                   <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                    <div className="flex flex-col items-start">
                      <h3 className="m-0 font-bold">{challenge.title}</h3>
                      <p className="text-gray-600 m-0 bg-[#eee] px-2 text-[13px] rounded-full">{challenge.category}</p>
                    </div>
                   </div>
                   <button
                    className="bg-green-500 text-white px-3 py-1 rounded-md"
                   >Join</button>
                </div>
              ))
            }
          </div>
        </div>
    );
};

export default SimilarChallenges;