import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getCategorieByName } from "../../features/categories/categorieActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../../components/loading/buttonLoading";
import { IChallenge } from "../../interfaces/IChallenge";
import { MdOutlinePending } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const CategoryDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { selectedCategory, loading } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategorieByName(name as string));
  }, [name]);

  if (loading) {
    return <ButtonLoading />;
  }

  return (
    <div className="bg-red-400 grid grid-cols-[_.3fr_.7fr]">
      <div className="grid grid-rows-2">
        <div className="bg-pink-200">
        <div className="flex flex-col p-3 gap-1">
          <h1 className="font-bold text-2xl">Personal Development</h1>
          <p>
            Personal development is a lifelong process. It is a way for people
            to assess their skills and qualities, consider their aims in life
            and set goals in order to realise and maximise their potential.
          </p>
        </div>
        <div className="flex flex-wrap p-3">
          <div className="flex-1 border border-gray-200 p-3">
            <h1 className="font-bold text-3xl">
              140<sup>+</sup>
            </h1>
            <h2>Challenges</h2>
          </div>
          <div className="flex-1 border border-gray-200 p-3">
            <h1 className="font-bold text-3xl">
              20<sup>+</sup>
            </h1>
            <h2>Participants</h2>
          </div>
          <div className="flex-1 border border-gray-200 p-3">
            <h1 className="font-bold text-3xl">
              10<sup>+</sup>
            </h1>
            <h2>Completed</h2>
          </div>
        </div>
        </div>
        <div className="p-3">
          <div>
            <h2 className="font-bold">My Progress</h2>
          </div>
          <div>
            <div>
              <h3>Challenge One Ttitle</h3>
              <p>Progress</p>
            </div>
            <div>
              <h3>Challenge Two Ttitle</h3>
              <p>Progress</p>
            </div>

            <div>
              <h3>Challenge One Ttitle</h3>
              <p>Progress</p>
            </div>
            <div>
              <h3>Challenge Two Ttitle</h3>
              <p>Progress</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 h-[100vh] overflow-hidden">
        <div className="bg-green-300">
          <div className="flex justify-between items-center p-3">
            <h1 className="font-bold text-2xl">Trending Challenges</h1>
            <IoSearch />
          </div>
          <div>
            <h2>Trending challenge lists</h2>
          </div>
        </div>
        <div className="bg-orange-300">
          <div>
            <h2 className="font-bold text-2xl">Latest challenges</h2>
          </div>
          <div>
            <h2>Latest challenges</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
