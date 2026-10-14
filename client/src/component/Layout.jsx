import { Outlet } from "react-router-dom"
import Headerr from "./header/Headerr";
import Footer from "./footer/Footer";

const Layout = () => {
    return (
        <>
            <Headerr />
                <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
