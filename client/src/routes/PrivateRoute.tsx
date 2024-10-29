import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { getCurrentUser } from "../features/auth/authActions";
import ButtonLoading from "../components/loading/buttonLoading";

// define the props type
interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
   

    const dispatch = useAppDispatch();
    const {loading, isAuthenticated} = useAppSelector((state) => state.auth);
    
    
    useEffect(() => {
        if(!isAuthenticated) {
            dispatch(getCurrentUser());
        }
    },[dispatch, isAuthenticated])

    if (loading) {
        return <ButtonLoading/>
    }
    
    // If user is authenticated, render the dashboard layout with the children
    if (isAuthenticated) {
        return <DashboardLayout>{children}</DashboardLayout>;
    }

    // If user is not authenticated, redirect to the login page, and we used replace to replace the current location in the history stack, so the user can't go back to the private route
    return <Navigate to="/" replace />;
};

export default PrivateRoute;
