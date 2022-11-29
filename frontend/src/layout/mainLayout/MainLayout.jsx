import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

export default function MainLayout(){

    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}