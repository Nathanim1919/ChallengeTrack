import React from "react";
import { GiProgression } from "react-icons/gi";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../loading/buttonLoading";
import { IoIosArrowForward } from "react-icons/io";


export const MyProgress: React.FC = () => {
  const { loading } = useAppSelector((state) => state.categories);
  if (loading) {
    return (
      <div className="grid place-items-center">
        <ButtonLoading />
      </div>
    );
  }
  return (
    <div className="p-3 grid gap-2">
      <div>
        <h2 className="font-bold flex items-center gap-1">
          <GiProgression />
          My statistics for this category
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col bg-white border border-gray-300 relative p-3 group cursor-pointer hover:shadow-sm">
        <IoIosArrowForward className="absolute top-2 group-hover:right-2 right-0 transition-all duration-500 opacity-0 group-hover:opacity-100"/>
          <h2 className="font-bold text-2xl">
            20<sup>+</sup>
          </h2>
          <p className="text-[14px] text-gray-500">Challenges <span className="text-2xl text-black font-bold">Participated</span></p>
        </div>
        <div className="flex flex-col bg-white border border-gray-300 relative p-3 group cursor-pointer hover:shadow-sm">
            <IoIosArrowForward className="absolute top-2 group-hover:right-2 right-0 transition-all duration-500 opacity-0 group-hover:opacity-100"/>
          <h2 className="font-bold text-2xl">
            10<sup>+</sup>
          </h2>
          <p className="text-[14px] text-gray-500">Challenges <span className="text-2xl text-black font-bold">Completed</span></p>
        </div>
        <div className="flex flex-col bg-white border border-gray-300 relative p-3 group cursor-pointer hover:shadow-sm">
        <IoIosArrowForward className="absolute top-2 group-hover:right-2 right-0 transition-all duration-500 opacity-0 group-hover:opacity-100"/>
          <h2 className="font-bold text-2xl">
            10<sup>+</sup>
          </h2>
          <p className="text-[14px] text-gray-500">Challenges <span className="text-2xl text-black font-bold">Pending</span></p>
        </div>
        <div className="flex flex-col bg-white border border-gray-300 relative p-3 group cursor-pointer hover:shadow-sm">
        <IoIosArrowForward className="absolute top-2 group-hover:right-2 right-0 transition-all duration-500 opacity-0 group-hover:opacity-100"/>
          <h2 className="font-bold text-2xl">
            10<sup>+</sup>
          </h2>
          <p className="text-[14px] text-gray-500">Challenges <span className="text-2xl text-black font-bold">Created</span></p>
      </div>
      </div>
    </div>
  );
};
