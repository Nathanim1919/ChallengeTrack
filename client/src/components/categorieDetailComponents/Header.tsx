import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../loading/buttonLoading";
import { ICategory } from "../../interfaces/ICategory";
import { categoryConfig } from "../../utils/categorieConfig";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  getCategorieByName,
  getChallengesCountForCategoryPerStatus,
  getChallengesPerStatusForCategory,
  getTotalNumberOfParticipantsForCategory,
} from "../../features/categories/categorieActions";
import { IoIosArrowForward } from "react-icons/io";
import { ChallengeStatus } from "../../utils/constants";


interface IHeaderProps {
  categorie: ICategory | null;
}

export const Header: React.FC<IHeaderProps> = ({ categorie }) => {
  const { loading, totalParticipants, challStatusPerCategoryCount } =
    useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("CATEGORIE NAME IS: -------------------- ", categorie?.name);
    // dispatch(getTotalNumberOfParticipantsForCategory(categorie?.name || ""));
    // dispatch(getChallengesCountForCategoryPerStatus(categorie?.name || ""));
  }, [categorie]);

 
  const fetchChallengesPerStatus = (status: keyof typeof ChallengeStatus) => {
    dispatch(getChallengesPerStatusForCategory({ categorie: categorie?.name || "", status }));
  };

  if (loading) {
    return (
      <div className="grid place-items-center">
        <ButtonLoading />
      </div>
    );
  }
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col p-3 gap-1">
        <h1
          className={`font-bold text-2xl flex items-center gap-1 py-1 px-2 ${categoryConfig[categorie?.name || ""]?.bgColor} text-white`}
        >
          <span>{categoryConfig[categorie?.name || ""]?.icon()}</span>
          {categorie?.name}
        </h1>
        <p className="text-[14px] text-gray-500">{categorie?.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-3">
        <div onClick={()=>dispatch(getCategorieByName(categorie?.name||""))} className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center">
          <h1 className="font-bold text-3xl">
            {categorie?.challenges.length}
            <sup>+</sup>
          </h1>
          <h2>Total Challenges</h2>
        </div>
        <div className="flex-1 border border-gray-300 p-3 bg-white grid place-items-center">
          <h1 className="font-bold text-3xl">
            {totalParticipants}
            <sup>+</sup>
          </h1>
          <h2>Participants</h2>
        </div>
          <div onClick={()=>fetchChallengesPerStatus("COMPLETED")} className="flex items-center w-full group overflow-hidden relative bg-white cursor-pointer hover:bg-gray-100 border border-white hover:border-gray-300 gap-1 py-1 px-3">
            <h1 className="font-bold text-3xl">
              {challStatusPerCategoryCount?.completedChallenges}
              <sup>+</sup>
            </h1>
            <div className="flex flex-col">
              <h2 className="m-0 font-bold text-[14px]">Completed</h2>
              <p className="m-0 text-gray-700 text-[13px]">Challenges</p>
            </div>
            <IoIosArrowForward className="absolute -right-4 transition-all duration-200 text-[1.2rem] group-hover:right-2"/>
          </div>
          <div onClick={()=>fetchChallengesPerStatus("ONGOING")} className="flex items-center w-full group overflow-hidden relative bg-white cursor-pointer hover:bg-gray-100 border border-white hover:border-gray-300 gap-1 py-1 px-3">
            <h1 className="font-bold text-3xl">
              {challStatusPerCategoryCount?.ongoingChallenges}
              <sup>+</sup>
            </h1>
            <div className="flex flex-col">
              <h2 className="m-0 font-bold text-[14px]">Ongoing</h2>
              <p className="m-0 text-gray-700 text-[13px]">Challenges</p>
            </div>
            <IoIosArrowForward className="absolute -right-4 transition-all duration-200 text-[1.2rem] group-hover:right-2"/>
          </div>
          <div onClick={()=>fetchChallengesPerStatus("UPCOMING")} className="flex items-center w-full group overflow-hidden relative bg-white cursor-pointer hover:bg-gray-100 border border-white hover:border-gray-300 gap-1 py-1 px-3">
            <h1 className="font-bold text-3xl">
              {challStatusPerCategoryCount?.upcomingChallenges}
              <sup>+</sup>
            </h1>
            <div className="flex flex-col">
              <h2 className="m-0 font-bold text-[14px]">Upcoming</h2>
              <p className="m-0 text-gray-700 text-[13px]">Challenges</p>
            </div>
            <IoIosArrowForward className="absolute -right-4 transition-all duration-200 text-[1.2rem] group-hover:right-2"/>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
