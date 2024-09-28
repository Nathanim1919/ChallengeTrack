import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useAppSelector } from "../hooks/useAppSelector";

// define the props type
interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    
    // If user is authenticated, render the dashboard layout with the children
    if (isAuthenticated) {
        return <DashboardLayout>{children}</DashboardLayout>;
    }

    // If user is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
};

export default PrivateRoute;
