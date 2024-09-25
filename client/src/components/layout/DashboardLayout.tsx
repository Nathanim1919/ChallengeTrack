import React from "react";
import AuthHeader from "./AuthHeader";
import Sidebar from "./Sidebar";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <section className="grid grid-cols-[_.1fr_.9fr]">
            <Sidebar />
            <main className="grid grid-rows-[_.1fr_.9fr]">
                <AuthHeader />
                {children}
            </main>
        </section>
    )
}


export default DashboardLayout;