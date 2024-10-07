import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchCategories } from "../../features/categories/categorieActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ICategory } from "../../interfaces/ICategory";

interface ChallengeCategoriesProps {
  setFilter: (value: string) => void;
  setShowCategories: (value: boolean) => void;
  showCategories: boolean;
}

const ChallengeCategories: React.FC<ChallengeCategoriesProps> = ({
  setShowCategories,
  setFilter,
  showCategories,
}) => {

  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);
  

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);



  const handleFilterClick = (value: string) => {
    setFilter(value);
    setShowCategories(false); // Close the dropdown after selection
  };

  return (
    <div>
      {showCategories && (
        <div
          id="categories-dropdown"
          className="flex flex-col h-[300px] overflow-y-auto absolute z-50 bg-white justify-start items-start text-[14px] border border-gray-200 rounded-md shadow-lg"
        >
          {categories?.map((category: ICategory) => (
            <button
              key={category._id}
              onClick={() => handleFilterClick(category.name)}
              className="px-2 py-1 hover:bg-gray-200 border-b w-full hover:text-gray-500 border-gray-300"
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeCategories;
