import React from "react";
import { IoIosArrowForward, IoMdTrendingUp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import ButtonLoading from "../loading/buttonLoading";
import { useAppSelector } from "../../hooks/useAppSelector";
import AvatorImage from "../../assets/heroImages/avator.jpg"

export const TrandingChallenges: React.FC = () => {
  const { loading } = useAppSelector((state) => state.categories);
  
  return (
    <div className="grid grid-rows-2 h-[100vh] overflow-hidden">
      <div className="bg-gray-100">
        <div className="flex justify-between items-center px-4 pt-2">
          <h1 className="font-bold flex items-center gap-1">
            <IoMdTrendingUp/>
            Trending Challenges
          </h1>
          <IoSearch className="text-2xl cursor-pointer hover:text-gray-500"/>
        </div>

        {loading ? (
          <div className="grid place-items-center">
            <ButtonLoading />
          </div>
        ) : (
          <div className="challenges p-2 h-[85vh] overflow-y-auto">
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200">
                  <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                  </div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-3">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-6">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <h2 className="relative -left-6 font-bold">
                      130<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full">
                    <MdOutlinePending />
                    Pending
                  </p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200">
                  <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                  </div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-3">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-6">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <h2 className="relative -left-6 font-bold">
                      130<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full">
                    <MdOutlinePending />
                    Pending
                  </p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200">
                  <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                  </div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-3">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-6">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <h2 className="relative -left-6 font-bold">
                      130<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full">
                    <MdOutlinePending />
                    Pending
                  </p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200">
                  <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                  </div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-3">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-6">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <h2 className="relative -left-6 font-bold">
                      130<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full">
                    <MdOutlinePending />
                    Pending
                  </p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </div>
            </div>
            <div className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]">
              <div className="p-1">
                <h3 className="font-bold text-[14px]">Challenge One Title</h3>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-gray-200">
                  <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                  </div>
                  <p className="text-[13px] text-gray-600">Nathanim Tadele</p>
                </div>
              </div>
              <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-3">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-6">
                         <img src={AvatorImage} alt="avator" className="w-full h-full rounded-full"/>
                    </div>
                    <h2 className="relative -left-6 font-bold">
                      130<sup>+</sup>
                    </h2>
                  </div>
                  <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full">
                    <MdOutlinePending />
                    Pending
                  </p>
                </div>
                <div className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                  <IoIosArrowForward className="text-2xl" />
                </div>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};
