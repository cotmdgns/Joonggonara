import Layout from "../component/Layout";
import BannerBox from "../component/banner/BannerBox";
import Main from "./Main/Main";

const App = () =>{
    return(
        <>
            <Layout>
                <BannerBox/> {/* 배너 */}
                <Main/>
            </Layout>
        </>
    )
}

export default App;