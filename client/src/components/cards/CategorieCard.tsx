import React from "react";
import { ICategory } from "../../interfaces/ICategory";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { categoryConfig } from "../../utils/categorieConfig";

interface CategorieCardProps {
  Categorie: ICategory;
}

const CategorieCard: React.FC<CategorieCardProps> = ({ Categorie }) => {
  const category = categoryConfig[Categorie.name] || {
    bgColor: "bg-gray-300", // Default color
    icon: () => <span>?</span>, // Default icon
  };

  return (
    <div className="relative inset-0 flex justify-center group">
      <div
        className={`absolute transition-all duration-150 delay-150 ${category.bgColor} shadow-lg z-10 h-full w-[90%] self-center justify-self-center flex flex-col justify-center -top-2 group-hover:-top-3 border-2 border-gray-100 group-hover:border-gray-100`}
      ></div>
      <div
        className={`absolute transition-all duration-150 delay-100 h-full shadow-lg w-[85%]${category.bgColor} z-20 self-center justify-self-center -top-3 group-hover:-top-5 border-2 border-gray-100 group-hover:border-gray-100`}
      ></div>
      <div
        className={`absolute transition-all duration-150 delay-75 h-full shadow-2xl ${category.bgColor} z-30 w-[80%] self-center justify-self-center -top-4 group-hover:-top-7 border-2 border-gray-100 group-hover:border-gray-100`}
      ></div>
      <div
        className={`absolute transition-all duration-150 h-full shadow-lg w-[75%] ${category.bgColor} z-30 self-center justify-self-center -top-5 group-hover:-top-9 border-2 border-gray-100 group-hover:border-gray-100`}
      ></div>
      <div
        className={`relative w-full before:absolute before:w-[50%] before:rounded-tl-full before:h-full before:z-0 before:bg-gray-200 before:bottom-0 before:right-0 h-[100%] z-40 shadow-md p-3 border border-gray-300 flex flex-col justify-between bg-white cursor-pointer`}
      >
        <div>
          <h1 className="text-4xl font-bold ">
            {Categorie.challenges.length}
            <sup>+</sup>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 relative z-10">
          <h3
            className={`font-bold text-[14px] ${category.bgColor} text-white py-1 px-3 rounded-full flex items-center gap-1`}
          >
            {<category.icon />}
            {Categorie.name}
          </h3>
          <p className="text-gray-900 text-[14px]">
            Discover challenges related to{" "}
            <span className="font-semibold">{Categorie.name}</span> and join the
            community.
          </p>
        </div>
        <Link
          to={`/in/categories/${Categorie.name}`}
          className={`items-end w-full grid place-items-end relative z-10 font-bold bg-white rounded-full p-1 px-2`}
        >
          <GrLinkNext className="w-6 h-6 p-1 bg-gray-300 rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default CategorieCard;
