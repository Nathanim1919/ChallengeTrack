import React, { useEffect } from "react";
import GlobalLeaderboardOverviewCard from "../../components/cards/GlobalLeaderboardOverviewCard";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getGlobalLeaderboard } from "../../features/leaderboard/leaderboardAction";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const GlobalLeaderboardOverview = () => {
  const dispatch = useAppDispatch();
  const { globalLeaderboard } = useAppSelector((state) => state.leaderboard);

  useEffect(() => {
    dispatch(getGlobalLeaderboard());
  }, [dispatch]);

  return (
    <div className="grid items-center">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center gap-1 p-2 font-bold">
          <MdOutlineLeaderboard className="text-2xl" />
          Global Leaderboard
        </h1>
        <Link to={"/in/leaderboard"} className="text-gray-500 text-sm p-2">
          <IoArrowForwardOutline className="w-6 h-6 p-1 rounded-full bg-gray-300 grid place-items-center cursor-pointer hover:bg-gray-100"/>
        </Link>
      </div>
      <div className="flex flex-col gap-1 overflow-x-auto h-[300px] px-2">
        {globalLeaderboard.slice(0,4).map((leaderBoard, index) => (
          <GlobalLeaderboardOverviewCard
            key={index}
            leaderBoard={leaderBoard}
          />
        ))}
      </div>
    </div>
  );
};

export default GlobalLeaderboardOverview;
