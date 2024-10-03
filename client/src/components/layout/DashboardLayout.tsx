import React from "react";
import AuthHeader from "./AuthHeader";
import Sidebar from "./Sidebar";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {


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