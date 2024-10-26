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
import { categoryConfig } from "../../utils/categorieConfig";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { Header } from "../../components/categorieDetailComponents/Header";
import { MyProgress } from "../../components/categorieDetailComponents/MyProgress";
import { TrandingChallenges } from "../../components/categorieDetailComponents/TrendingChallenges";
import { CategoriesList } from "../../components/categorieDetailComponents/CategorieList";





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
    <div className="grid grid-cols-[_.3fr_.4fr_.3fr] bg-gray-100">
      <div className="grid grid-rows-[_.4fr_.6fr]">
        <Header/>
        <MyProgress/>
      </div>
      <TrandingChallenges/>
      <CategoriesList/>
    </div>
  );
};

export default CategoryDetailPage;
