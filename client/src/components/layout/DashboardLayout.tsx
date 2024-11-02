import React, { useEffect } from "react";
import AuthHeader from "./AuthHeader";
import Sidebar from "./Sidebar";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getCurrentUser } from "../../features/auth/authActions";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const user = useAppSelector((state) => state.auth.user);
    console.log("user update: ", user);


    return (
        <section className="grid grid-cols-[.11fr_1fr] h-screen overflow-hidden">
            <Sidebar />
            <main className="">
                {/* Pass updated user data as props to AuthHeader */}
                <AuthHeader username={user?.username || ""} points={user?.points || 0} />
                {children}
            </main>
        </section>
    );
};

export default DashboardLayout;
