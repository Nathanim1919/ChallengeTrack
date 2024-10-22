import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../../components/loading/buttonLoading";
import { BsCollection } from "react-icons/bs";


const SimilarChallenges = () => {
  const {loading} = useAppSelector((state) => state.challenges);
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
        title:"Learn Go Challenge",
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
        <div className="bg-[#eee] border-r border-gray-200">
          <h1 className="font-bold p-2 py-4 bg-white flex items-center gap-2"><BsCollection/>You may also like</h1>
          <div className="grid gap-1 p-2">
            {loading? <div className=' grid place-items-center py-5'><ButtonLoading/></div>:
              challenges.map((challenge, index) => (
                <div key={index} className="border-transparent flex justify-between items-center px-2 py-1  cursor-pointer border hover:border-gray-200 bg-white hover:bg-gray-100">
                   <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                    <div className="flex flex-col items-start">
                      <h3 className="m-0 font-bold text-[12px]">{challenge.title}</h3>
                      <p className="text-gray-600 m-0 bg-[#eee] px-2 text-[12px] rounded-full">{challenge.category}</p>
                    </div>
                   </div>
                   <button
                    className="bg-gray-800 hover:bg-gray-500 text-white px-3 py-1 rounded-md text-[13px]"
                   >Join</button>
                </div>
              ))
            }
          </div>
        </div>
    );
};

export default SimilarChallenges;