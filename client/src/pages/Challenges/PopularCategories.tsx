import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchCategories } from "../../features/categories/categorieActions";
import { Link } from "react-router-dom";
import ButtonLoading from "../../components/loading/buttonLoading";
import CategorieCard from "../../components/cards/CategorieCard";
import { categoryConfig } from "../../utils/categorieConfig";

const PopularCategories = () => {
  const dispatch = useAppDispatch();
  const { categories, loading } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="popular-categories grid gap-5 w-[95%] mx-auto">
      <div className="flex items-center justify-between">
        <h2 className={"font-bold text-1xl"}>Popular Categories</h2>
        <Link to={"/in/categories"} className="bg-gray-200 border border-gray-300 text-black px-2 py-1 cursor-pointer
        hover:bg-gray-300 hover:text-black rounded-md font-bold text-[14px]
        ">
          See More
        </Link>
      </div>
      <div className="categories grid grid-cols-4 gap-5">
        {loading?
        <div className="flex items-center justify-end">
        <ButtonLoading/>
        </div>
        :categories.slice(0, 4).map((category, index) => {
          const categorie = categoryConfig[category.name] || {
            bgColor: "bg-gray-300", // Default color
            icon: () => <span>?</span>, // Default icon
          };
          return (
            
          <div key={index} className={`p-6 ${categorie.bgColor} bg-opacity-30`}>
            <CategorieCard key={index} Categorie={category}/>
          </div>
        )})}
      </div>
    </div>
  );
};

export default PopularCategories;
