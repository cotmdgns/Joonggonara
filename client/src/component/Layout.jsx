import { Outlet } from "react-router-dom"
import Headerr from "./header/Headerr";
import Footer from "./footer/Footer";
import LeftAside from "./LeftAside/LeftAside";



const Layout = ({ children }) => {
    return (
        <>
            <Headerr />
            <LeftAside/>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

// 이거는 라우터가 적용이 되었을 떄
// const Layout = () => {
//     return (
//         <>
//             <Header />
//             <Outlet />
//             <Footer />
//         </>
//     )
// }