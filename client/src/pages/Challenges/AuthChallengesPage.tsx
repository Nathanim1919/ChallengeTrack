import React from "react";
import PopularCategories from "./PopularCategories";
import LatestChalleges from "./LatestChallenges";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ChallngeCategories from "../../components/modals/ChallengeCategories";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const AuthChallengesPage: React.FC = () => {
  const [search, setSearch] = React.useState<string | "">("All");
  const [showCategories, setShowCategories] = React.useState(false);

  return (
    <div className="h-[90vh] overflow-hidden overflow-y-auto grid gap-1">
      <div className="sticky top-0 z-50 bg-white p-3 w-[95%] mx-auto flex justify-between items-center gap-5">
        <div className="flex justify-between">
          <div className="filterByCategories relative">
            <div className="flex justify-center gap-3 items-center">
              <button
                className="px-2 py-1 border border-gray-300 flex items-center gap-1 text-[14px]
                font-bold bg-white rounded-md bg-gradient-to-tr from-gray-100 to-gray-200
                " 
                onClick={() => setShowCategories(!showCategories)}
                aria-expanded={showCategories}
                aria-controls="categories-dropdown"
              >
                {search}
                {showCategories ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            <ChallngeCategories
              setFilter={setSearch}
              setShowCategories={setShowCategories}
              showCategories={showCategories}
            />
          </div>
        </div>
        <form className="flex-1 flex items-center justify-between border border-gray-100 rounded-lg overflow-hidden
        bg-gradient-to-tr from-gray-100 to-gray-200
        ">
          <input
            type="text"
            placeholder="Search challenges"
            className="border-0 outline-none px-2 py-1 w-[90%] flex-1 bg-transparent
            "
          />
        </form>

        <Link
          to={"/in/create-new"}
          className="bg-black text-white px-3 py-1 mr-3 border-0 outline-none hover:bg-gray-700 flex items-center gap-1
          rounded-md
          "
        >
          <IoCreateOutline />
          Create
        </Link>
      </div>
      <PopularCategories />
      <LatestChalleges />
    </div>
  );
};

export default AuthChallengesPage;
