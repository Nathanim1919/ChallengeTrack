import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import React from "react";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;
