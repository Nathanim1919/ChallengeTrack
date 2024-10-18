import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchCategories } from "../../features/categories/categorieActions";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

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
      <div className="categories grid grid-cols-4 gap-2">
        {categories.slice(0, 4).map((category, index) => (
          <div
            key={index}
            className="category grid cursor-pointer gap-2 bg-gray-100 border group border-gray-300 p-4 place-items-center hover:bg-gray-700 hover:text-white"
          >
            <div className="">
              <h1 className="text-6xl font-bold">
                {category.challenges.length}
                <sup>+</sup>
              </h1>
              {/* <p className="text-gray-500">Challenges</p> */}
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="font-bold text-xl m-0">
                {category.name} Challenges
              </h3>
              <p className="text-gray-800 group-hover:text-gray-300 m-0">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
