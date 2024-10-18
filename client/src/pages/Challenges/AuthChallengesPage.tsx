import React from "react";
import PopularCategories from "./PopularCategories";
import LatestChalleges from "./LatestChallenges";
import { CiSearch } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ChallngeCategories from "../../components/modals/ChallengeCategories";

const AuthChallengesPage: React.FC = () => {
  const [search, setSearch] = React.useState<string | "">("Filter by Categories");
  const [showCategories, setShowCategories] = React.useState(false);



  return (
    <div className="h-[90vh] px-5 overflow-hidden overflow-y-auto grid gap-5">
      <div className="sticky top-0 z-50 bg-white w-[95%] mx-auto flex justify-between items-center gap-5">
        <div className="flex justify-between">
          <div className="filterByCategories relative">
            <div className="flex justify-center gap-3 items-center">
              <h2>Filter by Categories</h2>
              <button
                className="p-2 border border-gray-300"
                onClick={() => setShowCategories(!showCategories)}
                aria-expanded={showCategories}
                aria-controls="categories-dropdown"
              >
                {search}
              </button>
            </div>
            <ChallngeCategories
              setFilter={setSearch}
              setShowCategories={setShowCategories}
              showCategories={showCategories}
            />
          </div>
        </div>
        <form className="flex-1 flex items-center justify-between bg-white border border-gray-200">
          <input
            type="text"
            placeholder="Search challenges"
            className="border-0 outline-none p-2 w-[90%]"
          />
          <button className=" p-2 font-bold text-2xl">
            <CiSearch />
          </button>
        </form>

        <Link
          to={"/in/create-new"}
          className="bg-black text-white px-3 py-1 mr-3 border-0 outline-none hover:bg-gray-700 flex items-center gap-1"
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
