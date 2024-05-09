import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-306px)] container mx-auto px-6">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Root;