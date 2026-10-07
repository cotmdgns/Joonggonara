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
                {/* <main>{children}</main> */}
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