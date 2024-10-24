import React from "react";
import { ICategory } from "../../interfaces/ICategory";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

interface CategorieCardProps {
  Categorie: ICategory;
}

const CategorieCard: React.FC<CategorieCardProps> = ({ Categorie }) => {
  return (
    <div className="relative inset-0 flex justify-center group">
      <div className="absolute transition-all duration-150 delay-150 bg-white shadow-lg z-10 h-full w-[90%] self-center justify-self-center flex flex-col justify-center -top-1 group-hover:-top-2 border border-gray-300 group-hover:border-gray-500"></div>
      <div className="absolute transition-all duration-150 delay-100 h-full shadow-lg w-[85%] bg-white z-20 self-center justify-self-center -top-2 group-hover:-top-4 border border-gray-300 group-hover:border-gray-500"></div>
      <div className="absolute transition-all duration-150 delay-75 h-full shadow-2xl bg-white z-30 w-[80%] self-center justify-self-center -top-3 group-hover:-top-6 border border-gray-300 group-hover:border-gray-500"></div>
      <div className="absolute transition-all duration-150 h-full shadow-lg w-[75%] bg-white z-30 self-center justify-self-center -top-4 group-hover:-top-8 border border-gray-300 group-hover:border-gray-500"></div>
      <div className="relative z-40 shadow-md p-3 border border-gray-300 flex flex-col justify-between bg-white cursor-pointer">
        <div>
          <h1 className="text-4xl font-bold ">
            {Categorie.challenges.length}
            <sup>+</sup>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="font-bold text-2xl">{(Categorie.name).slice(0.10)}..</h3>
          <p className="text-gray-600">
            Join{" "}
            <span className="font-bold bg-sky-300 p-1 rounded-md">
              {Categorie.challenges.length}
              <sup>+</sup>
            </span>{" "}
            {Categorie.name} related Challenges
          </p>
        </div>
        <Link
          to={`/in/categories/${Categorie.name}`}
          className="items-end w-full grid place-items-end px-4 py-1"
        >
          <GrLinkNext />
        </Link>
      </div>
    </div>
  );
};

export default CategorieCard;
