import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getCategorieByName } from "../../features/categories/categorieActions";
import { useAppSelector } from "../../hooks/useAppSelector";


const CategoryDetailPage: React.FC = () => {
    const {name} = useParams<{name: string}>();
    const {selectedCategory, loading, error} = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getCategorieByName(name as string));
    }, [name]);

    return (
        <div>
            <h1>Category Detail Page For {selectedCategory?.data?.name}</h1>
        </div>
    );
};

export default CategoryDetailPage;