import React from "react";
import { categoryConfig } from "../../utils/categorieConfig";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../loading/buttonLoading";

export const CategoriesList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { loading } = useAppSelector((state) => state.categories);
  return (
    <div>
      <h1 className="font-bold text p-3">
        Other Categories
      </h1>
      {loading ? (
        <div className="grid place-items-center">
          <ButtonLoading />
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 bg-gray-100 p-3">
          { 
        //   to={`/in/categories/${categorie.name.replace(/\s+/g, "-")}`}
            // Other categories
            Object.keys(categoryConfig).map((key) => {
              if (key !== name) {
                return (
                  <div key={key} className="text-[14px] ">
                    <Link to={`/in/categories/${key.replace(/\s+/g, "-")}`} className="text-white">
                      <div
                        className={`flex items-center gap-1  ${categoryConfig[key].bgColor} py-1 px-2 rounded-full border border-transparent hover:border-sky-700 hover:opacity-70`}
                      >
                        <div className="">{categoryConfig[key].icon()}</div>
                        <p>{categoryConfig[key].name}</p>
                      </div>
                    </Link>
                  </div>
                );
              }
            })
          }
        </div>
      )}
    </div>
  );
};
