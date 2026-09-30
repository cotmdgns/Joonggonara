import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Headerr from "./Headerr"


const Layout = ({ children }) => {
    return (
        <>
            <Headerr />
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