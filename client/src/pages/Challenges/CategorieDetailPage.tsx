import React, { useEffect } from "react";
import {useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getCategorieByName } from "../../features/categories/categorieActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Header } from "../../components/categorieDetailComponents/Header";
import { MyProgress } from "../../components/categorieDetailComponents/MyProgress";
import { TrandingChallenges } from "../../components/categorieDetailComponents/TrendingChallenges";
import { CategoriesList } from "../../components/categorieDetailComponents/CategorieList";





const CategoryDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { selectedCategory } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategorieByName(name as string));
  }, [name]);



  return (
    <div className="grid grid-cols-[_.3fr_.4fr_.3fr] bg-gray-100">
      <div className="grid grid-rows-[_.2fr_.6fr]">
        <Header categorie = {selectedCategory}/>
        <MyProgress/>
      </div>
      <TrandingChallenges/>
      <CategoriesList/>
    </div>
  );
};

export default CategoryDetailPage;
