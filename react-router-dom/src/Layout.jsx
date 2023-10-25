import React from "react";
import { Header, Footer } from "./Input/Input";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <Header />        
        <Outlet />
        <Footer />        
        </>
    )
}

export default Layout;