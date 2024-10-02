import React, { useEffect } from "react";
import AuthHeader from "./AuthHeader";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getCurrentUser } from "../../features/auth/authActions";
import { useAppSelector } from "../../hooks/useAppSelector";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

    const dispatch = useAppDispatch();
    const {loading, isAuthenticated} = useAppSelector((state) => state.auth);
    
    useEffect(() => {
        if(!isAuthenticated && !loading) {
            dispatch(getCurrentUser());
        } else {
            console.log("User is authenticated");
        }
    },[])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <section className="grid grid-cols-[_.05fr_1fr] h-screen overflow-hidden">
            <Sidebar />
            <main className="grid grid-rows-[_.06fr_.95fr]">
                <AuthHeader />
                {children}
            </main>
        </section>
    )
}


export default DashboardLayout;