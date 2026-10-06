import Layout from "../component/Layout";
import BannerBox from "../component/banner/BannerBox";

const App = () =>{
    return(
        <>
            <Layout>
                <BannerBox/> {/* 배너 */}
                <div>메인들어갈 자리</div>
            </Layout>
        </>
    )
}

export default App;