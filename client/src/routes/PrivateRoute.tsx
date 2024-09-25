import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import DashboardLayout from "../components/layout/DashboardLayout";


// define the props type
interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    
    return isAuthenticated ? <DashboardLayout>{children}</DashboardLayout> : null;
};

export default PrivateRoute;