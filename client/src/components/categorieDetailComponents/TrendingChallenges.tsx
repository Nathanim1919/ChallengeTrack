import React, { useEffect } from "react";
import { IoIosArrowForward, IoMdTrendingUp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import ButtonLoading from "../loading/buttonLoading";
import { useAppSelector } from "../../hooks/useAppSelector";
import AvatorImage from "../../assets/heroImages/avator.jpg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getChallengesByCategory } from "../../features/categories/categorieActions";
import { Link, useParams } from "react-router-dom";

export const TrandingChallenges: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getChallengesByCategory(name || ""));
  }, [name]);

  const { loading, challenges } = useAppSelector((state) => state.categories);

  console.log(`challenges inside: ${name}`, challenges);
  console.log(`loading inside: ${name}`, loading);

  return (
    <div className="grid grid-rows-2 h-[100vh] overflow-hidden">
      <div className="bg-gray-100">
        <div className="flex justify-between items-center px-4 pt-2">
          <h1 className="font-bold flex items-center gap-1">
            <IoMdTrendingUp />
           {name} related Challenges
          </h1>
          <IoSearch className="text-2xl cursor-pointer hover:text-gray-500" />
        </div>

        {loading ? (
          <div className="grid place-items-center">
            <ButtonLoading />
          </div>
        ) : (
          <div className="challenges p-2 h-[85vh] overflow-y-auto">
            {challenges.map((challenge) => (
              <div
                key={challenge._id}
                className="challenge group border-2 cursor-pointer border-gray-200 rounded-lg my-1 mx-auto bg-white grid grid-cols-[_.6fr_.4fr]"
              >
                <div className="p-1">
                  <h3 className="font-bold text-[14px]">
                    {challenge?.title?.length > 25
                      ? challenge?.title?.slice(0, 25) + "..."
                      : challenge?.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-gray-200">
                      <img
                        src={AvatorImage}
                        alt="avator"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <p className="text-[13px] text-gray-600">
                      {challenge?.createdBy?.username}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[_.8fr_.2fr] transition-all duration-200 relative overflow-hidden">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative">
                        <img
                          src={AvatorImage}
                          alt="avator"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-3">
                        <img
                          src={AvatorImage}
                          alt="avator"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white relative -left-6">
                        <img
                          src={AvatorImage}
                          alt="avator"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <h2 className="relative -left-6 font-bold">
                        {challenge?.participants?.length}
                        <sup>+</sup>
                      </h2>
                    </div>
                    <p className="text-[13px] text-gray-600 flex items-center gap-1 bg-gray-200 px-1 rounded-full">
                      <MdOutlinePending />
                      {challenge?.status}
                    </p>
                  </div>
                  <Link to={`/in/challenges/${challenge._id}`} className="bg-gray-200 grid place-items-center group-hover:bg-sky-300">
                    <IoIosArrowForward className="text-2xl" />
                  </Link>
                </div>
              </div>
            ))}
            {challenges.length === 0 && (
              <div className="grid place-items-center p-10">
                <h1 className="text-2xl font-bold text-gray-400 ">
                  No challenges found
                </h1>
                <p>
                  Create a challenge in this category to see it here.
                </p>
                <Link to="/in/create-new" 
                className="
                bg-gray-900 text-white px-4 py-2 rounded-lg mt-2
                ">
                  Create Challenge
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
