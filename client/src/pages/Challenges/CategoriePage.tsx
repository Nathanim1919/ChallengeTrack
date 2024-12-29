import React, { useEffect } from "react";
import { fetchCategories } from "../../features/categories/categorieActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../../components/loading/buttonLoading";
import { Link } from "react-router-dom";
import CategorieCard from "../../components/cards/CategorieCard";
import { BiCategory } from "react-icons/bi";
import { categoryConfig } from "../../utils/categorieConfig";

const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const { categories, loading} = useAppSelector(
    (state) => state.categories
  );
   

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      // setIsSearch(false);
      // return setSearchedCategories(categories);
    }
    // setIsSearch(true);
    // setSearchedCategories(
    //   categories.filter((category) =>
    //     category.name.toLowerCase().includes(e.target.value.toLowerCase())
    //   )
    // );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  if (loading) {
    return <ButtonLoading />;
  }
  return (
    <div className="w-[95%] mx-auto gap-5 h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between sticky -top-0 bg- border-b p-3 z-40 backdrop-blur-3xl">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold flex items-center gap-1 text-2xl">
            <BiCategory />
            Categories
          </h1>
          <p className="text-gray-500">
            Explore a comprehensive list of all available categories.
          </p>
        </div>

        <div>
          <form className="bg-gray-100 p-2 flex items-center border border-gray-300 rounded-md">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search for a category"
              className="bg-transparent outline-none"
            />
          </form>
        </div>
      </div>
      {categories?.length > 0 ? (
        <div className="grid grid-cols-4 gap-5 p-3">
          {categories.map((categorie, index) => {
            const category = categoryConfig[categorie.name] || {
              bgColor: "bg-gray-300", // Default color
              icon: () => <span>?</span>, // Default icon
            };

            return (
              <Link
                to={`/in/categories/${categorie.name.replace(/\s+/g, "-")}`}
                key={categorie._id}
                className={`${category.bgColor} bg-opacity-30 shadow-sm p-5 border border-gray-200 relative z-30 cursor-pointer animate-slideup`}
              >
                <CategorieCard key={index} Categorie={categorie} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="grid place-items-center h-[70vh]">
          <h1 className="text-3xl font-bold">No Categories Found</h1>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
