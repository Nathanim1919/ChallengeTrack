import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchCategories } from "../../features/categories/categorieActions";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import ButtonLoading from "../../components/loading/buttonLoading";
import CategorieCard from "../../components/cards/CategorieCard";
import { categoryConfig } from "../../utils/categorieConfig";

const PopularCategories = () => {
  const dispatch = useAppDispatch();
  const { categories, loading } = useAppSelector((state) => state.categories);
  // const categories = [
  //     {
  //         name: 'Fitness',
  //         total:45,
  //         // deatiled real world description based on the name
  //         describtion: 'Fitness challenges are challenges that are designed to help you get in shape and stay healthy. These challenges can be anything from running a 5k to doing 100 pushups a day.',

  //     },
  //     {
  //         name: 'Nutrition',
  //         total:45,
  //         describtion: 'Nutrition challenges are challenges that are designed to help you eat healthier and make better food choices. These challenges can be anything from eating more fruits and vegetables to cutting out sugar and processed foods.',

  //     },
  //     {
  //         name: 'Mindfulness',
  //         total:45,
  //         describtion: 'Mindfulness challenges are challenges that are designed to help you reduce stress and anxiety and improve your mental health. These challenges can be anything from meditating for 10 minutes a day to practicing gratitude and self-compassion.',

  //     },
  // ];

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);



  

  return (
    <div className="popular-categories grid gap-5 w-[95%] mx-auto">
      <div className="flex items-center justify-between">
        <h2 className={"font-bold text-1xl"}>Popular Categories</h2>
        <Link to={"/in/categories"} className="bg-gray-200 border border-gray-300 text-black px-2 py-1 cursor-pointer">
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
