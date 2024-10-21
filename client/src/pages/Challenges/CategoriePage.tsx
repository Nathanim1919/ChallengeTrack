import React, { useEffect } from "react";
import { fetchCategories } from "../../features/categories/categorieActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import ButtonLoading from "../../components/loading/buttonLoading";
import { Link } from "react-router-dom";


const CategoriesPage = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error, message } = useAppSelector(
    (state) => state.categories
  );
//   const [isSearch, setIsSearch] = React.useState(false);
  const [searchedCategories, setSearchedCategories] = React.useState(
    categories
  );


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedCategories(categories.filter((category) => category.name.toLowerCase().includes(e.target.value.toLowerCase())));
    };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  if (loading) {
    return <ButtonLoading />;
  }
  return (
    <div className="w-[95%] mx-auto gap-3 h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between sticky -top-0 bg-white p-3 z-10">
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-2xl">Categories</h1>
          <p className="text-gray-500">Here you can find all the categories</p>
        </div>
        <div>
          <form className="bg-gray-100 p-2 flex items-center">
            <input type="text" onChange={handleSearch} placeholder="Search for a category" className="bg-transparent outline-none"/>
          </form>
        </div>
      </div>
      {searchedCategories?.length > 0?<div className="grid grid-cols-4 gap-5 p-3">
        {searchedCategories.map((categorie) => (
          <Link to={`/in/categories/${categorie.name.replace(/\s+/g, '-')}`} key={categorie._id} className="bg-gray-100 shadow-sm p-5 border border-gray-200 cursor-pointer hover:bg-gray-700 hover:text-white">
            <h1 className="font-bold text-5xl">{categorie?.challenges?.length}<sup>+</sup></h1>
            <h2 className="font-bold text-2xl">{categorie.name}</h2>
            <p className="text-gray-500">{categorie.description}</p>
          </Link>
        ))}
      </div>:<div className="grid place-items-center h-[70vh]">
        <h1 className="text-3xl font-bold">No Categories Found</h1>
        </div>}
    </div>
  );
};

export default CategoriesPage;